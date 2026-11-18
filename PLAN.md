# Plan: Buy Domain & Create Profile Website

## Status
Ready for implementation

## Overview
Create a personal portfolio + blog website with highly interactive, dynamic scrolling effects using React/Next.js. Buy domain on Porkbun and deploy to GitHub Pages.

## User Requirements
- **Website Type**: Mix of portfolio (projects/work) + blog (articles/writing)
- **Tech Stack**: React/Next.js with super interactive/dynamic scrolling animations
- **Hosting**: GitHub Pages (free)
- **Timeline**: ASAP for MVP, flexible for iterative tweaking
- **Audience**: Personal use only

---

## Implementation Steps

### Phase 1: Domain & Setup (Day 1)
1. **Buy domain on Porkbun**
   - Purchase domain for personal use
   - Note: Porkbun will provide nameserver info (ns1.porkbun.com, etc.)

2. **Create new Next.js project locally**
   - Use `npx create-next-app@latest` or `npm create next-app@latest`
   - Configure for static export (GitHub Pages requirement)
   - Initialize Git repository
   - Create GitHub repo for the project

### Phase 2: Project Configuration (Day 1-2)
1. **Configure Next.js for GitHub Pages deployment**
   - Set `output: 'export'` in `next.config.js` (static export mode)
   - Configure `basePath` if needed (usually not needed for custom domain)
   - Install GitHub Pages deployment tools

2. **Project structure**
   - `app/` or `pages/` - main site sections (home, about, blog)
   - `components/` - reusable interactive components (scrollable sections, animations)
   - `public/` - assets (images, icons)
   - `styles/` - global styles and animations
   - Setup animation library (Framer Motion or GSAP recommended for scrollable effects)

### Phase 3: Build Interactive Site (Day 2-5)
1. **Homepage with interactive scrolling**
   - Animated hero section
   - Dynamic scroll-triggered animations
   - Smooth transitions between sections

2. **Portfolio section**
   - Project showcase cards
   - Interactive hover effects
   - Filtering/sorting if multiple projects

3. **Blog section**
   - Blog post listing with previews
   - Individual post pages
   - Optional search/tags

4. **About/Contact section**
   - About me information
   - Contact form or links
   - Social media links

### Phase 4: Animation & Polish (Day 5-7)
1. Add Framer Motion or GSAP for smooth scroll effects
2. Optimize performance (lazy loading images, code splitting)
3. Mobile responsiveness
4. Dark mode toggle (optional but enhances interactivity)
5. Test across browsers

### Phase 5: Deploy to GitHub Pages (Day 7)
1. **Build and test locally**: `npm run build`
2. **Configure GitHub repo**
   - Push code to GitHub
   - Enable GitHub Pages in repo settings (source: gh-pages branch)
   - Set custom domain in GitHub Pages settings → enter your Porkbun domain

3. **Configure Porkbun DNS**
   - In Porkbun account, go to domain DNS settings
   - Add GitHub Pages nameservers OR create CNAME record
   - GitHub Pages will provide exact DNS instructions
   - Wait for DNS propagation (can take 24 hours)

4. **GitHub Actions setup (optional but recommended)**
   - Create workflow to auto-deploy on push
   - Workflow builds Next.js and deploys to gh-pages branch

---

## Tech Details

### Recommended Libraries
- **Animation**: Framer Motion (React-friendly) or GSAP (more powerful)
- **Scroll Effects**: React Scroll, AOS, or Framer Motion scroll triggers
- **UI Components**: Shadcn/ui, Radix UI, or Tailwind CSS

### Project Directory Location
- **New project path**: Choose new location (NOT inside existing sql-databricks-agent)
- Suggested: `/Users/arpithumane/VSCode-workspace/portfolio-site/` or similar
- Create separate Git repo (not part of existing projects)

### Where to Create Project
- Use VSCode (you already have it open)
- Or any code editor (Cursor, Sublime, etc.)
- **Command to start**: `npx create-next-app@latest portfolio-site`
- Choose: TypeScript (recommended), ESLint, Tailwind (yes)

---

## Verification & Testing
1. **Local testing**: Run `npm run dev`, test animations and responsiveness
2. **Build test**: Run `npm run build`, verify no errors
3. **GitHub Pages test**: Visit `https://yourusername.github.io` (default) before domain connects
4. **Custom domain test**: After DNS propagation, visit your Porkbun domain
5. **Performance**: Check Lighthouse scores, optimize if needed

---

## DNS Configuration Summary
**Two approaches:**
1. **Nameservers** (simpler): Point Porkbun nameservers to GitHub's
2. **CNAME record** (traditional): Create CNAME pointing to `yourusername.github.io`

GitHub Pages setup page will specify exact records needed.

---

## Action Items Checklist

### Immediate Actions (This Week)
- [ ] Go to Porkbun and purchase your domain
  - Note the domain name and login credentials
  - Save confirmation email
- [ ] Create a new folder for the project (not in existing workspace)
  - `mkdir ~/VSCode-workspace/portfolio-site` (or preferred location)
- [ ] Open VSCode to new project location
  - `cd ~/VSCode-workspace/portfolio-site`
  - `npx create-next-app@latest .` (creates in current directory)
  - Say YES to: TypeScript, ESLint, Tailwind CSS
  - Say NO to: App Router (or YES if you prefer newer approach)

### Setup Phase (Day 1-2)
- [ ] Initialize Git repository
  - `git init`
  - Create `.gitignore` (add `node_modules/`, `.next/`, `out/`)
- [ ] Create GitHub repository (GitHub.com)
  - Add remote: `git remote add origin https://github.com/yourusername/portfolio-site.git`
- [ ] Edit `next.config.js` to add static export:
  ```js
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
  }
  module.exports = nextConfig
  ```
- [ ] Install animation library:
  - `npm install framer-motion` (recommended)
  - Alternative: `npm install gsap`
- [ ] Create basic folder structure:
  - `app/` or `pages/` directory (depending on your Next.js setup)
  - Create: `components/`, `public/`, styles as needed

### Building Phase (Day 2-5)
- [ ] Create Home page with sections:
  - Hero section (animated intro)
  - Portfolio section (showcase your projects)
  - Blog section (list of blog posts)
  - About/Contact section
- [ ] Add interactive animations using Framer Motion
  - Scroll-triggered animations
  - Hover effects
  - Smooth transitions
- [ ] Create Blog post template/pages
  - Option: Use markdown files in `posts/` folder
  - Use `gray-matter` library to parse markdown frontmatter
- [ ] Add responsive design for mobile
  - Test on mobile device or DevTools
- [ ] Commit code regularly:
  - `git add .`
  - `git commit -m "descriptive message"`
  - `git push -u origin main`

### Testing Phase (Day 5-6)
- [ ] Run locally: `npm run dev`
  - Visit `http://localhost:3000`
  - Test all animations and interactions
  - Check mobile responsiveness
- [ ] Build for production: `npm run build`
  - Fix any build errors
  - Verify `out/` folder is created
- [ ] Run final tests:
  - Cross-browser testing (Chrome, Safari, Firefox)
  - Mobile device testing
  - Check Lighthouse scores (aim for 90+)

### Deployment Phase (Day 6-7)
- [ ] Configure GitHub repository settings:
  - Go to Settings → Pages
  - Source: Deploy from a branch
  - Branch: Select `gh-pages` (we'll set this up with Actions)
- [ ] Create GitHub Actions workflow for deployment:
  - Create `.github/workflows/deploy.yml`
  - Add workflow to auto-build and deploy on push
  - (I can provide the exact workflow file when you're ready)
- [ ] Push all code to GitHub
  - `git add .`
  - `git commit -m "Ready for deployment"`
  - `git push`
- [ ] Wait for GitHub Actions to complete (check Actions tab)
  - Should build and deploy to gh-pages branch automatically
- [ ] Test on GitHub Pages:
  - Visit `https://yourusername.github.io/portfolio-site/`
  - Verify all pages load and animations work

### Domain Configuration Phase (Day 7)
- [ ] In GitHub Pages settings:
  - Add Custom Domain: enter your Porkbun domain name
  - GitHub creates `CNAME` file in repo
  - Commit and push this change
- [ ] In Porkbun account:
  - Navigate to domain management
  - Find DNS records section
  - Add CNAME record pointing to your GitHub Pages URL
  - OR update nameservers if Porkbun provides GitHub Pages integration
  - Save changes
- [ ] Wait for DNS propagation:
  - Can take 1-24 hours
  - Use `nslookup yourdomain.com` to check status
- [ ] Test final domain:
  - Visit your custom domain in browser
  - Verify site loads correctly

### After Launch (Ongoing)
- [ ] Collect your portfolio/project info:
  - Project descriptions
  - Project images/screenshots
  - Links to live demos or GitHub repos
- [ ] Write initial blog posts (optional for MVP)
- [ ] Iterate and add content
  - Push updates anytime
  - GitHub Actions auto-deploys on push
- [ ] Monitor and improve:
  - Check analytics if added
  - Get feedback from people
  - Add features or polish as desired

---

## Notes
- GitHub Pages serves static files only (hence `output: 'export'`)
- Next.js with static export is fully capable for this use case
- Domain purchase on Porkbun is separate from hosting (hosting is GitHub Pages)
- Can iterate and push updates anytime after initial deployment
- Personal use means no need to worry about SEO initially
