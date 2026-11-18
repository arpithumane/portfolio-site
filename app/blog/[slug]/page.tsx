import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import { formatDate } from '@/lib/format';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Static export: only the slugs below exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <>
      <Nav />
      <main className="shell py-16 md:py-24">
        <article className="mx-auto max-w-[760px]">
          <Link href="/blog/" className="mb-12 inline-block py-2 font-mono text-sm text-muted hover:text-lime">
            ← all posts
          </Link>
          <Reveal>
            <p className="mb-4 font-mono text-[13px] text-muted">
              {formatDate(post.date)} · {post.readingMinutes} min read
            </p>
            <h1 className="mb-6 text-[clamp(40px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.04em]">
              {post.title}
            </h1>
            <p className="mb-12 border-b border-line pb-12 text-xl leading-relaxed text-fg-2">{post.excerpt}</p>
          </Reveal>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
