import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PostList from '@/components/PostList';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on data engineering and building for the web.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="shell py-20 md:py-28">
        <Reveal className="mb-16">
          <p className="mb-4 font-mono text-sm text-muted">{'// writing'}</p>
          <h1 className="text-[clamp(56px,10vw,140px)] font-bold leading-[0.9] tracking-[-0.05em]">
            Writing<span className="text-lime">.</span>
          </h1>
          <p className="mt-6 max-w-[560px] text-xl leading-relaxed text-fg-2">
            Notes on data engineering and building for the web, mostly things I had to learn the hard way.
          </p>
        </Reveal>
        <div className="max-w-[880px]">
          <PostList posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  );
}
