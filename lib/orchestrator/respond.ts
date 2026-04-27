import { findExactOrClosest, resolveHexFromUserInput } from "@/lib/orchestrator/palette";
import { tryMotionAnswer } from "@/lib/orchestrator/motion-qa";
import { tryRadiiSpacingAnswer } from "@/lib/orchestrator/radii-qa";
import { trySiteIndexMatch } from "@/lib/orchestrator/site-index";
import { tryTokensJsonAnswer } from "@/lib/orchestrator/tokens-json-qa";
import { tryTypographyAnswer } from "@/lib/orchestrator/typography-qa";
import type { OrchestratorLink, OrchestratorResult } from "@/lib/orchestrator/types";

export type { OrchestratorLink, OrchestratorResult } from "@/lib/orchestrator/types";

const DISCLAIM =
  "Answers are generated only from the published content and token data in this design system site — not from external generative models.";

const TOPICS: {
  test: (q: string) => boolean;
  summary: string;
  links: OrchestratorLink[];
}[] = [
  {
    test: (q) => /(colour|color|palette|swatch)\b/i.test(q) && !resolveHexFromUserInput(q),
    summary:
      "Colour in this system is tokenised: primitive ramps (grey, purple, red, …) feed semantic roles (primary, surface, text, feedback). Components use semantic tokens only. Browse the Color foundation for ramps, usage, and code.",
    links: [
      { href: "/foundations/color", title: "Color — overview", description: "Layering and interactive states" },
      { href: "/foundations/color/tokens", title: "Color — tokens", description: "All primitives and semantic values" },
      { href: "/foundations/color/usage", title: "Color — usage", description: "When to use which token" },
    ],
  },
  {
    test: (q) =>
      /typo|typograph|font|euclid|type ?scale|type ?ramp|line height|line-height|size ramp|--font-|body-\w+|display-\w+|heading-\w+|label-\w+|semantic type/i.test(
        q
      ) && !/\b(a\s+)?page\s+heading|document\s+heading|web\s*heading(?!-)/i.test(q),
    summary:
      "Typography uses Euclid Circular B in product, with a 15-step size ramp and semantic aliases (display, heading, body, label). Sentence case is required in product UI. See the Typography foundation for the full table and live specimens.",
    links: [
      { href: "/foundations/typography", title: "Typography — overview" },
      { href: "/foundations/typography/types", title: "Typography — types" },
      { href: "/foundations/typography/usage", title: "Typography — usage" },
    ],
  },
  {
    test: (q) => /motion|animation|easing|keyframes?/i.test(q) && !/--ease-/.test(q) && !/acko-/.test(q),
    summary:
      "Motion is limited to a small set of easing curves, durations, and shared keyframes. Only transform and opacity are animated in product; respect prefers-reduced-motion.",
    links: [
      { href: "/foundations/motion", title: "Motion — overview" },
      { href: "/patterns", title: "Patterns" },
    ],
  },
  {
    test: (q) => /info.*blue|blue.*info|information.*blue/i.test(q),
    summary:
      "In this system, informational feedback uses brand purple — not blue. Blue is reserved for inline links. See Color usage for the rule and semantic tokens.",
    links: [{ href: "/foundations/color/usage", title: "Color — usage" }],
  },
  {
    test: (q) => /principle|grounded|warmth|effortless|clever|respectful|present when/i.test(q) && !/unprincipled/i.test(q),
    summary:
      "ACKO’s experience principles explain how the product should feel and behave. Start with the overview, then read each principle in depth.",
    links: [
      { href: "/principles", title: "Principles — overview" },
      { href: "/visual-direction", title: "Visual direction" },
    ],
  },
  {
    test: (q) => /spacing|gap|padding|margin/i.test(q) && !/\b\d+\s*px\s*(corner|radius|round)/i.test(q),
    summary:
      "Spacing uses a numeric scale (4px base) for padding, gaps, and component sizing. Values are documented on the Spacing foundation page.",
    links: [{ href: "/foundations/spacing", title: "Spacing" }],
  },
  {
    test: (q) => /shadow|elevation|z-index/i.test(q),
    summary: "Shadows map to elevation tiers and semantic aliases. See the Shadows foundation for tiers and component-specific guidance.",
    links: [{ href: "/foundations/shadows", title: "Shadows" }],
  },
  {
    test: (q) => /radius|rounded|\bcorner(s)?\b|border ?radius|\bpill\b/i.test(q),
    summary: "Border radii are tokenised with a nested-radius rule for cards and inner elements.",
    links: [{ href: "/foundations/radii", title: "Border radii" }],
  },
  {
    test: (q) => /\bicon(?!c)\b|iconograph|hugeicon/i.test(q),
    summary: "Iconography uses a stroke-rounded benchmark and consistent sizes.",
    links: [{ href: "/foundations/iconography", title: "Iconography" }],
  },
  {
    test: (q) => /image|photo|illustration(?!-)/i.test(q),
    summary: "Imagery follows three modes and prompt discipline — see the Imagery foundation.",
    links: [{ href: "/foundations/imagery", title: "Imagery" }],
  },
  {
    test: (q) => /voice|tone(?!d)|\bcopy\b|sentence case/i.test(q),
    summary: "Voice and tone align with the principles; sentence case rules live under Typography usage as well.",
    links: [
      { href: "/foundations/voice", title: "Voice & tone" },
      { href: "/foundations/typography/usage", title: "Typography — usage" },
    ],
  },
  {
    test: (q) => /pattern|layout|form(?!s)|\bgrid\b(?!-)/i.test(q),
    summary: "Layout and interaction patterns build on spacing, motion, and component tokens. See Patterns for composed examples.",
    links: [
      { href: "/patterns", title: "Patterns" },
      { href: "/ui-kit", title: "UI kit overview" },
    ],
  },
  {
    test: (q) => /get started|start|how do i|where do i|onboarding/i.test(q),
    summary:
      "New here? Get started explains how this site is organised as the source of truth and how to align Figma and code.",
    links: [
      { href: "/get-started", title: "Get started" },
      { href: "/develop", title: "Develop" },
    ],
  },
];

function hexResponse(message: string): OrchestratorResult {
  const h = resolveHexFromUserInput(message);
  if (!h) {
    return {
      summary: `I couldn't parse a 6-digit hex in your message. Try a value like #6841E6 or 398332.\n\n${DISCLAIM}`,
      links: [
        { href: "/foundations/color/tokens", title: "Color — tokens" },
        { href: "/foundations/color/usage", title: "Color — usage" },
      ],
      kind: "hex",
    };
  }
  const { exact, closest, normalized, distanceSq } = findExactOrClosest(h);
  if (exact) {
    return {
      summary: [
        `**${normalized}** is a documented colour in this system.`,
        ``,
        `- **Token:** \`${exact.token}\``,
        exact.role ? `- **Role:** ${exact.role}` : null,
        `- **Source:** ${exact.source}${exact.theme ? ` (${exact.theme} theme)` : ""}`,
        ``,
        "Use the semantic or primitive token in code — not raw hex — unless you are working in a token definition.",
        ``,
        DISCLAIM,
      ]
        .filter(Boolean)
        .join("\n"),
      links: [
        { href: "/foundations/color/tokens", title: "Color — tokens" },
        { href: "/foundations/color/usage", title: "Color — usage" },
      ],
      kind: "hex",
    };
  }
  const d = Math.sqrt(distanceSq);
  return {
    summary: [
      `**${normalized}** is not an exact match to any value in the ACKO design system palette published here.`,
      ``,
      "Closest documented colour:",
      ``,
      `- **${closest.hex}** — \`${closest.token}\` (${closest.source}${closest.theme ? ` · ${closest.theme}` : ""})`,
      closest.role ? `  - ${closest.role}` : null,
      `- Approx. RGB distance: **${d.toFixed(0)}** (0 = exact match)`,
      ``,
      "Prefer the token above (or a semantic colour that matches your intent) so themes and accessibility stay consistent.",
      ``,
      DISCLAIM,
    ]
      .filter(Boolean)
      .join("\n"),
    links: [
      { href: "/foundations/color/tokens", title: "Color — tokens" },
      { href: "/foundations/color/usage", title: "Color — usage" },
    ],
    kind: "hex",
  };
}

function topicOrFallback(q: string): OrchestratorResult {
  const stripped = q.trim();
  for (const t of TOPICS) {
    if (t.test(stripped)) {
      return {
        summary: `${t.summary}\n\n${DISCLAIM}`,
        links: t.links,
        kind: "topic",
      };
    }
  }
  return {
    summary: [
      "I can help with **colours** (paste a 6-digit hex to validate), **type ramp / semantic styles**, **motion tokens**, **radii & spacing (px)**, and links across **Foundations** and **Principles** — all from the pages in this design system only.",
      "",
      "Try: “What is type ramp **step 5**?”, “Is **#398332** in the palette?”, “Is **99px** a valid **corner** radius?”, or “**Where** is **motion** documented?”.",
      "",
      DISCLAIM,
    ].join("\n"),
    links: [
      { href: "/get-started", title: "Get started" },
      { href: "/foundations", title: "Foundations" },
      { href: "/principles", title: "Principles" },
    ],
    kind: "fallback",
  };
}

function shouldRunHex(m: string): boolean {
  if (resolveHexFromUserInput(m)) return true;
  const compact = m.replace(/[\s_]/g, "");
  if (/^#?[0-9a-fA-F]{6}$/i.test(compact)) return true;
  if (resolveHexFromUserInput(m.replace(/\?/g, " "))) return true;
  if (/\b[0-9a-fA-F]{6}\b/i.test(m)) return true;
  return false;
}

/**
 * Open-ended design-system questions: structured lookups, then colour hex, then site index, then topic heuristics.
 */
export function orchestrateUserMessage(message: string): OrchestratorResult {
  const m = message.trim();
  if (!m) {
    return {
      summary:
        "Ask a question about this design system — e.g. type **step** and **line height**, **colours** (with a hex if you have one), **motion** easings, **border radii** in **px**, or “where is **X** documented?”.",
      links: [{ href: "/get-started", title: "Get started" }],
      kind: "fallback",
    };
  }

  const typo = tryTypographyAnswer(m);
  if (typo) return typo;

  const dim = tryRadiiSpacingAnswer(m);
  if (dim) return dim;

  const tok = tryTokensJsonAnswer(m);
  if (tok) return tok;

  const mot = tryMotionAnswer(m);
  if (mot) return mot;

  if (shouldRunHex(m)) {
    return hexResponse(m);
  }

  const site = trySiteIndexMatch(m);
  if (site) return site;

  return topicOrFallback(m);
}
