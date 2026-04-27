import type { Ramp } from "@/lib/color-tokens";

type Props = {
  ramp: Ramp;
  /** Show short labels (the trailing number) inside each cell. */
  variant?: "labelled" | "minimal";
  /** Optional set of step indices to mark with a numbered pin (Carbon-style). */
  pins?: { index: number; n: number }[];
  /** Override label resolution (defaults to `step.token`'s suffix). */
  labelOf?: (step: Ramp["steps"][number], i: number) => string;
};

/**
 * Horizontal palette strip — one cell per step. Matches Carbon's
 * "color-overview-interactive" layout (single row, full-width).
 */
export function ColorRamp({
  ramp,
  variant = "labelled",
  pins,
  labelOf,
}: Props) {
  const isLight = (hex: string) => {
    const v = hex.replace("#", "");
    const r = parseInt(v.slice(0, 2), 16);
    const g = parseInt(v.slice(2, 4), 16);
    const b = parseInt(v.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 170;
  };

  return (
    <div className="not-prose mb-4">
      {variant === "labelled" ? (
        <div className="mb-2 flex items-baseline justify-between text-xs uppercase tracking-[0.08em] text-muted">
          <span>{ramp.name}</span>
          {ramp.description ? (
            <span className="font-normal normal-case tracking-normal">
              {ramp.description}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="grid grid-cols-9 overflow-hidden rounded-md border border-border md:grid-cols-[repeat(11,minmax(0,1fr))]">
        {ramp.steps.map((step, i) => {
          const label =
            labelOf?.(step, i) ?? step.token.replace(/^--[a-z]+-/, "");
          const pin = pins?.find((p) => p.index === i);
          return (
            <div
              key={step.token}
              className="relative flex aspect-square min-w-0 flex-col items-start justify-start p-2 text-[11px]"
              style={{
                backgroundColor: step.hex,
                color: isLight(step.hex) ? "#0A0A0A" : "#FBFBFB",
              }}
              title={`${step.token} — ${step.hex}`}
            >
              <span className="font-mono font-medium">{label}</span>
              {pin ? (
                <span
                  className="absolute bottom-1.5 left-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[11px] font-semibold text-white shadow"
                  aria-label={`Reference ${pin.n}`}
                >
                  {pin.n}
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
