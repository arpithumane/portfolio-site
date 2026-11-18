import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Work from '@/components/Work';
import OffHours from '@/components/OffHours';
import PostList from '@/components/PostList';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <OffHours />

        <section id="writing" className="shell flex flex-wrap gap-12 py-24 md:py-32">
          <Reveal className="flex-[1_1_280px]">
            <h2 className="mb-4 text-[clamp(40px,6vw,80px)] font-bold tracking-[-0.04em]">Writing</h2>
            <p className="max-w-[320px] text-lg leading-normal text-muted">
              Notes on data engineering and building for the web, mostly things I had to learn the hard way.
            </p>
            <Link href="/blog/" className="mt-6 inline-block py-3 font-mono text-sm text-lime hover:text-lime-2">
              all posts →
            </Link>
          </Reveal>
          <div className="min-w-0 flex-[2_1_480px]">
            <PostList posts={posts} />
          </div>
        </section>

        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
