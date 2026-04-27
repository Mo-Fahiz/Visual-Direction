import type { SemanticTypeStyle } from "@/lib/typography-tokens";

type Props = {
  style: SemanticTypeStyle;
};

/**
 * Carbon-style “typeset” row: spec block + live Euclid specimen
 * (mirrors dump/Webdump typography types page).
 */
export function TypeSetExample({ style }: Props) {
  return (
    <div className="not-prose overflow-hidden rounded-xl border border-border bg-white">
      <div className="grid grid-cols-1 gap-0 border-b border-border/70 md:grid-cols-12">
        <div className="border-b border-border/70 p-4 md:col-span-4 md:border-b-0 md:border-r">
          <p className="text-sm leading-relaxed text-foreground [text-wrap:balance]">
            {style.description}
          </p>
        </div>
        <div className="bg-[#FAFAF8] p-4 text-xs text-muted md:col-span-3">
          <p>
            <span className="font-semibold text-foreground">{style.name}</span>
            <br />
            <span className="font-mono">Type: Euclid Circular B</span>
            <br />
            Size: {style.sizePx}px
            <br />
            Line height: {style.linePx}px
            <br />
            Weight: {style.defaultWeight} / {style.weightLabel}
            <br />
            Letter spacing: {style.letterSpacingPx}px
            <br />
            <span className="mt-2 block font-mono text-[10px] text-foreground/80">
              {style.tokenBase}
            </span>
          </p>
        </div>
        <div className="flex min-h-[7rem] items-center p-4 md:col-span-5">
          <p
            className={`w-full break-words text-foreground [font-family:var(--font-sans)] [text-wrap:balance] ${style.className}`}
          >
            {style.sample}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TypeSetGroupHeader({ title }: { title: string }) {
  return (
    <h3 className="not-prose mb-3 mt-10 scroll-mt-24 text-sm font-semibold uppercase tracking-[0.12em] text-muted first:mt-0">
      {title}
    </h3>
  );
}
