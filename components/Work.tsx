'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/lib/site';
import Reveal from './Reveal';

export default function Work() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="work" className="shell py-24 md:py-32">
      <Reveal className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="text-[clamp(40px,6vw,80px)] font-bold tracking-[-0.04em]">Selected work</h2>
        <span className="font-mono text-sm text-muted">
          ({String(projects.length).padStart(2, '0')}) · click a row
        </span>
      </Reveal>

      <ul className="border-t border-line">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.title} className="border-b border-line">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full flex-wrap items-center gap-x-8 gap-y-3 px-4 py-7 text-left transition-colors duration-300 md:py-8 ${
                  isOpen ? 'bg-lime text-ink' : 'text-fg hover:bg-lime hover:text-ink'
                }`}
              >
                <span className="w-10 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                <span className="flex-[1_1_320px] text-[clamp(26px,3.6vw,48px)] font-bold leading-tight tracking-[-0.03em]">
                  {p.title}
                </span>
                <span className="font-mono text-sm">{p.stack}</span>
                <span className="font-mono text-sm">{p.period}</span>
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl"
                >
                  →
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 px-4 py-10 md:grid-cols-[1fr_1.4fr] md:pl-[88px]">
                      <div>
                        <p className="mb-3 font-mono text-[13px] text-muted">{p.org}</p>
                        <p className="text-xl leading-relaxed text-fg">{p.summary}</p>
                      </div>
                      <ul className="space-y-3 font-mono text-sm leading-relaxed text-fg-2">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-3">
                            <span aria-hidden="true" className="text-lime">›</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
