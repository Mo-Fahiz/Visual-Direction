"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export type IconEntry = { name: string; path: string; tags: string[] };

const ICON_BUCKET = "https://pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev";
const ROWS = 7;        // visible rows at rest
const COLS = 8;
const ROW_GAP = 12;
const CELL_SIZE = 72;
const ROW_STRIDE = CELL_SIZE + ROW_GAP;
const INTERVAL_MS = 5000;
const SLIDE_MS = 700;

function iconUrl(path: string): string {
  return (
    ICON_BUCKET +
    path
      .split("/")
      .map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg)))
      .join("/")
  );
}

function labelize(name: string): string {
  return name
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickRandom(icons: IconEntry[], n: number, exclude: Set<string>): IconEntry[] {
  const available = icons.filter((i) => !exclude.has(i.path));
  const pool = available.length >= n ? available : icons.slice();
  shuffle(pool);
  return pool.slice(0, n);
}

type Phase = "rest" | "primed" | "running";

/**
 * Cycling icon library.
 *
 * At rest the stack holds exactly ROWS rows with transform `translateY(0)`.
 * On each tick we:
 *   1. Prepend a new row → length becomes ROWS + 1.
 *   2. Set the transform to `translateY(-ROW_STRIDE)` with NO transition.
 *      The new top row is now hidden above the visible viewport.
 *   3. After two animation frames, flip the transform to `translateY(0)`
 *      with a transition — the whole stack slides down by one row, the
 *      new row enters from the top, the previous bottom row slides
 *      into the fade gradient.
 *   4. When the transition ends, drop the now off-screen last row so
 *      length is back to ROWS. The rest state is unchanged from before
 *      step 1 in terms of visible position — no snap-back glitch.
 */
export function IconLibraryGrid({ icons }: { icons: IconEntry[] }) {
  const [rows, setRows] = useState<IconEntry[][]>([]);
  const [phase, setPhase] = useState<Phase>("rest");
  const recentRef = useRef<Set<string>>(new Set());

  /* ── Initial fill ───────────────────────────────────────────── */
  useEffect(() => {
    if (!icons.length) return;
    const initial: IconEntry[][] = [];
    for (let r = 0; r < ROWS; r++) {
      const row = pickRandom(icons, COLS, recentRef.current);
      row.forEach((i) => recentRef.current.add(i.path));
      initial.push(row);
    }
    setRows(initial);
  }, [icons]);

  /* ── Cycle ──────────────────────────────────────────────────── */
  useEffect(() => {
    if (!icons.length) return;

    const id = setInterval(() => {
      // 1. Pick a fresh row.
      const newRow = pickRandom(icons, COLS, recentRef.current);
      newRow.forEach((i) => recentRef.current.add(i.path));
      // Recycle the recency memory before it crowds the pool.
      if (recentRef.current.size > ROWS * COLS * 3) {
        recentRef.current = new Set(
          Array.from(recentRef.current).slice(-ROWS * COLS)
        );
      }

      // 2. Prepend → length ROWS + 1. Prime the transform above viewport.
      setRows((prev) => [newRow, ...prev]);
      setPhase("primed");

      // 3. Two rAFs to guarantee the browser commits the primed state
      //    before we flip to the animating state. Without the double
      //    rAF, React may batch and the transition never fires.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPhase("running"));
      });

      // 4. Snap back to rest length once the slide is done.
      setTimeout(() => {
        setRows((prev) => prev.slice(0, ROWS));
        setPhase("rest");
      }, SLIDE_MS + 20);
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, [icons]);

  if (!rows.length) return null;

  const visibleHeight = ROWS * CELL_SIZE + (ROWS - 1) * ROW_GAP;
  const translateY = phase === "primed" ? -ROW_STRIDE : 0;
  const transition =
    phase === "running"
      ? `transform ${SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
      : "none";

  return (
    <div
      className="relative"
      style={{ height: visibleHeight, overflow: "hidden" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
          gridAutoRows: `${CELL_SIZE}px`,
          gap: `${ROW_GAP}px`,
          justifyContent: "space-between",
          transform: `translateY(${translateY}px)`,
          transition,
          willChange: "transform",
        }}
      >
        {rows.flat().map((icon, idx) => (
          <div
            key={`${icon.path}-${idx}`}
            className="flex items-center justify-center"
            title={labelize(icon.name)}
          >
            <Image
              src={iconUrl(icon.path)}
              alt={icon.name}
              width={28}
              height={28}
              className="h-7 w-7"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Bottom fade — last ~2 rows dissolve into the page background. */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: `${(2 / ROWS) * 100}%`,
          background:
            "linear-gradient(to bottom, rgba(250,250,251,0) 0%, rgba(250,250,251,0.7) 55%, #FAFAFB 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
