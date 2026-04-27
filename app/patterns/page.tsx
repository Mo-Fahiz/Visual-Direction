import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Patterns",
};

export default function PatternsPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Patterns"
        description="Recurring interaction and layout patterns built on the design system."
        lastUpdated="April 27, 2026"
      />

      <h2>Motion & Animation Patterns</h2>
      <p className="text-muted">
        Motion lives at the Foundation level — the canonical, replayable
        renders for every easing curve, duration, and shared keyframe are on
        the{" "}
        <Link href="/foundations/motion" className="underline">
          Motion Foundation
        </Link>{" "}
        page. This section calls out a few <em>composed</em> motion patterns
        that show up across the product.
      </p>

      <div className="not-prose mt-4 rounded-xl border border-border bg-white p-5">
        <p className="text-sm font-semibold text-foreground">
          Looking for the canonical curves and keyframes?
        </p>
        <p className="ds-caption mt-2 text-muted">
          Live, replayable demos for every easing token, duration, and
          keyframe — plus reduced-motion and performance comparisons.
        </p>
        <Link
          href="/foundations/motion"
          className="ds-btn-outline mt-4 inline-flex"
        >
          Open Motion Foundation
        </Link>
      </div>

      <h2 className="mt-12">Layout Patterns</h2>
      <p className="text-muted">
        Recurring structural patterns for pages, forms, and content organization.
      </p>

      <h3>Section Spacing</h3>
      <div className="not-prose mt-4 rounded-lg border border-border bg-white p-6">
        <div className="space-y-6">
          <div className="rounded bg-purple-100 p-4 text-center text-sm">
            Section 1 (64px gap below)
          </div>
          <div className="rounded bg-purple-100 p-4 text-center text-sm">
            Section 2 (64px gap below)
          </div>
          <div className="rounded bg-purple-100 p-4 text-center text-sm">
            Section 3
          </div>
        </div>
        <p className="ds-caption mt-4 text-muted">
          Use <code>gap-64</code> (64px) between full-bleed sections.
        </p>
      </div>

      <h3>Form Field Patterns</h3>
      <div className="not-prose mt-4 rounded-lg border border-border bg-white p-6">
        <div className="space-y-4">
          {/* Form field 1 */}
          <div>
            <label className="block text-sm font-medium text-foreground">
              Email address
            </label>
            <input
              type="text"
              className="mt-2 w-full rounded border border-border bg-white px-4 py-2 text-sm placeholder-gray-400"
              placeholder="you@example.com"
              disabled
            />
            <p className="ds-caption mt-1 text-muted">Helper text</p>
          </div>

          {/* Form field 2 */}
          <div>
            <label className="block text-sm font-medium text-foreground">
              Password
            </label>
            <input
              type="password"
              className="mt-2 w-full rounded border-2 border-red-600 bg-white px-4 py-2 text-sm"
              placeholder="Enter password"
            />
            <p className="ds-caption mt-1 text-red-700">Password too short</p>
          </div>
        </div>
        <p className="ds-caption mt-4 text-muted">
          Label + input gap: <code>gap-8</code> (8px). Input + helper gap:{" "}
          <code>gap-8</code> (8px). Between fields: <code>gap-20</code> (20px).
        </p>
      </div>

      <h3>Card Grid Pattern</h3>
      <div className="not-prose mt-4 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border border-border bg-white p-6">
            <div className="mb-4 h-24 rounded bg-purple-100" />
            <h4 className="font-semibold text-foreground">Card {i}</h4>
            <p className="ds-caption mt-2 text-muted">
              Supporting text goes here.
            </p>
          </div>
        ))}
      </div>
      <p className="ds-caption not-prose mt-3 text-muted">
        Grid gap: <code>gap-16</code> mobile, <code>gap-24</code> desktop.
      </p>

      <h2 className="mt-12">Interactive Patterns</h2>

      <h3>Button States</h3>
      <div className="not-prose mt-4 space-y-3">
        {[
          { label: "Primary", class: "bg-purple-600 text-white" },
          {
            label: "Primary Hover",
            class: "bg-purple-700 text-white",
          },
          {
            label: "Primary Active",
            class: "bg-purple-800 text-white",
          },
          {
            label: "Secondary",
            class: "border-2 border-purple-200 bg-purple-50 text-purple-700",
          },
          {
            label: "Disabled",
            class: "bg-gray-100 text-gray-350",
          },
        ].map((b) => (
          <button
            key={b.label}
            className={`rounded-full px-6 py-2 text-sm font-medium ${b.class}`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <h3>Feedback Messages</h3>
      <div className="not-prose mt-4 space-y-3">
        {[
          {
            type: "Success",
            bg: "bg-green-50",
            border: "border-green-200",
            text: "text-green-700",
            icon: "✓",
          },
          {
            type: "Error",
            bg: "bg-red-50",
            border: "border-red-200",
            text: "text-red-700",
            icon: "✕",
          },
          {
            type: "Warning",
            bg: "bg-orange-50",
            border: "border-orange-200",
            text: "text-orange-700",
            icon: "!",
          },
          {
            type: "Info",
            bg: "bg-purple-50",
            border: "border-purple-200",
            text: "text-purple-700",
            icon: "ℹ",
          },
        ].map((f) => (
          <div
            key={f.type}
            className={`flex gap-3 rounded-lg border ${f.bg} ${f.border} p-4`}
          >
            <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${f.text}`}>
              {f.icon}
            </div>
            <div className={`text-sm ${f.text}`}>
              <strong>{f.type}:</strong> This is a {f.type.toLowerCase()} message.
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Performance Rules</h2>
      <ul>
        <li>
          <strong>Only animate `transform` and `opacity`.</strong> Never animate
          padding, margin, height, or width.
        </li>
        <li>
          <strong>Respect `prefers-reduced-motion`.</strong> Disable animations
          for users who request reduced motion.
        </li>
        <li>
          <strong>Exit animations are 20–30% faster than entrance</strong> (exit
          at 150ms, enter at 200ms).
        </li>
        <li>
          <strong>Use `will-change: transform`</strong> for frequently animated
          elements to hint GPU acceleration.
        </li>
      </ul>

      <h2 className="mt-12">Responsive Breakpoints</h2>
      <div className="not-prose mt-4 space-y-2">
        {[
          {
            name: "Mobile",
            range: "0 – 767px",
            query: "No media query (base styles)",
          },
          {
            name: "Tablet",
            range: "768px – 1023px",
            query: "@media (min-width: 768px)",
          },
          {
            name: "Desktop",
            range: "≥ 1024px",
            query: "@media (min-width: 1024px)",
          },
        ].map((bp) => (
          <div
            key={bp.name}
            className="rounded border border-border bg-white p-3"
          >
            <p className="text-sm font-semibold text-foreground">{bp.name}</p>
            <p className="ds-caption mt-1">
              {bp.range}
              <span className="ml-2 block text-purple-600">{bp.query}</span>
            </p>
          </div>
        ))}
      </div>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/foundations/motion">Motion Foundation</Link> — easing curves
          and keyframes
        </li>
        <li>
          <Link href="/ui-kit">UI Kit</Link> — overview
        </li>
      </ul>
    </article>
  );
}
