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

## Next up
- [ ] Commit pending fixes (uncommitted as of last session):
      package.json + package-lock.json (eslint-config-next 14 → 16, fixes npm ci),
      app/globals.css (Tailwind v4 import), .github/workflows/deploy.yml (write permission + domain)
- [ ] `git push` and confirm the Actions run succeeds (creates gh-pages branch)
- [ ] GitHub repo → Settings → Pages: source = gh-pages branch, custom domain = arpithumane.com
- [ ] Porkbun DNS for the root domain: four A records for host `@`
      → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
      (do NOT use a CNAME on `@`; delete any default Porkbun parking records)
- [ ] Porkbun DNS: CNAME `www` → <github-username>.github.io
- [ ] After DNS propagates: enable "Enforce HTTPS" in GitHub Pages settings
- [ ] Visit https://arpithumane.com and verify homepage + blog pages

## Later
- [ ] Replace placeholder content: name, projects, about, skills, contact email
- [ ] Link homepage "Read More" / blog cards to real /blog routes
- [ ] Write real blog posts in posts/
- [ ] Add favicon (default one was removed during restructure)
- [ ] Verify /blog/[slug] in dev mode (Next 16 passes `params` as a Promise)
