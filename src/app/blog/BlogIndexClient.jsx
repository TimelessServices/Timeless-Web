"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function formatDate(dateISO) {
  try {
    const d = new Date(`${dateISO}T00:00:00Z`);
    return d.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateISO;
  }
}

function TagChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "text-xs px-3 py-1 rounded-full border transition-colors",
        active
          ? "bg-purple-600 text-white border-purple-600"
          : "bg-white text-gray-700 border-gray-200 hover:border-purple-300",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

export function BlogIndexClient({ posts = [], tags = [] }) {
  const [activeTag, setActiveTag] = useState("all");

  const filtered = useMemo(() => {
    if (activeTag === "all") return posts;

    return posts.filter((p) => {
      if (!Array.isArray(p.tags)) return false;
      // p.tags is now [{ id, label }]
      return p.tags.some((t) => t?.id === activeTag);
    });
  }, [posts, activeTag]);

  return (
    <div className="space-y-10">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 justify-center">
        <TagChip
          label="All"
          active={activeTag === "all"}
          onClick={() => setActiveTag("all")}
        />
        {tags.map((t) => (
          <TagChip
            key={t.id}
            label={t.label}
            active={activeTag === t.id}
            onClick={() => setActiveTag(t.id)}
          />
        ))}
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((post) => {
          const href = `/blog/${post.slug}`;
          const dateLabel = formatDate(post.date);

          return (
            <article
              key={post.slug}
              className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-purple-300 transition-colors"
            >
              {post.cover?.src ? (
                <div className="border-b border-gray-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.cover.src}
                    alt={post.cover.alt || ""}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="p-6">
                <time dateTime={post.date} className="block text-xs text-gray-500">
                  {dateLabel}
                </time>

                <h2 className="mt-2 text-xl font-headings font-bold text-gray-900 leading-snug">
                  <Link
                    href={href}
                    className="hover:underline decoration-purple-400"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {post.excerpt}
                </p>

                {Array.isArray(post.tags) && post.tags.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t.id}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-slate-50 border border-gray-200 text-gray-700"
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-6">
                  <Link
                    href={href}
                    className="text-sm font-medium text-purple-700 hover:text-purple-800"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          No posts found for this tag.
        </div>
      ) : null}

      {/* Soft CTA (blog-appropriate) */}
      <div className="mt-6 bg-slate-50 border border-gray-200 rounded-2xl p-6 md:p-8">
        <h3 className="text-xl font-headings font-bold text-gray-900">
          Want help applying this to your site?
        </h3>
        <p className="mt-2 text-gray-700">
          Tell us what you do and what you need. We’ll point you in the right
          direction.
        </p>
        <Link
          href="/contact"
          className="inline-flex mt-5 px-5 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
        >
          Get a free quote
        </Link>
      </div>
    </div>
  );
}