# Portfolio Animations Design

**Date:** 2026-03-30
**Status:** Approved

## Summary

Add subtle, refined animations to the portfolio using Framer Motion. Elements fade up on scroll. The landing hero animates in on page load. Expand/collapse in the experience section becomes physics-based. No layout, color, font, or content changes.

## Decisions

| Question | Decision |
|---|---|
| Animation style | Subtle & Refined (fade up on scroll, gentle hover effects) |
| Library | Framer Motion |
| Architecture | Shared variants file + per-section `motion.div` with `whileInView` |
| Sections animated | Landing (hero entrance), What I Do, What I Learned, What I Did |

## Architecture

### New file: `src/lib/animation-variants.ts`

Exports shared Framer Motion variant objects and transition defaults used by all animated sections:

- `fadeUp` — `hidden: { opacity: 0, y: 30 }` → `visible: { opacity: 1, y: 0 }`
- `fadeIn` — `hidden: { opacity: 0 }` → `visible: { opacity: 1 }`
- `staggerContainer` — `visible: { transition: { staggerChildren: 0.15 } }`
- `staggerContainerFast` — same with `staggerChildren: 0.1` (for the 5-column skills grid)
- Default transition: `duration: 0.6, ease: "easeOut"`

All `whileInView` calls use `viewport={{ once: true }}` so animations only fire once per page load.

### Client component conversion

Framer Motion requires browser APIs, so animated sections become `"use client"`. All four section files are leaf components with no server-only data fetching — this is safe.

- `landing.tsx` — add `"use client"`
- `what-i-do.tsx` — add `"use client"`
- `what-i-learned.tsx` — add `"use client"`
- `what-i-did.tsx` — already `"use client"`

## Section-by-Section Behaviour

### Landing (`landing.tsx`)

Load-time entrance (no scroll trigger — section is visible on arrival):

1. "GOUTHAM" heading: `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`, duration 0.7s
2. Tagline paragraph: same, `transition delay: 0.2s`
3. Nav links container: `fadeIn`, `transition delay: 0.4s`

Uses `animate` prop directly, not `whileInView`.

### What I Do (`what-i-do.tsx`)

Scroll-triggered with `whileInView`:

1. Section heading (`HeaderText`) — `fadeUp`, no stagger
2. Services intro paragraph — `fadeUp`, `delay: 0.1s`
3. Each service block `(01)`, `(02)`, `(03)` — wrapped in `staggerContainer`; block number and content column are `fadeUp` children, staggered at 0.15s
4. Skill rows within each block — stagger at 0.08s between rows

### What I Learned (`what-i-learned.tsx`)

Scroll-triggered with `whileInView`:

1. Section heading — `fadeUp`
2. Five skill columns wrapped in `staggerContainerFast` — each column is a `fadeUp` child, staggered at 0.1s
3. Items within each column fade in after the column header at 0.05s stagger

### What I Did (`what-i-did.tsx`)

Scroll-triggered + interaction upgrade:

1. Section heading — `fadeUp`
2. Each of the 4 job entry rows — `staggerContainer` with `fadeUp` children, stagger 0.15s
3. Expand/collapse: replace `max-h` CSS toggle with Framer Motion `AnimatePresence` + `motion.div` with `initial={{ height: 0, opacity: 0 }}` → `animate={{ height: "auto", opacity: 1 }}`. Remove hardcoded `max-h-[2000px]` / `max-h-0` classes.

### Hover Effects

- Skill rows in What I Do: `whileHover={{ opacity: 1 }}` (rows are slightly dimmed at rest via `text-darkbeige`)
- Job entry headers in What I Did: `whileHover={{ x: 4 }}` micro-nudge, `transition: { duration: 0.15 }`

## What Is NOT Changing

- Layout, colors, fonts, spacing — untouched
- `next.config.ts` — no changes
- `globals.css` — no changes
- `HeaderText` and `Divider` components — no changes
- Static export compatibility — preserved (`framer-motion` is a client-side library, compatible with `output: "export"`)

## Dependencies

Install: `npm install framer-motion`
