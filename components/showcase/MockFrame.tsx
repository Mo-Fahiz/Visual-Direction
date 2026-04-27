import type { ReactNode } from "react";

type Props = {
  /** CSS aspect-ratio value, e.g. "16/9", "21/9", "4/5", "auto". */
  aspect?: string;
  /** Short label that appears under the placeholder pill. */
  description?: string;
  /** Long-form prompt / brief used by photo or motion teams. */
  brief?: string;
  /** Optional mood tags rendered as small chips. */
  mood?: string[];
  /** Background colour of the frame (deep brand-aligned tones look best). */
  color?: string;
  /** Hide the meta overlay (used when something custom is layered on top). */
  overlay?: boolean;
  children?: ReactNode;
};

/**
 * Atmospheric image placeholder — mirrors the showreel `ImageFrame`.
 * Used everywhere we want to communicate the *intent* of a hero photograph
 * without committing to a specific asset yet.
 */
export function MockFrame({
  aspect = "16/9",
  description,
  brief,
  mood,
  color = "#1a1a1a",
  overlay = true,
  children,
}: Props) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[20px]"
      style={{ aspectRatio: aspect, background: color }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}DD 40%, ${color}99 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "128px",
        }}
      />

      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        {children}
        {overlay && (description || brief || mood) && (
          <div className="mt-auto">
            <div className="mb-2 inline-block rounded-md border border-white/10 bg-white/10 px-3 py-1 backdrop-blur-md">
              <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">
                Image placeholder
              </div>
            </div>
            {description && (
              <div className="mb-1 text-sm font-semibold text-white">
                {description}
              </div>
            )}
            {brief && (
              <div className="max-w-[520px] text-xs leading-relaxed text-white/50">
                {brief}
              </div>
            )}
            {mood && mood.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {mood.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-white/10 bg-white/10 px-2.5 py-[3px] text-[10px] font-medium text-white/60"
                  >
                    {m}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
