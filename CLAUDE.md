# Claude Code Guidelines for Portfolio Site

## Project Overview
- Next.js portfolio + blog with interactive scrolling animations
- Deployed to GitHub Pages with custom Porkbun domain
- Personal use - no backend required

## Tech Stack
- Framework: Next.js with TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Static export (output: 'export' in next.config.ts)

## Directory Structure
```
src/
  ├── app/           # Pages and layouts
  ├── components/    # Reusable React components
  ├── posts/         # Markdown blog posts
  └── styles/        # Global CSS
public/              # Static assets
```

## Key Conventions
- Use Framer Motion for all animations and scroll effects
- Components in `/src/components`, pages in `/src/app`
- Blog posts stored as markdown in `/src/posts` with gray-matter parsing

## Running the Project
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build` (generates `/out` for static export)
- Deploy: Push to main → GitHub Actions auto-deploys

## Important Notes
- **GitHub Pages constraint**: Static export only - no server-side rendering
- **Deployment**: Via GitHub Actions to gh-pages branch
- **Custom domain**: Configured via Porkbun DNS → GitHub Pages CNAME

## Reference
See PLAN.md for full implementation details
