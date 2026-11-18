import Link from 'next/link';
import { site } from '@/lib/site';

// `mobile: false` links are hidden on small screens to keep the sticky bar one row.
const links = [
  { href: '/#work', label: '/work', mobile: false },
  { href: '/#off-hours', label: '/off-hours', mobile: false },
  { href: '/blog/', label: '/writing', mobile: true },
  { href: '/#about', label: '/about', mobile: false },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="shell flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4">
        <Link href="/" className="text-lg font-bold tracking-[-0.02em] text-fg">
          arpit<span className="text-lime">.</span>humane
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-1 font-mono text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${l.mobile ? '' : 'hidden md:inline-block'} px-3 py-3 text-fg transition-colors hover:text-lime`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="ml-1 rounded-full bg-lime px-4 py-3 font-medium text-ink transition-colors hover:bg-lime-2"
          >
            say hi
          </a>
        </nav>
      </div>
    </header>
  );
}
