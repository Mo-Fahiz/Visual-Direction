/**
 * Colour values for the Foundations → Colour docs.
 * Primitives mirror Skills/colours-primitive.md; semantics mirror colours-semantic.mdc.
 */

import {
  type Hex,
  chromaticPrimitiveRamps,
  greyPrimitives,
  purplePrimitives,
  primitiveHex,
} from "./primitive-colors";

export type { Hex };

export type Ramp = {
  name: string;
  description?: string;
  steps: { token: string; hex: Hex }[];
};

export const greyRamp: Ramp = greyPrimitives;
export const purpleRamp: Ramp = purplePrimitives;

export const redRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Red")!;
export const greenRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Green")!;
export const blueRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Blue")!;
export const orangeRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Orange")!;
export const yellowRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Yellow")!;
export const amberRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Amber")!;
export const cyanRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Cyan")!;
export const indigoRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Indigo")!;
export const limeRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Lime")!;
export const pinkRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Pink")!;
export const tealRamp: Ramp = chromaticPrimitiveRamps.find((r) => r.name === "Teal")!;

export const allChromaticRamps: Ramp[] = chromaticPrimitiveRamps;

export { primitiveHex };

/* -------------------------------------------------------------------------- */
/*  Semantic — live preview values for the docs site                           */
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
      { token: "--color-primary", role: "Main CTA fill", light: primitiveHex("purple-600"), dark: primitiveHex("purple-500") },
      { token: "--color-primary-hover", role: "Hover state", light: primitiveHex("purple-700"), dark: primitiveHex("purple-400") },
      { token: "--color-primary-active", role: "Pressed state", light: primitiveHex("purple-800"), dark: primitiveHex("purple-300") },
      { token: "--color-primary-muted", role: "Soft border hints", light: primitiveHex("purple-400"), dark: primitiveHex("purple-600") },
      { token: "--color-primary-subtle", role: "Tinted backgrounds", light: primitiveHex("purple-100"), dark: primitiveHex("purple-900") },
      { token: "--color-primary-ring", role: "Focus ring", light: primitiveHex("purple-200"), dark: primitiveHex("purple-800") },
      { token: "--color-on-primary", role: "Text on primary bg", light: "#FFFFFF", dark: "#FFFFFF" },
    ],
  },
  {
    id: "surface",
    name: "Surfaces",
    description: "Page, raised, and overlay backgrounds.",
    tokens: [
      { token: "--color-surface", role: "Page background", light: primitiveHex("grey-100"), dark: primitiveHex("grey-750") },
      { token: "--color-surface-raised", role: "Elevated surfaces", light: primitiveHex("grey-100"), dark: primitiveHex("grey-700") },
      { token: "--color-surface-raised-hover", role: "Hovered raised", light: primitiveHex("grey-200"), dark: primitiveHex("grey-650") },
      { token: "--color-surface-raised-active", role: "Pressed raised", light: primitiveHex("grey-300"), dark: primitiveHex("grey-600") },
    ],
  },
  {
    id: "text",
    name: "Text",
    description: "Headings, body, supporting, brand and feedback text.",
    tokens: [
      { token: "--color-text-primary", role: "Headings & values", light: primitiveHex("grey-800"), dark: primitiveHex("grey-50") },
      { token: "--color-text-default", role: "Labels & body", light: primitiveHex("grey-700"), dark: primitiveHex("grey-100") },
      { token: "--color-text-supporting", role: "Supporting text", light: primitiveHex("grey-550"), dark: primitiveHex("grey-200") },
      { token: "--color-text-secondary", role: "Subtext / helpers", light: primitiveHex("grey-450"), dark: primitiveHex("grey-350") },
      { token: "--color-text-disabled", role: "Disabled text", light: primitiveHex("grey-300"), dark: primitiveHex("grey-450") },
      { token: "--color-text-brand", role: "Brand emphasis / inline links", light: primitiveHex("purple-600"), dark: primitiveHex("purple-500") },
      { token: "--color-text-error", role: "Error messages", light: primitiveHex("red-700"), dark: primitiveHex("red-400") },
      { token: "--color-text-success", role: "Success messages", light: primitiveHex("green-700"), dark: primitiveHex("green-400") },
    ],
  },
  {
    id: "border",
    name: "Borders",
    description: "Dividers, rules, and outlines.",
    tokens: [
      { token: "--color-border", role: "Default border", light: primitiveHex("grey-300"), dark: primitiveHex("grey-600") },
      { token: "--color-border-strong", role: "Hover / filled border", light: primitiveHex("grey-450"), dark: primitiveHex("grey-550") },
      { token: "--color-border-subtle", role: "Faint dividers", light: primitiveHex("grey-200"), dark: primitiveHex("grey-650") },
    ],
  },
  {
    id: "feedback-error",
    name: "Feedback — Error",
    description: "Validation, destructive, and recovery contexts.",
    tokens: [
      { token: "--color-error", role: "Solid error fill", light: primitiveHex("red-600"), dark: primitiveHex("red-600") },
      { token: "--color-error-text", role: "Error text", light: primitiveHex("red-700"), dark: primitiveHex("red-400") },
      { token: "--color-error-subtle", role: "Tinted bg", light: primitiveHex("red-100"), dark: primitiveHex("red-950") },
      { token: "--color-error-border", role: "Error border", light: primitiveHex("red-200"), dark: primitiveHex("red-800") },
    ],
  },
  {
    id: "feedback-success",
    name: "Feedback — Success",
    description: "Confirmation and resolved states.",
    tokens: [
      { token: "--color-success", role: "Solid success fill", light: primitiveHex("green-600"), dark: primitiveHex("green-500") },
      { token: "--color-success-text", role: "Success text", light: primitiveHex("green-700"), dark: primitiveHex("green-400") },
      { token: "--color-success-subtle", role: "Tinted bg", light: primitiveHex("green-100"), dark: primitiveHex("green-950") },
      { token: "--color-success-border", role: "Success border", light: primitiveHex("green-200"), dark: primitiveHex("green-800") },
    ],
  },
  {
    id: "feedback-warning",
    name: "Feedback — Warning",
    description: "Cautionary, non-blocking states.",
    tokens: [
      { token: "--color-warning", role: "Solid warning fill", light: primitiveHex("orange-600"), dark: primitiveHex("orange-500") },
      { token: "--color-warning-text", role: "Warning text", light: primitiveHex("orange-700"), dark: primitiveHex("orange-400") },
      { token: "--color-warning-subtle", role: "Tinted bg", light: primitiveHex("orange-50"), dark: primitiveHex("orange-950") },
      { token: "--color-warning-border", role: "Warning border", light: primitiveHex("orange-100"), dark: primitiveHex("orange-800") },
    ],
  },
  {
    id: "feedback-info",
    name: "Feedback — Info (purple, not blue)",
    description: "Informational notices reuse brand purple — never blue.",
    tokens: [
      { token: "--color-info", role: "Solid info fill", light: primitiveHex("purple-600"), dark: primitiveHex("purple-500") },
      { token: "--color-info-text", role: "Info text", light: primitiveHex("purple-700"), dark: primitiveHex("purple-400") },
      { token: "--color-info-subtle", role: "Tinted bg", light: primitiveHex("purple-100"), dark: primitiveHex("purple-950") },
      { token: "--color-info-border", role: "Info border", light: primitiveHex("purple-200"), dark: primitiveHex("purple-800") },
    ],
  },
];

export const themes = [
  {
    name: "ACKO Light",
    primaryBackgroundLabel: "Cream / white surface",
    token: "--color-surface",
    light: primitiveHex("grey-100"),
  },
  {
    name: "ACKO Dark",
    primaryBackgroundLabel: "Inked surface",
    token: "--color-surface",
    light: primitiveHex("grey-750"),
  },
];

export const layeringModel = {
  light: [
    { label: "Surface (page)", hex: primitiveHex("grey-100"), textHex: primitiveHex("grey-800") },
    { label: "Card / Layer 01", hex: primitiveHex("grey-White"), textHex: primitiveHex("grey-800") },
    { label: "Layer 02", hex: primitiveHex("grey-50"), textHex: primitiveHex("grey-800") },
    { label: "Layer 03", hex: primitiveHex("grey-100"), textHex: primitiveHex("grey-800") },
  ],
  dark: [
    { label: "Surface (page)", hex: primitiveHex("grey-750"), textHex: primitiveHex("grey-50") },
    { label: "Card / Layer 01", hex: primitiveHex("grey-700"), textHex: primitiveHex("grey-50") },
    { label: "Layer 02", hex: primitiveHex("grey-650"), textHex: primitiveHex("grey-50") },
    { label: "Layer 03", hex: primitiveHex("grey-600"), textHex: primitiveHex("grey-50") },
  ],
};

/** Resolved light-theme values for badge + alert docs (matches @acko/css tokens). */
export const badgeSolidLight = {
  purple: {
    from: primitiveHex("purple-200"),
    to: primitiveHex("purple-100"),
    border: primitiveHex("purple-200"),
    text: primitiveHex("purple-800"),
  },
  green: {
    from: primitiveHex("lime-200"),
    to: primitiveHex("lime-100"),
    border: primitiveHex("lime-200"),
    text: primitiveHex("green-800"),
  },
  blue: {
    from: primitiveHex("blue-200"),
    to: primitiveHex("blue-100"),
    border: primitiveHex("blue-200"),
    text: primitiveHex("blue-800"),
  },
  orange: {
    from: primitiveHex("orange-200"),
    to: primitiveHex("orange-100"),
    border: primitiveHex("orange-200"),
    text: primitiveHex("orange-800"),
  },
  gray: {
    from: primitiveHex("grey-200"),
    to: primitiveHex("grey-100"),
    border: primitiveHex("grey-200"),
    text: primitiveHex("grey-600"),
  },
} as const;

export const alertLight = {
  info: {
    bg: primitiveHex("purple-100"),
    border: primitiveHex("purple-200"),
    text: primitiveHex("purple-700"),
  },
  success: {
    bg: primitiveHex("green-100"),
    border: primitiveHex("green-200"),
    text: primitiveHex("green-700"),
  },
  warning: {
    bg: primitiveHex("orange-50"),
    border: primitiveHex("orange-100"),
    text: primitiveHex("orange-700"),
  },
  error: {
    bg: primitiveHex("red-100"),
    border: primitiveHex("red-200"),
    text: primitiveHex("red-700"),
  },
} as const;

export const themePreview = {
  light: {
    surface: primitiveHex("grey-100"),
    card: primitiveHex("grey-White"),
    textPrimary: primitiveHex("grey-800"),
    textSecondary: primitiveHex("grey-450"),
    primary: primitiveHex("purple-600"),
    onPrimary: "#FFFFFF" as Hex,
    border: primitiveHex("grey-200"),
  },
  dark: {
    surface: primitiveHex("grey-750"),
    card: primitiveHex("grey-700"),
    textPrimary: primitiveHex("grey-50"),
    textSecondary: primitiveHex("grey-350"),
    primary: primitiveHex("purple-500"),
    onPrimary: "#FFFFFF" as Hex,
    border: primitiveHex("grey-600"),
  },
};
