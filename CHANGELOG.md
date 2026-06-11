# ACKO Visual Standards — Changelog

> **Single source of truth for ACKO design guidance.** This file tracks major changes and provides full project context so a new chat session can resume work without losing history.

---

## Project context

**What this is**
The ACKO Visual Standards site (`ds-preview/`) is the public-facing documentation for ACKO's design system. It's a Next.js 15 App Router project, styled with Tailwind CSS v4, that serves as the authoritative reference for principles, visual direction, foundations (color, typography, motion, etc.), patterns, and the UI kit.

**Where it lives**
- Worktree: `/Users/mohammed.fahiz/Documents/Visual Direction/DS/.claude/worktrees/nifty-gould-1848f8/ds-preview/`
- Branch: `Refactor-F`
- Origin: `github.com/rahulpramod-stack/DS`
- Dev server: `npx next dev --port 3801` (configured in `.claude/launch.json` as `ds-preview`)

**Sibling source of truth**
The production component library lives at `github.com/mo-fahiz/Acko-Design-system` (Storybook: `https://mo-fahiz.github.io/Acko-Design-system/`). All typography, color, shadow, radius, motion, and component spec values in this docs site **must match** the component library.

**Brand at a glance**
- **Personality:** Clear & Human (one brand, one voice — factual when deciding, human when needed)
- **Creative contexts:** Focused (product UI) and Expressive (brand campaigns) — not separate modes, the same foundations applied with different latitude
- **Primary color:** Purple `#6841E6` (`--color-primary`, `purple-600` in the primitive scale)
- **Category colors:** Auto (#F4A024), Health (#EC5FAB), Life (#1EB7E7), Travel (#55B94D)
- **Typography:** Euclid Circular B everywhere. Headings: Semibold 600. Body: Regular 400.
- **UI aesthetic:** Pill buttons (radius-full), 20px card radius, soft layered shadows

**Information architecture**
```
/                          Home — ACKO Visual Standards landing
/get-started               Orientation tour
/visual-direction          Brand personality + creative modes + four moments
/principles                Four principles (with /[slug] pages each)
/foundations               Index
  /color, /typography, /spacing, /radii, /shadows, /motion,
  /imagery, /iconography, /voice, /accessibility
  /asset-creation          (with sub-pages: image-generation, scenes, video, templates, ai-integration)
/ui-kit                    Component library specs (buttons, cards, inputs, etc.)
/patterns                  Recurring layouts
/brand-story               Narrative
/develop                   Implementation guidance
/resources/changelog       Reserved for public changelog (this file is internal context)
```

**Key files for context**
| File | Purpose |
|------|---------|
| `lib/typography-tokens.ts` | 16-step size ramp + 16 semantic styles + 5 weight variants |
| `lib/showcase-tokens.ts` | Brand palette (purple P50–P950), category colors |
| `lib/category-color-tokens.ts` | Allowed/forbidden zones, distribution band, blending rules |
| `lib/principles.ts` | Four principle definitions with `inContext` (product/marketing split) |
| `lib/asset-tokens.ts` | Imagery modes, scene library, video, template specs |
| `lib/voice-tokens.ts` | Voice & tone vocabulary, error patterns, lifecycle tone |
| `lib/motion-tokens.ts` | Easing curves, durations, keyframes (note: still imported by `/foundations/motion/tokens` and `/usage`) |
| `lib/nav.ts` | Primary navigation structure |
| `components/docs/` | Shared doc primitives: `PageHeader`, `Section`, `PageTable`, `DoDont`, `ResourceCards`, `FadeIn`, `PageTabs`, `CodeChip` |
| `Skills/*.mdc` | Foundational guardrails (colors-primitive, colors-semantic, typography, layout, motion, etc.) |
| `app/launch.json` (`.claude/`) | Dev server config |

---

## [2026-06-09] — Atlassian floating sidebar + IA simplification

### IA flattened to match the new sidebar Figma
- **Sidebar items:** About ACKO → Design system (expandable) → Media (collapsible) → Voice and Tone → Accessibility
- **Removed pages:** `/get-started` and `/visual-direction` directories deleted entirely
- **Renamed in surface copy:** "Principles" → "About ACKO" everywhere in UI. Routes (`/principles/...`) kept to avoid redirects.
- **Design system children:** Colour, Typography, Spacing, Border radii, Shadows, Atoms (→ /ui-kit), Molecules (→ /patterns)
- **Media children (collapsible):** Imagery, Iconography, Motion, Asset creation
- **Resources moved out of primary nav:** Brand story, Develop, Roadmap, Changelog now in a secondary footer block below the main nav

### Floating left rail (Atlassian-style)
- **`components/layout/Sidebar.tsx`** — rewritten from scratch:
  - 248px wide, fixed with 16px margin from edges (`inset-y-4 left-4`)
  - White card surface with hairline border (`#E4E5E9`), 14px radius, layered soft shadow
  - No section labels (DOCUMENTATION, etc.) and no index numbers
  - Chevron rotates 90° on expand, sub-items indent with `pl-7`
  - Active item: dark text + medium weight, no background fill (subtle Atlassian style)
  - Idle items: `#5C616B` text, hover `#F4F4F6` background → `#1F1F23` text
  - Default-open: "Design system" expanded; "Media" collapsed (matches Figma)
- **`components/layout/MainColumn.tsx`** — About ACKO and home now full-bleed; other docs use generous max-w-4xl reading column (12–20 padding units)
- **`components/layout/DocsShell.tsx`** — main content padded `pl-[280px]` to account for floating rail
- **`components/layout/MobileNav.tsx`** — cleaner top bar with the logo + Visual Standards lockup, simpler menu drawer

### About ACKO page rebuild (`app/principles/page.tsx`)
- New heading: **"If ACKO is doing everything right, what should it feel like?"**
- Removed "We asked..." intro and lastUpdated date
- Full-bleed layout (no max-w-4xl prose column)
- **Four trait cards** — title, description, "Read more" outline pill CTA, custom outline icon per trait
- No numbers, no eyebrow labels, no underlines — clean card system

### Voice and Tone — summarised preview + Read more
- **`app/foundations/voice/page.tsx`** — content reduced to a high-level preview:
  - North star quote
  - Three pillars (Plain · Respectful · Present) as cards
  - Tone snapshot (6-row table)
  - "What lives elsewhere" bullet list
  - **External Read more CTA** — purple pill button → `https://appuajt.github.io/acko-content-design-system/`
- **`app/foundations/voice/layout.tsx`** — removed `doc-prose` wrapper so the polished components render without prose interference
- Tabs (Vocabulary / Patterns / Examples) still present as deeper-dive sub-pages

### Atlassian aesthetic refinement across the docs
- **`components/docs/PageHeader.tsx`** — rewritten:
  - Removed border-bottom + purple-dot eyebrow → clean purple eyebrow text
  - Title size 32→44px responsive, weight 600, tighter tracking
  - LastUpdated dropped entirely
- **`app/globals.css`** — neutral palette deepened:
  - `--acko-cream` → `#FAFAFB` (cooler)
  - `--acko-ink` → `#1F1F23` (deeper for higher contrast)
  - `--acko-muted` → `#5C616B`
  - `--acko-border` → `#E4E5E9` (Atlassian hairline)
  - `.doc-prose` `h1/h2/h3` sizes increased; body text uses ink colour
  - `.doc-prose .not-prose` reset rules added so embedded card grids opt out cleanly
- **Homepage (`app/page.tsx`)** rewritten for the new IA:
  - Hero unchanged, but 4 quick-start tiles now point to About ACKO / Design system / Voice and Tone / Accessibility
  - Cards use hairline borders, soft hover lift, 14px radius (no more gradient swatches)
  - What's new + Closing CTA copy updated to "Read About ACKO" + "Browse design system"
- **Foundations index** — full card grid migrated to the new card style, prose styling removed

### Reference + link fixes (broken-link sweep)
- `app/brand-story/page.tsx` — links to `/visual-direction` removed, points to About ACKO / Design system
- `app/foundations/imagery/page.tsx` — footer link updated to About ACKO
- `app/foundations/color/page.tsx` + `color/usage/page.tsx` — resource cards / inline links updated
- `app/ui-kit/page.tsx` — resource card to About ACKO instead of Visual direction
- `app/resources/changelog/page.tsx` — trait-first IA references
- `app/principles/[slug]/page.tsx` — "All principles" → "All ACKO traits", lastUpdated removed
- `app/layout.tsx` — metadata description rewritten for the new IA

### Verified
- `npx next build` passes clean — 47 static pages, no broken imports
- Live preview tested: home, About ACKO, Design system index, Voice and Tone all render correctly
- Sidebar expand/collapse works for both Design system (default open) and Media (default closed)

---

## [2026-06-09] — Interactive DotGrid background + collapsible sidebar

### DotGrid background on homepage
- **Installed:** `@react-bits/DotGrid-JS-CSS` package via shadcn
- **Converted:** DotGrid.jsx → DotGrid.tsx (TypeScript)
- **Integrated:** DotGrid as fixed background layer on homepage with configuration:
  - dotSize: 4px, gap: 34px
  - baseColor: #eaeaea, activeColor: #a38cff (purple tint)
  - Interactive parameters: proximity 150px, shockRadius 330px, resistance 750ms
  - Positioned as `fixed inset-0 z-0 opacity-40` with `pointer-events-none`
  - All content sections elevated with `relative z-10`
- **Removed:** Purple "ACKO" eyebrow label from hero section (cleaner hierarchy)

### Sidebar branding update
- **Logo integration:** Replaced "ACKO" text with horizontal logo (no tagline) from `/public/acko-logo.svg`
- **Kept:** "Visual Standards" text below logo
- **Logo sizing:** 80×24px expanded, 32×32px collapsed

### Sidebar expand/collapse (Atlassian-style)
- **Collapsible state:** Toggle button with left-pointing chevron
- **Width transition:** 17rem expanded ↔ 4.5rem collapsed (300ms ease)
- **Collapsed view:** Shows index numbers (01, 02, etc.) as icon buttons in a vertical stack
- **Expanded view:** Full navigation with labels, sections, and nested children
- **Logo behavior:** Scales down and centers in collapsed state
- **State management:** React useState for client-side toggle

### Files modified
- `app/page.tsx` — added DotGrid import and background layer, removed eyebrow, added z-index layering
- `components/DotGrid.tsx` — created (TypeScript conversion from .jsx)
- `components/DotGrid.jsx` — deleted
- `components/layout/Sidebar.tsx` — added logo image, collapse toggle, conditional rendering
- `public/acko-logo.svg` — copied from source logo files

### Verified
- Build passes clean
- DotGrid renders and responds to mouse movement/clicks with elastic animations
- Sidebar toggle works smoothly with transition
- Logo displays correctly in both states
- All navigation links remain functional in collapsed mode (hover shows title)

---

## [2026-05-24] — Atlassian-inspired home page redesign

### Site renamed: "Visual Standards"
- Sidebar label: "Design Language" → **"Visual Standards"** (`components/layout/Sidebar.tsx`)
- Metadata title: "ACKO Design Language" → **"ACKO Visual Standards"** (`app/layout.tsx`)
- Tagline updated: "A shared reference for creating consistent and recognisable ACKO experiences."

### Home page (`app/page.tsx`) — full Atlassian-style rebuild
Replaced the simple FadeIn callout with a multi-section landing page modeled on `atlassian.design`:
1. **Hero** — large bold "ACKO Visual Standards" (40/64px), purple eyebrow, subtitle
2. **Quick start tiles** (4-column grid) — Get started, Visual direction, Principles, UI kit. Each has a gradient header band with a category-color dot.
3. **About this site** — Two-column "One ACKO. One visual language." statement on white surface (border-y for section separation)
4. **Foundations grid** — 3×3 hairline-divided card grid (Color, Typography, Spacing, Border radii, Shadows, Motion, Imagery, Iconography, Voice & tone). Hover state: title turns purple.
5. **What's new** — 3-card grid with category badges (Updated/New). Includes a "Full changelog →" link.
6. **Closing CTA** — Full-bleed purple gradient banner (`#241362 → #4E29BB → #6841E6`) with pill buttons for "Read visual direction" and "Get started".

All sections wrapped in `FadeIn` for scroll-triggered reveal. Generous vertical rhythm (20–28px section padding). Section alternation: light grey base → white panels for visual rhythm.

### Verified
- `npx next build` passes clean
- All sections render in browser preview
- Sidebar and metadata reflect new branding

---

## [2026-05-15] — Motion foundation refresh

Replaced `app/foundations/motion/page.tsx` Overview content to summarise the dedicated ACKO Motion System (`https://acko-motion-system.vercel.app/`).

**New structure:**
- Introduction — "Purposeful, Consistent, Premium, Fluid"
- Three core motion principles (numbered cards): Calm/smooth/trustworthy · Purposeful & helpful · Consistent/reusable/on-brand
- Page transitions table — Right to left (default, 90%) · Crossfade (navbar) · Bottom sheet · Card expand
- Microinteractions table — 17 timing values (button press 80ms/140ms, sheet open 550/400ms, etc.)
- Implementation rules — animate only transform/opacity, exits faster than entrances, respect `prefers-reduced-motion`
- Resources — featured link to the external motion system + Tokens/Usage/Code tab links

Removed interactive showcase components (`EaseCompareGrid`, `EaseCurveDemo`, `DurationLadder`, `KeyframeDemo`, `PerformanceCompare`, `ReducedMotionDemo`) from the Overview tab. They remain available on the Tokens/Usage/Code sub-tabs.

Layout description (`app/foundations/motion/layout.tsx`) updated to match the new tone.

---

## [2026-05-15] — Align docs with the production component library

Three work streams executed in parallel.

### 1. Typography tokens (`lib/typography-tokens.ts`)
Aligned every value with the component library:

| Style | Was | Now |
|-------|-----|-----|
| display-lg | 60px/72px Bold | **56px/64px** Bold |
| display-sm | 36px/44px Medium | **40px/48px Semibold 600** |
| heading-xl | 30px/36px Medium | **32px/40px Semibold 600** |
| heading-lg/md/sm | Medium 500 | **Semibold 600** |
| body-lg | 18/24 | 18/**28** |
| label-sm | 10/12 | **11/14** |
| overline | 10/12 Medium | **11/16 Semibold 600** |

**Type system changes:**
- `defaultWeight` union now includes `600`
- Added `semibold` to `styleVariantRows` (5 weights total: normal, medium, semibold, bold, italic)
- `sizeRamp` expanded to **16 steps** — inserted 11px (tier 1) and 32px (tier 1)
- 10px remains as tier 2 (campaign-only)

### 2. Visual direction page — "UI aesthetic" section added
Inserted a new section between Category colour and Imagery with 6 cards summarising the component library look:
- Pill buttons (radius-full)
- 20px card radius
- Soft shadows (7-tier)
- Press feedback (scale 0.97)
- Hairline borders (1px / 0.5px retina)
- Inner glow on primary buttons

Also fixed the Typography table row to reference "Semibold 600 for headings".

### 3. UI kit page (`app/ui-kit/page.tsx`) — full rewrite
Replaced the stub with a comprehensive component reference (~500 lines). New sections:
- Design language intro (pill buttons, 20px cards, etc.)
- **Button** — variants table (primary/secondary/inverted/ghost/link/danger), sizes (xs 32px → xl 64px), states (hover/active/focus/disabled/loading), inner shadow, transitions
- **Card** — 4 variants (default/outline/elevated/demoted), padding options, sub-components
- **Text input** — sizes, states (focus ring, error gradient + shake, success checkmark pop)
- **Dialog** — 5 sizes (sm 360 → full), backdrop, panel animation (scale 0.95→1, 250ms ease-out-quart)
- **Toast** — 6 positions, 4 variants, 250ms entrance
- **Alert** — 4 variants, 300ms slide-up, 16px radius
- **Badge** — solid/outline/dot modes, gradient fills, counter badges
- **Tabs** — 4 variants (underline/pill/navigation/enclosed)
- **Accordion** — chevron rotation, max-height animation
- **Foundation tokens** — radius scale, shadow scale (light + dark), z-index, easing curves, named animations
- **Theming** — light/dark mappings
- **Breakpoints** — mobile 0–767 / tablet 768–1023 / desktop ≥1024, gutters 16/32/40px
- **Component library** — link to GitHub repo + Storybook playground

### 4. Minor fixes
- `app/foundations/page.tsx`: Removed "Gotham for brand" — component library only uses Euclid Circular B everywhere
- `app/visual-direction/page.tsx` Typography table row: "Sanctioned pairings only. Headings Semibold 600, body Regular 400."

---

## [2026-05-13] — Brand language polish

### Replaced terminology across the site
- **"Grounded Warmth" → "Clear & Human"** (friendlier, less abstract)
- **"latitude" → removed** entirely. Card labels:
  - "Strict latitude" → just **"Focused"**
  - "Expressive latitude" → just **"Expressive"**
- **"Marketing" badge → "Brand"** (consistent with internal language)
- **"Plain when..." → "Clear when..."** (tighter)
- Removed all mentions of **Apple/Airbnb** as comparison points

### Files touched
- `app/visual-direction/page.tsx` — heading, description, hero alt text, card labels, table caption, decision guide, DoDont items
- `app/get-started/page.tsx` — brand personality copy, card headings, badges
- `lib/typography-tokens.ts` — display-md sample text changed to "Clear & human"
- New images saved: `public/images/card-product.jpg` (phone showing Financial Risk Check), `public/images/card-brand.jpg` (young Indian family)

---

## [2026-05-13] — Phase 2: Visual refinement & brand restructure

### Removed Precision/Warmth dual-mode system
The previous system had separate "Precision mode" and "Warmth mode". Phase 2 unified this into one brand personality (then "Grounded Warmth", now "Clear & Human") with two **creative contexts** (Product = focused, Brand = expressive). No mode toggle anywhere. Tone shifts naturally with customer context.

**Files restructured (16 total):**
- `app/visual-direction/page.tsx` — rewritten with brand personality + system flex table + tone shifts table + four principles + category colour + imagery
- `lib/voice-tokens.ts` — removed `mode: "precision" | "warmth"` from ToneCalibration. Lifecycle table reframed as "tone naturally shifts with context."
- `lib/principles.ts` — replaced `precisionVsWarmth` with `inContext: { product, marketing }`
- `app/principles/[slug]/page.tsx` — renders product/marketing context instead of precision/warmth
- `app/get-started/page.tsx` — redesigned with "One brand, every context" framing
- Plus lighter copy edits in voice/imagery/asset-creation/UI kit/typography/orchestrator pages

### UI polish (Airbnb-inspired at the time, since refined)
- Created `components/docs/FadeIn.tsx` — IntersectionObserver wrapper, respects `prefers-reduced-motion`
- Global CSS: `@keyframes acko-fade-in` (translateY 12px → 0, 0.5s ease-out-quad)
- Card styles: `rounded-2xl`, softer shadows (`shadow-[0_1px_3px_rgba(0,0,0,0.04)]`), `border-border/60`, hover lift `hover:-translate-y-0.5 hover:shadow-md`
- Doc component updates: Section, PageTable, ResourceCards, DoDont, PageHeader, PageTabs all received polish

### Generated images
Used `scripts/generate-image.mjs` (FLUX.1-schnell via Hugging Face) for hero images on Visual Direction, Get Started, and Principle pages.

---

## Older — Phase 1 (middle layer)

Pre-Phase 2 work, completed before this chat session:

- **Typography cleanup** — Reduced 150 style combinations to ~60. Cut underline as a typography variant (it's a link decoration). Added sanctioned pairings matrix. Tiered the size ramp.
- **Voice & tone completion** — Expanded the 50-line stub into a 4-tab foundation (Overview / Vocabulary / Patterns / Examples). Added Indian English conventions, bilingual rules, error message framework, CTA hierarchy, before/after rewrites.
- **Asset creation framework** — Added under Foundations. Five pages (image-generation, scenes, video, templates, ai-integration) with prompt architecture, scene library, AI model adapters, color grading specs.
- **Category color guidance** — Created `/foundations/color/categories`. Defined allowed/forbidden zones, blending rules, distribution band (40-60/20/10/10), dark mode mappings.
- **Accessibility page** — Single rules-summary page at `/foundations/accessibility`.
- **Presentation decks** — `public/decks/acko-visual-direction-leadership.pptx` and `acko-visual-direction-onboarding.pptx`.

---

## Conventions for this changelog

- **Add a new section at the top** when shipping a major change. Format: `## [YYYY-MM-DD] — Short title`
- **Group related changes** under sub-headings (`### Section name`)
- **Reference exact file paths** so future chats can navigate quickly
- **Capture the "why"** when it isn't obvious from the "what"
- **Update the "Project context" section** at the top whenever the IA, brand language, or core stack changes
- **Keep older entries** — don't delete history. Context grows in value over time.
