'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllPosts } from '@/lib/posts';
import AnimatedSection from '@/components/AnimatedSection';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full overflow-hidden">
      {/* Header */}
      <motion.section className="min-h-[40vh] flex items-center justify-center px-4 md:px-8 py-20">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300"
          >
            Thoughts on web development, design, and technology
          </motion.p>
        </div>
      </motion.section>

      {/* Blog Posts */}
      <AnimatedSection className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-slate-700 to-slate-800 p-8 rounded-lg border border-slate-600 hover:border-blue-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-white hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                  </div>
                  <span className="text-slate-400 text-sm md:text-base whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Read More →
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </AnimatedSection>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-400 border-t border-slate-700 mt-12">
        <p>© 2024 My Portfolio. Built with Next.js, Framer Motion & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
