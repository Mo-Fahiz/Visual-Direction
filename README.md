# ACKO Design System (documentation site)

Principles-first design system documentation—the **source of truth** for visual direction, foundations, and (eventually) the UI kit. Built with [Next.js](https://nextjs.org) 15 (App Router) and Tailwind CSS v4.

## Scripts

```bash
npm run dev    # local dev (Turbopack)
npm run build  # production build
npm run start  # serve production build
npm run lint
```

Open [http://localhost:4004](http://localhost:4004) after `npm run dev` (or `npm run start` after a build).

## Structure

- `app/` — routes (get started, visual direction, principles, foundations, brand story, develop, resources, ui-kit, patterns)
- `components/` — layout shell, docs helpers (`PageHeader`, `DoDont`, …)
- `data/tokens.json` — seed foundations tokens (documented on `/develop`)
- `lib/` — navigation config and principle content data

## Content

Edit copy in `app/**/page.tsx`, `lib/principles.ts`, and `data/tokens.json`. Keep Figma and product tokens aligned with what you publish here.

## Fonts

Body/UI type is **Euclid Circular B** (`font-family: EuclidCircular`) from `app/font-euclid.css`, using ACKO CMS woff2 URLs. Global `globals.css` imports that file and sets `--font-sans`.
