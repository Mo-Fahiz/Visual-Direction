"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { easings } from "@/lib/motion-tokens";

/**
 * All five easing curves race side-by-side so users can feel the family.
 * One Play button fires every track at once.
 */
export function EaseCompareGrid() {
  const [nonce, setNonce] = useState(0);
  const reduced = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <header className="flex items-baseline justify-between border-b border-border/60 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Curve family at a glance
          </p>
          <p className="mt-0.5 text-xs text-muted">
            Same distance, same duration (300ms) — only the curve changes.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setNonce((n) => n + 1)}
          className="inline-flex items-center gap-2 rounded-md border border-foreground px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
        >
          Race
          <span aria-hidden>▶</span>
        </button>
      </header>
      <ul className="divide-y divide-border/60">
        {easings.map((e) => (
          <li
            key={e.token}
            className="grid grid-cols-[170px_1fr_120px] items-center gap-4 px-5 py-3"
          >
            <span className="font-mono text-xs font-semibold text-foreground">
              {e.token.replace("--", "")}
            </span>
            <span className="relative block h-7 overflow-hidden rounded-md border border-border bg-[#FAFAF8] px-1">
              <motion.span
                key={nonce}
                aria-hidden
                className="absolute top-1/2 block h-3 w-3 -translate-y-1/2 rounded-full bg-purple-600"
                initial={{ x: 0 }}
                animate={{ x: "calc(100% - 12px)" }}
                transition={
                  reduced
                    ? { duration: 0.01 }
                    : { duration: 0.3, ease: e.bezier }
                }
              />
            </span>
            <span className="text-xs text-muted">{e.use}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
