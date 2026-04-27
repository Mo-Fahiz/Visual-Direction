import type { OrchestratorResult } from "@/lib/orchestrator/types";
import { radiusTokens, spacingScalePx } from "@/lib/radii-tokens";

const DISCLAIM =
  "Answers are generated only from the published content and token data in this design system site — not from external generative models.";

function hasRadiusIntent(q: string): boolean {
  return /radius|radii|rounded|corner|border\s*radius|\bpill\b/i.test(q);
}

function hasSpacingIntent(q: string): boolean {
  return /spacing|gap-?\d+|\bgap\b|padding|margin|gutter/i.test(q);
}

function firstPxValue(q: string): number | null {
  const m = q.match(/(\d+(?:\.\d+)?)\s*px/i);
  if (!m) return null;
  return parseFloat(m[1]!);
}

function closestRadiusToken(px: number) {
  const numeric = radiusTokens.filter((r): r is typeof r & { valuePx: number } => r.valuePx !== "full");
  let best = numeric[0]!;
  let bestDist = Math.abs(px - (best.valuePx as number));
  for (const r of numeric) {
    const d = Math.abs(px - (r.valuePx as number));
    if (d < bestDist) {
      best = r;
      bestDist = d;
    }
  }
  return best;
}

export function tryRadiiSpacingAnswer(message: string): OrchestratorResult | null {
  const px = firstPxValue(message);
  if (px == null) return null;

  if (hasRadiusIntent(message) || (/\b(is|ok|valid|correct|right|use|useful)\b/i.test(message) && /corner|round|radius|pill|border/i.test(message))) {
    const exact = radiusTokens.find((r) =>
      r.valuePx !== "full" && r.valuePx === px
    );
    if (exact) {
      return {
        summary: [
          `**${px}px** matches **\`--radius-${exact.name}\`** in this system (${exact.valueLabel}).`,
          `**Use:** ${exact.use}.`,
          ``,
          "For nested content, also apply the nested-radius rule from the radii page.",
          ``,
          DISCLAIM,
        ].join("\n"),
        links: [{ href: "/foundations/radii", title: "Border radii" }],
        kind: "topic",
      };
    }
    if (px >= 2000 || Math.abs(px - 9999) < 1) {
      return {
        summary: [
          "Very large radii map to the **`full`** pill treatment (`--radius-full`, 9999px) for things like **buttons and pills** — not arbitrary 99px unless you are approximating a stadium shape.",
          ``,
          "If you asked about **" + px + "px** as a product corner: that value is **not** on the documented `sm`–`4xl` + `full` token scale. Prefer the closest semantic token (see link).",
          ``,
          DISCLAIM,
        ].join("\n"),
        links: [{ href: "/foundations/radii", title: "Border radii" }],
        kind: "topic",
      };
    }
    const close = closestRadiusToken(px);
    return {
      summary: [
        `**${px}px** is **not** exactly a documented \`--radius-*\` value in the published product scale (see Border radii).`,
        ``,
        `**Closest token:** \`--radius-${close.name}\` (**${close.valueLabel}**) — ${close.use}.`,
        ``,
        "The documented scale is designed for UI consistency; use tokens instead of ad-hoc values unless you are in a one-off artboard.",
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [{ href: "/foundations/radii", title: "Border radii" }],
      kind: "topic",
    };
  }

  if (hasSpacingIntent(message)) {
    const exact = (spacingScalePx as readonly number[]).includes(Math.round(px));
    if (exact) {
      return {
        summary: [
          `**${px}px** is on the **documented spacing scale** (e.g. \`gap-${Math.round(px)}\` / \`p-${Math.round(px)}\` in Tailwind terms on this site).`,
          ``,
          DISCLAIM,
        ].join("\n"),
        links: [{ href: "/foundations/spacing", title: "Spacing" }],
        kind: "topic",
      };
    }
    return {
      summary: [
        `**${px}px** is **not** on the published **spacing** ladder in this system (${spacingScalePx.join("px, ")}px).`,
        `Pick the **nearest** documented step or adjust layout to snap to the scale for consistency.`,
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [{ href: "/foundations/spacing", title: "Spacing" }],
      kind: "topic",
    };
  }

  return null;
}
