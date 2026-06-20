# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
npm run lint:fix # ESLint with auto-fix
```

## Tech Stack

- **Next.js 16.2.9** with App Router — uses `src/app/` directory structure
- **React 19.2.4** with React Compiler enabled (`reactCompiler: true` in next.config.ts)
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme inline` syntax in globals.css
- **TypeScript 5** with strict mode

## Architecture

Portfolio site for "Haider Ali Tariq Cheema | HTC" with file-based routing under `src/app/`:

- `/` — Single-page layout with all sections (page.tsx)

### Component Structure

Components are organized under `src/components/`:

**Layout** (`layout/`)

- `Navbar.tsx` — Navigation bar
- `Footer.tsx` — Site footer

**Sections** (`sections/`)

- `Hero.tsx` — Hero/landing section
- `About.tsx` — About section
- `Projects.tsx` — Projects showcase
- `Skills.tsx` — Skills display
- `Contact.tsx` — Contact section

**UI** (`ui/`)

- `Button.tsx` — Reusable button component
- `FeatureCard.tsx` — Feature card component
- `SkillIcon.tsx` — Skill icon component

Path alias `@/*` maps to `./src/*`.

## Styling

Tailwind v4 theming is configured in `src/app/globals.css` using CSS variables and `@theme inline`:

- **Colors**: coral, teal, gold, cream palette with semantic aliases (background, foreground, primary, accent, surface)
- **Fonts**: Geist (sans), Geist Mono, and Playfair Display loaded via `next/font/google` and exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`, `--font-playfair`)
