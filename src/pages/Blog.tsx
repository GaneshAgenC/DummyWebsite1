// src/pages/Blog.tsx
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "designing-for-conversions",
    title: "Designing for Conversions",
    summary:
      "How thoughtful UI/UX design can increase customer engagement and conversion rates.",
    date: "April 10, 2025",
  },
  {
    slug: "content-that-connects",
    title: "Creating Content That Connects",
    summary:
      "Building brand loyalty through valuable, relatable, and purpose-driven storytelling.",
    date: "March 24, 2025",
  },
  {
    slug: "seo-trends-2025",
    title: "SEO Trends to Watch in 2025",
    summary:
      "Explore the evolving SEO landscape and how to stay ahead in search rankings.",
    date: "March 9, 2025",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-12">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Insights & Ideas</h1>
        <p className="max-w-xl mx-auto">
          Explore perspectives from our team on branding, design, and digital
          innovation.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            key={post.slug}
            className="block border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p>{post.summary}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
