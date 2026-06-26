type PlaceholderImageProps = {
  /** Short description of what the final image will show. */
  label: string;
  /** Visual height. `tall` for hero-style placeholders, `wide` for cinematic strips. */
  size?: "default" | "tall" | "wide";
};

/**
 * A pending-image placeholder used across Phase 1 documentation pages.
 * Light purple background, dashed purple-200 border, centred icon + label.
 * The label tells the team exactly what to produce; replace with `<img>` once final.
 */
export function PlaceholderImage({
  label,
  size = "default",
}: PlaceholderImageProps) {
  const heightClass =
    size === "tall"
      ? "min-h-[360px] md:min-h-[440px]"
      : size === "wide"
        ? "aspect-[21/9]"
        : "min-h-[220px] md:min-h-[280px]";

  return (
    <div
      className={[
        "not-prose my-8 flex w-full items-center justify-center rounded-[14px] border border-dashed border-[#BDB8FA] bg-[#F5F3FF] px-6 py-8",
        heightClass,
      ].join(" ")}
      role="img"
      aria-label={`Pending image: ${label}`}
    >
      <div className="flex max-w-[480px] flex-col items-center gap-3 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6841E6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6841E6]">
          Image placeholder
        </p>
        <p className="text-[14px] leading-relaxed text-[#1F1F23]">{label}</p>
      </div>
    </div>
  );
}
