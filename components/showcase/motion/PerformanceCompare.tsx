"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

/**
 * Side-by-side comparison: animating `width` (triggers layout) vs animating
 * `transform: scaleX` (compositor-only). Both look near-identical at 60fps,
 * but the left one re-flows its container on every frame.
 */
export function PerformanceCompare() {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <header className="flex items-baseline justify-between border-b border-border/60 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            transform vs width
          </p>
          <p className="mt-0.5 text-xs text-muted">
            Both bars take 600ms. Press Run to fire them simultaneously and
            inspect Performance in DevTools.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setN((v) => v + 1)}
          className="inline-flex items-center gap-2 rounded-md border border-foreground px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
        >
          Run
          <span aria-hidden>▶</span>
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
        {/* BAD: animating width */}
        <figure className="flex flex-col gap-3 p-5">
          <figcaption className="flex items-center justify-between text-xs">
            <span className="rounded-full bg-red-50 px-2.5 py-1 font-mono text-[11px] text-red-700">
              Don&apos;t — width
            </span>
            <span className="text-muted">Reflows on every frame</span>
          </figcaption>
          <div className="h-8 w-full overflow-hidden rounded-md border border-border bg-[#FAFAF8]">
            <motion.div
              key={`w-${n}`}
              className="h-full bg-red-300"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={
                reduced ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
              }
            />
          </div>
        </figure>

        {/* GOOD: animating transform */}
        <figure className="flex flex-col gap-3 p-5">
          <figcaption className="flex items-center justify-between text-xs">
            <span className="rounded-full bg-green-50 px-2.5 py-1 font-mono text-[11px] text-green-700">
              Do — transform
            </span>
            <span className="text-muted">Compositor-only</span>
          </figcaption>
          <div className="h-8 w-full overflow-hidden rounded-md border border-border bg-[#FAFAF8]">
            <motion.div
              key={`t-${n}`}
              className="h-full origin-left bg-green-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={
                reduced ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }
              }
            />
          </div>
        </figure>
      </div>
    </div>
  );
}
