import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { radiusTokens } from "@/lib/radii-tokens";

export const metadata: Metadata = {
  title: "Radii",
};

export default function RadiiPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Border Radii"
        description="Radius tokens and nested radius rule for surfaces and interactive elements."
        lastUpdated="April 27, 2026"
      />

      <h2>Token Scale</h2>
      <p>
        Consistent radii for surfaces, interactive elements, and nested insets.
      </p>

      <div className="not-prose mt-4 grid gap-4 md:grid-cols-4">
        {radiusTokens.map((r) => (
          <div
            key={r.name}
            className="rounded-lg border border-border bg-white p-4 text-center"
          >
            <div
              className="mx-auto mb-3 h-12 w-12 bg-purple-600"
              style={{ borderRadius: r.valueLabel }}
            />
            <p className="text-sm font-semibold text-foreground">
              --radius-{r.name}
            </p>
            <code className="ds-caption font-mono">{r.valueLabel}</code>
            <p className="ds-caption mt-2 text-muted">{r.use}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Nested Radius Rule</h2>
      <p>
        When a rectangular element is nested inside a rounded container, apply
        the nested-radius formula:
      </p>

      <div className="not-prose my-6 rounded-lg border-2 border-purple-300 bg-purple-50 p-6">
        <code className="block text-center font-mono text-sm font-semibold">
          inner radius = outer radius − padding
        </code>
      </div>

      <p>
        <strong>Example:</strong> A card with <code>--radius-4xl</code> (20px)
        and <code>padding-md</code> (16px) has inner elements at{" "}
        <code>--radius-inset-md</code> (4px).
      </p>

      <h3>Inset Tokens</h3>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 text-left font-semibold">Token</th>
            <th className="py-2 text-left font-semibold">Value</th>
            <th className="py-2 text-left font-semibold">When</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="py-2 font-mono">--radius-inset-sm</td>
            <td className="py-2">8px</td>
            <td className="py-2 text-sm">
              Inner elements in <code>padding-sm</code> (12px) cards → 20 − 12 = 8px
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="py-2 font-mono">--radius-inset-md</td>
            <td className="py-2">4px</td>
            <td className="py-2 text-sm">
              Inner elements in <code>padding-md</code> (16px) cards → 20 − 16 = 4px
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="py-2 font-mono">--radius-inset-lg</td>
            <td className="py-2">0px</td>
            <td className="py-2 text-sm">
              Inner elements in <code>padding-lg</code> (24px) cards → 20 − 24 = 0px
            </td>
          </tr>
        </tbody>
      </table>

      <h3>Exempt from Nested Rule</h3>
      <p className="text-muted">
        Buttons, badges, and avatars keep their own radius (intentional pill
        or circular shape).
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/foundations/spacing">Spacing</Link> — gaps and padding
        </li>
        <li>
          <Link href="/foundations/shadows">Shadows</Link> — elevation with
          radius
        </li>
      </ul>
    </article>
  );
}
