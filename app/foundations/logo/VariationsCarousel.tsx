"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type VariationSlide = {
  src: string;
  name: string;
  description: string;
  alt: string;
};

type Props = {
  slides: VariationSlide[];
  /** Time each slide is shown, in milliseconds. */
  duration?: number;
};

/**
 * Auto-advancing variations carousel. Cross-fade-free — slides swap instantly
 * once per `duration` ms, with the description block updating in lock-step.
 * Pauses while the viewer hovers or focuses the carousel, and respects the
 * user's reduced-motion preference.
 */
export function VariationsCarousel({ slides, duration = 3000 }: Props) {
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
  const current = slides[index];

  return (
    <div
      className="not-prose"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="relative aspect-[2/1] w-full overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white"
        role="group"
        aria-roledescription="carousel"
        aria-label="Logo colour variations"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0"
            aria-hidden={i !== index}
            style={{ visibility: i === index ? "visible" : "hidden" }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 800px"
              className="object-contain object-center"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="mt-2.5 flex items-start justify-between gap-6">
        <div className="min-w-0">
          <p
            key={`name-${index}`}
            className="text-[15px] font-semibold text-[#1F1F23]"
          >
            {current.name}
          </p>
          <p
            key={`desc-${index}`}
            className="mt-1 text-[13px] leading-relaxed text-[#5C616B]"
          >
            {current.description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2" role="tablist" aria-label="Select variation">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
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
    </div>
  );
}
