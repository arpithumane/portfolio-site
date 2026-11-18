# Portfolio Site Tracker

Domain: arpithumane.com · Hosting: GitHub Pages · Last updated: 2026-11-17

## Done
- [x] Buy domain on Porkbun
- [x] Create Next.js project (TypeScript, Tailwind, App Router)
- [x] Init Git repo + push to GitHub
- [x] Configure static export
- [x] Install Framer Motion, set up structure
- [x] Homepage: hero, projects, blog preview, about, contact (placeholder content)
- [x] Blog system: markdown posts, /blog list, /blog/[slug] pages
- [x] Local production build passes
- [x] GitHub Actions deploy workflow created
- [x] Porkbun DNS: 4 A records on @, CNAME www → arpithumane.github.io, GitHub TXT verification record
- [x] GitHub Pages enabled via API (source gh-pages /), custom domain arpithumane.com, site live
- [x] GitHub domain verification for arpithumane.com
- [x] Restored real homepage (lost in 1a9314a restructure; placeholder had replaced it)
- [x] Fixed /blog/[slug]: await params (Next 16 Promise) — posts were rendering 404
- [x] Redesign: "Night Shift" direction (design canvas: https://claude.ai/artifact/6ddoTmacYVGwjdEC673dfz)
      — hero w/ letter animation + live Tampa clock, skills marquee, expandable work rows from résumé,
      "Off-hours pipelines" DAG (water filter → coffee → hybrid-athlete stats), writing, about terminal, contact
- [x] All content centralized in lib/site.ts; contact email cygnus.element@gmail.com
- [x] public/resume.pdf — résumé with phone number redacted (true redaction, text removed)
- [x] Blog restyled; markdown rendered with remark-html; post dates fixed (were off by one day due to timezone)
- [x] trailingSlash: true — /blog/ and /blog/<slug>/ no longer 404
- [x] Favicon (app/icon.svg); removed unused create-next-app SVGs and old components
- [x] Redesign live at https://arpithumane.com (cddd7a0, 2026-11-18); Enforce HTTPS on, domain verified
- [x] Committed CI/Tailwind/workflow fixes (fab219a); Actions deploy passed, gh-pages branch created (2026-11-17)

## Next up
- [ ] Fill placeholders in lib/site.ts:
      GitHub + LinkedIn URLs, water filter stage types + install month + "hardest part" line,
      coffee recipes/beans/grinder/machine, next training goal
- [ ] Add water-install photos (before / in progress / finished) to public/ and wire into OffHours
- [ ] Strava stats (static site, so fetch at build time):
      1. Create a Strava API app → client id/secret + refresh token (scope activity:read)
      2. Store as GitHub Actions secrets
      3. lib/strava.ts: refresh token → GET /athletes/{id}/stats at build; fall back to static numbers if missing
      4. Add `schedule: cron` (daily) to deploy.yml so stats refresh without a push
      5. Replace the "syncing soon" card in components/OffHours.tsx (YTD km, recent runs)

## Later
- [ ] next-env.d.ts flips between .next/ and .next/dev/ paths after dev vs build runs; consider adding it to .gitignore
- [ ] Replace the two starter blog posts with real ones in posts/ (data engineering topics)
- [ ] Update workflow: actions/checkout & setup-node to Node 24-compatible versions, node-version 20 → 22+ (Node 20 deprecation warning in CI)
- [ ] Per-project case-study pages (currently rows expand inline)
- [ ] Open Graph share image
