import { getAllPosts } from '@/lib/posts';
import BlogHeader from '@/components/BlogHeader';
import BlogPostsList from '@/components/BlogPostsList';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full overflow-hidden">
      <BlogHeader title="Blog" subtitle="Thoughts on web development, design, and technology" />
      <BlogPostsList posts={posts} />

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-400 border-t border-slate-700 mt-12">
        <p>© 2024 My Portfolio. Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
