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

This is a **Next.js 15 static portfolio site** exported to GitHub Pages at `/portfolio`.

**Key config** (`next.config.ts`): `output: "export"`, `basePath: "/portfolio"`, `assetPrefix: "/portfolio/"`, `images: { unoptimized: true }`, `trailingSlash: true`. These are required for GitHub Pages compatibility — do not remove them.

**Page structure** (`src/app/page.tsx`): A single page composed of four sections in order: `Landing` → `WhatIDo` → `WhatILearned` → `WhatIDid`. Each section targets `min-h-screen`.

**Component location**: Reusable components live in `src/components/`. Currently only `HeaderText` (large section heading with optional subtitle) and `Divider` (separator with conditional margins) exist.

**Section files** live in `src/app/sections/`. All are server components except `what-i-did.tsx`, which is a client component (`"use client"`) because it manages expandable job entries via `useState`.

## Styling

Uses **Tailwind CSS v4** with inline theme config in `src/app/globals.css`. Custom colors (`beige`, `darkbeige`) and font variables (`--font-sans` for Poppins, `--font-mono` for Montserrat) are defined there. All layout is flexbox — no grid.

## Deployment

Builds produce a static `out/` directory. `npm run publish` pushes it to the `gh-pages` branch via `gh-pages` CLI. The site is served from `<username>.github.io/portfolio`.
