import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Shadows",
};

export default function ShadowsPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Shadows"
        description="Elevation hierarchy using shadow tiers and semantic aliases."
        lastUpdated="April 27, 2026"
      />

      <h2>Elevation Tiers (Primitive)</h2>
      <p>
        Use semantic names, not ad-hoc blur stacks. These tiers define the
        elevation hierarchy.
      </p>

      <div className="not-prose mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "xs",
            shadow: "0 1px 2px rgba(0,0,0,0.04)",
            use: "Subtle depth",
          },
          {
            name: "sm",
            shadow: "0 1px 4px rgba(0,0,0,0.06)",
            use: "Light elevation",
          },
          {
            name: "md",
            shadow: "0 2px 8px rgba(0,0,0,0.06)",
            use: "Medium elevation",
          },
          {
            name: "lg",
            shadow: "0px 2px 16px 4px rgba(0,0,0,0.04)",
            use: "Cards, dropdowns",
          },
          {
            name: "xl",
            shadow: "0 4px 24px rgba(0,0,0,0.10)",
            use: "Modals, dialogs",
          },
          {
            name: "2xl",
            shadow: "0 8px 32px rgba(0,0,0,0.14)",
            use: "Maximum elevation",
          },
        ].map((s) => (
          <div
            key={s.name}
            className="rounded-lg border border-border bg-white p-4"
            style={{ boxShadow: s.shadow }}
          >
            <p className="text-sm font-semibold text-foreground">
              --shadow-{s.name}
            </p>
            <code className="ds-caption mt-2 block font-mono text-[10px]">
              {s.shadow}
            </code>
            <p className="ds-caption mt-2 text-muted">{s.use}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Semantic Aliases</h2>
      <p>Use these semantic names in component CSS instead of tiers.</p>

      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 text-left font-semibold">Token</th>
            <th className="py-2 text-left font-semibold">Maps to</th>
            <th className="py-2 text-left font-semibold">Use Case</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="py-2 font-mono">--shadow-card</td>
            <td className="py-2 font-mono">--shadow-lg</td>
            <td className="py-2 text-sm">Elevated cards</td>
          </tr>
          <tr className="border-b border-border">
            <td className="py-2 font-mono">--shadow-dropdown</td>
            <td className="py-2 font-mono">--shadow-lg</td>
            <td className="py-2 text-sm">Dropdown menus, popovers</td>
          </tr>
          <tr className="border-b border-border">
            <td className="py-2 font-mono">--shadow-modal</td>
            <td className="py-2 font-mono">--shadow-xl</td>
            <td className="py-2 text-sm">Modals, dialogs</td>
          </tr>
          <tr className="border-b border-border">
            <td className="py-2 font-mono">--shadow-subtle</td>
            <td className="py-2 font-mono">--shadow-xs</td>
            <td className="py-2 text-sm">Small element depth</td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-12">Component-Specific Shadows</h2>

      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2 text-left font-semibold">Token</th>
            <th className="py-2 text-left font-semibold">Light</th>
            <th className="py-2 text-left font-semibold">Used by</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="py-2 font-mono text-sm">--shadow-btn-inner</td>
            <td className="py-2 font-mono text-[11px]">
              inset 0 1px 2px rgba(255,255,255,0.28)
            </td>
            <td className="py-2 text-sm">Primary, secondary buttons</td>
          </tr>
          <tr className="border-b border-border">
            <td className="py-2 font-mono text-sm">--shadow-btn-hover</td>
            <td className="py-2 font-mono text-[11px]">
              0 4px 8px rgba(0,0,0,0.08)
            </td>
            <td className="py-2 text-sm">Button hover</td>
          </tr>
          <tr className="border-b border-border">
            <td className="py-2 font-mono text-sm">--shadow-focus-ring</td>
            <td className="py-2 font-mono text-[11px]">
              0 0 0 3px var(--color-primary-ring)
            </td>
            <td className="py-2 text-sm">All focusable elements</td>
          </tr>
        </tbody>
      </table>

      <h2 className="mt-12">Dark Mode Note</h2>
      <p className="text-muted">
        Shadows are heavier in dark theme to remain visible on dark surfaces.
        The semantic values remain the same, but the underlying blur radii
        increase when <code>[data-theme=&quot;dark&quot;]</code> is applied.
      </p>

      <h2>Rules</h2>
      <ul>
        <li>Never use harsh drop shadows — keep them diffused.</li>
        <li>Prefer box-shadow over border for hairline edges.</li>
        <li>Always use semantic names (<code>--shadow-card</code>), not tiers.</li>
      </ul>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/foundations/radii">Border Radii</Link> — rounded corners
          with shadows
        </li>
        <li>
          <Link href="/ui-kit">UI Kit</Link> — see shadows in context
        </li>
      </ul>
    </article>
  );
}
