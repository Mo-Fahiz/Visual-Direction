import type { Ramp } from "@/lib/color-tokens";
import { ColorRamp } from "./ColorRamp";

type State = "default" | "hover" | "active" | "focus" | "selected" | "disabled";

type ExampleProps = {
  state: State;
  /** Two ramps to compare (e.g. light vs dark). */
  rampLeft: Ramp;
  rampRight?: Ramp;
  pinsLeft?: { index: number; n: number }[];
  pinsRight?: { index: number; n: number }[];
  /** What to render visually inside the example panel(s). */
  visualLeft: React.ReactNode;
  visualRight?: React.ReactNode;
  caption?: string;
};

/**
 * Carbon-style "interaction states" frame — UI mock at the top with numbered
 * pins, then a colour ramp at the bottom showing which steps the interaction
 * uses. Mirrors the layout of color-overview-interactive-{hover,active,...}.png.
 */
export function InteractionStateExample({
  state,
  rampLeft,
  rampRight,
  pinsLeft,
  pinsRight,
  visualLeft,
  visualRight,
  caption,
}: ExampleProps) {
  return (
    <figure className="not-prose mb-8 overflow-hidden rounded-xl border border-border bg-white">
      <header className="flex items-baseline justify-between border-b border-border/60 px-5 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
          {state}
        </span>
        {caption ? (
          <span className="text-xs text-muted">{caption}</span>
        ) : null}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
        <div className="flex min-h-[180px] items-center justify-center bg-white p-8">
          {visualLeft}
        </div>
        <div
          className="flex min-h-[180px] items-center justify-center p-8"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          {visualRight ?? visualLeft}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
        <div className="bg-white p-4">
          <ColorRamp ramp={rampLeft} pins={pinsLeft} variant="minimal" />
        </div>
        <div className="bg-white p-4">
          <ColorRamp
            ramp={rampRight ?? rampLeft}
            pins={pinsRight ?? pinsLeft}
            variant="minimal"
          />
        </div>
      </div>
    </figure>
  );
}
