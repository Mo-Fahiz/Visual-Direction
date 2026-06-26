import { CodeChip } from "@/components/docs/CodeChip";

const layers = [
  {
    label: "Primitive",
    example: "--purple-600",
    description: "Raw hex in the palette. Layer 1 — never used in components.",
    tone: "bg-[#F3F3FF] border-[#C1BDFC] text-[#3A1BA5]",
  },
  {
    label: "Theme token",
    example: "--color-primary",
    description: "Role-based alias. Same name, different hex per theme.",
    tone: "bg-[#E1E0FE] border-[#A69CF9] text-[#5A1FD4]",
  },
  {
    label: "Component CSS",
    example: "background: var(--color-primary)",
    description: "The only layer product code reads from.",
    tone: "bg-[#6841E6] border-[#5A1FD4] text-white",
  },
  {
    label: "UI",
    example: "Primary button",
    description: "What the user sees — colour is inherited, not hard-coded.",
    tone: "bg-white border-[#E4E5E9] text-[#1F1F23]",
  },
];

/**
 * Horizontal flow: primitive → theme token → component → UI.
 * Mirrors the layering explanation in the Colour anatomy section.
 */
export function ColorAnatomyFlow() {
  return (
    <div className="not-prose overflow-x-auto">
      <div className="flex min-w-[640px] items-stretch gap-2">
        {layers.map((layer, i) => (
          <div key={layer.label} className="flex flex-1 items-stretch gap-2">
            <div
              className={[
                "flex flex-1 flex-col rounded-[12px] border p-4",
                layer.tone,
              ].join(" ")}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] opacity-80">
                {layer.label}
              </p>
              <p className="mt-2 font-mono text-[12px] font-medium">{layer.example}</p>
              <p className="mt-2 flex-1 text-[12px] leading-relaxed opacity-90">
                {layer.description}
              </p>
            </div>
            {i < layers.length - 1 ? (
              <div
                className="flex shrink-0 items-center text-[#8F8E92]"
                aria-hidden
              >
                →
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-[13px] text-[#5C616B]">
        Pattern in component CSS:{" "}
        <CodeChip tone="neutral">var(--color-&lt;group&gt;-&lt;modifier&gt;)</CodeChip>
      </p>
    </div>
  );
}
