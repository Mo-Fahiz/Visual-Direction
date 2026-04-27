/**
 * Showcase tokens used by the visual direction & principle mocks.
 * These match the values authored in the original visual-direction
 * showreel dump and are intentionally co-located so the rendered
 * UI on this site stays in lockstep with the canonical references.
 */

export const palette = {
  // Brand purple
  P50: "#F5F3FF",
  P100: "#EAEAFD",
  P200: "#D9D8FC",
  P400: "#9B8FF6",
  P600: "#6841E6",
  P700: "#582FD2",
  P800: "#4E29BB",
  P950: "#241362",
  // Greys
  G50: "#FBFBFB",
  G100: "#F5F5F5",
  G200: "#E0E0E1",
  G300: "#B7B7B8",
  G450: "#605F63",
  G550: "#333333",
  G700: "#141414",
  G800: "#0A0A0A",
  // Orange (Care / present)
  O50: "#FFF3E5",
  O100: "#FFE5CC",
  O500: "#FF8D28",
  O600: "#EB740A",
  O800: "#8D4301",
  // Green (success / "do")
  GN50: "#F0FDF4",
  GN100: "#DCFCE7",
  GN600: "#16A34A",
  GN700: "#15803D",
  // Red (error / "don't")
  R50: "#FEF2F2",
  R100: "#FEE2E2",
  R600: "#DC2626",
} as const;

export type Category = {
  name: string;
  color: string;
  label: string;
  light: string;
};

export const categories: Record<"auto" | "health" | "life" | "travel", Category> = {
  auto: { name: "Auto", color: "#F4A024", label: "Sunshade", light: "#FFF8E7" },
  health: { name: "Health", color: "#EC5FAB", label: "Vivid Cerise", light: "#FDF2F8" },
  life: { name: "Life", color: "#1EB7E7", label: "Picton Blue", light: "#EEFAFF" },
  travel: { name: "Travel", color: "#55B94D", label: "Leafy Green", light: "#F3FFF2" },
};

/** Per-principle accent palette used by the page heroes & mock frames. */
export const principleAccent: Record<
  "clear-over-clever" | "effortless-by-default" | "present-when-it-matters" | "respectful-of-time",
  { color: string; soft: string; bg: string; surface: string }
> = {
  "clear-over-clever": {
    color: "#0F766E",
    soft: "#D1FAE5",
    bg: "#F0FDF4",
    surface: "#0C2E2A",
  },
  "effortless-by-default": {
    color: "#1D4ED8",
    soft: "#DBEAFE",
    bg: "#EFF6FF",
    surface: "#0C1A3D",
  },
  "present-when-it-matters": {
    color: palette.O600,
    soft: palette.O100,
    bg: palette.O50,
    surface: "#2A1A0A",
  },
  "respectful-of-time": {
    color: palette.P600,
    soft: palette.P100,
    bg: palette.P50,
    surface: "#1A0F2E",
  },
};
