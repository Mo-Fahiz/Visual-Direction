import { palette } from "@/lib/showcase-tokens";
import { MockFrame } from "./MockFrame";

const { P600, O600 } = palette;

type Moment = {
  number: string;
  line: string;
  principle: string;
  imgDesc: string;
  imgBrief: string;
  mood: string[];
  color: string;
  accent: string;
};

const moments: Moment[] = [
  {
    number: "01",
    line: "You read every word. You understand every rupee.",
    principle: "Clear over clever",
    imgDesc: "Customer reading policy on phone",
    imgBrief:
      "Close-up of hands holding phone showing ACKO app with clean policy summary. Kitchen table, morning chai visible. Warm natural light. Focus on the clarity of the screen content. Indian home setting.",
    mood: ["morning light", "close-up hands", "kitchen table", "readable screen"],
    color: "#0C2E2A",
    accent: "#0F766E",
  },
  {
    number: "02",
    line: "One question. Everything else, we handle.",
    principle: "Effortless by default",
    imgDesc: "Simple car number entry moment",
    imgBrief:
      "Over-shoulder shot of person entering car number plate on phone. The car is visible in background, parked on a residential Indian street. Shallow DOF. The phone screen is bright and minimal. Quick, effortless moment.",
    mood: ["over-shoulder", "residential street", "shallow DOF", "quick moment"],
    color: "#0C1A3D",
    accent: "#1D4ED8",
  },
  {
    number: "03",
    line: "When it matters most, you hear a real voice.",
    principle: "Present when it matters",
    imgDesc: "Support call during a claim",
    imgBrief:
      "Woman on phone call at a hospital or car repair context, looking relieved. Expression is calm, not distressed. Late afternoon light. Someone is helping. The mood is 'you're not alone.' Warm, empathetic, documentary style.",
    mood: ["relief expression", "warm afternoon", "phone call", "empathetic"],
    color: "#2A1A0A",
    accent: O600,
  },
  {
    number: "04",
    line: "Your morning. One card. No noise.",
    principle: "Respectful of time",
    imgDesc: "Calm morning notification",
    imgBrief:
      "Phone on a bedside table or breakfast setup showing a single ACKO notification card. Morning light, clean composition. The feeling is calm and organized. Indian home, real textures. The notification is the only thing asking for attention.",
    mood: ["morning light", "single notification", "breakfast", "calm"],
    color: "#1A0F2E",
    accent: P600,
  },
];

/** Four-moments film strip from the showreel. */
export function FilmMoments() {
  return (
    <div className="not-prose mt-6 flex flex-col gap-8">
      {moments.map((m) => (
        <div key={m.number} className="relative">
          <MockFrame
            aspect="21/9"
            description={m.imgDesc}
            brief={m.imgBrief}
            mood={m.mood}
            color={m.color}
          >
            <div className="absolute left-6 top-6 max-w-[500px] md:left-8 md:top-8">
              <div className="mb-2 text-sm font-semibold" style={{ color: m.accent }}>
                {m.number}
              </div>
              <div className="text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                {m.line}
              </div>
              <div className="mt-3 text-[13px] text-white/40">{m.principle}</div>
            </div>
          </MockFrame>
        </div>
      ))}
    </div>
  );
}
