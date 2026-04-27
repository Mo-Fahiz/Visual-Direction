import { palette, categories } from "@/lib/showcase-tokens";

const { P50, P200, G450, G800 } = palette;

/**
 * The 40–60 / 20 / 10 / 10 distribution band that every ACKO creative follows.
 * Values match the visual-direction showreel exactly.
 */
export function ColorBand() {
  return (
    <div
      className="not-prose mt-6 rounded-2xl border p-6"
      style={{ background: P50, borderColor: P200 }}
    >
      <div className="mb-3 text-xs font-semibold" style={{ color: G800 }}>
        Color distribution band — every creative follows this
      </div>
      <div className="flex h-14 overflow-hidden rounded-xl">
        <div
          className="flex flex-1 items-center justify-center text-[11px] font-semibold"
          style={{ flex: 45, background: "#fff", color: G450 }}
        >
          40–60% Background
        </div>
        <div
          className="flex flex-1 items-center justify-center text-[11px] font-semibold text-white"
          style={{ flex: 20, background: categories.auto.color }}
        >
          20% Headline
        </div>
        <div
          className="flex flex-1 items-center justify-center text-[11px] font-semibold text-white"
          style={{ flex: 10, background: G800 }}
        >
          10% Body
        </div>
        <div
          className="flex flex-1 items-center justify-center text-[11px] font-semibold text-white"
          style={{ flex: 10, background: palette.P400 }}
        >
          10% CTA
        </div>
      </div>
      <p className="ds-caption mt-3 text-muted">
        Headline colour swaps per category. Purple stays the constant CTA across verticals.
      </p>
    </div>
  );
}

/** Compact strip of the four category colours with hex labels. */
export function CategorySwatches() {
  const list = [categories.auto, categories.health, categories.life, categories.travel];
  return (
    <div className="not-prose mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
      {list.map((c) => (
        <div
          key={c.name}
          className="rounded-xl p-4"
          style={{ background: c.light, borderTop: `3px solid ${c.color}` }}
        >
          <div
            className="mb-2 h-7 w-7 rounded-lg"
            style={{ background: c.color }}
            aria-hidden
          />
          <div className="text-sm font-semibold text-foreground">{c.name}</div>
          <div className="text-[11px] text-muted">{c.label}</div>
          <div className="font-mono text-[10px] text-muted/80">{c.color}</div>
        </div>
      ))}
    </div>
  );
}
