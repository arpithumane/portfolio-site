'use client';

import { motion, type Variants } from 'framer-motion';
import { site } from '@/lib/site';
import { useClock } from './useClock';

const word: Variants = {
  hidden: {},
  show: (delay: number = 0) => ({ transition: { staggerChildren: 0.045, delayChildren: delay } }),
};

const letter: Variants = {
  hidden: { opacity: 0, y: '0.35em' },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function AnimatedWord({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`inline-block ${className ?? ''}`}
      variants={word}
      initial="hidden"
      animate="show"
      custom={delay}
    >
      {text.split('').map((ch, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const clock = useClock(site.timeZone);

  return (
    <section id="top" className="shell pt-16 pb-20 md:pt-28 md:pb-24">
      <motion.p
        {...fadeUp(0)}
        className="mb-6 flex items-start gap-3 font-mono text-sm text-muted"
      >
        <span className="relative mt-1.5 inline-flex h-2.5 w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
        </span>
        <span>currently: {site.currently}</span>
      </motion.p>

      <h1
        aria-label={site.name}
        className="text-[clamp(64px,13vw,196px)] font-bold leading-[0.88] tracking-[-0.05em]"
      >
        <AnimatedWord text={site.firstName} />
        <br />
        <AnimatedWord text={site.lastName} className="text-lime" delay={0.25} />
        <span aria-hidden="true" className="cursor-blink text-lime">
          _
        </span>
      </h1>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
        <motion.p
          {...fadeUp(0.6)}
          className="max-w-[600px] text-[clamp(20px,2.2vw,28px)] leading-[1.35] text-fg-2"
        >
          {site.role}. I build pipelines for a living — and, it turns out, for everything else:{' '}
          <a href="#coffee" className="text-fg underline decoration-line-2 underline-offset-4 hover:decoration-lime">coffee</a>,{' '}
          <a href="#water" className="text-fg underline decoration-line-2 underline-offset-4 hover:decoration-lime">water</a>, and{' '}
          <a href="#training" className="text-fg underline decoration-line-2 underline-offset-4 hover:decoration-lime">training</a>.
        </motion.p>

        <motion.dl
          {...fadeUp(0.75)}
          className="grid grid-cols-[auto_auto] gap-x-6 gap-y-2 font-mono text-sm"
        >
          <dt className="text-muted">based</dt>
          <dd>{site.location}</dd>
          <dt className="text-muted">local</dt>
          <dd className="tabular-nums">{clock ?? '--:--'}</dd>
          <dt className="text-muted">shipping data</dt>
          <dd className="text-lime">{site.yearsExperience} years</dd>
        </motion.dl>
      </div>
    </section>
  );
}
