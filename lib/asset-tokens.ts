/**
 * Source of truth for ACKO Asset Creation framework.
 * Covers imagery modes, scene library, negative anchors, AI model adapters,
 * video direction, and template specs for all brand touchpoints.
 *
 * Used by the Design System docs site to render asset creation guidance.
 */

/* -------------------------------------------------------------------------- */
/*  Imagery Modes                                                              */
/* -------------------------------------------------------------------------- */

export type ImageryMode = {
  id: "documentary-warm" | "editorial-bright" | "product-contextual";
  title: string;
  when: string;
  colorGrading: {
    kelvin: string;
    saturation: string;
    contrast: string;
    highlights: string;
  };
  composition: {
    framing: string;
    depth: string;
    angle: string;
  };
  promptTemplate: string;
  accentColor: string;
};

export const imageryModes: ImageryMode[] = [
  {
    id: "documentary-warm",
    title: "Documentary warm",
    when: "Claims, support, emergencies, human moments",
    colorGrading: {
      kelvin: "5200–5800K (warm daylight)",
      saturation: "Natural, -5 to 0",
      contrast: "Medium, lifted blacks — no crushed shadows",
      highlights: "Warm, slightly blown for natural feel",
    },
    composition: {
      framing: "Off-center subjects, environmental context visible",
      depth: "Shallow DOF, f/2.8–4",
      angle: "Eye level or slightly below — never above",
    },
    promptTemplate:
      "[subject in a real Indian setting] · [warm indoor/outdoor location] · [evening lamp or golden hour light] · [candid close-up or medium shot] · [rule of thirds, natural gesture] · [slight film grain, warm colour grade]",
    accentColor: "#2A1A0A",
  },
  {
    id: "editorial-bright",
    title: "Editorial bright",
    when: "Marketing, landing pages, campaigns",
    colorGrading: {
      kelvin: "5500–6500K (daylight to slightly cool)",
      saturation: "Boosted +10–15, vibrant but not neon",
      contrast: "High, clean blacks",
      highlights: "Controlled, no clipping",
    },
    composition: {
      framing: "Centered or strong rule of thirds, negative space for copy",
      depth: "Medium DOF, f/4–5.6",
      angle: "Varied — hero angles welcome",
    },
    promptTemplate:
      "[aspirational subject] · [bright urban or lifestyle setting] · [golden hour or studio-grade daylight] · [editorial framing, wide or portrait] · [clean composition, space for text overlay] · [vibrant grade, punchy but not oversaturated]",
    accentColor: "#1A0F2E",
  },
  {
    id: "product-contextual",
    title: "Product contextual",
    when: "Car, home, device pages; product surfaces",
    colorGrading: {
      kelvin: "5000–5500K (neutral)",
      saturation: "Accurate, no creative grading",
      contrast: "Medium-low for UI legibility",
      highlights: "Even, product clearly visible",
    },
    composition: {
      framing:
        "Tight framing on product, environment tells story but doesn't compete",
      depth: "Medium-deep DOF, f/5.6–8",
      angle: "Three-quarter or straight-on",
    },
    promptTemplate:
      "[product in real-world context] · [clean Indian street, parking area, or home] · [natural afternoon light, even exposure] · [tight product framing, environment secondary] · [clean background, minimal distractions] · [neutral grade, true-to-life colours]",
    accentColor: "#0C2E2A",
  },
];

/* -------------------------------------------------------------------------- */
/*  Scene Library                                                              */
/* -------------------------------------------------------------------------- */

export type SceneEntry = {
  id: string;
  category: "auto" | "health" | "life" | "travel" | "general";
  scenario: string;
  description: string;
  recommendedMode: ImageryMode["id"];
  prompt: string;
};

export const sceneLibrary: SceneEntry[] = [
  /* Auto */
  {
    id: "auto-purchase",
    category: "auto",
    scenario: "Car purchase celebration",
    description: "Customer with new car, keys in hand, residential street",
    recommendedMode: "product-contextual",
    prompt:
      "Indian customer standing next to new car in residential parking · bright afternoon · natural daylight · medium shot showing car and person · rule of thirds, car plate visible · neutral grade, true colours",
  },
  {
    id: "auto-accident",
    category: "auto",
    scenario: "Roadside after a minor accident",
    description:
      "Dented car on Indian highway, person on phone calling for help",
    recommendedMode: "documentary-warm",
    prompt:
      "Person on phone beside car with minor dent on Indian highway shoulder · late afternoon · warm golden light · over-shoulder shot, car damage visible · environmental context, road visible · warm grade, slight grain",
  },
  {
    id: "auto-roadside",
    category: "auto",
    scenario: "Roadside assistance arrival",
    description: "Mechanic arriving to help stranded driver",
    recommendedMode: "documentary-warm",
    prompt:
      "Mechanic approaching stranded car on Indian city road, driver looking relieved · evening · warm artificial + ambient light · medium-wide shot · off-center, both people visible · documentary warmth",
  },
  {
    id: "auto-renewal",
    category: "auto",
    scenario: "Policy renewal on phone",
    description: "Person casually renewing on phone at home",
    recommendedMode: "product-contextual",
    prompt:
      "Phone screen showing ACKO renewal card next to morning chai · breakfast table · soft morning window light · close-up of phone and table · clean composition, phone is hero · neutral, warm ambient",
  },

  /* Health */
  {
    id: "health-hospital",
    category: "health",
    scenario: "Hospital visit",
    description:
      "Person at hospital reception with ACKO cashless card",
    recommendedMode: "documentary-warm",
    prompt:
      "Person at Indian hospital reception counter, showing phone to staff · indoor fluorescent mixed with window light · warm afternoon · medium shot, counter visible · candid, not posed · warm grade, lifted shadows",
  },
  {
    id: "health-cashless",
    category: "health",
    scenario: "Cashless claim processing",
    description: "Relief moment after claim is approved",
    recommendedMode: "documentary-warm",
    prompt:
      "Patient sitting in hospital corridor, phone showing claim approved, expression of relief · soft corridor light · warm · close-up on face and phone · shallow DOF · documentary, empathetic",
  },
  {
    id: "health-checkup",
    category: "health",
    scenario: "Wellness checkup",
    description: "Young professional at a health checkup",
    recommendedMode: "editorial-bright",
    prompt:
      "Young Indian professional at modern clinic, doctor in background · bright clinical setting · clean daylight · portrait framing · clean, aspirational · bright editorial grade",
  },

  /* Life */
  {
    id: "life-family",
    category: "life",
    scenario: "Family planning moment",
    description: "Family discussing future plans at dining table",
    recommendedMode: "documentary-warm",
    prompt:
      "Indian family around dining table, documents and phone visible · evening home setting · warm lamp light · wide shot showing family context · candid dinner scene · warm grain",
  },
  {
    id: "life-milestone",
    category: "life",
    scenario: "Life milestone celebration",
    description: "Couple celebrating home purchase or child's birthday",
    recommendedMode: "editorial-bright",
    prompt:
      "Young Indian couple with house keys or celebration · bright outdoor or home · golden hour · portrait or medium · joyful, editorial · vibrant grade",
  },

  /* Travel */
  {
    id: "travel-airport",
    category: "travel",
    scenario: "Airport departure",
    description:
      "Traveller at Indian airport checking insurance on phone",
    recommendedMode: "product-contextual",
    prompt:
      "Person at Indian airport terminal checking phone with ACKO travel screen · airport interior light · neutral daylight · medium shot, travel context visible · clean composition · neutral grade",
  },
  {
    id: "travel-emergency",
    category: "travel",
    scenario: "Travel emergency abroad",
    description: "Traveller needing help in unfamiliar city",
    recommendedMode: "documentary-warm",
    prompt:
      "Person on phone in unfamiliar street abroad, luggage beside them · overcast or evening · cool-warm mixed light · medium shot, environment tells story · off-center · warm documentary",
  },

  /* General */
  {
    id: "general-support",
    category: "general",
    scenario: "Customer support call",
    description:
      "Customer on phone with support agent, looking reassured",
    recommendedMode: "documentary-warm",
    prompt:
      "Indian person on phone at home desk, expression shifting to relief · evening indoor light · warm · close-up face · shallow DOF, home context soft · warm, empathetic grain",
  },
  {
    id: "general-app",
    category: "general",
    scenario: "App usage moment",
    description: "Person browsing ACKO app casually",
    recommendedMode: "product-contextual",
    prompt:
      "Person scrolling phone on couch, ACKO app visible · living room afternoon · soft natural light · over-shoulder phone focus · clean, product-forward · neutral grade",
  },
  {
    id: "general-documents",
    category: "general",
    scenario: "Document signing",
    description: "Person digitally signing policy documents",
    recommendedMode: "product-contextual",
    prompt:
      "Hands holding phone with signature screen, table with documents · office or home desk · even light · tight close-up on hands and screen · clean minimal · neutral",
  },
  {
    id: "general-onboarding",
    category: "general",
    scenario: "First-time user onboarding",
    description: "New user setting up their first policy",
    recommendedMode: "editorial-bright",
    prompt:
      "Young Indian professional with phone, focused expression, urban cafe background · bright cafe light · daylight · portrait · clean modern · bright editorial",
  },
];

/* -------------------------------------------------------------------------- */
/*  Negative Anchors                                                           */
/* -------------------------------------------------------------------------- */

export const negativeAnchors: string[] = [
  "no stock aesthetic",
  "no corporate smiles",
  "no studio lighting",
  "no white background",
  "no oversaturation",
  "no wide-angle distortion",
  "no symmetrical composition",
  "no generic features",
  "no impossible settings",
  "no flat neutral grade",
];

/* -------------------------------------------------------------------------- */
/*  AI Model Adapters                                                          */
/* -------------------------------------------------------------------------- */

export type AIModelAdapter = {
  model: string;
  promptPrefix: string;
  negativePromptFormat: string;
  aspectRatioParam: string;
  notes: string[];
};

export const aiModelAdapters: AIModelAdapter[] = [
  {
    model: "Midjourney",
    promptPrefix: "",
    negativePromptFormat: "--no [anchors joined by comma]",
    aspectRatioParam: "--ar 4:5 or --ar 21:9",
    notes: [
      "Use --style raw for documentary mode",
      "Add --v 6.1 for latest model",
      "Use --s 50-100 for controlled stylisation",
    ],
  },
  {
    model: "DALL-E",
    promptPrefix: "I NEED a realistic photograph. ",
    negativePromptFormat: "Avoid: [anchors joined by comma].",
    aspectRatioParam: "size: 1024x1024 or 1792x1024",
    notes: [
      "Prepend realistic photo instruction",
      "Be very specific about Indian context",
      "DALL-E 3 handles text well — include brand text if needed",
    ],
  },
  {
    model: "Flux",
    promptPrefix: "",
    negativePromptFormat: "Negative prompt: [anchors joined by comma]",
    aspectRatioParam: "width: 1024, height: 1280 (4:5)",
    notes: [
      "Best for photorealistic output",
      "Supports detailed scene descriptions",
      "Use guidance_scale 3.5-7 for natural results",
    ],
  },
  {
    model: "Stable Diffusion",
    promptPrefix: "masterpiece, best quality, realistic photo, ",
    negativePromptFormat:
      "Negative prompt: [anchors], lowres, bad anatomy, blurry",
    aspectRatioParam: "width: 832, height: 1216",
    notes: [
      "Add quality tags to prompt prefix",
      "Use cfg_scale 5-8 for realism",
      "SDXL recommended for best quality",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Video Direction                                                            */
/* -------------------------------------------------------------------------- */

export type VideoDirection = {
  pacing: { bpm: string; cutDuration: string; holdDuration: string };
  transitions: string[];
  musicMood: { mode: string; mood: string; instruments: string }[];
  rules: string[];
};

export const videoDirection: VideoDirection = {
  pacing: {
    bpm: "72–96 BPM for emotional/empathetic content, 100–120 BPM for factual/product content",
    cutDuration:
      "3–5 seconds per shot (emotional), 1.5–3 seconds (factual)",
    holdDuration:
      "Hold on faces 2+ seconds in documentary; product shots 1.5+ seconds",
  },
  transitions: [
    "Cross-dissolve for tone shifts (factual → emotional)",
    "Straight cut for same-mode sequences",
    "Fade-to-black between narrative chapters",
    "No wipes, no 3D transitions, no zooms in product UI",
  ],
  musicMood: [
    {
      mode: "Documentary warm",
      mood: "Acoustic, understated, warm",
      instruments:
        "Piano, acoustic guitar, light strings, ambient pads",
    },
    {
      mode: "Editorial bright",
      mood: "Upbeat, optimistic, modern",
      instruments:
        "Light percussion, synth pads, clean guitar, subtle bass",
    },
    {
      mode: "Product contextual",
      mood: "Minimal, clean, functional",
      instruments:
        "Soft clicks, subtle synth, ambient texture — near-silent OK",
    },
  ],
  rules: [
    "Motion graphics follow the motion token system: ease-out-cubic for entries, ease-out-quad for exits",
    "Text animation: fade + translateY(-8px) using acko-menu-enter keyframe",
    "Exit animations 20–30% faster than entrances",
    "Respect prefers-reduced-motion in web-embedded video players",
    "Brand purple (#6841E6) for all motion graphic accents and CTAs",
    "Minimum 2-second hold on any screen showing text or UI",
  ],
};

/* -------------------------------------------------------------------------- */
/*  Template Specs                                                             */
/* -------------------------------------------------------------------------- */

export type TemplateSpec = {
  id: string;
  name: string;
  category: "emailer" | "banner" | "print" | "social";
  sizes: { name: string; width: number; height: number; unit: "px" | "mm" }[];
  grid: string;
  typographyHierarchy: string;
  colorRules: string[];
  dos: string[];
  donts: string[];
};

export const templateSpecs: TemplateSpec[] = [
  {
    id: "emailer",
    name: "Email templates",
    category: "emailer",
    sizes: [{ name: "Standard", width: 600, height: 0, unit: "px" }],
    grid: "Single column, 600px max-width, 24px side padding, 32px between sections",
    typographyHierarchy:
      "Headline: 24px bold, Body: 16px regular, CTA: 14px medium",
    colorRules: [
      "White (#FFFFFF) background",
      "Purple CTA button — always",
      "Category colour in header band only",
      "Body text: #333333",
    ],
    dos: [
      "Single primary CTA per email",
      "Preheader text matches email content",
      "Alt text on all images",
      "Unsubscribe link visible in footer",
    ],
    donts: [
      "More than 2 CTAs per email",
      "Full-width category colour background",
      "Text as images",
      "Generic subject lines",
    ],
  },
  {
    id: "banner",
    name: "Banner ads",
    category: "banner",
    sizes: [
      { name: "Leaderboard", width: 728, height: 90, unit: "px" },
      { name: "MPU", width: 300, height: 250, unit: "px" },
      { name: "Skyscraper", width: 160, height: 600, unit: "px" },
      { name: "Mobile banner", width: 320, height: 50, unit: "px" },
    ],
    grid: "Logo top-left or top-center, CTA bottom-right, headline centered",
    typographyHierarchy:
      "Headline: 18–24px bold, Body: 12–14px regular, CTA: 12px medium",
    colorRules: [
      "Follow distribution band per vertical",
      "Purple CTA always",
      "ACKO logo in brand purple or white",
      "Category accent for headline text",
    ],
    dos: [
      "Logo visible at all sizes",
      "One headline, one CTA",
      "Readable at actual size",
      "Include vertical identifier if category-specific",
    ],
    donts: [
      "Animate text faster than 3 seconds per frame",
      "Use more than 2 colours beyond neutral",
      "Crowd the layout — leave breathing room",
      "Use category colour as CTA background",
    ],
  },
  {
    id: "print",
    name: "Print documents",
    category: "print",
    sizes: [
      { name: "A4 letterhead", width: 210, height: 297, unit: "mm" },
      { name: "Certificate", width: 297, height: 210, unit: "mm" },
      { name: "ID card", width: 85.6, height: 53.98, unit: "mm" },
    ],
    grid: "A4: 20mm margins, logo in header, footer with contact and IRDAI info",
    typographyHierarchy:
      "Title: 24pt bold, Section: 14pt medium, Body: 10pt regular, Fine print: 8pt regular",
    colorRules: [
      "Print on white stock",
      "Purple for headers and accent lines",
      "Category colour for vertical identifier only",
      "Body text: black (#000000)",
    ],
    dos: [
      "Include IRDAI licence number on all insurance documents",
      "Use Euclid Circular B for all print",
      "Include QR code linking to digital version",
      "Minimum 8pt for any printed text",
    ],
    donts: [
      "Full-bleed category colour backgrounds on formal docs",
      "Decorative elements that compete with content",
      "Low-contrast text on coloured backgrounds",
      "Missing regulatory footer",
    ],
  },
  {
    id: "social",
    name: "Social media",
    category: "social",
    sizes: [
      { name: "Instagram post", width: 1080, height: 1080, unit: "px" },
      { name: "Instagram story", width: 1080, height: 1920, unit: "px" },
      { name: "LinkedIn post", width: 1200, height: 627, unit: "px" },
      { name: "Twitter card", width: 1200, height: 675, unit: "px" },
    ],
    grid: "Safe zone: 10% inset from edges for platform cropping. CTA zone: bottom third",
    typographyHierarchy:
      "Headline: 36–48px bold, Body: 18–24px regular, CTA: 16px medium",
    colorRules: [
      "Follow distribution band",
      "Category colour for vertical-specific content",
      "Purple CTA or brand mark",
      "Dark text on light bg, white text on dark bg",
    ],
    dos: [
      "Design for mobile-first viewing",
      "Include ACKO logo mark",
      "Use the prompt architecture for any imagery",
      "Test legibility at phone screen size",
    ],
    donts: [
      "Tiny text that's unreadable on mobile",
      "More than 20% text coverage on images (platform penalties)",
      "Gradients between purple and category colour",
      "Stock photography — use the scene library",
    ],
  },
];
