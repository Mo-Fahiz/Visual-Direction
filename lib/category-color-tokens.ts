// ---------------------------------------------------------------------------
// ACKO Design System — Category / Vertical Color Tokens
// ---------------------------------------------------------------------------
// Brand purple (#6841E6) is the constant primary. Each insurance vertical
// owns one accent color used in tightly scoped zones (heroes, badges, charts).
// ---------------------------------------------------------------------------

/* ------------------------------------------------------------------ */
/*  1. categoryColors — extended category data with dark-mode values  */
/* ------------------------------------------------------------------ */

export type CategoryColor = {
  id: "auto" | "health" | "life" | "travel";
  label: string;
  color: string;
  light: string;
  darkColor: string;
  darkSubtle: string;
  onColor: string;
};

export const categoryColors: CategoryColor[] = [
  { id: "auto",   label: "Auto",   color: "#F4A024", light: "#FFF8E7", darkColor: "#FFB84D", darkSubtle: "rgba(244, 160, 36, 0.08)",  onColor: "#000000" },
  { id: "health", label: "Health", color: "#EC5FAB", light: "#FDF2F8", darkColor: "#F082BF", darkSubtle: "rgba(236, 95, 171, 0.08)",  onColor: "#FFFFFF" },
  { id: "life",   label: "Life",   color: "#1EB7E7", light: "#EEFAFF", darkColor: "#4DCBF0", darkSubtle: "rgba(30, 183, 231, 0.08)",  onColor: "#000000" },
  { id: "travel", label: "Travel", color: "#55B94D", light: "#F3FFF2", darkColor: "#78CC72", darkSubtle: "rgba(85, 185, 77, 0.08)",   onColor: "#FFFFFF" },
];

/* ------------------------------------------------------------------ */
/*  2. allowedZones & forbiddenZones                                  */
/* ------------------------------------------------------------------ */

export type ColorZone = {
  zone: string;
  description: string;
};

export const allowedZones: ColorZone[] = [
  { zone: "Section/page hero backgrounds",   description: "Tinted backgrounds using the light variant, not fully saturated" },
  { zone: "Icon badges and category indicators", description: "Filled or outlined badges identifying the vertical" },
  { zone: "Tags and chips",                   description: "Category labels in tag/chip components" },
  { zone: "Illustration accents",             description: "Secondary color in illustrations alongside purple" },
  { zone: "Charts and data visualization",    description: "Primary data series color per vertical" },
  { zone: "Marketing headline text",          description: "Per the distribution band: 20% headline uses category color" },
  { zone: "Progress indicators",              description: "Within a vertical-specific flow only" },
];

export const forbiddenZones: ColorZone[] = [
  { zone: "Primary CTAs",           description: "Always purple (--color-primary). Category color never replaces the CTA." },
  { zone: "System feedback",        description: "Error (red), success (green), warning (orange) — never overridden by category." },
  { zone: "Navigation and chrome",  description: "Sidebar, header, breadcrumbs stay neutral/purple." },
  { zone: "Body text",              description: "Always grey semantic tokens (--color-text-*)." },
  { zone: "Focus rings",            description: "Always purple (--color-primary-ring)." },
  { zone: "Form inputs",            description: "Borders and backgrounds stay neutral/purple semantic tokens." },
];

/* ------------------------------------------------------------------ */
/*  3. blendingRules                                                  */
/* ------------------------------------------------------------------ */

export type BlendingRule = {
  scenario: string;
  rule: string;
  allowed: boolean;
};

export const blendingRules: BlendingRule[] = [
  { scenario: "CTA (purple) + category accent header",              rule: "Standard pattern. Purple CTA button below category-tinted hero section.", allowed: true },
  { scenario: "Purple navigation + category-tinted hero",           rule: "Hero uses category light background; nav stays neutral.",                 allowed: true },
  { scenario: "Purple link text + category icon badge",             rule: "Side by side is fine — each serves a different role.",                    allowed: true },
  { scenario: "Category background with purple text overlay",       rule: "Not allowed. Use white or dark text on category backgrounds.",            allowed: false },
  { scenario: "Gradient between purple and category color in product UI", rule: "Not allowed in product. Gradients blur the token boundary.",       allowed: false },
  { scenario: "Gradient in marketing materials",                    rule: "Allowed as subtle background wash only. Always 70% purple → 30% category.", allowed: true },
  { scenario: "Two vertical colors on the same screen",             rule: "Never. Each screen belongs to one vertical at most.",                    allowed: false },
];

/* ------------------------------------------------------------------ */
/*  4. distributionBand                                               */
/* ------------------------------------------------------------------ */

export type DistributionSlot = {
  slot: string;
  percentage: string;
  description: string;
};

export const distributionBand: DistributionSlot[] = [
  { slot: "Background",       percentage: "40–60%", description: "Neutral surface (--color-surface or white)" },
  { slot: "Headline / accent", percentage: "20%",   description: "Category color — changes per vertical" },
  { slot: "Body",             percentage: "10%",    description: "Dark grey (--color-text-primary)" },
  { slot: "CTA",              percentage: "10%",    description: "Brand purple (--color-primary) — constant across all verticals" },
];
