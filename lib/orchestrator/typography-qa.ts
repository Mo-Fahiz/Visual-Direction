import type { OrchestratorResult } from "@/lib/orchestrator/types";
import { semanticTypeStyles, sizeRamp } from "@/lib/typography-tokens";

const DISCLAIM =
  "Answers are generated only from the published content and token data in this design system site — not from external generative models.";

function hasTypographyIntent(q: string): boolean {
  return /typo|typograph|type ramp|type scale|font|euclid|line height|line-height|size ramp|--font-|\bbody-\w+|\bdisplay-\w+|\bheading-\w+|\blabel-\w+|\bcaption\b|\boverline\b|semantic (type|style)|\bstep\s*#?\s*[0-9]{1,2}\b|size (ramp|step)/i.test(
    q
  );
}

function findStepFromText(q: string): number | null {
  const m1 = q.match(
    /(?:\bstep\b|on (?:the )?ramp|type (?:ramp|scale)|size (?:ramp|scale)|ramp (?:step|#))\s*#?\s*(\d{1,2})\b/i
  );
  if (m1) {
    const n = parseInt(m1[1]!, 10);
    return n >= 1 && n <= 15 ? n : null;
  }
  const m2 = q.match(/\#(\d{1,2})\b(?!\s*px)/i);
  if (m2) {
    const n = parseInt(m2[1]!, 10);
    if (n >= 1 && n <= 15) return n;
  }
  return null;
}

function findCssTokenLine(q: string): { step: (typeof sizeRamp)[0]; which: "size" | "line" } | null {
  const m = q.match(/--font-(\d+)-(size|line)\b/i);
  if (!m) return null;
  const n = m[1]!;
  const which = m[2]! as "size" | "line";
  const step = sizeRamp.find(
    (s) => s.tokenSize === `--font-${n}-size` && s.tokenLine === `--font-${n}-line`
  );
  return step ? { step, which } : null;
}

export function tryTypographyAnswer(message: string): OrchestratorResult | null {
  if (!hasTypographyIntent(message)) return null;

  const css = findCssTokenLine(message);
  if (css) {
    const s = css.step;
    return {
      summary: [
        `**${css.which === "size" ? s.tokenSize : s.tokenLine}** maps to **type ramp step ${s.step}** in this system.`,
        ``,
        `- **Size:** ${s.sizePx}px — \`${s.tokenSize}\``,
        `- **Line:** ${s.linePx}px — \`${s.tokenLine}\``,
        `- **Tailwind (reference):** \`${s.tailwindSize} ${s.tailwindLine}\``,
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [
        { href: "/foundations/typography", title: "Typography — overview" },
        { href: "/foundations/typography/types", title: "Typography — types" },
      ],
      kind: "topic",
    };
  }

  for (const st of semanticTypeStyles) {
    const escaped = st.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (new RegExp(`\\b${escaped}\\b`, "i").test(message)) {
      return {
        summary: [
          `**${st.name}** (${st.group}) is a documented semantic type style.`,
          ``,
          st.description,
          ``,
          `- **Token base:** \`${st.tokenBase}\``,
          `- **Size / line:** ${st.sizePx}px / ${st.linePx}px`,
          `- **Default weight:** ${st.weightLabel} (${st.defaultWeight})`,
          `- **Letter spacing (px):** ${st.letterSpacingPx}`,
          ``,
          `Specimen: *${st.sample}*`,
          ``,
          DISCLAIM,
        ].join("\n"),
        links: [
          { href: "/foundations/typography/types", title: "Typography — types" },
          { href: "/foundations/typography", title: "Typography — overview" },
        ],
        kind: "topic",
      };
    }
  }

  const stepNum = findStepFromText(message);
  if (stepNum != null) {
    const s = sizeRamp[stepNum - 1]!;
    return {
      summary: [
        `**Type ramp step ${s.step}** in this system:`,
        ``,
        `- **Size:** ${s.sizePx}px — \`${s.tokenSize}\``,
        `- **Line height:** ${s.linePx}px — \`${s.tokenLine}\``,
        `- **Tailwind (reference):** \`${s.tailwindSize} ${s.tailwindLine}\``,
        ``,
        "Use the CSS custom properties in production token definitions; Tailwind classes here are for ad-hoc use in this codebase only.",
        ``,
        DISCLAIM,
      ].join("\n"),
      links: [
        { href: "/foundations/typography", title: "Typography — overview" },
        { href: "/foundations/typography/types", title: "Typography — types" },
      ],
      kind: "topic",
    };
  }

  return null;
}
