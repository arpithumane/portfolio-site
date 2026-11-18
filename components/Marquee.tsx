import { Fragment } from 'react';
import { skills } from '@/lib/site';

export default function Marquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...skills, ...skills];
  return (
    <div
      aria-label={`Skills: ${skills.join(', ')}`}
      role="marquee"
      className="overflow-hidden whitespace-nowrap border-y border-line py-5 font-mono text-lg text-muted"
    >
      <div aria-hidden="true" className="marquee-track inline-flex gap-12 pr-12">
        {items.map((s, i) => (
          <Fragment key={i}>
            <span>{s}</span>
            <span className="text-lime">/</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
