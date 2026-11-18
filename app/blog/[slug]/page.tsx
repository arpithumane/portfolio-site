'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
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

      {/* Post Header */}
      <motion.section className="px-4 md:px-8 py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>

          <p className="text-slate-400">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </motion.div>
      </motion.section>

      {/* Post Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-4 md:px-8 py-12 max-w-4xl mx-auto prose prose-invert max-w-none"
      >
        <div className="text-slate-300 leading-relaxed space-y-6">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('#')) {
              const level = paragraph.match(/^#+/)?.[0].length || 1;
              const text = paragraph.replace(/^#+\s/, '');
              const className = {
                1: 'text-3xl font-bold mt-8 mb-4',
                2: 'text-2xl font-bold mt-6 mb-3',
                3: 'text-xl font-bold mt-4 mb-2',
              }[level] || 'text-lg font-bold';

              return (
                <div key={index} className={`text-white ${className}`}>
                  {text}
                </div>
              );
            }

            if (paragraph.startsWith('```')) {
              const content = paragraph
                .replace(/```[a-z]*\n?/, '')
                .replace(/```$/, '')
                .trim();
              return (
                <pre
                  key={index}
                  className="bg-slate-900 p-4 rounded-lg overflow-x-auto border border-slate-700 text-sm"
                >
                  <code>{content}</code>
                </pre>
              );
            }

            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="list-disc list-inside space-y-2">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace(/^- /, '')}</li>
                  ))}
                </ul>
              );
            }

            return <p key={index}>{paragraph}</p>;
          })}
        </div>
      </motion.article>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-400 border-t border-slate-700 mt-12">
        <p>© 2024 My Portfolio. Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
