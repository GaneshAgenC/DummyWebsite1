// src/pages/BlogDetail.tsx
import { useParams } from "react-router-dom";

const blogContent: Record<
  string,
  { title: string; date: string; content: string }
> = {
  "designing-for-conversions": {
    title: "Designing for Conversions",
    date: "April 10, 2025",
    content:
      "Effective design isn’t just about aesthetics—it’s about guiding users to take action. Learn how we structure pages and use color, layout, and microcopy to lead users toward conversion goals.",
  },
  "content-that-connects": {
    title: "Creating Content That Connects",
    date: "March 24, 2025",
    content:
      "Content that connects is rooted in empathy. Discover how storytelling, brand voice, and emotional resonance play a role in building deeper relationships with your audience.",
  },
  "seo-trends-2025": {
    title: "SEO Trends to Watch in 2025",
    date: "March 9, 2025",
    content:
      "SEO is constantly evolving. We break down the biggest trends including semantic search, AI-driven content recommendations, and Google’s shifting algorithm focus.",
  },
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogContent[slug ?? ""];

  if (!post) {
    return <div className="p-12">Blog post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article className="prose prose-lg max-w-none">
        <p>{post.content}</p>
      </article>
    </div>
  );
}
