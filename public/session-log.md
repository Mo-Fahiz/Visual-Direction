# ACKO Design Standards — Session Log

A running record of work done across Claude Code sessions. Most recent first.

---

## Session 3 — 26 June 2026

**Focus:** Brand documentation scope audit, research, git repo cleanup, remote rewire

### Work done

**1. Git remote rewired — Mo-Fahiz/Visual-Direction is now the sole origin**

In `ds-preview`, the `rahulpramod-stack/DS` remote has been removed. `Mo-Fahiz/Visual-Direction` is now `origin` with `main` tracking `origin/main`.

```
origin  https://github.com/Mo-Fahiz/Visual-Direction.git
```

Pulled `034316b` from `origin/main` which included a large batch of new pages and assets already built on that branch (see below).

**2. Deep research — how major companies structure brand docs**

Ran a 101-agent deep research workflow across 19 sources. Key verified findings:

- **Spotify** ([developer.spotify.com/documentation/design](https://developer.spotify.com/documentation/design)) — blends brand guidelines + design system in one unified doc. Logo, corner radii, co-branding, content exclusivity all in one place.
- **Monzo** ([monzo.com/tone-of-voice](https://monzo.com/tone-of-voice)) — tone of voice backed by academic research (Boroditsky 2009, Flammer 2010). Channel-specific guidance for 6 communication types.
- **IBM Carbon** ([carbondesignsystem.com/elements/motion](https://carbondesignsystem.com/elements/motion/overview/)) — productive vs expressive motion framework. Multi-page: overview, choreography, code.
- **Sprout Social Seeds** ([seeds.sproutsocial.com](https://seeds.sproutsocial.com)) — dissolves brand/system boundary. Brand, Patterns, Visual, Writing pillars in one site.
- **Root Insurance** ([joinroot.com/brand-guide](https://www.joinroot.com/brand-guide/)) — minimal but smart. Paired trait contrasts for voice ("smart but not know-it-all").
- **Atlassian** — Accessibility as top-level nav. Unified across Jira, Confluence, Trello.

**3. Full scope audit — what ACKO has vs what's missing**

Audited all pages. After the pull from `origin/main`, coverage is significantly higher than initially estimated. Many Wave 1 and Wave 2 pages already exist.

**Already built (pulled from origin/main, `034316b`):**
- Logo page — `app/foundations/logo/` with VariationsCarousel, SVG assets, download ZIPs
- Layout & Grid — `app/foundations/layout/`
- CTA Hierarchy — `app/foundations/cta-hierarchy/`
- Brand Application — `app/foundations/brand-application/` with real images (social, email, OOH, slides, do/don't)
- Getting Started — `app/getting-started/`
- Resources hub — `app/resources/`
- Imagery expanded — `app/foundations/imagery/` with 6 real photos (documentary, editorial, product, grading, cropping, AI)
- Iconography expanded — `app/foundations/iconography/` with sizing, pairing, creating, do/don't images
- Molecule specs — Card, Dialog, Dropdown, Form Field, Tabs, Toast — `app/patterns/*/`
- Page-level patterns — Onboarding, Checkout, Policy detail, Empty state, Error, Settings — `app/patterns/pages/*/`
- Molecules overview page expanded — `app/patterns/page.tsx`
- PlaceholderImage component — `components/docs/PlaceholderImage.tsx`
- DocImage component — `components/docs/DocImage.tsx`
- MoleculeTemplate component — `components/docs/MoleculeTemplate.tsx`
- Color page rebuilt — `app/foundations/color/page.tsx`, tokens, usage pages updated
- Colour primitives — `Skills/colours-primitive.md` (441 lines, solid + alpha scales)

**4. Color primitives file generated**

Extracted hex values from `Primitives.zip` (Figma `Value.tokens.json`) into `Skills/colours-primitive.md`.

Includes:
- **Solid:** Grey (18 steps), Purple Brand (13 steps), Red, Green, Yellow, Amber, Blue, Cyan, Indigo, Lime, Orange, Pink, Teal
- **Alpha:** 14 scales (AmberA, BlueA, CyanA, GreenA, GreyA, IndigoA, LimeA, OrangeA, PinkA, PurpleA, RedA, TealA, WhiteA, YellowA) — each with base hex + alpha percentage
- Border and elevation tokens excluded per request

**5. Remaining gaps (missing from the site)**

After the pull, the remaining gaps are:

| Area | Status |
|------|--------|
| Brand architecture (ACKO master → sub-brands) | Missing |
| Co-branding & Partnership lock-ups | Missing |
| Social media templates (standalone page with platform specs) | Missing |
| Email & Notifications (deep spec page) | Missing |
| Dark mode usage guidance | Missing |
| Illustration style | Missing |
| Photography direction (casting, wardrobe, Indian context) | Missing |
| Print & OOH (CMYK, bleed, min type sizes) | Missing |
| Navigation patterns | Missing |
| Contribution guide | Missing |
| Naming conventions | Missing |
| Data visualisation | Missing |
| Form patterns (standalone) | Missing |

---

## Session 2 — (prior session)

**Focus:** GitHub Pages deployment, basePath fixes, Phase 1 content planning

### Work done

**1. Changelog updated — v1.0.0**
Added release notes to `/resources/changelog` covering 10 key items from the design system refresh.

**2. GitHub Pages deployment set up**
- Created `.github/workflows/deploy.yml` — GitHub Actions workflow
- Created `scripts/build-pages.mjs` — sets `GITHUB_PAGES=true` env var before build
- Updated `next.config.ts` — conditional `basePath: "/Visual-Direction"` when `GITHUB_PAGES=true`

**3. Fixed: Images not loading on deployed site**
- Created `ds-preview/lib/base-path.ts` — `assetPath()` helper
- Applied to `app/page.tsx`, `foundations/iconography/page.tsx`

**4. Fixed: ACKO logo missing on deployed site**
- Applied `assetPath()` to `components/layout/Sidebar.tsx`
- Applied `assetPath()` to `components/layout/MobileNav.tsx`

**5. Fixed: ESLint build failure**
- `react/no-unescaped-entities` error in changelog
- Replaced straight quotes with `&ldquo;` and `&rdquo;` HTML entities

**6. Brand guideline review**
Read `ACKO_BrandGuideline.pdf` (22 pages). Key corrections applied:
- Typography: Gotham = ❌, Euclid Circular B = ✅ for all use cases (logo keeps Gotham)
- Primary colour: #4E29BB = ❌, #6841E6 = ✅

**7. Phase 1 content plan scoped**
Read `public/ACKO_Content_Plan.md`. Phase 1: Logo, Layout & Grid, CTA Hierarchy, Brand Application, Imagery (expanded), Iconography (expanded).

---

## Session 1 — (prior session)

**Focus:** Design system foundations, UI refresh, page builds

### Work done

- Redesigned sidebar to floating card style (Atlassian-inspired)
- Renamed "Visual Standards" → "Design Standards"
- Built About ACKO / Principles page with four personality trait cards
- Built Voice & Tone with 4-tab structure (overview, vocabulary, patterns, examples)
- Built Motion page with page-transition and microinteraction demos
- Built Asset creation section (image generation, scenes, video, templates, AI integration)
- Built Category colours page under Colour
- Built Accessibility page
- British English sweep across all pages (colour, behaviour, recognisable)
- Icon animation: slide-down on interval, fixed glitch
- Homepage: hero canvas, building blocks grid, what's new section
- Applied FadeIn scroll animation globally

---

## Key decisions (standing)

| Decision | Rationale |
|----------|-----------|
| Euclid Circular B only | Gotham being retired from brand kit. Only the logo mark keeps Gotham. |
| Primary colour #6841E6 | Corrected from brand PDF. #4E29BB was wrong. |
| British English throughout | "Colour", "behaviour", "recognisable" — site-wide |
| `assetPath()` for all local assets | Handles basePath difference between local dev and GitHub Pages |
| No placeholder images — real images used | Real images added to `public/images/` per page |
| `Mo-Fahiz/Visual-Direction` is origin | `rahulpramod-stack/DS` removed from ds-preview remotes |

---

## Live links

- **GitHub Pages:** https://mo-fahiz.github.io/Visual-Direction/
- **Component library (Storybook):** https://mo-fahiz.github.io/Acko-Design-system/
- **ACKO Motion System:** https://acko-motion-system.vercel.app/
- **Content design system:** https://appuajt.github.io/acko-content-design-system/

---

## Pending — next session

The site structure is largely in place. Next session will focus on restructure and quality:

1. Review all newly pulled pages for content quality and consistency
2. Fix nav to reflect new pages (Getting Started, Resources, Logo, Layout, CTA Hierarchy, Brand Application)
3. Decide on IA restructure (brand vs design system split in nav)
4. Wave 2 gaps: Social media templates standalone, Email & Notifications, Co-branding
5. Wave 3 gaps: Dark mode, Illustration, Photography direction, Data viz
