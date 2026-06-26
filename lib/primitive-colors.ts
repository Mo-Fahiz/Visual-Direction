/**
 * Layer 1 primitive palette — sourced from Skills/colours-primitive.md.
 * Components must never reference these directly; use semantic tokens instead.
 */

export type Hex = `#${string}`;

export type PrimitiveStep = { token: string; hex: Hex; alpha?: string };

export type PrimitiveRamp = {
  name: string;
  description?: string;
  steps: PrimitiveStep[];
};

export const greyPrimitives: PrimitiveRamp = {
  name: "Grey",
  description: "Extended neutral. Layer 1.",
  steps: [
    { token: "--grey-White", hex: "#FFFFFF" },
    { token: "--grey-Black", hex: "#000000" },
    { token: "--grey-50", hex: "#FAFAFA" },
    { token: "--grey-100", hex: "#F5F5F5" },
    { token: "--grey-150", hex: "#EFEFF0" },
    { token: "--grey-200", hex: "#DCDCDC" },
    { token: "--grey-250", hex: "#CCCBCD" },
    { token: "--grey-300", hex: "#B7B7B8" },
    { token: "--grey-350", hex: "#8F8E92" },
    { token: "--grey-400", hex: "#7A787D" },
    { token: "--grey-450", hex: "#605F63" },
    { token: "--grey-500", hex: "#474649" },
    { token: "--grey-550", hex: "#292829" },
    { token: "--grey-600", hex: "#1E1E1F" },
    { token: "--grey-650", hex: "#19191A" },
    { token: "--grey-700", hex: "#141414" },
    { token: "--grey-750", hex: "#0F0F10" },
    { token: "--grey-800", hex: "#0A0A0A" },
  ],
};

export const purplePrimitives: PrimitiveRamp = {
  name: "Purple",
  description: "Brand. Maps to --color-primary.",
  steps: [
    { token: "--purple-50", hex: "#F3F3FF" },
    { token: "--purple-100", hex: "#E1E0FE" },
    { token: "--purple-150", hex: "#D1CFFD" },
    { token: "--purple-200", hex: "#C1BDFC" },
    { token: "--purple-300", hex: "#A69CF9" },
    { token: "--purple-400", hex: "#8E7CF4" },
    { token: "--purple-500", hex: "#795DEE" },
    { token: "--purple-600", hex: "#6841E6" },
    { token: "--purple-700", hex: "#5A1FD4" },
    { token: "--purple-800", hex: "#3A1BA5" },
    { token: "--purple-850", hex: "#33198F" },
    { token: "--purple-900", hex: "#2B1678" },
    { token: "--purple-950", hex: "#241362" },
  ],
};

function scaleRamp(name: string, description: string | undefined, prefix: string, steps: Record<number, Hex>): PrimitiveRamp {
  return {
    name,
    description,
    steps: Object.entries(steps).map(([step, hex]) => ({
      token: `--${prefix}-${step}`,
      hex,
    })),
  };
}

export const redPrimitives = scaleRamp("Red", "Error / destructive feedback.", "red", {
  50: "#FEF2F2", 100: "#FEE2E2", 200: "#FECACA", 300: "#FCA5A5", 400: "#F87171",
  500: "#EF4444", 600: "#DC2626", 700: "#B91C1C", 800: "#991B1B", 900: "#7F1D1D", 950: "#450A0A",
});

export const greenPrimitives = scaleRamp("Green", "Success feedback.", "green", {
  50: "#F0FDF4", 100: "#DCFCE7", 200: "#BBF7D0", 300: "#86EFAC", 400: "#4ADE80",
  500: "#22C55E", 600: "#16A34A", 700: "#15803D", 800: "#166534", 900: "#14532D", 950: "#052E16",
});

export const bluePrimitives = scaleRamp("Blue", "Reserved for inline links only — not info.", "blue", {
  50: "#EFF6FF", 100: "#DBEAFE", 200: "#BFDBFE", 300: "#93C5FD", 400: "#60A5FA",
  500: "#3B82F6", 600: "#2563EB", 700: "#1D4ED8", 800: "#1E40AF", 900: "#1E3A8A", 950: "#172554",
});

export const orangePrimitives = scaleRamp("Orange", "Warning feedback.", "orange", {
  50: "#FFF3E5", 100: "#FFE5CC", 200: "#FFCB9E", 300: "#FFB56B", 400: "#FFA85C",
  500: "#FF8D28", 600: "#EB740A", 700: "#B65C0C", 800: "#8D4301", 900: "#521F00", 950: "#300212",
});

export const yellowPrimitives = scaleRamp("Yellow", undefined, "yellow", {
  50: "#FEFAE8", 100: "#FEF9C3", 200: "#FEF08A", 300: "#FDE047", 400: "#FACC15",
  500: "#EAB308", 600: "#D18C0A", 700: "#A76406", 800: "#875008", 900: "#62360F", 950: "#302012",
});

export const amberPrimitives = scaleRamp("Amber", undefined, "amber", {
  50: "#FFFBEB", 100: "#FEF3C7", 200: "#FDE68A", 300: "#FCD34D", 400: "#FBBF24",
  500: "#F59E0B", 600: "#D97706", 700: "#B45309", 800: "#92400E", 900: "#78350F", 950: "#451A03",
});

export const cyanPrimitives = scaleRamp("Cyan", undefined, "cyan", {
  50: "#ECFEFF", 100: "#CFFAFE", 200: "#A5F3FC", 300: "#67E8F9", 400: "#22D3EE",
  500: "#06B6D4", 600: "#0891B2", 700: "#0E7490", 800: "#155E75", 900: "#164E63", 950: "#083344",
});

export const indigoPrimitives = scaleRamp("Indigo", undefined, "indigo", {
  50: "#EEF2FF", 100: "#E0E7FF", 200: "#C7D2FE", 300: "#A5B4FC", 400: "#818CF8",
  500: "#6366F1", 600: "#4F46E5", 700: "#4338CA", 800: "#3730A3", 900: "#312E81", 950: "#1E1B4B",
});

export const limePrimitives = scaleRamp("Lime", "Used by green badges (gradient + border).", "lime", {
  50: "#F4FDF0", 100: "#E7FCDC", 200: "#CFF7BB", 300: "#A9EF86", 400: "#7BDE4A",
  500: "#58C522", 600: "#45A316", 700: "#398015", 800: "#306516", 900: "#214210", 950: "#132E05",
});

export const pinkPrimitives = scaleRamp("Pink", undefined, "pink", {
  50: "#FDF2F8", 100: "#FCE7F3", 200: "#FBCFE8", 300: "#F9ABD4", 400: "#F472B6",
  500: "#EC4899", 600: "#DB2777", 700: "#BE185D", 800: "#9D174D", 900: "#831843", 950: "#500724",
});

export const tealPrimitives = scaleRamp("Teal", undefined, "teal", {
  50: "#EDFDFE", 100: "#D1FBFC", 200: "#A9EFFB", 300: "#6FE2F1", 400: "#29CEE7",
  500: "#17B6D3", 600: "#0891B2", 700: "#0E7490", 800: "#155E75", 900: "#164E63", 950: "#083344",
});

export const chromaticPrimitiveRamps: PrimitiveRamp[] = [
  purplePrimitives,
  redPrimitives,
  greenPrimitives,
  bluePrimitives,
  orangePrimitives,
  yellowPrimitives,
  amberPrimitives,
  cyanPrimitives,
  indigoPrimitives,
  limePrimitives,
  pinkPrimitives,
  tealPrimitives,
];

/** Flat lookup: "purple-600" → "#6841E6" */
const flatMap = new Map<string, Hex>();
for (const ramp of [greyPrimitives, ...chromaticPrimitiveRamps]) {
  for (const step of ramp.steps) {
    const key = step.token.replace(/^--/, "");
    flatMap.set(key, step.hex);
  }
}

export function primitiveHex(key: string): Hex {
  const resolved = flatMap.get(key);
  if (!resolved) throw new Error(`Unknown primitive: ${key}`);
  return resolved;
}
