# ACKO Design System (documentation site)

Principles-first design system documentation—the **source of truth** for visual direction, foundations, and (eventually) the UI kit. Built with [Next.js](https://nextjs.org) 15 (App Router) and Tailwind CSS v4.

## Scripts

```bash
npm run dev    # local dev (Turbopack)
npm run build  # production build
npm run start  # serve production build
npm run build:pages  # static export to ./out (GitHub Actions / Pages)
```

Open [http://localhost:3000](http://localhost:3000) after `npm run dev` (port is set in `package.json`; use `npm run start` after a production build).

## GitHub Pages

The repo publishes a **static** build on every push to `main` ([workflow](.github/workflows/deploy-pages.yml)).

1. In the GitHub repo: **Settings → Pages → Build and deployment**, set source to **GitHub Actions**.
2. After the workflow finishes, open **`https://mo-fahiz.github.io/Visual-Direction/`** (same path segment as [`Mo-Fahiz/Visual-Direction`](https://github.com/Mo-Fahiz/Visual-Direction); adjust `basePath` / `assetPrefix` in `next.config.ts` if you rename the repository).

Static hosting does **not** include `app/api` routes—the design assistant (`/api/orchestrator`) is omitted for Pages builds and `/` links into the docs instead (`NEXT_PUBLIC_GITHUB_PAGES`). For the full orchestrator home page, run `npm run dev` or deploy to a Node host with `npm run build` (no static export).

`public/.nojekyll` is included so GitHub Pages serves Next’s `_next` assets correctly.

## Structure

- `app/` — routes (get started, visual direction, principles, foundations, brand story, develop, resources, ui-kit, patterns)
- `components/` — layout shell, docs helpers (`PageHeader`, `DoDont`, …)
- `data/tokens.json` — seed foundations tokens (documented on `/develop`)
- `lib/` — navigation config and principle content data

## Content

Edit copy in `app/**/page.tsx`, `lib/principles.ts`, and `data/tokens.json`. Keep Figma and product tokens aligned with what you publish here.

## Fonts

Body/UI type is **Euclid Circular B** (`font-family: EuclidCircular`) from `app/font-euclid.css`, using ACKO CMS woff2 URLs. Global `globals.css` imports that file and sets `--font-sans`.
