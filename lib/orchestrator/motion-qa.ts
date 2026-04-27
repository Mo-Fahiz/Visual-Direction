import type { OrchestratorResult } from "@/lib/orchestrator/types";
import { easings, durations, keyframes } from "@/lib/motion-tokens";

const DISCLAIM =
  "Answers are generated only from the published content and token data in this design system site — not from external generative models.";

function hasMotionIntent(q: string): boolean {
  return /motion|easing|keyframes?|bezier|duration|animate|transition|prefers-reduced|acko-|--ease/i.test(q);
}

export function tryMotionAnswer(message: string): OrchestratorResult | null {
  if (!hasMotionIntent(message)) return null;

  for (const e of easings) {
    if (message.includes(e.token)) {
      return {
        summary: [
          `**${e.token}** — ${e.use}.`,
          ``,
          `- **CSS:** \`${e.css}\``,
          `- **Default duration (ms):** ${e.defaultDuration}`,
          ``,
          "Only transform and opacity are animated in product; respect `prefers-reduced-motion`.",
          ``,
          DISCLAIM,
        ].join("\n"),
        links: [
          { href: "/foundations/motion", title: "Motion — overview" },
          { href: "/foundations/motion/tokens", title: "Motion — tokens" },
        ],
        kind: "topic",
      };
    }
  }

  for (const k of keyframes) {
    if (new RegExp(`\\b${k.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(message)) {
      return {
        summary: [
          `**@${k.name}** — ${k.description}`,
          ``,
          `- **Duration (ms):** ${k.duration}`,
          `- **Easing:** ${k.easing}`,
          `- **Used by:** ${k.consumers.join(", ")}`,
          ``,
          DISCLAIM,
        ].join("\n"),
        links: [
          { href: "/foundations/motion", title: "Motion — overview" },
          { href: "/foundations/motion/code", title: "Motion — code" },
        ],
        kind: "topic",
      };
    }
  }

  for (const d of durations) {
    if (new RegExp(`\\b${d.ms}\\s*ms\\b`, "i").test(message)) {
      return {
        summary: [
          `**${d.label}** is on the duration ladder: ${d.use}.`,
          ``,
          "See the Motion foundation for the full set of durations and when to use each.",
          ``,
          DISCLAIM,
        ].join("\n"),
        links: [
          { href: "/foundations/motion", title: "Motion — overview" },
          { href: "/foundations/motion/tokens", title: "Motion — tokens" },
        ],
        kind: "topic",
      };
    }
  }

  return {
    summary: [
      "Motion in this system is limited to documented easings, durations, and shared keyframes. Only **transform** and **opacity** are used for product animation; respect `prefers-reduced-motion`.",
      ``,
      DISCLAIM,
    ].join("\n"),
    links: [
      { href: "/foundations/motion", title: "Motion — overview" },
      { href: "/foundations/motion/tokens", title: "Motion — tokens" },
      { href: "/patterns", title: "Patterns" },
    ],
    kind: "topic",
  };
}
