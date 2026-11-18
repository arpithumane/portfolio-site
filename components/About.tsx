import { career, site, stackDirs } from '@/lib/site';
import Reveal from './Reveal';

function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <p>
      <span className="text-lime">$</span> {children}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="shell flex flex-wrap items-stretch gap-12 pb-24 md:pb-32">
      <Reveal className="min-w-0 flex-[1_1_420px]">
        <div className="h-full overflow-hidden rounded-2xl border border-line bg-panel font-mono text-[15px] leading-[1.8]">
          <div aria-hidden="true" className="flex gap-2 border-b border-line px-4 py-3.5">
            <span className="h-3 w-3 rounded-full bg-line-2" />
            <span className="h-3 w-3 rounded-full bg-line-2" />
            <span className="h-3 w-3 rounded-full bg-line-2" />
          </div>
          <div className="overflow-x-auto px-7 py-6">
            <Prompt>whoami</Prompt>
            <p className="mb-4 text-fg-2">arpit — specialist, data engineer @ LTIMindtree</p>
            <Prompt>tail career.log</Prompt>
            <div className="mb-4">
              {career.map((c, i) => (
                <p key={c.year} className={i === career.length - 1 ? 'text-lime' : 'text-fg-2'}>
                  {c.year}&nbsp;&nbsp;{c.role}
                </p>
              ))}
            </div>
            <Prompt>cat interests.txt</Prompt>
            <p className="mb-4 text-fg-2">v60, espresso, flat whites, lifting, running, DIY plumbing</p>
            <Prompt>ls ./stack</Prompt>
            <p className="text-fg-2">{stackDirs.map((d) => `${d}/`).join('  ')}</p>
            <p className="mt-4">
              <span className="text-lime">$</span> <span className="cursor-blink">█</span>
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal className="flex min-w-0 flex-[1_1_360px] flex-col justify-center gap-5" delay={0.1}>
        <h2 className="text-[clamp(40px,6vw,80px)] font-bold tracking-[-0.04em]">About</h2>
        <p className="text-xl leading-relaxed text-fg-2">
          Ten years building enterprise data platforms, from Ab Initio ETL and real-time continuous
          flows to Databricks lakehouses and multi-agent AI assistants. I like turning messy,
          high-stakes data (think global trading P&amp;L) into pipelines people can trust.
        </p>
        <p className="text-xl leading-relaxed text-fg-2">
          Chemical engineer by degree (NIT Trichy), data engineer by trade, and the person who
          explains both over a flat white.
        </p>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener"
          className="self-start py-3 font-mono text-sm text-lime hover:text-lime-2"
        >
          résumé.pdf ↗
        </a>
      </Reveal>
    </section>
  );
}
