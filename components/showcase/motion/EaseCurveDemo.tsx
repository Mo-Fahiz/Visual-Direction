"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { Easing } from "@/lib/motion-tokens";

type Props = {
  easing: Easing;
  /** Duration override in ms (defaults to easing.defaultDuration). */
  durationMs?: number;
};

/**
 * Live easing render — three views in a single card:
 *  1. The cubic-bezier curve drawn as an SVG path (input vs output)
 *  2. A purple dot animated along a track using exactly that curve
 *  3. The token name + cubic-bezier source + intended use + a Replay button
 *
 * The animation is keyed on a `nonce` state so users can replay it
 * synchronously by clicking Replay.
 */
export function EaseCurveDemo({ easing, durationMs }: Props) {
  const [nonce, setNonce] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const duration = (durationMs ?? easing.defaultDuration) / 1000;
  const [x1, y1, x2, y2] = easing.bezier;

  return (
    <article
      className="overflow-hidden rounded-xl border border-border bg-white"
      aria-label={`Easing demo for ${easing.token}`}
    >
      <header className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/60 px-5 py-4">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            {easing.token}
          </p>
          <p className="mt-0.5 font-mono text-[12px] text-muted">
            {easing.css}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted">{easing.use}</span>
          <span className="rounded-full bg-purple-50 px-2.5 py-1 font-mono text-[11px] text-purple-700">
            {Math.round(duration * 1000)}ms
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-[180px_1fr] md:divide-x md:divide-border">
        {/* SVG bezier curve viz */}
        <div className="flex items-center justify-center bg-[#FAFAF8] p-5">
          <BezierCurveSvg x1={x1} y1={y1} x2={x2} y2={y2} />
        </div>

        {/* Animated track */}
        <div className="flex items-center bg-white px-5 py-6">
          <div className="relative h-12 w-full overflow-hidden rounded-md border border-border bg-[#FAFAF8] px-2">
            {/* End-rail tick */}
            <span
              aria-hidden
              className="absolute right-2 top-1/2 h-6 w-px -translate-y-1/2 bg-border"
            />
            <motion.span
              key={nonce}
              aria-hidden
              className="absolute top-1/2 block h-3 w-3 -translate-y-1/2 rounded-full bg-purple-600 shadow-[0_0_0_6px_rgba(104,65,230,0.08)]"
              initial={{ x: 0 }}
              animate={{
                x: prefersReducedMotion
                  ? "calc(100% - 12px)"
                  : ["0%", "calc(100% - 12px)", "calc(100% - 12px)", "0%"],
              }}
              transition={
                prefersReducedMotion
                  ? { duration: 0.01 }
                  : {
                      duration: duration * 4,
                      times: [0, 0.4, 0.5, 0.9],
                      ease: [
                        easing.bezier,
                        easing.bezier,
                        easing.bezier,
                        easing.bezier,
                      ],
                      repeat: 0,
                    }
              }
            />
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-between border-t border-border/60 px-5 py-3">
        <span className="font-mono text-[11px] text-muted">
          [{x1}, {y1}, {x2}, {y2}]
        </span>
        <button
          type="button"
          onClick={() => setNonce((n) => n + 1)}
          className="inline-flex items-center gap-2 rounded-md border border-foreground px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
        >
          Replay
          <span aria-hidden>↻</span>
        </button>
      </footer>
    </article>
  );
}

/**
 * Draws the cubic-bezier curve into a 100x100 viewBox: input is x (time),
 * output is y (progress). Y is inverted because SVG runs top-to-bottom.
 */
function BezierCurveSvg({
  x1,
  y1,
  x2,
  y2,
  size = 140,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  size?: number;
}) {
  const path = `M 0 100 C ${x1 * 100} ${100 - y1 * 100} ${x2 * 100} ${
    100 - y2 * 100
  } 100 0`;

  return (
    <svg
      viewBox="-8 -8 116 116"
      width={size}
      height={size}
      role="img"
      aria-label="Easing curve graph"
      className="block"
    >
      {/* Frame */}
      <rect
        x={0}
        y={0}
        width={100}
        height={100}
        fill="white"
        stroke="#E0E0E1"
        strokeWidth={1}
        rx={4}
      />

      {/* Diagonal reference (linear) */}
      <line
        x1={0}
        y1={100}
        x2={100}
        y2={0}
        stroke="#E0E0E1"
        strokeWidth={1}
        strokeDasharray="2 3"
      />

      {/* Control-point handles */}
      <line
        x1={0}
        y1={100}
        x2={x1 * 100}
        y2={100 - y1 * 100}
        stroke="#BDB8FA"
        strokeWidth={1}
      />
      <line
        x1={100}
        y1={0}
        x2={x2 * 100}
        y2={100 - y2 * 100}
        stroke="#BDB8FA"
        strokeWidth={1}
      />

      {/* The curve itself */}
      <path d={path} fill="none" stroke="#6841E6" strokeWidth={2} />

      {/* Endpoints */}
      <circle cx={0} cy={100} r={3} fill="#0A0A0A" />
      <circle cx={100} cy={0} r={3} fill="#0A0A0A" />

      {/* Control points */}
      <circle cx={x1 * 100} cy={100 - y1 * 100} r={2.5} fill="#6841E6" />
      <circle cx={x2 * 100} cy={100 - y2 * 100} r={2.5} fill="#6841E6" />
    </svg>
  );
}
