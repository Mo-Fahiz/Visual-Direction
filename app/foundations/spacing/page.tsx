import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Spacing",
};

export default function SpacingPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Spacing"
        description="Numeric scale for margins, padding, gaps, and component sizing."
        lastUpdated="April 27, 2026"
      />

      <h2>Spacing System</h2>
      <p>
        Based on <code>--spacing: 0.0625rem</code> (1px at 16px root). The
        utility number equals the pixel value: <code>gap-16</code> = 16px.
      </p>

      <h3>Spacing Scale</h3>
      <div className="not-prose mt-4 grid gap-2 md:grid-cols-6">
        {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 64, 80, 96].map((px) => (
          <div
            key={px}
            className="flex flex-col items-start rounded border border-border bg-white p-3"
          >
            <div
              className="mb-2 w-full bg-purple-600"
              style={{ height: `${px}px` }}
            />
            <code className="text-xs font-medium">gap-{px}</code>
            <span className="ds-caption text-muted">{px}px</span>
          </div>
        ))}
      </div>

      <h3>Usage Guide</h3>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 text-left font-semibold">Context</th>
            <th className="py-2 text-left font-semibold">Utility</th>
            <th className="py-2 text-left font-semibold">Use</th>
          </tr>
        </thead>
        <tbody>
          {[
            { context: "Micro gaps", utility: "gap-4", use: "Tiny spacing" },
            { context: "Tight spacing", utility: "gap-8", use: "Icon padding, inline elements" },
            { context: "Form fields", utility: "gap-12", use: "Small component padding" },
            { context: "Standard", utility: "gap-16", use: "Default padding and gaps" },
            { context: "Medium", utility: "gap-20", use: "Card gaps, medium spacing" },
            { context: "Large", utility: "gap-24", use: "Card padding lg, section gaps" },
            { context: "XL", utility: "gap-32", use: "Large component gaps" },
            { context: "XXL", utility: "gap-48", use: "Section margins" },
            { context: "Hero", utility: "gap-64", use: "Page sections" },
          ].map((row) => (
            <tr key={row.utility} className="border-b border-border">
              <td className="py-2">{row.context}</td>
              <td className="py-2 font-mono font-semibold">{row.utility}</td>
              <td className="py-2 text-sm text-muted">{row.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Component Sizing Scale</h3>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 text-left font-semibold">Utility</th>
            <th className="py-2 text-left font-semibold">Pixels</th>
            <th className="py-2 text-left font-semibold">Used by</th>
          </tr>
        </thead>
        <tbody>
          {[
            { utility: "h-32", px: "32px", use: "Button xs" },
            { utility: "h-40", px: "40px", use: "Button sm, TextInput sm" },
            { utility: "h-44", px: "44px", use: "Switch md, InputGroup md" },
            { utility: "h-48", px: "48px", use: "Button md, TextInput md" },
            { utility: "h-56", px: "56px", use: "Button lg, TextInput lg" },
            { utility: "h-64", px: "64px", use: "Button xl" },
          ].map((row) => (
            <tr key={row.utility} className="border-b border-border">
              <td className="py-2 font-mono font-semibold">{row.utility}</td>
              <td className="py-2">{row.px}</td>
              <td className="py-2 text-sm text-muted">{row.use}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Anti-patterns</h2>
      <ul>
        <li>
          Don&apos;t use <code>gap-2</code> for 8px (old 4px base). Use{" "}
          <code>gap-8</code> instead.
        </li>
        <li>
          Don&apos;t use raw <code>px</code> values. Always use Tailwind utilities.
        </li>
        <li>
          Don&apos;t use <code>var(--scale-*)</code> — these tokens have been
          removed.
        </li>
      </ul>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/foundations/radii">Border Radii</Link> — 9999px pill
          buttons, 20px cards
        </li>
        <li>
          <Link href="/foundations/color">Color</Link> — semantic palette
        </li>
      </ul>
    </article>
  );
}
