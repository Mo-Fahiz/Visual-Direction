# ACKO Design Standards — Content Plan

A page-by-page plan for every new and expanded section. Each entry includes the content structure, placeholder image descriptions, do/don't examples, and specs needed. Organised in build priority.

---

## Phase 1 — Unblocks teams immediately

---

### 1. Logo

**Path:** `/foundations/logo/`
**Why:** Every external-facing asset needs logo rules. This is the first thing a marketing team, agency, or partner looks for.

**Sections:**

**Primary logo**
Content: The ACKO Möbius strip mark + wordmark as the primary lockup. Show horizontal and stacked variants.
Placeholder image: Primary logo on white background with dimension annotations. Show both horizontal (mark left, wordmark right) and stacked (mark above, wordmark below) versions.

**Logo clear space**
Content: Minimum clear space equals the height of the "A" in the wordmark, applied on all four sides. No elements, text, or edges may enter this zone.
Placeholder image: Logo centered with a translucent purple zone around it showing the clear space measurement. Include a ruler graphic showing the "A" height as the unit.

**Minimum size**
Content: Minimum width for digital is 80px (horizontal lockup). Below this threshold, use the mark only. Print minimum is 20mm.
Placeholder image: Logo at minimum size alongside a too-small version crossed out.

**Backgrounds**
Content: The logo has three colour modes — full colour (on white/light), white (on purple or dark), and mono black (on light, when colour is unavailable).
Placeholder image: 3×2 grid showing the logo on: white, cream/surface, ACKO purple, dark/black, photography, and a patterned/busy background (with the busy one marked as incorrect).

**Do / Don't**

Do:
- Use the provided logo files — never recreate or retype.
- Maintain the clear space in all contexts.
- Use the white version on dark or purple backgrounds.

Don't:
- Stretch, rotate, or skew the logo.
- Add drop shadows, outlines, or effects.
- Place the full-colour logo on a busy photograph without a container.
- Change the purple to another colour.
- Lock up the logo with other brand marks without approval.

Placeholder image: A 2-column grid. Left column: 3 correct usages (light bg, dark bg, purple bg). Right column: 3 incorrect usages (stretched, recoloured, on a busy photo without contrast).

**Co-branding**
Content: When the ACKO logo appears alongside a partner logo, use a vertical divider rule at 50% logo height, with equal clear space on both sides. ACKO logo always appears on the left (LTR) or top (stacked).
Placeholder image: ACKO logo + partner logo with divider, annotated with spacing.

**File formats**
Content: Table of available formats: SVG (preferred for digital), PNG (with transparency), PDF (for print). Link to the asset download or Figma library.

---

### 2. Layout and Grid

**Path:** `/foundations/layout/`
**Why:** Teams have spacing tokens but no system for page-level structure. This is the composition gap.

**Sections:**

**Grid system**
Content: A 12-column grid with responsive gutters. Mobile uses a 4-column grid, tablet uses 8, desktop uses 12. Max container width is 1280px, centered.

Specs table:
| Breakpoint | Columns | Gutter | Margin (outer) | Container max |
|------------|---------|--------|----------------|---------------|
| Mobile (0–767) | 4 | 16px | 16px | 100% |
| Tablet (768–1023) | 8 | 24px | 32px | 100% |
| Desktop (1024+) | 12 | 24px | 40px | 1280px |

Placeholder image: Three device frames (phone, tablet, desktop) each showing the column grid overlaid on a sample ACKO screen. Columns in translucent purple, gutters in white.

**Common layouts**
Content: Five standard page layouts that cover 90% of product surfaces.

1. Single column — onboarding, checkout, focused forms. Max content width 560px, centered.
2. Sidebar + content — settings, policy details. Sidebar 280px fixed, content fluid.
3. Card grid — product listings, plan comparison. 2-up mobile, 3-up tablet, 4-up desktop.
4. Split — marketing landing sections. 50/50 or 60/40 image + content.
5. Dashboard — data-heavy surfaces. Sidebar nav + top metrics bar + content grid.

Placeholder image: For each layout, a wireframe showing the column usage, content zones, and responsive behaviour at mobile and desktop.

**Content hierarchy**
Content: Every page has a single visual hierarchy: one primary heading, one primary action, and supporting content arranged by importance. Avoid multiple competing focal points.

Rules:
- One H1 per page, always the first content element.
- Primary CTA above the fold on mobile.
- Supporting actions never compete visually with the primary.
- White space increases with importance — hero sections get more breathing room than list items.

Placeholder image: An annotated product page showing the hierarchy layers: H1 → primary CTA → supporting content → secondary actions → footer. Arrows showing the eye-flow path.

**Spacing rhythm**
Content: Vertical spacing between sections follows a consistent rhythm. Section gaps use the spacing scale: 48px between major sections, 32px between subsections, 16–24px between related elements.

Placeholder image: A product page with vertical spacing annotated between sections, showing 48/32/24/16 values.

**Do / Don't**

Do:
- Align content to the grid — don't eyeball positions.
- Use consistent section spacing from the scale.
- Let the grid break for full-bleed heroes and images.

Don't:
- Mix grid systems on the same page.
- Centre everything — left-align body content for readability.
- Cram content to avoid scrolling — white space is functional, not wasted.
- Use more than one primary CTA per viewport.

Placeholder image: Side-by-side. Left: a clean product page with consistent grid alignment and spacing. Right: the same content with misaligned elements, inconsistent gaps, and two competing CTAs.

---

### 3. CTA Hierarchy

**Path:** `/foundations/cta-hierarchy/`  
**Why:** Button variants exist in Atoms but there's no decision framework. Teams guess which variant to use.

**Sections:**

**The hierarchy**
Content: Every screen has at most one primary action. Supporting actions step down in visual weight.

| Level | Variant | When to use | Visual weight |
|-------|---------|-------------|---------------|
| Primary | `primary` (purple, pill) | The single most important action on the screen — "Buy", "Submit claim", "Continue" | Highest — filled purple |
| Secondary | `secondary` (purple outline) | Important but not the main action — "Save draft", "Add another" | Medium — outline |
| Tertiary | `ghost` | Supporting navigation or optional actions — "Learn more", "Skip" | Low — text only |
| Destructive | `danger` | Irreversible actions — "Cancel policy", "Delete account" | High but red — signals caution |
| Link | `link` | Inline navigation, non-critical actions | Lowest — underlined text |

Placeholder image: A product screen (e.g., checkout summary) with each CTA level annotated and labelled.

**Pairing rules**
Content: Common CTA pairings and their layout.
- Primary + Tertiary: "Continue" + "Go back" — primary on right, tertiary on left.
- Primary + Secondary: "Submit" + "Save draft" — primary on right, secondary on left.
- Primary + Destructive: "Keep policy" + "Cancel policy" — primary on right, destructive on left with confirmation step.

Placeholder image: Three card examples showing each pairing in a form footer context.

**Mobile stacking**
Content: On mobile, CTAs stack vertically. Primary always on top, secondary below. Full-width at mobile, inline at desktop.
Placeholder image: Mobile screen showing stacked CTAs vs desktop screen showing inline CTAs.

**Do / Don't**

Do:
- One primary CTA per viewport.
- Use verb-first labels: "Get quote", "File claim", "Renew policy".
- Purple primary CTA everywhere — no green, no black.

Don't:
- Two primary buttons competing on the same screen.
- Vague labels: "Submit", "OK", "Click here".
- Ghost buttons for critical actions — they're too easy to miss.
- Destructive actions without a confirmation step.

Placeholder image: Left: a clean form with one purple primary CTA and a ghost "Go back". Right: the same form with two filled buttons (purple and green) competing.

---

### 4. Brand Application (Marketing)

**Path:** `/brand/` or `/foundations/brand-application/`
**Why:** The entire site is product-focused. Marketing teams have no reference for applying the system to campaigns, social, email, or print.

**Sections:**

**How the system extends to marketing**
Content: The same foundations — colour, typography, personality — apply to marketing. The *volume* changes, not the language. Marketing can be louder (more purple, larger type, bolder imagery) while staying within the system.

**Social media**
Content: Standard canvas sizes, safe zones, logo placement (top-left default), type scale for social (heading minimum 24px at 1080px canvas width), and CTA treatment.

Specs table:
| Platform | Canvas size | Safe zone | Logo position |
|----------|-------------|-----------|---------------|
| Instagram post | 1080×1080 | 80px all sides | Top-left |
| Instagram story | 1080×1920 | 80px sides, 200px top/bottom | Top-left |
| LinkedIn post | 1200×628 | 60px all sides | Top-left |
| Twitter/X post | 1200×675 | 60px all sides | Top-left |

Placeholder image: Four social media templates showing ACKO purple, Euclid typography, logo placement, and safe zones marked.

**Email**
Content: Email header (ACKO logo, 600px max width), body typography (system font stack fallback for Euclid), CTA button (purple pill, 48px height, centred), footer with legal.
Placeholder image: A complete email template wireframe with annotations.

**OOH and print**
Content: Minimum type sizes for outdoor (headline 48pt+, body 18pt+), colour mode (CMYK purple values), bleed and trim marks, Euclid font licensing note for print vendors.
Placeholder image: A billboard mockup and a brochure mockup showing ACKO branding applied.

**Presentation slides**
Content: Standard slide template — dark title slide, light content slides, section dividers. Type scale for presentations (title 44pt, body 18pt, caption 12pt). Always Euclid.
Placeholder image: A 4-slide preview showing title, content, section divider, and closing slide.

**Do / Don't**

Do:
- Use Euclid for all marketing materials — it is now the single ACKO typeface.
- Maintain the purple CTA colour even in marketing — no green, no black.
- Follow the same four personality constraints.

Don't:
- Use Gotham — it is being retired from the brand kit.
- Invent new colours for campaigns — work within the palette.
- Use AI-generated imagery that contradicts the imagery modes.
- Skip the logo clear space because "it's just social".

Placeholder image: A before/after. Before: a social post using Gotham, green CTA, AI car-on-clouds image. After: the same message using Euclid, purple CTA, grounded imagery.

---

### 5. Imagery — Expanded

**Path:** `/foundations/imagery/` (replace existing stub)
**Why:** Current page names three modes with no visual reference. Unusable.

**Sections:**

**Three imagery modes — with examples**

Documentary warm:
Content: Real situations, natural light, eye-level camera, warm colour grading. Used for claims, support, human moments. Subjects are real people in authentic Indian settings — not stock.
Placeholder image: A grid of 4 reference photographs showing: a family at home, a person on the phone during a claim, a hospital reception, a couple reviewing documents. Warm colour grading, natural light.

Editorial bright:
Content: Optimistic, high-contrast, brand-forward. Used for marketing, campaigns, launch moments. Clean backgrounds, product-forward framing, saturated but not garish.
Placeholder image: 4 reference images showing: a vehicle hero shot, a product feature highlight, a lifestyle moment with bold colour, a campaign visual.

Product contextual:
Content: UI-adjacent, explanatory, minimal. Used inside product surfaces. Clean backgrounds, tight crops, no emotional loading — purely informational.
Placeholder image: 4 reference images showing: a car detail for insurance selection, a phone screen mockup, a document scan example, a simple object on white.

**Colour grading**
Content: Warm bias across all modes. Shadows slightly lifted (never crushed to black). Highlights soft (never blown). Skin tones preserved accurately — never colour-shifted.
Placeholder image: A before/after of a photograph showing ungraded vs ACKO-graded treatment.

**Cropping and composition**
Content: Subject-centred framing for product. Rule-of-thirds for editorial. Never crop faces at the chin or forehead. Leave breathing room around subjects.
Placeholder image: Correct vs incorrect crop examples with grid overlays.

**AI-generated imagery**
Content: AI imagery is acceptable for marketing under strict conditions. Must use the prompt architecture below. Must be reviewed for: anatomical accuracy, text rendering (remove any AI text), cultural sensitivity, and brand consistency.

Prompt template:
"[Subject description], [setting], [lighting: natural/studio/dramatic], [mood tags], [camera: eye level/overhead/45-degree], [style: photorealistic/editorial/minimal]. ACKO brand colours where appropriate. No text in image."

Placeholder image: A good AI-generated ACKO image alongside a rejected one (with annotation: "text artifacts", "anatomically incorrect", "off-brand colour").

**Do / Don't**

Do:
- Match imagery mode to the customer journey moment.
- Show diversity and authentic Indian contexts.
- Keep product imagery legible at mobile sizes.
- Use the prompt template for AI generation.

Don't:
- Generic Western stock photography.
- Busy backgrounds behind critical UI or copy.
- Dark, moody imagery for ACKO product surfaces.
- AI imagery with visible text, hands/fingers errors, or cultural inaccuracies.

---

### 6. Iconography — Expanded

**Path:** `/foundations/iconography/` (replace existing stub)
**Why:** Current page has library count and style description only. No usage guidance.

**Sections:**

**Style**
Content: Rounded stroke icons. 24px grid, 1.5px stroke, rounded line caps and joins. Friendly, not sharp. Single colour (inherits from context).
Placeholder image: The icon grid construction showing the 24px artboard, 2px padding, 1.5px stroke, rounded caps. Show 4 example icons on the grid.

**Sizing**
Content: Icons scale proportionally. Standard sizes and their contexts:

| Size | Stroke | Context |
|------|--------|---------|
| 16px | 1.5px | Inline with body text, compact lists |
| 20px | 1.5px | Buttons (with label), form fields |
| 24px | 1.5px | Navigation, standalone actions, cards |
| 32px | 2px | Section headers, feature highlights |
| 48px | 2px | Empty states, illustrations |

Placeholder image: The same icon (e.g., a shield) shown at all 5 sizes, annotated.

**Icon + label pairing**
Content: Icons paired with text are decorative — the label carries the meaning. Icon-only buttons require aria-label. Minimum touch target is 44px regardless of icon size.
Placeholder image: A row showing icon+label (correct), icon-only with tooltip (acceptable), and icon-only with no label and no aria-label (incorrect).

**Creating new icons**
Content: New icons must follow the grid, stroke weight, and cap style. Submit to the icon library via [process]. Never use third-party icon sets inline — match them to ACKO style first.
Placeholder image: A step-by-step showing an icon being drawn on the grid, with construction lines.

**Do / Don't**

Do:
- Use icons from the library — search before creating new ones.
- Pair icons with labels for clarity.
- Use consistent sizing per context.

Don't:
- Mix icon styles (filled + outlined) on the same surface.
- Use icons below 16px — they become illegible.
- Add colour to icons beyond the inherited context colour (except feedback states).
- Use decorative icons that don't add meaning.

Placeholder image: Left: a navigation bar with consistent 24px outlined icons. Right: the same bar with mixed filled/outlined icons at different sizes.

---

## Phase 2 — Completes the system

---

### 7. Molecule Specs (expand each)

**Path:** `/patterns/<molecule-name>/` for each of the 19 molecules
**Why:** Currently just a name and one-liner. Designers can't use these without specs.

**Template per molecule page:**

Each molecule page follows this structure:

1. **Anatomy** — Labelled diagram showing every part of the component.
   Placeholder image: The component with numbered callouts (1: trigger, 2: content, 3: close button, etc.)

2. **Variants** — Table of visual variants with when to use each.

3. **Props / API** — Key configuration options.

4. **Behaviour** — Interaction details: open/close, keyboard navigation, focus management.

5. **Content guidelines** — Max character counts, tone, what to say in labels/titles.

6. **Accessibility** — ARIA roles, keyboard shortcuts, screen reader announcements.

7. **Do / Don't** — Visual examples of correct and incorrect usage.
   Placeholder image: 2-column grid with annotated correct and incorrect implementations.

8. **Related** — Links to atoms it consumes and patterns it appears in.

**Priority molecules** (build these first — most used):
- Card (most common container)
- Dialog (most complex interaction)
- Dropdown (most misused)
- Tabs (variant confusion)
- Toast (timing and placement questions)
- Form / Field (validation patterns)

---

### 8. Page-Level Patterns

**Path:** `/patterns/pages/`
**Why:** Tokens and components don't tell someone how to build a complete page.

**Patterns to document:**

**Onboarding flow**
Content: Linear stepper, one question per step, progress indicator, back navigation. Minimal chrome — no sidebar, no footer. Primary CTA at bottom.
Placeholder image: A 3-step onboarding wireframe showing vehicle details → personal info → quote.

**Checkout / purchase**
Content: Summary on right (desktop) or top (mobile), form on left/below, trust signals near CTA, total always visible.
Placeholder image: Desktop and mobile checkout wireframes with annotation.

**Policy detail**
Content: Sidebar nav + content. Policy summary at top, coverage details, documents, claims history. Action bar with "Renew" and "File claim".
Placeholder image: A policy detail page wireframe.

**Empty state**
Content: Centred illustration (48px icon or spot illustration), headline, description, and a single CTA. Used when no data exists yet.
Placeholder image: An empty state screen showing "No claims yet" with illustration, description, and "Learn about claims" CTA.

**Error page**
Content: 404 and 500 patterns. Friendly headline, brief explanation (no technical jargon), link back to home or previous page.
Placeholder image: A 404 page design with ACKO personality.

**Settings**
Content: Grouped sections, toggle switches for preferences, save confirmation via toast. Use Sidebar + content layout.
Placeholder image: Settings page wireframe.

---

### 9. Getting Started

**Path:** `/getting-started/`
**Why:** New team members have no onboarding. This is the single most impactful page for adoption.

**Sections:**

**For designers**
Content: Step-by-step setup.
1. Install Euclid Circular B (link to font files or internal resource).
2. Connect to the Figma library (link).
3. Read About ACKO — the four traits (link).
4. Browse foundations — start with Colour and Typography.
5. Check Atoms and Molecules for component specs.

**For developers**
Content: Step-by-step setup.
1. Install the token package: `npm install @acko/tokens`.
2. Install component packages as needed: `npm install @acko/button @acko/card`.
3. Apply the theme: `<html data-theme="acko-light">`.
4. Reference the Storybook playground for live examples (link).

**For marketers and content**
Content:
1. Read About ACKO — personality constraints.
2. Read Brand Application — social, email, OOH guidelines.
3. Use the logo and template files (link).
4. Reference Voice & Tone for copy direction.

**Mental model**
Content: A visual showing the system architecture: Traits → Foundations → Components → Patterns → Screens. Everything flows from the four personality traits.
Placeholder image: A horizontal flow diagram: About ACKO (traits) → Foundations (colour, type, spacing…) → Atoms → Molecules → Page patterns → Shipped screens.

---

### 10. Resources Hub

**Path:** `/resources/`
**Why:** Tools and assets are scattered or missing. One hub to find everything.

**Sections:**

**Design tools**
- Figma library — link + version
- Figma token plugin — link
- Icon library (Figma) — link

**Development**
- Storybook playground — link to https://mo-fahiz.github.io/Acko-Design-system/
- npm packages — list with install commands
- Token package — `@acko/tokens` with setup instructions

**External systems**
- Motion system — link to https://acko-motion-system.vercel.app/
- Content design system — link to https://appuajt.github.io/acko-content-design-system/
- Design system playground — link to https://mo-fahiz.github.io/Acko-Design-system/

**Brand assets**
- Logo files (SVG, PNG, PDF)
- Presentation template
- Social media templates
- Email template

**Changelog** — link to existing changelog page

---

### 11. Do/Don't Galleries for Foundations

**Add to existing pages** — not new pages, but new sections within Colour, Typography, Spacing, Radii, Shadows.

**Colour do/don'ts**
Do: Use semantic tokens, not raw hex. Purple for primary actions, grey for secondary. Red/green/orange only for feedback.
Don't: Purple text on purple background. Using blue for CTAs. Custom colours not in the palette. Using colour alone to indicate state.
Placeholder image: 4 cards — correct feedback colours, incorrect custom blue CTA, correct purple CTA on white, incorrect purple text on purple-50.

**Typography do/don'ts**
Do: Use semantic styles (heading1, bodyMd). Sentence case for all UI text. Consistent weight usage.
Don't: ALL CAPS for body text. Mixing font weights randomly. Using Light (300) for body copy — it's for display only. Custom sizes not in the ramp.
Placeholder image: A card header showing correct (heading3 + bodyMd) vs incorrect (random sizes, mixed weights, all caps).

**Spacing do/don'ts**
Do: Use tokens from the scale. Consistent gaps within a group. Larger gaps between groups than within.
Don't: Eyeball spacing. Inconsistent padding within the same component type. Zero-padding content against edges.
Placeholder image: A card group with correct even spacing vs the same group with uneven, eyeballed gaps.

**Border radii do/don'ts**
Do: Pills for buttons and inputs. 20px for cards and dialogs. Nested inset rule (inner radius = outer - padding).
Don't: Sharp corners on primary actions. Mixing radius values on the same surface. Radius larger than half the element height (except pills).
Placeholder image: A card with correct nested radii vs a card where the inner element has a larger radius than the outer.

---

## Phase 3 — Makes it robust

---

### 12. Governance and Contribution

**Path:** `/resources/contributing/`

**Sections:**
- How to propose a new token, component, or pattern.
- The review checklist (accessibility, personality constraints, token compliance).
- Who owns what — design system team contacts.
- Versioning policy — when breaking changes ship, how to migrate.

---

### 13. Dark Mode Usage

**Path:** `/foundations/color/dark-mode/` or add as a section in Colour

**Sections:**
- When to use dark mode: focused contexts, video, dashboards, late-night flows.
- When NOT to use: dense form-heavy screens, document-reading contexts.
- User preference: respect system setting, provide manual toggle.
- Testing: every new surface must be verified in both themes.

---

### 14. Data Visualisation

**Path:** `/foundations/data-viz/`

**Sections:**
- Chart colour palette (subset of brand palette, sequential and categorical).
- Typography in charts (label sizes, axis formatting).
- Accessibility: colour-blind-safe palette, pattern fills as alternatives.
- Chart types and when to use each.
- Do/Don't: truncated axes, 3D charts, pie charts above 5 segments.

Placeholder image: A set of ACKO-branded charts — bar, line, donut — using the approved palette.

---

### 15. Email and Notification Design

**Path:** `/patterns/email/`

**Sections:**
- Email header: ACKO logo, max-width 600px.
- Type stack: system font fallback (Arial, Helvetica) since Euclid won't load in most email clients. Use Euclid in web-rendered emails only.
- CTA button: purple pill, 48px height, 200px min width, centred.
- Footer: legal text, unsubscribe link, IRDAI registration.
- Notification templates: transactional (purchase confirmation), lifecycle (renewal reminder), support (claim update).

Placeholder image: Three email templates — transactional, lifecycle, support — showing header, body, CTA, footer.

---

### 16. Illustration Style

**Path:** `/foundations/illustration/`

**Sections:**
- Style: flat, geometric, rounded forms. Uses brand purple as accent. Limited palette (purple + greys + one spot colour per illustration).
- Sizes: spot illustrations (48–96px, inline), hero illustrations (full-width, landing pages), empty states (centred, 120–200px).
- Tone: optimistic, clear, never cartoonish or overly detailed.
- Do/Don't: consistent line weight, no drop shadows, no gradients on strokes.

Placeholder image: A set of 6 spot illustrations (car, health, home, travel, shield, document) in the ACKO style.

---

## Placeholder Image Spec (for all pages)

Every placeholder image should follow this format in the HTML:

```html
<div class="placeholder-image">
  <div class="placeholder-inner">
    <svg><!-- simple icon --></svg>
    <p class="placeholder-label">[Description of what the final image shows]</p>
  </div>
</div>
```

Style: light purple background (purple-50), dashed border (purple-200), centred icon and description text. This makes it clear to anyone viewing the site that the image is pending, while the description tells the team exactly what to produce.

When the final image is ready, replace the placeholder div with an `<img>` tag.

---

## Summary

| Phase | Pages | New pages | Expanded pages |
|-------|-------|-----------|----------------|
| 1 | Logo, Layout, CTA Hierarchy, Brand Application, Imagery, Iconography | 4 | 2 |
| 2 | Molecule specs (6 priority), Page patterns (6), Getting Started, Resources, Foundation do/don'ts | 3 | 8+ |
| 3 | Governance, Dark mode, Data viz, Email/notification, Illustration | 4 | 1 |

Total: ~11 new pages, ~11 expanded pages, 6 priority molecule detail pages, 6 page-level pattern templates.
