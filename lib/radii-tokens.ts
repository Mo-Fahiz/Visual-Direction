/**
 * Border radii — same values as /foundations/radii (source for docs + orchestrator).
 */
export type RadiusToken = {
  name: string;
  valuePx: number | "full";
  valueLabel: string;
  use: string;
};

export const radiusTokens: RadiusToken[] = [
  { name: "sm", valuePx: 4, valueLabel: "4px", use: "Nested insets" },
  { name: "md", valuePx: 6, valueLabel: "6px", use: "Checkboxes" },
  { name: "lg", valuePx: 8, valueLabel: "8px", use: "Options, cells" },
  { name: "xl", valuePx: 10, valueLabel: "10px", use: "Tooltips" },
  { name: "2xl", valuePx: 12, valueLabel: "12px", use: "General surfaces" },
  { name: "3xl", valuePx: 16, valueLabel: "16px", use: "Tall containers" },
  { name: "4xl", valuePx: 20, valueLabel: "20px", use: "Cards, dialogs, menus" },
  { name: "full", valuePx: "full", valueLabel: "9999px", use: "Buttons, pills" },
];

/** Documented spacing scale (px) — /foundations/spacing */
export const spacingScalePx = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 64, 80, 96] as const;
