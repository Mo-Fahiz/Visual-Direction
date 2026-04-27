import { PageTable } from "@/components/docs/PageTable";
import { CodeChip } from "@/components/docs/CodeChip";
import { sizeRamp } from "@/lib/typography-tokens";

export function TypeScaleTable() {
  return (
    <PageTable
      headers={["Step", "Size", "Line", "CSS tokens", "Tailwind", "Sample"]}
      colWidths={["5%", "7%", "7%", "22%", "32%", "27%"]}
      rows={sizeRamp.map((r) => {
        const specimen =
          r.step <= 10
            ? "The quick brown fox jumps over the lazy dog."
            : "ACKO design system";
        return [
          String(r.step),
          `${r.sizePx}px`,
          `${r.linePx}px`,
          <span key={`t-${r.step}`} className="font-mono text-[11px] leading-normal">
            {r.tokenSize} / {r.tokenLine}
          </span>,
          <CodeChip key={`tw-${r.step}`} tone="neutral">
            {`${r.tailwindSize} ${r.tailwindLine}`}
          </CodeChip>,
          <span
            key={`s-${r.step}`}
            className="block max-w-[min(100%,36rem)] break-words text-foreground"
            style={{
              fontSize: `var(${r.tokenSize})`,
              lineHeight: `var(${r.tokenLine})`,
            }}
          >
            {specimen}
          </span>,
        ];
      })}
    />
  );
}
