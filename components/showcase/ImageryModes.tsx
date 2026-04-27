import { palette } from "@/lib/showcase-tokens";
import { MockFrame } from "./MockFrame";

const { O600, P600 } = palette;

type Mode = {
  title: string;
  when: string;
  brief: string;
  mood: string[];
  color: string;
};

const modes: Mode[] = [
  {
    title: "Documentary warm",
    when: "Claims, support, emergencies",
    brief:
      "Indian family at dining table reviewing documents together, warm evening light from a window, candid composition, slight film grain.",
    mood: ["warm", "candid", "evening light", "film grain"],
    color: "#2A1A0A",
  },
  {
    title: "Editorial bright",
    when: "Marketing, landing pages, campaigns",
    brief:
      "Young Indian couple on a scooter in golden hour, lifestyle editorial feel, bright exposure, rule of thirds, real Indian city street.",
    mood: ["golden hour", "editorial", "bright", "lifestyle"],
    color: "#1A0F2E",
  },
  {
    title: "Product contextual",
    when: "Car, home, device pages",
    brief:
      "Maruti Swift parked on a residential Chennai street, tight framing, car is the subject but environment tells the story, clean background, natural afternoon light.",
    mood: ["environmental", "tight frame", "product in scene", "afternoon"],
    color: "#0C2E2A",
  },
];

export function ImageryModes() {
  return (
    <div className="not-prose mt-6 grid gap-5 md:grid-cols-3">
      {modes.map((m) => (
        <div key={m.title}>
          <MockFrame
            aspect="4/5"
            description={m.title}
            brief={m.brief}
            mood={m.mood}
            color={m.color}
          />
          <div className="pt-4">
            <div className="text-sm font-semibold text-foreground">{m.title}</div>
            <div className="ds-caption text-muted">{m.when}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Prompt skeleton printed as a coloured-token strip — matches the showreel. */
export function PromptArchitecture() {
  return (
    <div className="not-prose mt-6 rounded-2xl border border-border bg-[#FBFBFB] p-6">
      <div className="mb-3 text-xs font-semibold text-foreground">
        Prompt architecture — every ACKO image uses this structure
      </div>
      <div className="rounded-xl border border-border bg-white p-4 font-mono text-[12px] leading-loose">
        <span style={{ color: P600 }}>[subject]</span>{" · "}
        <span style={{ color: O600 }}>[setting]</span>{" · "}
        <span style={{ color: palette.GN600 }}>[light]</span>{" · "}
        <span style={{ color: palette.G450 }}>[camera]</span>{" · "}
        <span style={{ color: "#0F766E" }}>[composition]</span>{" · "}
        <span style={{ color: palette.G300 }}>[treatment]</span>
      </div>
    </div>
  );
}

/** Negative-anchor chips. Always include at the end of every photo brief. */
export function NegativeAnchors() {
  const items = [
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
  return (
    <div className="not-prose mt-4 rounded-2xl border border-border bg-white p-6">
      <div className="mb-3 text-xs font-semibold text-foreground">
        Negative anchors — include in every prompt
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((n) => (
          <span
            key={n}
            className="rounded-full px-3 py-1 text-[11px] font-medium"
            style={{ background: palette.R50, color: palette.R600 }}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
