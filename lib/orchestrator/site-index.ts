import type { OrchestratorResult } from "@/lib/orchestrator/types";

const DISCLAIM =
  "Answers are generated only from the published content and token data in this design system site — not from external generative models.";

type SiteEntry = { path: string; title: string; summary: string; keywords: string[] };

const ENTRIES: SiteEntry[] = [
  { path: "/get-started", title: "Get started", summary: "How the site is organised; source of truth for design.", keywords: ["start", "begin", "onboard", "new", "guide", "help"] },
  { path: "/develop", title: "Develop", summary: "Figma, code, and token workflow for teams.", keywords: ["develop", "code", "figma", "engineer", "build", "npm"] },
  { path: "/foundations", title: "Foundations", summary: "Index of all foundation topics.", keywords: ["foundation", "foundations", "token", "design"] },
  { path: "/foundations/color", title: "Color — overview", summary: "Layering, themes, and interactive states.", keywords: ["color", "colour", "palette", "swatch", "hex", "theme", "light", "dark"] },
  { path: "/foundations/color/tokens", title: "Color — tokens", summary: "Primitives and semantic color tokens.", keywords: ["color", "token", "primitive", "semantic", "hex"] },
  { path: "/foundations/color/usage", title: "Color — usage", summary: "When to use which token; links vs feedback.", keywords: ["usage", "link", "blue", "info", "purple", "feedback"] },
  { path: "/foundations/typography", title: "Typography — overview", summary: "Euclid, type ramp, and logo rules.", keywords: ["typography", "type", "font", "euclid", "ramp", "text", "logo"] },
  { path: "/foundations/typography/types", title: "Typography — types", summary: "Semantic type styles and live specimens.", keywords: ["typeset", "styles", "display", "heading", "body", "label"] },
  { path: "/foundations/typography/usage", title: "Typography — usage", summary: "Sentence case, casing rules, microcopy.", keywords: ["usage", "sentence", "case", "capital"] },
  { path: "/foundations/typography/code", title: "Typography — code", summary: "Font loading and code snippets.", keywords: ["font", "loading", "code", "woff", "face"] },
  { path: "/foundations/motion", title: "Motion — overview", summary: "Easing, duration, keyframes, accessibility.", keywords: ["motion", "animation", "easing", "duration", "keyframes", "a11y", "reduced"] },
  { path: "/foundations/motion/tokens", title: "Motion — tokens", summary: "Token tables for easings and durations.", keywords: ["motion", "tokens", "ease", "cubic", "ms"] },
  { path: "/foundations/motion/usage", title: "Motion — usage", summary: "When to use which motion treatment.", keywords: ["motion", "usage", "pattern", "enter", "exit"] },
  { path: "/foundations/motion/code", title: "Motion — code", summary: "Code examples and keyframe names.", keywords: ["acko-spin", "css", "keyframes", "code"] },
  { path: "/foundations/spacing", title: "Spacing", summary: "Numeric 4px-based spacing and utilities.", keywords: ["spacing", "gap", "padding", "margin", "layout", "grid", "4px", "8px", "16px"] },
  { path: "/foundations/radii", title: "Border radii", summary: "Radius scale and nested radius rule.", keywords: ["radius", "rounded", "corner", "pill", "inset", "card"] },
  { path: "/foundations/shadows", title: "Shadows", summary: "Elevation and shadow tokens.", keywords: ["shadow", "elevation", "z-index", "depth"] },
  { path: "/foundations/iconography", title: "Iconography", summary: "Stroke, sizes, and icon modes.", keywords: ["icon", "hugeicon", "stroke", "pictogram"] },
  { path: "/foundations/imagery", title: "Imagery", summary: "Photography modes and art direction.", keywords: ["image", "photo", "illustration", "picture", "stock", "lifestyle"] },
  { path: "/foundations/voice", title: "Voice & tone", summary: "Voice, tone, and product copy rules.", keywords: ["voice", "tone", "copy", "wording", "message"] },
  { path: "/principles", title: "Principles", summary: "Experience principles overview.", keywords: ["principle", "values", "philosophy", "clear", "clever", "effortless", "grounded", "warmth", "time"] },
  { path: "/visual-direction", title: "Visual direction", summary: "Look and feel for the design system and brand.", keywords: ["visual", "brand", "direction", "look", "aesthetic", "mood", "illustration"] },
  { path: "/patterns", title: "Patterns", summary: "Composed layout and UI patterns.", keywords: ["pattern", "layout", "form", "grid", "ui", "component"] },
  { path: "/ui-kit", title: "UI kit", summary: "Overview of UI building blocks on the site.", keywords: ["ui", "kit", "components", "library", "build"] },
  { path: "/resources/changelog", title: "Changelog", summary: "What changed in the design system site.", keywords: ["changelog", "release", "what's new", "version"] },
  { path: "/resources/roadmap", title: "Roadmap", summary: "Planned and future work.", keywords: ["roadmap", "future", "planned", "next", "tbd"] },
  { path: "/brand-story", title: "Brand story", summary: "Narrative context for ACKO design.", keywords: ["brand", "story", "narrative", "gotham"] },
];

function tokenize(q: string): Set<string> {
  const w = q.toLowerCase().match(/[a-z0-9#]+/g) ?? [];
  return new Set(w);
}

export function trySiteIndexMatch(message: string): OrchestratorResult | null {
  const tokensQ = tokenize(message);
  if (tokensQ.size < 1) return null;

  const scored: { entry: SiteEntry; score: number }[] = [];
  for (const e of ENTRIES) {
    let score = 0;
    for (const kw of e.keywords) {
      if (message.toLowerCase().includes(kw)) score += 3;
    }
    for (const t of tokenize(e.title + " " + e.summary + " " + e.keywords.join(" "))) {
      if (tokensQ.has(t)) score += 1;
    }
    for (const part of e.path.split("/")) {
      if (part && tokensQ.has(part.toLowerCase())) score += 2;
    }
    if (score > 0) scored.push({ entry: e, score });
  }
  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter((s) => s.score >= 4).slice(0, 3);
  if (top.length === 0) {
    const best = scored[0];
    if (!best || best.score < 2) return null;
    return buildResult([best]);
  }
  return buildResult(top);
}

function buildResult(items: { entry: SiteEntry; score: number }[]): OrchestratorResult {
  const lines = items.map(
    (x) => `**${x.entry.title}** (\`${x.entry.path}\`) — ${x.entry.summary}`
  );
  return {
    summary: [
      "Here are the most relevant pages in this design system, based on matching your question to the **site index** (titles, paths, and keywords).",
      "",
      ...lines,
      "",
      "Open a link to read the full guidance. If nothing fits, try a more specific term (e.g. “color tokens” or “motion keyframes”).",
      "",
      DISCLAIM,
    ].join("\n"),
    kind: "topic",
    links: items.map((x) => ({ href: x.entry.path, title: x.entry.title, description: x.entry.summary })),
  };
}
