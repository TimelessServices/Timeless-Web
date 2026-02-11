import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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

export function generateStaticParams() {
  return getAllPostSlugs().map(({ slug }) => ({ post: slug }));
}

export async function generateMetadata({ params }) {
  const { post: postSlug } = await params;

  try {
    const postData = getPostData(postSlug);

    return {
      title: postData.meta?.title || `${postData.title} | TimelessWeb`,
      description: postData.meta?.description || postData.excerpt,
    };
  } catch {
    return {
      title: "Post Not Found | TimelessWeb",
      description: "This post could not be found.",
    };
  }
}

export default async function BlogPostPage({ params }) {
  const { post: postSlug } = await params;

  let postData;
  try {
    postData = getPostData(postSlug);
  } catch {
    notFound();
  }

  const dateLabel = formatDate(postData.date);
  const showUpdated = postData.updated && postData.updated !== postData.date;
  const updatedLabel = showUpdated ? formatDate(postData.updated) : null;

  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 md:px-10 py-10 md:py-14">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-headings font-bold text-gray-900">
              {postData.title}
            </h1>

            <div className="mt-3 text-sm text-gray-500 flex flex-wrap gap-x-2 gap-y-1">
              <span>By {postData.author}</span>
              <span>·</span>
              <time dateTime={postData.date}>{dateLabel}</time>

              {showUpdated && (
                <>
                  <span>·</span>
                  <span>
                    Updated{" "}
                    <time dateTime={postData.updated}>{updatedLabel}</time>
                  </span>
                </>
              )}
            </div>

            {Array.isArray(postData.tags) && postData.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {postData.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="text-xs px-3 py-1 rounded-full border border-gray-200 text-gray-700 bg-slate-50"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            )}

            {postData.cover?.src && (
              <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={postData.cover.src}
                  alt={postData.cover.alt || ""}
                  className="w-full h-auto"
                />
              </div>
            )}
          </header>

          <article
            className="prose prose-base md:prose-lg prose-neutral max-w-none
              prose-headings:font-headings
              prose-headings:text-purple-600
              prose-p:text-gray-800
              prose-a:text-purple-600 hover:prose-a:underline
              prose-strong:text-purple-600
              prose-li:marker:text-purple-600"
          >
            <ReactMarkdown>{postData.content}</ReactMarkdown>
          </article>

          <div className="mt-12 pt-10 border-t border-gray-200">
            <div className="bg-slate-50 border border-gray-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-headings font-bold text-gray-900">
                Want a website that converts?
              </h2>
              <p className="mt-2 text-gray-700">
                Tell us what you do and what you need—we’ll point you in the
                right direction.
              </p>
              <a
                href="/contact"
                className="inline-flex mt-5 px-5 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}