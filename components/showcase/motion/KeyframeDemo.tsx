"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { useState } from "react";
import { CodeChip } from "@/components/docs/CodeChip";
import type { Keyframe } from "@/lib/motion-tokens";

type Props = {
  keyframe: Keyframe;
};

/**
 * One card per shared keyframe — the live demo on the left, the spec on
 * the right. Each demo has its own bespoke "trigger" (the natural moment
 * a real component would play that animation).
 */
export function KeyframeDemo({ keyframe }: Props) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white">
      <header className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/60 px-5 py-4">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground">
            @keyframes {keyframe.name}
          </p>
          <p className="mt-0.5 text-xs text-muted">{keyframe.description}</p>
        </div>
        <span className="rounded-full bg-purple-50 px-2.5 py-1 font-mono text-[11px] text-purple-700">
          {keyframe.duration}ms · {keyframe.easing}
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-border">
        <div className="flex min-h-[180px] items-center justify-center bg-[#FAFAF8] p-6">
          <KeyframeStage keyframe={keyframe} />
        </div>
        <div className="px-5 py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            CSS body
          </p>
          <pre className="mb-4 overflow-x-auto rounded-md bg-[#161616] px-3 py-2 text-[11px] leading-relaxed text-white">
            {keyframe.cssBody}
          </pre>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
            Used by
          </p>
          <ul className="flex flex-wrap gap-2">
            {keyframe.consumers.map((c) => (
              <li key={c}>
                <CodeChip tone="neutral">{c}</CodeChip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/**
 * Bespoke per-keyframe stage. Each one mimics how the keyframe shows up
 * inside a real component, so the doc reads like a memory aid, not a
 * generic ball-rolling animation.
 */
function KeyframeStage({ keyframe }: { keyframe: Keyframe }) {
  switch (keyframe.name) {
    case "acko-spin":
      return <SpinStage />;
    case "acko-shake":
      return <ShakeStage />;
    case "acko-check-pop":
      return <CheckPopStage />;
    case "acko-menu-enter":
      return <MenuEnterStage />;
    case "acko-tick-pop":
      return <TickPopStage />;
    default:
      return null;
  }
}

/* -------------------------------- spin ----------------------------------- */

function SpinStage() {
  const reduced = useReducedMotion();
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.span
        aria-hidden
        className="block h-9 w-9 rounded-full border-[3px] border-purple-200 border-t-purple-600"
        animate={reduced ? { rotate: 0 } : { rotate: 360 }}
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 0.6, ease: "linear", repeat: Infinity }
        }
      />
      <span className="text-xs text-muted">Loading…</span>
    </div>
  );
}

/* ------------------------------- shake ----------------------------------- */

function ShakeStage() {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  return (
    <div className="flex w-full max-w-xs flex-col items-stretch gap-3">
      <motion.div
        key={n}
        className="rounded-md border-2 border-red-300 bg-white px-3 py-2 text-sm"
        animate={
          reduced
            ? {}
            : {
                x: [0, -4, 4, -3, 2, 0],
              }
        }
        transition={reduced ? { duration: 0 } : { duration: 0.3 }}
      >
        <p className="text-xs text-muted">Email</p>
        <p className="font-medium text-foreground">acko@</p>
      </motion.div>
      <p className="text-[11px] text-red-700">Email is incomplete</p>
      <button
        type="button"
        onClick={() => setN((v) => v + 1)}
        className="mt-1 self-start rounded-md border border-foreground px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
      >
        Trigger error
      </button>
    </div>
  );
}

/* ----------------------------- check-pop --------------------------------- */

function CheckPopStage() {
  const [n, setN] = useState(0);
  const reduced = useReducedMotion();

  return (
    <div className="flex w-full max-w-xs flex-col items-stretch gap-3">
      <div className="flex items-center justify-between rounded-md border border-green-300 bg-white px-3 py-2 text-sm">
        <div>
          <p className="text-xs text-muted">PIN code</p>
          <p className="font-medium text-foreground">560002</p>
        </div>
        <motion.span
          key={n}
          aria-hidden
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-[12px] font-bold text-white"
          initial={reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          animate={
            reduced
              ? { opacity: 1, scale: 1 }
              : { opacity: [0, 1, 1], scale: [0.5, 1.15, 1] }
          }
          transition={reduced ? { duration: 0 } : { duration: 0.3, times: [0, 0.6, 1] }}
        >
          ✓
        </motion.span>
      </div>
      <button
        type="button"
        onClick={() => setN((v) => v + 1)}
        className="mt-1 self-start rounded-md border border-foreground px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-white"
      >
        Re-validate
      </button>
    </div>
  );
}

/* --------------------------- menu-enter ---------------------------------- */

function MenuEnterStage() {
  const [open, setOpen] = useState(true);
  const reduced = useReducedMotion();

  return (
    <div className="relative flex w-full max-w-xs flex-col items-stretch gap-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between rounded-md border border-border bg-white px-3 py-2 text-sm text-foreground"
      >
        Select policy
        <span aria-hidden>{open ? "▴" : "▾"}</span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.ul
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.15, ease: [0.215, 0.61, 0.355, 1] }
            }
            className="overflow-hidden rounded-md border border-border bg-white text-sm shadow-md"
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
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* ----------------------------- tick-pop ---------------------------------- */

function TickPopStage() {
  const [selected, setSelected] = useState<string>("Health");
  const reduced = useReducedMotion();

  return (
    <ul className="flex w-full max-w-xs flex-col gap-1 rounded-md border border-border bg-white p-1 text-sm">
      {["Health", "Car", "Bike"].map((label) => {
        const active = selected === label;
        return (
          <li key={label}>
            <button
              type="button"
              onClick={() => setSelected(label)}
              className={[
                "flex w-full items-center justify-between rounded px-2.5 py-1.5",
                active
                  ? "bg-purple-50 text-purple-700"
                  : "text-foreground hover:bg-purple-50/40",
              ].join(" ")}
            >
              {label}
              <AnimatePresence initial={false}>
                {active ? (
                  <motion.span
                    aria-hidden
                    initial={
                      reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }
                    }
                    animate={
                      reduced
                        ? { opacity: 1, scale: 1 }
                        : { opacity: [0, 1, 1], scale: [0.3, 1.15, 1] }
                    }
                    exit={{ opacity: 0, scale: 0.3 }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { duration: 0.25, times: [0, 0.6, 1] }
                    }
                    className="font-bold text-purple-600"
                  >
                    ✓
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
