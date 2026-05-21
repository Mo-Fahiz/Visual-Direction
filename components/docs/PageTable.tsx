import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Cell = ReactNode;

type Props = {
  headers: Cell[];
  rows: Cell[][];
  /** Optional column-width hints, e.g. ["20%","30%","30%","20%"] */
  colWidths?: (string | undefined)[];
  caption?: string;
  className?: string;
};

/**
 * Clean, Carbon-flavoured documentation table — no zebra striping,
 * subtle borders, monospace cells when needed (passed by caller as ReactNode).
 */
export function PageTable({ headers, rows, colWidths, caption, className }: Props) {
  return (
    <div
      className={cn(
        "not-prose mb-8 w-full min-w-0 overflow-x-auto rounded-2xl border border-border/50",
        className
      )}
    >
      <table className="w-full border-collapse text-left text-sm">
        {caption ? (
          <caption className="caption-top px-5 pt-5 pb-4 text-left text-xs uppercase tracking-[0.08em] text-muted">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="border-b border-border/50 bg-[#fafaf8]">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                style={{ width: colWidths?.[i] }}
                className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.06em] text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="border-b border-border/40 align-top last:border-b-0"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-5 py-4 text-[0.875rem] leading-relaxed text-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
