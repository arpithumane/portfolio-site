import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { formatDate } from '@/lib/format';
import Reveal from './Reveal';

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="font-mono text-sm text-muted">No posts yet. Check back soon.</p>;
  }

  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post, i) => (
        <li key={post.slug}>
          <Reveal delay={i * 0.08}>
            <Link
              href={`/blog/${post.slug}/`}
              className="group block rounded-2xl border border-line bg-panel p-8 transition-colors hover:border-lime"
            >
              <p className="mb-3 font-mono text-[13px] text-muted">
                {formatDate(post.date)} · {post.readingMinutes} min
              </p>
              <h3 className="mb-2 text-[28px] font-bold leading-tight tracking-[-0.02em] transition-colors group-hover:text-lime">
                {post.title}
              </h3>
              <p className="leading-relaxed text-fg-2">{post.excerpt}</p>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
