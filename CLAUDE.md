# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack
npm run build     # Build static export with Turbopack
npm run deploy    # Build + deploy to GitHub Pages
npm run publish   # Push existing `out/` dir to gh-pages
npm run lint      # Run ESLint
```

## Architecture

This is a **Next.js 15 static portfolio site** exported to GitHub Pages, served from the domain root (`/`).

**Key config** (`next.config.ts`): `output: "export"`, `images: { unoptimized: true }`, `trailingSlash: true`. These are required for GitHub Pages compatibility, do not remove them. The site is served from the domain root, so there is no `basePath`/`assetPrefix`; `src/lib/base-path.ts` (`withBasePath`) just normalizes raw string URLs to leading-slash form.

**Page structure** (`src/app/page.tsx`): A single page composed of six sections in order: `Landing` (id `home`) → `WhatIDo` → `WhatILearned` → `WhatIDid` → `WhatIBuilt` → `Contact`. Section `id`s are unique anchor targets.

**Components** (`src/components/`): `HeaderText` (h2 section heading; the only h1 on the home page is the hero name in `landing.tsx`), `Divider`, `MotionProvider` (wraps the app in framer-motion `MotionConfig reducedMotion="user"`), `Analytics` (GoatCounter, disabled until `GOATCOUNTER_CODE` is set). There is no navbar.

**Section files** live in `src/app/sections/`. All are client components (`"use client"`) because they use framer-motion. Shared animation variants live in `src/lib/animation-variants.ts`.

**SEO** (`src/app/layout.tsx`): full Metadata (Open Graph/Twitter/canonical, absolute URLs), JSON-LD Person schema, `sitemap.ts`/`robots.ts` metadata routes, `icon.svg` + `favicon.ico`, `public/og-image.png` (1200×630). Keep OG/canonical URLs absolute (`siteUrl` is `https://goutham0110.github.io`).

## Styling

Uses **Tailwind CSS v4** with inline theme config in `src/app/globals.css`. The site is **dark-only**: `--background`/`--foreground` are hardcoded dark values (do not reintroduce a `prefers-color-scheme` swap; section text colors assume the dark palette; the beige hero is the one inverted section). Custom colors (`beige`, `darkbeige`) and font variables (`--font-sans` for Poppins, `--font-mono` for Montserrat) are defined there. All layout is flexbox, no grid.

**Responsive**: mobile-first; sections use `sm:`/`md:`/`lg:` breakpoints throughout and must stay horizontal-overflow-free at 375px. Type scales like `text-5xl sm:text-7xl lg:text-9xl` are the established pattern for headings.

## Deployment

Builds produce a static `out/` directory. `npm run publish` pushes it to the `gh-pages` branch via `gh-pages` CLI. The site is served from the domain root (`goutham0110.github.io`).

## Rules

- Never use the em dash character