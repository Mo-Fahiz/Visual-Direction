import type { ReactNode } from "react";
import { palette } from "@/lib/showcase-tokens";

type Props = {
  /** Visual rendered under the "Not this" panel (left). */
  not: ReactNode;
  /** Visual rendered under the "This" panel (right). */
  yes: ReactNode;
  /** Hex string used for the success / "this" accent stroke and label. */
  accent?: string;
  /** Light variant of the accent (panel background). */
  accentBg?: string;
  /** Soft variant of the accent (panel border). */
  accentSoft?: string;
  /** Optional captions printed below each panel. */
  notCaption?: string;
  yesCaption?: string;
};

/**
 * Side-by-side "Not this" / "This" comparison with rendered React children.
 * This is the visual sibling of the text-list `DoDont`; use it when we have
 * concrete UI mocks to show, not just rule statements.
 */
export function DoDontVisual({
  not,
  yes,
  accent = palette.GN700,
  accentSoft = palette.GN100,
  accentBg = palette.GN50,
  notCaption,
  yesCaption,
}: Props) {
  return (
    <div className="not-prose mt-8 grid gap-6 md:grid-cols-2">
      {/* NOT THIS */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span
            aria-hidden
            className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full"
            style={{ background: palette.R100 }}
          >
            <svg width="10" height="10" viewBox="0 0 18 18" fill="none">
              <path
                d="M6 6l6 6M12 6l-6 6"
                stroke={palette.R600}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: palette.R600 }}
          >
            Not this
          </span>
        </div>
        <div
          className="flex min-h-[380px] items-center justify-center rounded-[20px] p-8"
          style={{
            background: palette.G100,
            border: `1px solid ${palette.G200}`,
          }}
        >
          {not}
        </div>
        {notCaption && (
          <p className="ds-caption mt-3 text-muted">{notCaption}</p>
        )}
      </div>

      {/* THIS */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <span
            aria-hidden
            className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full"
            style={{ background: accentSoft }}
          >
            <svg width="10" height="10" viewBox="0 0 18 18" fill="none">
              <path
                d="M5.5 9l2.5 2.5 5-5"
                stroke={accent}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.1em]"
            style={{ color: accent }}
          >
            This
          </span>
        </div>
        <div
          className="flex min-h-[380px] items-center justify-center rounded-[20px] p-8"
          style={{
            background: accentBg,
            border: `1px solid ${accentSoft}`,
          }}
        >
          {yes}
        </div>
        {yesCaption && (
          <p className="ds-caption mt-3 text-muted">{yesCaption}</p>
        )}
      </div>
    </div>
  );
}
