import { getSortedPostsData, getTagsUsed } from "@/lib/posts";
import { BlogIndexClient } from "./BlogIndexClient";

export const metadata = {
  title: "Blog | TimelessWeb",
  description:
    "Read practical articles on web design, conversion, and small business growth from TimelessWeb.",
};

export default function BlogIndexPage() {
  const posts = getSortedPostsData(); // normalized, no content
  const tagsUsed = getTagsUsed(); // [{ id, label }] filtered to only those used

  return (
    <div className="bg-white min-h-screen pt-32 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headings font-bold text-gray-900">
            The TimelessWeb Blog
          </h1>
          <p className="mt-4 text-gray-600 text-base max-w-[70ch] mx-auto">
            Practical insights on websites that look professional, build trust,
            and convert visitors into enquiries.
          </p>
        </header>

        <BlogIndexClient posts={posts} tags={tagsUsed} />
      </div>
    </div>
  );
}