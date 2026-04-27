/**
 * Source of truth for ACKO color values rendered on the Foundations → Color page.
 * Mirrors `Skills/colors-primitive (1).mdc` and `Skills/colors-semantic (1).mdc`.
 *
 * Components in product code must NEVER reference primitives directly — they go
 * through semantic CSS custom properties. These values exist only so the docs
 * site can render live swatches.
 */

export type Hex = `#${string}`;

export type Ramp = {
  name: string;
  description?: string;
  steps: { token: string; hex: Hex }[];
};

/* -------------------------------------------------------------------------- */
/*  Primitives                                                                 */
/* -------------------------------------------------------------------------- */

export const greyRamp: Ramp = {
  name: "Grey",
  description: "Extended 17-step neutral. Layer 1.",
  steps: [
    { token: "--grey-white", hex: "#FFFFFF" },
    { token: "--grey-50", hex: "#FBFBFB" },
    { token: "--grey-100", hex: "#F5F5F5" },
    { token: "--grey-150", hex: "#EBEBEB" },
    { token: "--grey-200", hex: "#E0E0E1" },
    { token: "--grey-250", hex: "#CCCCCD" },
    { token: "--grey-300", hex: "#B7B7B8" },
    { token: "--grey-350", hex: "#8F8E92" },
    { token: "--grey-400", hex: "#7A7B7D" },
    { token: "--grey-450", hex: "#605F63" },
    { token: "--grey-500", hex: "#474649" },
    { token: "--grey-550", hex: "#333333" },
    { token: "--grey-600", hex: "#242324" },
    { token: "--grey-650", hex: "#19191A" },
    { token: "--grey-700", hex: "#141414" },
    { token: "--grey-750", hex: "#0F0F10" },
    { token: "--grey-800", hex: "#0A0A0A" },
    { token: "--grey-black", hex: "#000000" },
  ],
};

export const purpleRamp: Ramp = {
  name: "Purple",
  description: "Brand. Maps to --color-primary.",
  steps: [
    { token: "--purple-50", hex: "#F5F3FF" },
    { token: "--purple-100", hex: "#EAEAFD" },
    { token: "--purple-200", hex: "#D9D8FC" },
    { token: "--purple-300", hex: "#BDB8FA" },
    { token: "--purple-400", hex: "#9B8FF6" },
    { token: "--purple-500", hex: "#7A62F0" },
    { token: "--purple-600", hex: "#6841E6" },
    { token: "--purple-700", hex: "#582FD2" },
    { token: "--purple-800", hex: "#4E29BB" },
    { token: "--purple-900", hex: "#3E2290" },
    { token: "--purple-950", hex: "#241362" },
  ],
};

export const redRamp: Ramp = {
  name: "Red",
  description: "Error / destructive feedback.",
  steps: [
    { token: "--red-50", hex: "#FEF2F2" },
    { token: "--red-100", hex: "#FEE2E2" },
    { token: "--red-200", hex: "#FECACA" },
    { token: "--red-300", hex: "#FCA5A5" },
    { token: "--red-400", hex: "#F87171" },
    { token: "--red-500", hex: "#EF4444" },
    { token: "--red-600", hex: "#DC2626" },
    { token: "--red-700", hex: "#B91C1C" },
    { token: "--red-800", hex: "#991B1B" },
    { token: "--red-900", hex: "#7F1D1D" },
    { token: "--red-950", hex: "#450A0A" },
  ],
};

export const greenRamp: Ramp = {
  name: "Green",
  description: "Success feedback.",
  steps: [
    { token: "--green-50", hex: "#F0FDF4" },
    { token: "--green-100", hex: "#DCFCE7" },
    { token: "--green-200", hex: "#BBF7D0" },
    { token: "--green-300", hex: "#86EFAC" },
    { token: "--green-400", hex: "#4ADE80" },
    { token: "--green-500", hex: "#22C55E" },
    { token: "--green-600", hex: "#16A34A" },
    { token: "--green-700", hex: "#15803D" },
    { token: "--green-800", hex: "#166534" },
    { token: "--green-900", hex: "#14532D" },
    { token: "--green-950", hex: "#052E16" },
  ],
};

export const blueRamp: Ramp = {
  name: "Blue",
  description: "Reserved for inline `link` only — not info.",
  steps: [
    { token: "--blue-50", hex: "#EFF6FF" },
    { token: "--blue-100", hex: "#DBEAFE" },
    { token: "--blue-200", hex: "#BFDBFE" },
    { token: "--blue-300", hex: "#93C5FD" },
    { token: "--blue-400", hex: "#60A5FA" },
    { token: "--blue-500", hex: "#3B82F6" },
    { token: "--blue-600", hex: "#2563EB" },
    { token: "--blue-700", hex: "#1D4ED8" },
    { token: "--blue-800", hex: "#1E40AF" },
    { token: "--blue-900", hex: "#1E3A8A" },
    { token: "--blue-950", hex: "#172554" },
  ],
};

export const orangeRamp: Ramp = {
  name: "Orange",
  description: "Warning feedback.",
  steps: [
    { token: "--orange-50", hex: "#FFF3E5" },
    { token: "--orange-100", hex: "#FFE5CC" },
    { token: "--orange-200", hex: "#FFCB9E" },
    { token: "--orange-300", hex: "#FFB56B" },
    { token: "--orange-400", hex: "#FFA85C" },
    { token: "--orange-500", hex: "#FF8D28" },
    { token: "--orange-600", hex: "#EB740A" },
    { token: "--orange-700", hex: "#B65C0C" },
    { token: "--orange-800", hex: "#8D4301" },
    { token: "--orange-900", hex: "#521F00" },
    { token: "--orange-950", hex: "#300212" },
  ],
};

export const yellowRamp: Ramp = {
  name: "Yellow",
  steps: [
    { token: "--yellow-50", hex: "#FEFAE8" },
    { token: "--yellow-100", hex: "#FEF9C3" },
    { token: "--yellow-200", hex: "#FEF08A" },
    { token: "--yellow-300", hex: "#FDE047" },
    { token: "--yellow-400", hex: "#FACC15" },
    { token: "--yellow-500", hex: "#EAB308" },
    { token: "--yellow-600", hex: "#D18C0A" },
    { token: "--yellow-700", hex: "#A76406" },
    { token: "--yellow-800", hex: "#875008" },
    { token: "--yellow-900", hex: "#62360F" },
    { token: "--yellow-950", hex: "#302012" },
  ],
};

export const limeRamp: Ramp = {
  name: "Lime",
  description: "Used by green badges (gradient + border).",
  steps: [
    { token: "--lime-50", hex: "#F4FDF0" },
    { token: "--lime-100", hex: "#E7FCDC" },
    { token: "--lime-200", hex: "#CFF7BB" },
    { token: "--lime-300", hex: "#A9EF86" },
    { token: "--lime-400", hex: "#7BDE4A" },
    { token: "--lime-500", hex: "#58C522" },
    { token: "--lime-600", hex: "#45A316" },
    { token: "--lime-700", hex: "#398015" },
    { token: "--lime-800", hex: "#306516" },
    { token: "--lime-900", hex: "#214210" },
    { token: "--lime-950", hex: "#132E05" },
  ],
};

export const tealRamp: Ramp = {
  name: "Teal",
  steps: [
    { token: "--teal-50", hex: "#EDFDFE" },
    { token: "--teal-100", hex: "#D1FBFC" },
    { token: "--teal-200", hex: "#A9EFFB" },
    { token: "--teal-300", hex: "#6FE2F1" },
    { token: "--teal-400", hex: "#29CEE7" },
    { token: "--teal-500", hex: "#17B6D3" },
    { token: "--teal-600", hex: "#0891B2" },
    { token: "--teal-700", hex: "#0E7490" },
    { token: "--teal-800", hex: "#155E75" },
    { token: "--teal-900", hex: "#164E63" },
    { token: "--teal-950", hex: "#083344" },
  ],
};

export const pinkRamp: Ramp = {
  name: "Pink",
  steps: [
    { token: "--pink-50", hex: "#FDF2F8" },
    { token: "--pink-100", hex: "#FCE7F3" },
    { token: "--pink-200", hex: "#FBCFE8" },
    { token: "--pink-300", hex: "#F9ABD4" },
    { token: "--pink-400", hex: "#F472B6" },
    { token: "--pink-500", hex: "#EC4899" },
    { token: "--pink-600", hex: "#DB2777" },
    { token: "--pink-700", hex: "#BE185D" },
    { token: "--pink-800", hex: "#9D174D" },
    { token: "--pink-900", hex: "#831843" },
    { token: "--pink-950", hex: "#500724" },
  ],
};

export const allChromaticRamps: Ramp[] = [
  purpleRamp,
  redRamp,
  greenRamp,
  blueRamp,
  orangeRamp,
  yellowRamp,
  limeRamp,
  tealRamp,
  pinkRamp,
];

/* -------------------------------------------------------------------------- */
/*  Semantic — only the values needed for live previews on this page.          */
/*  Both light + dark hex are resolved here so swatches render without theming */
/*  the entire app on this route.                                              */
/* -------------------------------------------------------------------------- */

export type SemanticToken = {
  token: string;
  role: string;
  light: Hex;
  dark: Hex;
};

export type SemanticGroup = {
  id: string;
  name: string;
  description: string;
  tokens: SemanticToken[];
};

export const semanticGroups: SemanticGroup[] = [
  {
    id: "primary",
    name: "Brand / Primary",
    description: "Main CTA, brand-tinted surfaces, and focus rings.",
    tokens: [
      { token: "--color-primary", role: "Main CTA fill", light: "#6841E6", dark: "#7A62F0" },
      { token: "--color-primary-hover", role: "Hover state", light: "#582FD2", dark: "#9B8FF6" },
      { token: "--color-primary-active", role: "Pressed state", light: "#4E29BB", dark: "#BDB8FA" },
      { token: "--color-primary-muted", role: "Soft border hints", light: "#9B8FF6", dark: "#6841E6" },
      { token: "--color-primary-subtle", role: "Tinted backgrounds", light: "#EAEAFD", dark: "#3E2290" },
      { token: "--color-primary-ring", role: "Focus ring", light: "#D9D8FC", dark: "#4E29BB" },
      { token: "--color-on-primary", role: "Text on primary bg", light: "#FFFFFF", dark: "#FFFFFF" },
    ],
  },
  {
    id: "surface",
    name: "Surfaces",
    description: "Page, raised, and overlay backgrounds.",
    tokens: [
      { token: "--color-surface", role: "Page background", light: "#F5F5F5", dark: "#0F0F10" },
      { token: "--color-surface-raised", role: "Elevated surfaces", light: "#F5F5F5", dark: "#141414" },
      { token: "--color-surface-raised-hover", role: "Hovered raised", light: "#E0E0E1", dark: "#19191A" },
      { token: "--color-surface-raised-active", role: "Pressed raised", light: "#B7B7B8", dark: "#242324" },
    ],
  },
  {
    id: "text",
    name: "Text",
    description: "Headings, body, supporting, brand and feedback text.",
    tokens: [
      { token: "--color-text-primary", role: "Headings & values", light: "#0A0A0A", dark: "#FBFBFB" },
      { token: "--color-text-default", role: "Labels & body", light: "#141414", dark: "#F5F5F5" },
      { token: "--color-text-supporting", role: "Supporting text", light: "#333333", dark: "#E0E0E1" },
      { token: "--color-text-secondary", role: "Subtext / helpers", light: "#605F63", dark: "#8F8E92" },
      { token: "--color-text-disabled", role: "Disabled text", light: "#B7B7B8", dark: "#605F63" },
      { token: "--color-text-brand", role: "Brand emphasis / inline links", light: "#6841E6", dark: "#7A62F0" },
      { token: "--color-text-error", role: "Error messages", light: "#B91C1C", dark: "#F87171" },
      { token: "--color-text-success", role: "Success messages", light: "#15803D", dark: "#4ADE80" },
    ],
  },
  {
    id: "border",
    name: "Borders",
    description: "Dividers, rules, and outlines.",
    tokens: [
      { token: "--color-border", role: "Default border", light: "#B7B7B8", dark: "#242324" },
      { token: "--color-border-strong", role: "Hover / filled border", light: "#605F63", dark: "#333333" },
      { token: "--color-border-subtle", role: "Faint dividers", light: "#E0E0E1", dark: "#19191A" },
    ],
  },
  {
    id: "feedback-error",
    name: "Feedback — Error",
    description: "Validation, destructive, and recovery contexts.",
    tokens: [
      { token: "--color-error", role: "Solid error fill", light: "#DC2626", dark: "#DC2626" },
      { token: "--color-error-text", role: "Error text", light: "#B91C1C", dark: "#F87171" },
      { token: "--color-error-subtle", role: "Tinted bg", light: "#FEE2E2", dark: "#450A0A" },
      { token: "--color-error-border", role: "Error border", light: "#FECACA", dark: "#991B1B" },
    ],
  },
  {
    id: "feedback-success",
    name: "Feedback — Success",
    description: "Confirmation and resolved states.",
    tokens: [
      { token: "--color-success", role: "Solid success fill", light: "#16A34A", dark: "#22C55E" },
      { token: "--color-success-text", role: "Success text", light: "#15803D", dark: "#4ADE80" },
      { token: "--color-success-subtle", role: "Tinted bg", light: "#DCFCE7", dark: "#052E16" },
      { token: "--color-success-border", role: "Success border", light: "#BBF7D0", dark: "#166534" },
    ],
  },
  {
    id: "feedback-warning",
    name: "Feedback — Warning",
    description: "Cautionary, non-blocking states.",
    tokens: [
      { token: "--color-warning", role: "Solid warning fill", light: "#EB740A", dark: "#FF8D28" },
      { token: "--color-warning-text", role: "Warning text", light: "#B65C0C", dark: "#FFA85C" },
      { token: "--color-warning-subtle", role: "Tinted bg", light: "#FFF3E5", dark: "#300212" },
      { token: "--color-warning-border", role: "Warning border", light: "#FFE5CC", dark: "#8D4301" },
    ],
  },
  {
    id: "feedback-info",
    name: "Feedback — Info (purple, not blue)",
    description: "Informational notices reuse the brand purple to stay on-brand.",
    tokens: [
      { token: "--color-info", role: "Solid info fill", light: "#6841E6", dark: "#7A62F0" },
      { token: "--color-info-text", role: "Info text", light: "#582FD2", dark: "#9B8FF6" },
      { token: "--color-info-subtle", role: "Tinted bg", light: "#EAEAFD", dark: "#241362" },
      { token: "--color-info-border", role: "Info border", light: "#D9D8FC", dark: "#4E29BB" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Theme summary — used by the "Themes" table on Overview tab.                */
/* -------------------------------------------------------------------------- */

export const themes = [
  {
    name: "ACKO Light",
    primaryBackgroundLabel: "Cream / White surface",
    token: "--color-surface",
    light: "#F5F5F5" as Hex,
  },
  {
    name: "ACKO Dark",
    primaryBackgroundLabel: "Inked surface",
    token: "--color-surface",
    light: "#0F0F10" as Hex,
  },
];

/* -------------------------------------------------------------------------- */
/*  Layering model — explicit cells per theme (matches Skills/Theme/*.mdc)     */
/* -------------------------------------------------------------------------- */

export const layeringModel = {
  light: [
    { label: "Surface (page)", hex: "#F5F5F5" as Hex, textHex: "#0A0A0A" },
    { label: "Card / Layer 01", hex: "#FFFFFF" as Hex, textHex: "#0A0A0A" },
    { label: "Layer 02", hex: "#FBFBFB" as Hex, textHex: "#0A0A0A" },
    { label: "Layer 03", hex: "#F5F5F5" as Hex, textHex: "#0A0A0A" },
  ],
  dark: [
    { label: "Surface (page)", hex: "#0F0F10" as Hex, textHex: "#FBFBFB" },
    { label: "Card / Layer 01", hex: "#141414" as Hex, textHex: "#FBFBFB" },
    { label: "Layer 02", hex: "#19191A" as Hex, textHex: "#FBFBFB" },
    { label: "Layer 03", hex: "#242324" as Hex, textHex: "#FBFBFB" },
  ],
};
