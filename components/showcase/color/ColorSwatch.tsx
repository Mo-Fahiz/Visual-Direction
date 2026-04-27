import type { Hex } from "@/lib/color-tokens";

type Props = {
  hex: Hex;
  /** Square size in px. Defaults to 56 (table) — set 96+ for hero swatches. */
  size?: number;
  /** Optional border for very-light fills. */
  bordered?: boolean;
  className?: string;
};

/**
 * Single solid color square — used inline in token tables.
 */
export function ColorSwatch({
  hex,
  size = 56,
  bordered = true,
  className = "",
}: Props) {
  return (
    <span
      role="img"
      aria-label={`Color sample ${hex}`}
      title={hex}
      className={[
        "inline-block flex-shrink-0 rounded-md",
        bordered ? "ring-1 ring-inset ring-black/10" : "",
        className,
      ].join(" ")}
      style={{
        width: size,
        height: size,
        backgroundColor: hex,
      }}
    />
  );
}
