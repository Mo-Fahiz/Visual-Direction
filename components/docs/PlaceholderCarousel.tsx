"use client";

import { useEffect, useRef, useState } from "react";

export type PlaceholderSlide = {
  /** Short title shown under the slide. */
  name: string;
  /** Longer description of what the final image will show. */
  description: string;
};

type Props = {
  slides: PlaceholderSlide[];
  /** Time each slide is shown, in milliseconds. */
  duration?: number;
  /** Visual height. Matches PlaceholderImage sizes. */
  size?: "default" | "tall" | "wide";
  /** Optional aria-label override. */
  label?: string;
};

/**
 * Carousel of placeholder slides — used while real imagery is pending.
 * Each slide shows the same dashed-purple style as PlaceholderImage but
 * advances through descriptive labels. Pauses on hover/focus, respects
 * prefers-reduced-motion. Dot navigation toggles slides manually.
 */
export function PlaceholderCarousel({
  slides,
  duration = 4000,
  size = "tall",
  label = "Pending imagery carousel",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotion.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, duration);
    return () => window.clearInterval(id);
  }, [paused, duration, slides.length]);

  if (slides.length === 0) return null;
  const current = slides[index]!;

  const heightClass =
    size === "tall"
      ? "min-h-[360px] md:min-h-[440px]"
      : size === "wide"
        ? "aspect-[21/9]"
        : "min-h-[260px] md:min-h-[320px]";

  return (
    <div
      className="not-prose my-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={[
          "flex w-full items-center justify-center rounded-[14px] border border-dashed border-[#BDB8FA] bg-[#F5F3FF] px-6 py-8 transition-colors",
          heightClass,
        ].join(" ")}
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
      >
        <div className="flex max-w-[520px] flex-col items-center gap-3 text-center">
          <svg
            width="32"
            height="32"
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6841E6]">
            Slide {index + 1} of {slides.length} · Image placeholder
          </p>
          <p
            key={`name-${index}`}
            className="text-[15px] font-semibold text-[#1F1F23]"
          >
            {current.name}
          </p>
          <p
            key={`desc-${index}`}
            className="text-[13px] leading-relaxed text-[#1F1F23]"
          >
            {current.description}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2" role="tablist" aria-label="Select slide">
        {slides.map((slide, i) => (
          <button
            key={slide.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show ${slide.name}`}
            onClick={() => setIndex(i)}
            className={[
              "h-2 rounded-full transition-all",
              i === index ? "w-6 bg-[#6841E6]" : "w-2 bg-[#E4E5E9] hover:bg-[#BDB8FA]",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
