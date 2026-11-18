import { site } from '@/lib/site';
import Reveal from './Reveal';

const pill =
  'rounded-full border border-line-2 px-7 py-4 text-lg transition-colors';

function SocialLink({ href, label }: { href: string; label: string }) {
  if (!href) {
    return (
      <span className={`${pill} text-muted`} title="Coming soon">
        {label} · soon
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${pill} text-fg hover:border-lime hover:text-lime`}>
      {label} ↗
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line">
      <Reveal className="shell py-24 md:py-32">
        <p className="mb-6 font-mono text-sm text-muted">{'// next step'}</p>
        <h2 className="text-[clamp(56px,10vw,160px)] font-bold leading-[0.9] tracking-[-0.05em]">
          Let&apos;s build
          <br />
          something<span className="text-lime">.</span>
        </h2>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="break-all rounded-full bg-lime px-7 py-4 text-lg font-bold text-ink transition-colors hover:bg-lime-2"
          >
            {site.email} →
          </a>
          <SocialLink href={site.github} label="GitHub" />
          <SocialLink href={site.linkedin} label="LinkedIn" />
        </div>
      </Reveal>
    </section>
  );
}
