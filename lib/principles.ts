export type Principle = {
  slug: string;
  title: string;
  shortTitle: string;
  definition: string;
  signals: string[];
  precisionVsWarmth: { precision: string; warmth: string };
  doDont: { do: string[]; dont: string[] };
  reviewPrompts: string[];
  /** Hero photographic brief for this principle. */
  hero: {
    description: string;
    brief: string;
    mood: string[];
    /** Deep brand-aligned background colour for the placeholder. */
    color: string;
  };
  /** One-line summary printed on the principles index card. */
  tagline: string;
  /** Caption shown under the rendered visual Don't / Do panels. */
  visualCaptions: { not: string; yes: string };
};

export const principles: Principle[] = [
  {
    slug: "clear-over-clever",
    title: "Clear over clever",
    shortTitle: "Clear over clever",
    definition:
      "Use plain language, avoid hidden terms, and be transparent about what is possible and what is not. If a claim gets rejected, the customer understands and appreciates why.",
    signals: [
      "Plain-language headings and body copy; jargon only when legally required, then explained.",
      "Upfront eligibility, exclusions, and next steps—no surprise footnotes.",
      "Rejection and edge-case states include a clear reason and what the customer can do next.",
    ],
    precisionVsWarmth: {
      precision:
        "Compare and checkout: scannable tables, explicit prices/coverage deltas, tooltips for definitions—not punchy slogans that obscure terms.",
      warmth:
        "Claims/support: still plain language, but warmer framing (“Here’s what happened” / “Here’s what you can do”) without hiding facts.",
    },
    doDont: {
      do: [
        "Lead with the outcome, then supporting detail.",
        "Pair legal must-haves with a one-line human summary.",
        "Use consistent terms for the same concept across touchpoints.",
      ],
      dont: [
        "Clever wordplay that obscures coverage or risk.",
        "Buried limitations behind “Learn more” when the decision depends on them.",
        "Blaming tone in errors or rejections.",
      ],
    },
    reviewPrompts: [
      "Would a first-time buyer explain this sentence back to us correctly?",
      "Is anything material hidden behind interaction or secondary pages?",
      "Does rejection copy pass the “respect + clarity” test?",
    ],
    tagline: "Transparent. Plain. Understood.",
    hero: {
      description: "Customer reading policy details in natural setting",
      brief:
        "Couple sitting on sofa reading phone together, ACKO policy visible on screen. Living room of a middle-class Indian apartment. Evening lamp light. The mood is trust and understanding. Shot at eye level, not from above.",
      mood: ["evening lamp", "couple reading", "eye level", "trust"],
      color: "#0C2E2A",
    },
    visualCaptions: {
      not: "Hidden asterisks, vague disclaimers, gradient-bestseller noise — clarity is sacrificed for conversion theatre.",
      yes: "Plain price, plain inclusions, no asterisks. The customer can explain this back to a friend.",
    },
  },
  {
    slug: "effortless-by-default",
    title: "Effortless by default",
    shortTitle: "Effortless by default",
    definition:
      "No one should feel lost, confused, or stuck in loading loops. Purchasing, navigating and comparing—all of it should feel simple without dumbing things down.",
    signals: [
      "Obvious primary actions; progressive disclosure for edge cases.",
      "Predictable navigation and recovery paths (back, save state, resume).",
      "Performance and perceived performance: skeletons, optimistic UI where safe, clear timeouts.",
    ],
    precisionVsWarmth: {
      precision:
        "Shop/compare flows: tight information hierarchy, minimal steps to a decision, comparison tools that feel instant.",
      warmth:
        "Support/claims: hand-holding where stress is high—clear status, human-readable timelines, proactive updates.",
    },
    doDont: {
      do: [
        "Default paths that work for the majority; advanced options available, not blocking.",
        "Reuse customer context (vehicle, policy, prior steps) to reduce re-entry.",
        "Surface progress and what happens next.",
      ],
      dont: [
        "Dead ends, redundant forms, or mystery loading with no feedback.",
        "Oversimplified copy that hides real trade-offs (that’s not effortless—it’s risky).",
      ],
    },
    reviewPrompts: [
      "How many steps until value? Can we remove one without losing clarity?",
      "What happens on slow or failed network—do we guide or abandon?",
      "Where might a stressed user get stuck at 11pm?",
    ],
    tagline: "Simple. Not simplified.",
    hero: {
      description: "Three-step purchase in a real moment",
      brief:
        "Young professional standing next to their car, phone in hand, completing purchase. The car number plate is visible. Urban Indian residential street. Quick, casual moment — not a photoshoot. Bright daylight.",
      mood: ["quick moment", "daylight", "casual", "urban street"],
      color: "#0C1A3D",
    },
    visualCaptions: {
      not: "Eight required fields on step 1 of 7 — the form punishes the customer for choosing us.",
      yes: "Ask for the one thing only the customer knows, fetch the rest, confirm with calm certainty.",
    },
  },
  {
    slug: "present-when-it-matters",
    title: "Present when it matters",
    shortTitle: "Present when it matters",
    definition:
      "ACKO doesn’t disappear after the sale. Whether it’s a hospital visit, a claim, or an emergency, the customer feels supported and cared for.",
    signals: [
      "Lifecycle-aware messaging: post-purchase, claim, renewal, and crisis moments get dedicated patterns.",
      "Proactive status and reminders where appropriate—not noise.",
      "Human escalation paths visible when automation isn’t enough.",
    ],
    precisionVsWarmth: {
      precision:
        "Pre-purchase: presence through clarity and availability of help—not hand-holding noise.",
      warmth:
        "Claims/emergencies: higher-touch tone, reassurance, timelines, and easy access to support.",
    },
    doDont: {
      do: [
        "Celebrate the relationship after the sale with useful checklists and contacts.",
        "Design empty and error states in claims as carefully as happy paths.",
        "Make “talk to a human” discoverable in high-anxiety flows.",
      ],
      dont: [
        "Ghosting after payment—support and claims should feel like the same brand.",
        "Generic FAQs dumped instead of contextual guidance.",
      ],
    },
    reviewPrompts: [
      "If something goes wrong at the worst moment, is ACKO visibly here?",
      "Does this touchpoint acknowledge where the customer is in the lifecycle?",
      "Are we present without being noisy?",
    ],
    tagline: "Calm. Human. There.",
    hero: {
      description: "Support moment during a claim",
      brief:
        "Woman on a phone call in a garage or hospital waiting area, expression showing relief. Soft natural light. The phone call is the story — someone is helping. Warm, documentary-style. Not staged.",
      mood: ["relief", "phone call", "garage/hospital", "documentary"],
      color: "#2A1A0A",
    },
    visualCaptions: {
      not: "A faceless ticket ID and a 7–14 day SLA. The customer feels processed, not supported.",
      yes: "Named human, visible next step, time-bound commitment. The brand stays in the room.",
    },
  },
  {
    slug: "respectful-of-time",
    title: "Respectful of the user's time",
    shortTitle: "Respectful of time",
    definition:
      "No forced purchases, no overselling, and no repetitive tasks. The product remembers context, shows the right info at the right time, and saves you time.",
    signals: [
      "Smart defaults and pre-filled data from prior steps or policies.",
      "Skip irrelevant branches; don’t force linear wizards when context allows parallel paths.",
      "Cross-sell only when additive to the user’s goal, timed appropriately.",
    ],
    precisionVsWarmth: {
      precision:
        "Compare/buy: density where experts want speed; shortcuts for returning users.",
      warmth:
        "Support: don’t rush vulnerability—but still avoid repeating questions we already have answers to.",
    },
    doDont: {
      do: [
        "Remember what we know; ask once, reuse everywhere it’s valid.",
        "Batch tasks (documents, uploads) with clear progress.",
        "Offer “skip for now” only when it’s truly safe for the customer.",
      ],
      dont: [
        "Dark patterns, fake urgency, or churning modals.",
        "Re-typing the same data across channels.",
      ],
    },
    reviewPrompts: [
      "Are we asking for something we already have?",
      "Would we tolerate this flow if we were late to a hospital?",
      "Is every upsell defensible as helpful—not extractive?",
    ],
    tagline: "Context. Clarity. Zero friction.",
    hero: {
      description: "Morning routine with one calm notification",
      brief:
        "Phone on wooden breakfast table next to chai and newspaper. Screen shows one ACKO renewal card. Morning light from a window. Indian kitchen/dining area. The feeling is calm start to the day.",
      mood: ["morning chai", "one notification", "wooden table", "calm"],
      color: "#1A0F2E",
    },
    visualCaptions: {
      not: "Three competing banners shouting for attention before the customer even sees their policy.",
      yes: "One renewal card, savings called out, primary action obvious. Respect the user's morning.",
    },
  },
];

export function getPrinciple(slug: string): Principle | undefined {
  return principles.find((p) => p.slug === slug);
}
