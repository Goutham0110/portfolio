# Goutham S Portfolio

Personal portfolio, live at [goutham0110.github.io/portfolio](https://goutham0110.github.io/portfolio/).

Built with Next.js 15 (static export), Tailwind CSS v4, and Framer Motion. Deployed to GitHub Pages.

## Commands

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Static export to out/
npm run deploy    # Build + push to gh-pages
npm run lint      # ESLint
```

## Post-deploy checklist

- **Analytics**: set `GOATCOUNTER_CODE` in `src/components/analytics.tsx` after creating a free [GoatCounter](https://www.goatcounter.com) account.
- **Search Console**: submit `https://goutham0110.github.io/portfolio/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to get indexed.
- **Contact email**: the contact section CTA points to LinkedIn; add a `mailto:` link in `src/app/sections/contact.tsx` if you want direct email.
- **Resume**: drop `resume.pdf` into `public/` and link it from the contact section.
- **Share previews**: the Open Graph image lives at `public/og-image.png` (1200×630); regenerate it if the branding changes.
