import { themePreview } from "@/lib/color-tokens";

type ThemeKey = "light" | "dark";

function MiniSurface({ theme }: { theme: ThemeKey }) {
  const t = themePreview[theme];
  const label = theme === "light" ? "ACKO Light" : "ACKO Dark";

  return (
    <figure className="flex-1 overflow-hidden rounded-[14px] border border-[#E4E5E9]">
      <figcaption className="border-b border-[#E4E5E9] bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C616B]">
        {label}
      </figcaption>
      <div className="p-5" style={{ backgroundColor: t.surface }}>
        <div
          className="rounded-[14px] border p-4"
          style={{
            backgroundColor: t.card,
            borderColor: t.border,
          }}
        >
          <p
            className="text-[14px] font-semibold"
            style={{ color: t.textPrimary }}
          >
            Policy summary
          </p>
          <p
            className="mt-1 text-[12px]"
            style={{ color: t.textSecondary }}
          >
            Auto · Active until 12 Mar 2027
          </p>
          <button
            type="button"
            className="mt-4 inline-flex rounded-full px-4 py-2 text-[13px] font-medium"
            style={{
              backgroundColor: t.primary,
              color: t.onPrimary,
            }}
          >
            Renew policy
          </button>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono text-[#8F8E92]">
          <span>surface</span>
          <span>·</span>
          <span>card</span>
          <span>·</span>
          <span>primary</span>
        </div>
      </div>
    </figure>
  );
}

/** Side-by-side mini UI showing the same card in light and dark themes. */
export function ThemePreviewPanel() {
  return (
    <div className="not-prose grid gap-4 md:grid-cols-2">
      <MiniSurface theme="light" />
      <MiniSurface theme="dark" />
    </div>
  );
}
