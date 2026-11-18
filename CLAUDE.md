# Claude Code Guidelines for Portfolio Site

## Project Overview
- Next.js portfolio + blog with interactive scrolling animations
- Deployed to GitHub Pages at custom domain arpithumane.com (registered on Porkbun)
- Personal use - no backend required
- Progress is tracked in TRACKER.md; original plan in PLAN.md

## Tech Stack
- Next.js 16 (App Router, Turbopack) with TypeScript, React 19
- Tailwind CSS v4 — use `@import "tailwindcss";`, NOT v3 `@tailwind` directives
- Framer Motion for animations
- gray-matter for markdown blog posts
- Static export (`output: 'export'` in next.config.ts) → builds to `out/`

## Directory Structure (no src/ folder)
```
app/           # Routes: page.tsx, layout.tsx, globals.css, blog/
components/    # Client components (Framer Motion lives here)
lib/posts.ts   # Reads markdown from posts/ using fs (server-only)
posts/         # Markdown blog posts with frontmatter (title, date, excerpt)
public/        # Static assets
```

## Key Conventions
- Pages that read posts (via `fs`) must be Server Components — no `'use client'`
- Any Framer Motion usage goes in a `'use client'` component under components/
- Dynamic routes need `generateStaticParams()` because of static export
- Don't enable PPR / partialPrefetching / cacheComponents — incompatible with static export

## Running the Project
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build` (generates `out/`)
- Deploy: push to main → GitHub Actions (.github/workflows/deploy.yml) publishes `out/` to gh-pages branch
