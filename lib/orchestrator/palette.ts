import { allChromaticRamps, greyRamp, semanticGroups } from "@/lib/color-tokens";

export type PaletteEntry = {
  hex: string;
  token: string;
  /** Primitive ramp name or "Semantic" */
  source: string;
  role?: string;
  /** light | dark for semantic, undefined for primitive */
  theme?: "light" | "dark";
};

function normalizeHex(h: string): string | null {
  const t = h.trim();
  const m = t.match(/^#?([0-9a-fA-F]{6})$/);
  if (!m) return null;
  return `#${m[1]!.toUpperCase()}`;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

/** Build once — all documented colours for exact + closest match. */
export function getPaletteIndex(): PaletteEntry[] {
  const out: PaletteEntry[] = [];

  for (const step of greyRamp.steps) {
    out.push({ hex: step.hex, token: step.token, source: greyRamp.name });
  }
  for (const ramp of allChromaticRamps) {
    for (const step of ramp.steps) {
      out.push({ hex: step.hex, token: step.token, source: ramp.name });
    }
  }
  for (const g of semanticGroups) {
    for (const t of g.tokens) {
      out.push({
        hex: t.light,
        token: t.token,
        source: "Semantic",
        role: t.role,
        theme: "light",
      });
      if (t.dark !== t.light) {
        out.push({
          hex: t.dark,
          token: t.token,
          source: "Semantic",
          role: `${t.role} (dark)`,
          theme: "dark",
        });
      }
    }
  }

  return out;
}

let _cache: PaletteEntry[] | null = null;
export function getPaletteIndexCached(): PaletteEntry[] {
  if (!_cache) _cache = getPaletteIndex();
  return _cache;
}

export function resolveHexFromUserInput(input: string): string | null {
  const m = input.match(/#?([0-9a-fA-F]{6})\b/);
  if (m) return normalizeHex(`#${m[1]!}`);
  return null;
}

function distanceSq(a: string, b: string): number {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  const d = (x: number, y: number) => (x - y) * (x - y);
  return d(A.r, B.r) + d(A.g, B.g) + d(A.b, B.b);
}

export function findExactOrClosest(userHex: string): {
  normalized: string;
  exact: PaletteEntry | null;
  closest: PaletteEntry;
  distanceSq: number;
} {
  const normalized = normalizeHex(userHex);
  if (!normalized) {
    throw new Error("Invalid hex");
  }
  const idx = getPaletteIndexCached();
  const exact = idx.find((e) => e.hex.toUpperCase() === normalized) ?? null;
  if (exact) {
    return { normalized, exact, closest: exact, distanceSq: 0 };
  }
  let best = idx[0]!;
  let bestD = distanceSq(normalized, best.hex);
  for (let i = 1; i < idx.length; i++) {
    const e = idx[i]!;
    const d = distanceSq(normalized, e.hex);
    if (d < bestD) {
      bestD = d;
      best = e;
    }
  }
  return { normalized, exact: null, closest: best, distanceSq: bestD };
}
