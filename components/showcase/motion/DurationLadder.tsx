"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { durations, easings } from "@/lib/motion-tokens";

/**
 * Synchronously fires every duration token at the same instant, side-by-side,
 * so the user can feel the difference between 100ms and 700ms without
 * cognitive load.
 */
export function DurationLadder() {
  const [nonce, setNonce] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const ease = easings.find((e) => e.token === "--ease-out-cubic")!.bezier;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <header className="flex items-baseline justify-between border-b border-border/60 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Duration ladder
          </p>
          <p className="mt-0.5 text-xs text-muted">
            All bars use{" "}
            <span className="font-mono text-foreground">--ease-out-cubic</span>
            . Press Play to fire them simultaneously.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setNonce((n) => n + 1)}
          className="inline-flex items-center gap-2 rounded-md border border-foreground px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
        >
          Play all
          <span aria-hidden>▶</span>
        </button>
      </header>

      <ul className="divide-y divide-border/60">
        {durations.map((d) => (
          <li
            key={d.ms}
            className="grid grid-cols-[110px_1fr_140px] items-center gap-4 px-5 py-3"
          >
            <span className="font-mono text-xs font-semibold text-foreground">
              {d.label}
            </span>
            <span className="block h-8 overflow-hidden rounded-md border border-border bg-[#FAFAF8]">
              <motion.span
                key={nonce}
                aria-hidden
                className="block h-full origin-left bg-purple-600/90"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0.01 }
                    : { duration: d.ms / 1000, ease }
                }
              />
            </span>
            <span className="text-xs text-muted">{d.use}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
