/**
 * ACKO typography — aligned with Skills/typography.mdc.
 * Used by Foundation /typography tab routes for tables and live specimens.
 */

export type SizeStep = {
  step: number;
  sizePx: number;
  linePx: number;
  tokenSize: string;
  tokenLine: string;
  tailwindSize: string;
  tailwindLine: string;
};

/** 15-step size ramp (portable across platforms). */
export const sizeRamp: SizeStep[] = [
  { step: 1, sizePx: 10, linePx: 12, tokenSize: "--font-10-size", tokenLine: "--font-10-line", tailwindSize: "text-[10px]", tailwindLine: "leading-[12px]" },
  { step: 2, sizePx: 12, linePx: 16, tokenSize: "--font-12-size", tokenLine: "--font-12-line", tailwindSize: "text-xs", tailwindLine: "leading-[16px]" },
  { step: 3, sizePx: 14, linePx: 20, tokenSize: "--font-14-size", tokenLine: "--font-14-line", tailwindSize: "text-sm", tailwindLine: "leading-[20px]" },
  { step: 4, sizePx: 16, linePx: 24, tokenSize: "--font-16-size", tokenLine: "--font-16-line", tailwindSize: "text-base", tailwindLine: "leading-[24px]" },
  { step: 5, sizePx: 18, linePx: 24, tokenSize: "--font-18-size", tokenLine: "--font-18-line", tailwindSize: "text-lg", tailwindLine: "leading-[24px]" },
  { step: 6, sizePx: 20, linePx: 28, tokenSize: "--font-20-size", tokenLine: "--font-20-line", tailwindSize: "text-xl", tailwindLine: "leading-[28px]" },
  { step: 7, sizePx: 24, linePx: 32, tokenSize: "--font-24-size", tokenLine: "--font-24-line", tailwindSize: "text-2xl", tailwindLine: "leading-[32px]" },
  { step: 8, sizePx: 30, linePx: 36, tokenSize: "--font-30-size", tokenLine: "--font-30-line", tailwindSize: "text-[30px]", tailwindLine: "leading-[36px]" },
  { step: 9, sizePx: 36, linePx: 44, tokenSize: "--font-36-size", tokenLine: "--font-36-line", tailwindSize: "text-[36px]", tailwindLine: "leading-[44px]" },
  { step: 10, sizePx: 48, linePx: 56, tokenSize: "--font-48-size", tokenLine: "--font-48-line", tailwindSize: "text-[48px]", tailwindLine: "leading-[56px]" },
  { step: 11, sizePx: 54, linePx: 64, tokenSize: "--font-54-size", tokenLine: "--font-54-line", tailwindSize: "text-[54px]", tailwindLine: "leading-[64px]" },
  { step: 12, sizePx: 60, linePx: 72, tokenSize: "--font-60-size", tokenLine: "--font-60-line", tailwindSize: "text-[60px]", tailwindLine: "leading-[72px]" },
  { step: 13, sizePx: 72, linePx: 80, tokenSize: "--font-72-size", tokenLine: "--font-72-line", tailwindSize: "text-[72px]", tailwindLine: "leading-[80px]" },
  { step: 14, sizePx: 96, linePx: 108, tokenSize: "--font-96-size", tokenLine: "--font-96-line", tailwindSize: "text-[96px]", tailwindLine: "leading-[108px]" },
  { step: 15, sizePx: 128, linePx: 140, tokenSize: "--font-128-size", tokenLine: "--font-128-line", tailwindSize: "text-[128px]", tailwindLine: "leading-[140px]" },
];

export type SemanticTypeStyle = {
  id: string;
  name: string;
  /** CSS custom property base, e.g. --font-heading-lg */
  tokenBase: string;
  description: string;
  sizePx: number;
  linePx: number;
  letterSpacingPx: number;
  defaultWeight: 400 | 500 | 700;
  weightLabel: string;
  /** Tailwind + arbitrary values for the live specimen */
  className: string;
  sample: string;
  group: "Display" | "Heading" | "Body" | "Label & utility";
};

export const semanticTypeStyles: SemanticTypeStyle[] = [
  { id: "display-xl", name: "display-xl", group: "Display", tokenBase: "--font-display-xl", description: "Largest marketing / hero display.", sizePx: 72, linePx: 80, letterSpacingPx: -2, defaultWeight: 700, weightLabel: "Bold 700", className: "text-[72px] leading-[80px] font-bold tracking-[-0.02em]", sample: "Insurance that respects you" },
  { id: "display-lg", name: "display-lg", group: "Display", tokenBase: "--font-display-lg", description: "Large display, campaign headlines.", sizePx: 60, linePx: 72, letterSpacingPx: -1.5, defaultWeight: 700, weightLabel: "Bold 700", className: "text-[60px] leading-[72px] font-bold tracking-[-0.015em]", sample: "Clear over clever" },
  { id: "display-md", name: "display-md", group: "Display", tokenBase: "--font-display-md", description: "Section heroes, key moments.", sizePx: 48, linePx: 56, letterSpacingPx: -1, defaultWeight: 700, weightLabel: "Bold 700", className: "text-[48px] leading-[56px] font-bold tracking-[-0.01em]", sample: "Grounded warmth" },
  { id: "display-sm", name: "display-sm", group: "Display", tokenBase: "--font-display-sm", description: "Smaller display, sub-hero.", sizePx: 36, linePx: 44, letterSpacingPx: -0.5, defaultWeight: 500, weightLabel: "Medium 500", className: "text-[36px] leading-[44px] font-medium tracking-[-0.005em]", sample: "Effortless by default" },
  { id: "heading-xl", name: "heading-xl", group: "Heading", tokenBase: "--font-heading-xl", description: "Page title, major section.", sizePx: 30, linePx: 36, letterSpacingPx: -0.5, defaultWeight: 500, weightLabel: "Medium 500", className: "text-[30px] leading-[36px] font-medium tracking-[-0.005em]", sample: "Policy details" },
  { id: "heading-lg", name: "heading-lg", group: "Heading", tokenBase: "--font-heading-lg", description: "Section headers, card titles.", sizePx: 24, linePx: 32, letterSpacingPx: -0.3, defaultWeight: 500, weightLabel: "Medium 500", className: "text-2xl font-medium leading-[32px] tracking-[-0.003em]", sample: "What's covered" },
  { id: "heading-md", name: "heading-md", group: "Heading", tokenBase: "--font-heading-md", description: "Subsections, list group titles.", sizePx: 20, linePx: 28, letterSpacingPx: -0.2, defaultWeight: 500, weightLabel: "Medium 500", className: "text-xl font-medium leading-[28px] tracking-[-0.002em]", sample: "Add-ons you can include" },
  { id: "heading-sm", name: "heading-sm", group: "Heading", tokenBase: "--font-heading-sm", description: "Small headings, row titles.", sizePx: 18, linePx: 24, letterSpacingPx: 0, defaultWeight: 500, weightLabel: "Medium 500", className: "text-lg font-medium leading-6", sample: "Premium summary" },
  { id: "body-lg", name: "body-lg", group: "Body", tokenBase: "--font-body-lg", description: "Lead paragraphs, intro copy.", sizePx: 18, linePx: 24, letterSpacingPx: 0, defaultWeight: 400, weightLabel: "Regular 400", className: "text-lg font-normal leading-6", sample: "We use plain language so you always know what you're buying. No fine print that hides the story." },
  { id: "body-md", name: "body-md", group: "Body", tokenBase: "--font-body-md", description: "Default body, forms, long copy.", sizePx: 16, linePx: 24, letterSpacingPx: 0, defaultWeight: 400, weightLabel: "Regular 400", className: "text-base font-normal leading-6", sample: "Your policy renews on 12 Aug 2026. We'll remind you before payment is due." },
  { id: "body-sm", name: "body-sm", group: "Body", tokenBase: "--font-body-sm", description: "Dense UI, table cells, footnotes.", sizePx: 14, linePx: 20, letterSpacingPx: 0, defaultWeight: 400, weightLabel: "Regular 400", className: "text-sm font-normal leading-5", sample: "IDV is the maximum amount the insurer will pay in case of total loss." },
  { id: "label-lg", name: "label-lg", group: "Label & utility", tokenBase: "--font-label-lg", description: "Prominent labels, chip text.", sizePx: 14, linePx: 20, letterSpacingPx: 0.1, defaultWeight: 500, weightLabel: "Medium 500", className: "text-sm font-medium leading-5", sample: "Email address" },
  { id: "label-md", name: "label-md", group: "Label & utility", tokenBase: "--font-label-md", description: "Form labels, metadata keys.", sizePx: 12, linePx: 16, letterSpacingPx: 0.2, defaultWeight: 500, weightLabel: "Medium 500", className: "text-xs font-medium leading-4", sample: "Helper text" },
  { id: "label-sm", name: "label-sm", group: "Label & utility", tokenBase: "--font-label-sm", description: "Micro labels (use sparingly).", sizePx: 10, linePx: 12, letterSpacingPx: 0.3, defaultWeight: 500, weightLabel: "Medium 500", className: "text-[10px] font-medium leading-3", sample: "Optional" },
  { id: "caption", name: "caption", group: "Label & utility", tokenBase: "--font-caption", description: "Captions, legal one-liners, hints.", sizePx: 12, linePx: 16, letterSpacingPx: 0, defaultWeight: 400, weightLabel: "Regular 400", className: "text-xs font-normal leading-4", sample: "Last updated 27 Apr 2026" },
  { id: "overline", name: "overline", group: "Label & utility", tokenBase: "--font-overline", description: "Eyebrows, category kicker (often uppercase in layout).", sizePx: 10, linePx: 12, letterSpacingPx: 0.5, defaultWeight: 500, weightLabel: "Medium 500", className: "text-[10px] font-medium uppercase leading-3 tracking-wide", sample: "Foundation" },
];

export const styleVariantRows = [
  { name: "normal", weight: 400, italic: false, underline: false, tailwind: "font-normal" },
  { name: "medium", weight: 500, italic: false, underline: false, tailwind: "font-medium" },
  { name: "bold", weight: 700, italic: false, underline: false, tailwind: "font-bold" },
  { name: "italic", weight: 400, italic: true, underline: false, tailwind: "font-normal italic" },
  { name: "medium-italic", weight: 500, italic: true, underline: false, tailwind: "font-medium italic" },
] as const;

export const textColorIntents = [
  { value: "primary", token: "--color-text-primary", use: "Headings, main content" },
  { value: "secondary", token: "--color-text-secondary", use: "Captions, helpers" },
  { value: "brand", token: "--color-text-brand", use: "Links, brand emphasis" },
  { value: "error", token: "--color-text-error", use: "Error text" },
  { value: "success", token: "--color-text-success", use: "Success text" },
] as const;
