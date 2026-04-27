import type { ReactNode } from "react";

type Cell = ReactNode;

type Props = {
  headers: Cell[];
  rows: Cell[][];
  /** Optional column-width hints, e.g. ["20%","30%","30%","20%"] */
  colWidths?: (string | undefined)[];
  caption?: string;
};

/**
 * Clean, Carbon-flavoured documentation table — no zebra striping,
 * subtle borders, monospace cells when needed (passed by caller as ReactNode).
 */
export function PageTable({ headers, rows, colWidths, caption }: Props) {
  return (
    <div className="not-prose -mx-4 mb-6 overflow-x-auto md:mx-0">
      <table className="w-full border-collapse text-left text-sm">
        {caption ? (
          <caption className="mb-2 text-left text-xs uppercase tracking-[0.08em] text-muted">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="border-y border-border bg-white/50">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                style={{ width: colWidths?.[i] }}
                className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-muted"
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
              className="border-b border-border/70 align-top last:border-b-0"
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 text-[0.875rem] leading-relaxed text-foreground"
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
