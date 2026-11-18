import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-wrap justify-between gap-4 py-8 font-mono text-[13px] text-muted">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>built with next.js + framer motion</span>
      </div>
    </footer>
  );
}
