"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger delay in ms */
  delay?: number;
  className?: string;
};

/**
 * Wrapper that fades children in when they scroll into view.
 * Uses IntersectionObserver — no JS animation library needed.
 * Respects prefers-reduced-motion.
 *
 * Preview panels and some iframes never fire intersection reliably; we also
 * reveal after a layout check and a fallback timeout so content is never stuck
 * invisible.
 */
export function FadeIn({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let revealed = false;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.classList.remove("opacity-0");
      if (prefersReduced) return;
      el.style.animationDelay = `${delay}ms`;
      el.classList.add("animate-fade-in");
    };

    if (prefersReduced) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "120px 0px 120px 0px" }
    );

    observer.observe(el);

    let innerRaf = 0;
    const outerRaf = requestAnimationFrame(() => {
      innerRaf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const vw = window.innerWidth || document.documentElement.clientWidth;
        const likelyVisible =
          rect.height > 0 &&
          rect.bottom > -120 &&
          rect.top < vh + 120 &&
          rect.right > -120 &&
          rect.left < vw + 120;
        if (likelyVisible) {
          reveal();
          observer.disconnect();
        }
      });
    });

    const fallback = window.setTimeout(() => {
      reveal();
      observer.disconnect();
    }, 900);

    return () => {
      cancelAnimationFrame(outerRaf);
      cancelAnimationFrame(innerRaf);
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`.trim()}>
      {children}
    </div>
  );
}
