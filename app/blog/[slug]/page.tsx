import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import BlogPostContent from '@/components/BlogPostContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full overflow-hidden">
      {/* Back Button */}
      <div className="px-4 md:px-8 py-6">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
          ← Back to Blog
        </Link>
      </div>

      <BlogPostContent post={post} />

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-400 border-t border-slate-700 mt-12">
        <p>© 2024 My Portfolio. Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
