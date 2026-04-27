"use client";

import { motion } from "motion/react";
import { useState } from "react";

/**
 * Lets the user toggle a "respect reduced-motion" simulation directly in the
 * docs. The right-hand panel renders the same component with the simulated
 * setting applied, so the change in feel is immediately visible.
 */
export function ReducedMotionDemo() {
  const [reduced, setReduced] = useState(false);
  const [nonce, setNonce] = useState(0);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Respecting <span className="font-mono">prefers-reduced-motion</span>
          </p>
          <p className="mt-0.5 text-xs text-muted">
            The same dropdown — full motion on the left, reduced on the right.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-xs text-foreground">
            <input
              type="checkbox"
              checked={reduced}
              onChange={(e) => setReduced(e.target.checked)}
              className="h-4 w-4 accent-purple-600"
            />
            Force reduced
          </label>
          <button
            type="button"
            onClick={() => setNonce((v) => v + 1)}
            className="inline-flex items-center gap-2 rounded-md border border-foreground px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
          >
            Replay
            <span aria-hidden>↻</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
        <Panel
          label="Default"
          tone="purple"
          slideMs={150}
          fadeOnly={false}
          nonce={nonce}
        />
        <Panel
          label={reduced ? "Reduced" : "(toggle to see)"}
          tone="muted"
          slideMs={reduced ? 0 : 150}
          fadeOnly={reduced}
          nonce={nonce}
        />
      </div>
    </div>
  );
}

function Panel({
  label,
  tone,
  slideMs,
  fadeOnly,
  nonce,
}: {
  label: string;
  tone: "purple" | "muted";
  slideMs: number;
  fadeOnly: boolean;
  nonce: number;
}) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 p-6">
      <span
        className={[
          "rounded-full px-2.5 py-1 font-mono text-[11px]",
          tone === "purple" ? "bg-purple-50 text-purple-700" : "bg-zinc-100 text-zinc-700",
        ].join(" ")}
      >
        {label}
      </span>

      <motion.ul
        key={nonce}
        initial={fadeOnly ? { opacity: 0 } : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          slideMs === 0
            ? { duration: 0.01 }
            : { duration: slideMs / 1000, ease: [0.215, 0.61, 0.355, 1] }
        }
        className="w-full max-w-xs overflow-hidden rounded-md border border-border bg-white text-sm shadow-sm"
      >
        {["Health", "Car", "Bike", "Travel"].map((label) => (
          <li
            key={label}
            className="cursor-default px-3 py-2 text-foreground hover:bg-purple-50"
          >
            {label}
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
