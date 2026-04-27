import type { OrchestratorResult } from "@/lib/orchestrator/types";
import tokens from "@/data/tokens.json";

const DISCLAIM =
  "Answers are generated only from the published content and token data in this design system site — not from external generative models.";

export function tryTokensJsonAnswer(message: string): OrchestratorResult | null {
  if (/gotham|brand (?:font|typography|typeface|type)/i.test(message)) {
    return {
      summary: [
        `**Brand & marketing** typeface in the seed data: **${tokens.typography.brandMarketing}**.`,
        `**Product & digital** (in-app) typeface: **${tokens.typography.productDigital}**.`,
        ``,
        tokens.typography.note,
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [
        { href: "/foundations/typography", title: "Typography — overview" },
        { href: "/brand-story", title: "Brand story" },
      ],
      kind: "topic",
    };
  }

  if (
    /euclid|product (?:& |and |)(?:digital|ui)|interface (?:font|type|text)|in[- ]?app (?:font|type)/i.test(
      message
    ) ||
    /what (?:is |)(?:the |)(?:default |)(?:ui |)(?:font|typeface|type family)/i.test(message)
  ) {
    return {
      summary: [
        `**Product & digital** UI text uses **${tokens.typography.productDigital}** in this system.`,
        ``,
        tokens.typography.note,
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [
        { href: "/foundations/typography", title: "Typography — overview" },
        { href: "/get-started", title: "Get started" },
      ],
      kind: "topic",
    };
  }

  if (
    /logo|lockup|minimum (?:size|digital|width|height)/i.test(message) &&
    /(size|px|small|big|width|height|vector|svg|use|brand)/i.test(message)
  ) {
    const { horizontal, vertical } = tokens.logo.minimumDigitalPx;
    return {
      summary: [
        "**Logo** lockups: " + tokens.logo.variations.join(" "),
        ``,
        `**Minimum digital size (seed data):** **${horizontal}px** horizontal × **${vertical}px** vertical. See the Typography overview for on-site logo guidance.`,
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [
        { href: "/foundations/typography", title: "Typography — overview" },
        { href: "/visual-direction", title: "Visual direction" },
      ],
      kind: "topic",
    };
  }

  if (/hugeicon|icon (?:set|pack|system|library)|stroke[- ]?rounded|duotone|iconograph/i.test(message)) {
    const { benchmark, strokePx, default: def, featured } = tokens.iconography;
    return {
      summary: [
        `**Iconography benchmark:** ${benchmark}.`,
        `- **Stroke (px):** ${strokePx}`,
        `- **Default style:** ${def}`,
        `- **Featured (when needed):** ${featured}`,
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [{ href: "/foundations/iconography", title: "Iconography" }],
      kind: "topic",
    };
  }

  return null;
}
