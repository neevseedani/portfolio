# Neev Seedani — Portfolio

Portfolio site for **Neev Seedani**: product designer and developer at Stanford (Design + CS HCI). Built with Next.js 16, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + CSS variables (design tokens)
- **Animations:** Framer Motion
- **Deployment:** Static export → Vercel (or any static host)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Development server
- `npm run build` — Production build (outputs to `out/` for static export)
- `npm run start` — Serve production build (after `npm run build`)

## Content

- **Projects:** Edit `lib/projects.ts` for metadata (title, role, tags, metrics, thumbnail paths).
- **Case studies:** Edit `lib/case-studies.ts` for long-form content (overview, role, process, outcomes, reflection).
- **Images:** Add project thumbnails and case study assets under `public/images/projects/`. Replace `placeholder.svg` paths in `lib/projects.ts` with your image paths (e.g. `rezme-thumb.jpg`).
- **Resume:** Place `Neev_Seedani_Resume.pdf` in `public/` for the About page download link.

## Deployment (Vercel)

1. Push the repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Build command: `npm run build`
3. Output directory: `out` (for static export)
4. Add custom domain **seedani.com** in Vercel project settings.

For standard Next.js deployment (no static export), remove `output: "export"` from `next.config.ts` and deploy as usual; Vercel will use the default build.

## SEO & assets

- **Favicon:** Add `app/favicon.ico` (or use `app/icon.png`) for the tab icon.
- **OG image:** Optional `app/opengraph-image.png` for social previews; or set `openGraph.images` in `app/layout.tsx` metadata.

## Accessibility

- Skip-to-content link
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`)
- Focus-visible styles and keyboard-friendly nav
- `prefers-reduced-motion` respected in animations
- Alt text and ARIA where needed

## License

Private — Neev Seedani. All rights reserved.
