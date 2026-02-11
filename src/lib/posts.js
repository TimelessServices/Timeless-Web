import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { blogTags } from "@/content/blogTags";

// New location (your new standard)
const postsDirectory = path.join(process.cwd(), "src", "content", "posts");

// Build a fast lookup for tag validation + UI labels
const TAG_INDEX = new Map((blogTags || []).map((t) => [t.id, t]));

// ---------- helpers ----------
function isISODateString(v) {
  return typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
}

function toTime(dateISO) {
  return Date.parse(`${dateISO}T00:00:00Z`);
}

function ensureString(v, fieldName) {
  if (typeof v !== "string" || !v.trim()) {
    throw new Error(`Missing or invalid "${fieldName}"`);
  }
  return v.trim();
}

function ensureSlug(v, fieldName) {
  const s = ensureString(v, fieldName);

  // conservative slug rules: lowercase letters/numbers, hyphens only
  // (no spaces, no leading/trailing hyphen, no double hyphen)
  const ok = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);
  if (!ok) {
    throw new Error(
      `"${fieldName}" must be a kebab-case slug like "my-post-title" (got "${s}")`
    );
  }
  return s;
}

function ensureTags(tags) {
  if (!Array.isArray(tags)) {
    throw new Error(`Missing or invalid "tags" (must be an array)`);
  }

  const ids = tags
    .map((t) => (typeof t === "string" ? t.trim() : ""))
    .filter(Boolean);

  if (ids.length < 1) throw new Error(`"tags" must contain at least 1 tag`);
  if (ids.length > 3) throw new Error(`"tags" must contain at most 3 tags`);

  // Validate + return {id,label}
  return ids.map((id) => {
    const t = TAG_INDEX.get(id);
    if (!t) {
      throw new Error(`Unknown tag "${id}". Add it to src/content/blogTags.js`);
    }
    return { id, label: t.label };
  });
}

function normalizeCover(cover) {
  if (cover == null) return null;

  if (typeof cover !== "object") {
    throw new Error(`"cover" must be an object like { src, alt }`);
  }

  const src = typeof cover.src === "string" ? cover.src.trim() : "";
  const alt = typeof cover.alt === "string" ? cover.alt.trim() : "";

  if (!src || !alt) {
    throw new Error(
      `If "cover" is provided, both "cover.src" and "cover.alt" are required`
    );
  }

  return { src, alt };
}

function normalizeMeta(meta, title, excerpt) {
  const metaObj = typeof meta === "object" && meta ? meta : {};

  const metaTitle =
    typeof metaObj.title === "string" && metaObj.title.trim()
      ? metaObj.title.trim()
      : `${title} | TimelessWeb`;

  const metaDescription =
    typeof metaObj.description === "string" && metaObj.description.trim()
      ? metaObj.description.trim()
      : excerpt;

  return { title: metaTitle, description: metaDescription };
}

/**
 * fileSlug = storage name without extension (e.g. "blog_1")
 * urlSlug  = public route slug from frontmatter (e.g. "the-website-isnt-broken...")
 */
function parsePostFile(filePath, fileSlug) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const title = ensureString(data.title, "title");
  const author = ensureString(data.author, "author");
  const excerpt = ensureString(data.excerpt, "excerpt");

  // NEW: public URL slug
  const url = ensureSlug(data.url, "url");

  const date = ensureString(data.date, "date");
  if (!isISODateString(date)) {
    throw new Error(`"date" must be ISO YYYY-MM-DD (got "${date}")`);
  }

  const updated = data.updated == null ? null : ensureString(data.updated, "updated");
  if (updated && !isISODateString(updated)) {
    throw new Error(`"updated" must be ISO YYYY-MM-DD (got "${updated}")`);
  }

  const tags = ensureTags(data.tags);
  const cover = normalizeCover(data.cover);

  const meta = normalizeMeta(data.meta, title, excerpt);

  return {
    // Keep both:
    // - slug: public route slug (used by /blog/[post])
    // - fileSlug: storage filename slug (useful internally/debugging)
    slug: url,
    fileSlug,

    title,
    author,
    excerpt,
    tags,
    date,
    updated,
    meta,
    cover,
    content: typeof content === "string" ? content : "",
  };
}

function getAllFileSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/**
 * Build a one-time index: urlSlug -> fileSlug
 * Ensures uniqueness, so you never get ambiguous routes.
 */
let URL_TO_FILESLUG = null;
function getUrlIndex() {
  if (URL_TO_FILESLUG) return URL_TO_FILESLUG;

  const map = new Map();
  const fileSlugs = getAllFileSlugs();

  for (const fileSlug of fileSlugs) {
    const fullPath = path.join(postsDirectory, `${fileSlug}.md`);
    const post = parsePostFile(fullPath, fileSlug);

    if (map.has(post.slug)) {
      throw new Error(
        `Duplicate "url" slug "${post.slug}". Each post must have a unique url.`
      );
    }
    map.set(post.slug, fileSlug);
  }

  URL_TO_FILESLUG = map;
  return URL_TO_FILESLUG;
}

// ---------- public API ----------

// For Next.js App Router generateStaticParams()
export function getAllPostSlugs() {
  // return public slugs from frontmatter.url
  return Array.from(getUrlIndex().keys()).map((slug) => ({ slug }));
}

// For /blog index
export function getSortedPostsData() {
  const fileSlugs = getAllFileSlugs();

  const posts = fileSlugs.map((fileSlug) => {
    const fullPath = path.join(postsDirectory, `${fileSlug}.md`);
    return parsePostFile(fullPath, fileSlug);
  });

  // Sort newest first by date
  posts.sort((a, b) => toTime(b.date) - toTime(a.date));

  // Index doesn’t need full content
  return posts.map(({ content, ...rest }) => rest);
}

// For /blog/[post]  (note: slug is now the PUBLIC url slug)
export function getPostData(slug) {
  const safeSlug = String(slug || "").trim();
  if (!safeSlug) throw new Error(`Missing slug`);

  const fileSlug = getUrlIndex().get(safeSlug);
  if (!fileSlug) {
    const err = new Error(`Post not found: ${safeSlug}`);
    err.code = "POST_NOT_FOUND";
    throw err;
  }

  const fullPath = path.join(postsDirectory, `${fileSlug}.md`);
  return parsePostFile(fullPath, fileSlug);
}

// For filters: list tags actually used (and include label)
export function getTagsUsed() {
  const posts = getSortedPostsData();
  const used = new Set();

  for (const p of posts) for (const t of p.tags) used.add(t.id);
  return blogTags.filter((t) => used.has(t.id));
}

// Optional: curated “top posts” without adding frontmatter flags
// curatedSlugs should now be PUBLIC url slugs.
export function getCuratedPosts(curatedSlugs = []) {
  const posts = getSortedPostsData();
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  return curatedSlugs.map((s) => bySlug.get(String(s))).filter(Boolean);
}