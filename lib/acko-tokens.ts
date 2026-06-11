/**
 * ACKO Design System — canonical token mirror.
 *
 * Pulled verbatim from the live token source:
 *   https://github.com/Mo-Fahiz/Acko-Design-system
 *   /packages/tokens/src/tokens.css
 *
 * This file is the single source of truth for token VALUES on the docs
 * site. Every page that visualises a colour, radius, shadow, type token,
 * etc. imports from here so the docs cannot drift from the library.
 */

/* ──────────────────────────────────────────────────────────────────
 * Colour primitives
 * ─────────────────────────────────────────────────────────────── */

export const purple = {
  50: "#F5F3FF", 100: "#EAEAFD", 200: "#D9D8FC", 300: "#BDB8FA",
  400: "#9B8FF6", 500: "#7A62F0", 600: "#6841E6", 700: "#582FD2",
  800: "#4E29BB", 900: "#3E2290", 950: "#241362",
} as const;

export const grey = {
  white: "#FFFFFF", 50: "#FBFBFB", 100: "#F5F5F5", 150: "#EBEBEB",
  200: "#E0E0E1", 250: "#CCCCCD", 300: "#B7B7B8", 350: "#8F8E92",
  400: "#7A7B7D", 450: "#605F63", 500: "#474649", 550: "#333333",
  600: "#242324", 650: "#19191A", 700: "#141414", 750: "#0F0F10",
  800: "#0A0A0A", black: "#000000",
} as const;

export const red = {
  50: "#FEF2F2", 100: "#FEE2E2", 200: "#FECACA", 300: "#FCA5A5",
  400: "#F87171", 500: "#EF4444", 600: "#DC2626", 700: "#B91C1C",
  800: "#991B1B", 900: "#7F1D1D", 950: "#450A0A",
} as const;

export const cerise = {
  100: "#FDF2F8", 200: "#FBCFE8", 300: "#F9ABD4", 400: "#F472B6",
  500: "#EC4899", 600: "#DB2777", 700: "#BE185D", 800: "#9D174D",
} as const;

export const blue = {
  50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#93C5FD",
  400: "#60A5FA", 500: "#3B82F6", 600: "#2563EB", 700: "#1D4ED8",
  800: "#1E40AF", 900: "#1E3A8A", 950: "#172554",
} as const;

export const green = {
  50: "#F0FDF4", 100: "#DCFCE7", 200: "#BBF7D0", 300: "#86EFAC",
  400: "#4ADE80", 500: "#22C55E", 600: "#16A34A", 700: "#15803D",
  800: "#166534", 900: "#14532D", 950: "#052E16",
} as const;

export const orange = {
  50: "#FFF3E5", 100: "#FFE5CC", 200: "#FFCB9E", 300: "#FFB56B",
  400: "#FFA85C", 500: "#FF8D28", 600: "#EB740A", 700: "#B65C0C",
  800: "#8D4301", 900: "#521F00", 950: "#300212",
} as const;

export const yellow = {
  50: "#FEFAE8", 100: "#FEF9C3", 200: "#FEF08A", 300: "#FDE047",
  400: "#FACC15", 500: "#EAB308", 600: "#D18C0A", 700: "#A76406",
  800: "#875008", 900: "#62360F", 950: "#302012",
} as const;

export const teal = {
  50: "#EDFDFE", 100: "#D1FBFC", 200: "#A9EFFB", 300: "#6FE2F1",
  400: "#29CEE7", 500: "#17B6D3", 600: "#0891B2", 700: "#0E7490",
  800: "#155E75", 900: "#164E63", 950: "#083344",
} as const;

export const lime = {
  50: "#F4FDF0", 100: "#E7FCDC", 200: "#CFF7BB", 300: "#A9EF86",
  400: "#7BDE4A", 500: "#58C522", 600: "#45A316", 700: "#398015",
  800: "#306516", 900: "#214210", 950: "#132E05",
} as const;

export const pink = {
  50: "#FDF2F8", 100: "#FCE7F3", 200: "#FBCFE8", 300: "#F9ABD4",
  400: "#F472B6", 500: "#EC4899", 600: "#DB2777", 700: "#BE185D",
  800: "#9D174D", 900: "#831843", 950: "#500724",
} as const;

export const primitives = {
  purple, grey, red, cerise, blue, green, orange, yellow, teal, lime, pink,
} as const;

/* ──────────────────────────────────────────────────────────────────
 * Semantic tokens (light theme — authoritative)
 * ─────────────────────────────────────────────────────────────── */

export const semanticLight = {
  // Primary
  primary: purple[600],
  primaryHover: purple[700],
  primaryActive: purple[800],
  primarySubtle: purple[100],
  primaryMuted: purple[400],
  primaryRing: purple[200],
  onPrimary: "#FFFFFF",

  // Surfaces
  surface: grey[100],
  surfaceRaised: grey[100],
  surfaceRaisedHover: grey[200],
  surfaceRaisedActive: grey[300],

  // Cards
  cardBg: grey[50],
  cardBorder: grey.white,
  cardElevatedBg: grey.white,
  cardDemotedBg: grey[150],

  // Text
  textPrimary: grey[800],
  textDefault: grey[700],
  textSupporting: grey[550],
  textSecondary: grey[450],
  textDisabled: grey[300],
  textBrand: purple[600],
  textStatic: grey.white,

  // Borders
  border: grey[300],
  borderStrong: grey[450],
  borderSubtle: grey[200],

  // Status
  success: green[600],
  successText: green[700],
  error: red[600],
  errorText: red[700],
  warning: orange[600],
  warningText: orange[700],
  info: purple[600],
  infoText: purple[700],
} as const;

/* ──────────────────────────────────────────────────────────────────
 * Border radius
 * ─────────────────────────────────────────────────────────────── */

export const radius = {
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  "2xl": "12px",
  "3xl": "16px",
  "4xl": "20px",      // cards, dialogs, drawers, toasts
  "5xl": "24px",      // large cards — mobile / mweb
  "6xl": "32px",      // large cards — desktop (≥ 1024px)
  full: "9999px",
  // Nested inset radii (outer 20px minus padding)
  insetSm: "8px",
  insetMd: "4px",
  insetLg: "0px",
} as const;

/* ──────────────────────────────────────────────────────────────────
 * Shadows (light theme)
 * ─────────────────────────────────────────────────────────────── */

export const shadows = {
  // Primitive elevation scale
  xs:    "0 1px 2px rgba(0,0,0,0.04)",
  sm:    "0 1px 4px rgba(0,0,0,0.06)",
  md:    "0 2px 8px rgba(0,0,0,0.06)",
  lg:    "0px 2px 16px 4px rgba(0,0,0,0.04)",
  xl:    "0 4px 24px rgba(0,0,0,0.10)",
  "2xl": "0 8px 32px rgba(0,0,0,0.14)",
  // Semantic aliases (map to primitives above)
  card:     "0px 2px 16px 4px rgba(0,0,0,0.04)",   // → lg
  dropdown: "0px 2px 16px 4px rgba(0,0,0,0.04)",   // → lg
  modal:    "0 4px 24px rgba(0,0,0,0.10)",           // → xl
  subtle:   "0 1px 2px rgba(0,0,0,0.04)",            // → xs
  // Component-specific
  btnInner:          "inset 0 1px 2px rgba(255,255,255,0.28)",
  btnHover:          "0 4px 8px rgba(0,0,0,0.08)",
  btnSecondaryHover: "inset 0 2px 4px rgba(255,255,255,0.48)",
  focusRing:         "0 0 0 3px var(--colorPrimaryRing)",
  nav:               "0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
} as const;

/* ──────────────────────────────────────────────────────────────────
 * Typography scale (Euclid Circular B)
 * ─────────────────────────────────────────────────────────────── */

type TypeStep = {
  size: number;
  line: number;
  spacing: number;
  weight: number;
};

export const typography = {
  // Display — weights per Skills/typography.md v2.0.1
  "display-xl": { size: 72, line: 80, spacing: -1.75, weight: 600 } as TypeStep, // semibold — primary hero h1
  "display-lg": { size: 60, line: 72, spacing: -1.5,  weight: 300 } as TypeStep, // light — section heroes
  "display-md": { size: 48, line: 56, spacing: -1,    weight: 400 } as TypeStep, // regular
  "display-sm": { size: 36, line: 44, spacing: -0.75, weight: 400 } as TypeStep, // regular
  // Headings
  "heading-xl": { size: 32, line: 40, spacing: -0.5, weight: 600 } as TypeStep,
  "heading-lg": { size: 24, line: 32, spacing: -0.3, weight: 600 } as TypeStep,
  "heading-md": { size: 20, line: 28, spacing: -0.2, weight: 600 } as TypeStep,
  "heading-sm": { size: 18, line: 24, spacing: 0, weight: 600 } as TypeStep,
  // Body
  "body-lg": { size: 18, line: 28, spacing: 0, weight: 400 } as TypeStep,
  "body-md": { size: 16, line: 24, spacing: 0, weight: 400 } as TypeStep,
  "body-sm": { size: 14, line: 20, spacing: 0, weight: 400 } as TypeStep,
  // Labels
  "label-lg": { size: 14, line: 20, spacing: 0.1, weight: 500 } as TypeStep,
  "label-md": { size: 12, line: 16, spacing: 0.2, weight: 500 } as TypeStep,
  "label-sm": { size: 11, line: 14, spacing: 0.3, weight: 500 } as TypeStep,
  caption: { size: 12, line: 16, spacing: 0, weight: 400 } as TypeStep,
  overline: { size: 11, line: 16, spacing: 0.5, weight: 600 } as TypeStep,
} as const;

/* ──────────────────────────────────────────────────────────────────
 * Easing curves
 * ─────────────────────────────────────────────────────────────── */

export const easing = {
  outQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  outCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  outQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
  inOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  inOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
} as const;

/* ──────────────────────────────────────────────────────────────────
 * Component spec — Button (sizes mirror @acko/css/button.css)
 * ─────────────────────────────────────────────────────────────── */

export const button = {
  sizes: {
    xs: { height: 32, paddingX: 16, fontPx: 12 },
    sm: { height: 40, paddingX: 16, fontPx: 14 },
    md: { height: 48, paddingX: 16, fontPx: 16 },
    lg: { height: 56, paddingX: 24, fontPx: 18 },
    xl: { height: 64, paddingX: 32, fontPx: 20 },
  },
  variants: [
    "primary", "secondary", "inverted", "ghost", "link", "danger",
  ] as const,
  radius: radius.full,
  transition: {
    background: "150ms ease",
    transform: "100ms ease",
    boxShadow: "150ms ease",
  },
  activeScale: 0.97,
} as const;

/* ──────────────────────────────────────────────────────────────────
 * Full component inventory — Atoms vs Molecules
 *
 * Reflects `/packages/*` in the live repo. Used by /ui-kit and /patterns
 * to document what exists and what doesn't.
 * ─────────────────────────────────────────────────────────────── */

export type ComponentEntry = {
  name: string;
  pkg: string;
  desc: string;
};

export const atoms: ComponentEntry[] = [
  { name: "Avatar", pkg: "@acko/avatar", desc: "User pictogram with size variants and fallback." },
  { name: "Badge", pkg: "@acko/badge", desc: "Solid/outline/dot status pills with gradient fills." },
  { name: "Button", pkg: "@acko/button", desc: "5 sizes × 6 variants. Pill shape, inner glow on primary." },
  { name: "Checkbox", pkg: "@acko/checkbox", desc: "Boolean selection with indeterminate state." },
  { name: "Label", pkg: "@acko/label", desc: "Form label primitive with size/weight scale." },
  { name: "Progress", pkg: "@acko/progress", desc: "Linear progress bar." },
  { name: "Radio", pkg: "@acko/radio", desc: "Single-selection control + card variant." },
  { name: "Separator", pkg: "@acko/separator", desc: "Horizontal / vertical hairline divider." },
  { name: "Skeleton", pkg: "@acko/skeleton", desc: "Loading placeholder shapes." },
  { name: "Slider", pkg: "@acko/slider", desc: "Single + range slider with thumb gradient." },
  { name: "Switch", pkg: "@acko/switch", desc: "Toggle control with on/off track." },
  { name: "Text input", pkg: "@acko/text-input", desc: "3 sizes, focus ring, error gradient + shake." },
  { name: "Textarea", pkg: "@acko/textarea", desc: "Multi-line text input." },
  { name: "Toggle", pkg: "@acko/toggle", desc: "Pressed/unpressed icon-or-text button." },
  { name: "Typography", pkg: "@acko/typography", desc: "Display, Heading, Body, Label, Caption, Overline." },
];

export const molecules: ComponentEntry[] = [
  { name: "Accordion", pkg: "@acko/accordion", desc: "Vertically stacked, collapsible content panels." },
  { name: "Alert", pkg: "@acko/alert", desc: "Info / success / warning / error banner." },
  { name: "Breadcrumb", pkg: "@acko/breadcrumb", desc: "Hierarchical trail with separator + current state." },
  { name: "Calendar", pkg: "@acko/calendar", desc: "Date / range picker grid." },
  { name: "Card", pkg: "@acko/card", desc: "4 variants — default, outline, elevated, demoted." },
  { name: "Dialog", pkg: "@acko/dialog", desc: "Modal panel with overlay, 5 size options." },
  { name: "Drawer", pkg: "@acko/drawer", desc: "Edge-anchored slide-in panel." },
  { name: "Dropdown", pkg: "@acko/dropdown", desc: "Trigger + menu of selectable items." },
  { name: "Field", pkg: "@acko/field", desc: "Composed input + label + hint + error." },
  { name: "Form", pkg: "@acko/form", desc: "Validation + submission wiring." },
  { name: "Input group", pkg: "@acko/input-group", desc: "Stacked input with adornments." },
  { name: "Navigation wizard", pkg: "@acko/navigation-wizard", desc: "Stepper with active/done/upcoming states." },
  { name: "OTP input", pkg: "@acko/otp-input", desc: "Per-cell code input with focus management." },
  { name: "Pagination", pkg: "@acko/pagination", desc: "Page navigation control." },
  { name: "Scroll area", pkg: "@acko/scroll-area", desc: "Custom-styled scrollbar container." },
  { name: "Table", pkg: "@acko/table", desc: "Data grid with sortable headers, row stripes, hover." },
  { name: "Tabs", pkg: "@acko/tabs", desc: "Underline / pill / navigation / enclosed variants." },
  { name: "Toast", pkg: "@acko/toast", desc: "Transient feedback bubble." },
  { name: "Tooltip", pkg: "@acko/tooltip", desc: "Hover/focus contextual hint." },
];
