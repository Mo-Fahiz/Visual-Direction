import { layeringModel } from "@/lib/color-tokens";

/**
 * Recreates Carbon's "color-layering-model" diagram with ACKO tokens.
 * Light theme on the left, Dark theme on the right — both nested squares
 * with each layer labelled.
 */
export function LayeringModel() {
  return (
    <div className="not-prose grid gap-6 md:grid-cols-2">
      <Stack
        themeLabel="ACKO Light"
        layers={layeringModel.light}
        outerBg="var(--background)"
      />
      <Stack
        themeLabel="ACKO Dark"
        layers={layeringModel.dark}
        outerBg="#0A0A0A"
      />
    </div>
  );
}

function Stack({
  themeLabel,
  layers,
  outerBg,
}: {
  themeLabel: string;
  layers: { label: string; hex: string; textHex: string }[];
  outerBg: string;
}) {
  return (
    <figure className="rounded-xl border border-border" style={{ backgroundColor: outerBg }}>
      <figcaption className="border-b border-border/60 px-4 py-3 text-xs uppercase tracking-[0.08em] text-muted">
        {themeLabel}
      </figcaption>
      <div className="p-6">
        {/* Recursive nesting using padding */}
        <div
          className="rounded-md p-4 ring-1 ring-black/5"
          style={{ backgroundColor: layers[0].hex }}
        >
          <p
            className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em]"
            style={{ color: layers[0].textHex }}
          >
            {layers[0].label}
          </p>
          <div
            className="rounded-md p-4 ring-1 ring-black/5"
            style={{ backgroundColor: layers[1].hex }}
          >
            <p
              className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em]"
              style={{ color: layers[1].textHex }}
            >
              {layers[1].label}
            </p>
            <div
              className="rounded-md p-4 ring-1 ring-black/5"
              style={{ backgroundColor: layers[2].hex }}
            >
              <p
                className="mb-3 font-mono text-[11px] uppercase tracking-[0.06em]"
                style={{ color: layers[2].textHex }}
              >
                {layers[2].label}
              </p>
              <div
                className="rounded-md p-4 ring-1 ring-black/5"
                style={{ backgroundColor: layers[3].hex }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.06em]"
                  style={{ color: layers[3].textHex }}
                >
                  {layers[3].label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
