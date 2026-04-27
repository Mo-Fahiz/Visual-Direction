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
        The system uses a small set of easing curves and keyframes applied
        consistently across interactions.
      </p>

      <h3>Easing Curves</h3>
      <div className="not-prose mt-4 space-y-4">
        {[
          {
            name: "ease-out-quad",
            curve: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            use: "Standard exit",
            duration: "150ms",
          },
          {
            name: "ease-out-cubic",
            curve: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            use: "Dropdown/modal enter",
            duration: "200ms",
          },
          {
            name: "ease-out-quart",
            curve: "cubic-bezier(0.165, 0.84, 0.44, 1)",
            use: "Strong deceleration",
            duration: "300ms",
          },
          {
            name: "ease-in-out-cubic",
            curve: "cubic-bezier(0.645, 0.045, 0.355, 1)",
            use: "On-screen movement",
            duration: "250ms",
          },
        ].map((e) => (
          <div
            key={e.name}
            className="rounded-lg border border-border bg-white p-4"
          >
            <p className="text-sm font-semibold text-foreground">{e.name}</p>
            <code className="ds-caption mt-1 block font-mono text-[11px]">
              {e.curve}
            </code>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-muted">{e.use}</span>
              <span className="text-purple-600">{e.duration}</span>
            </div>

            {/* Visual easing demo */}
            <div className="mt-4 h-16 rounded-lg border border-border bg-gray-50 p-2">
              <div
                className="h-3 w-3 rounded-full bg-purple-600"
                style={{
                  animation: `slideRight 2s ${e.curve} infinite`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(0); }
          50% { transform: translateX(calc(100% - 12px - 8px)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <h3>Keyframe Animations</h3>
      <div className="not-prose mt-4 grid gap-4 md:grid-cols-2">
        {[
          {
            name: "acko-spin",
            desc: "Loading spinner",
            keyframes:
              "0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }",
            duration: "600ms",
          },
          {
            name: "acko-shake",
            desc: "Error shake",
            keyframes:
              "0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); }",
            duration: "300ms",
          },
          {
            name: "acko-check-pop",
            desc: "Success check",
            keyframes:
              "0% { opacity: 0; transform: scale(0.5); } 60% { opacity: 1; transform: scale(1.15); } 100% { opacity: 1; transform: scale(1); }",
            duration: "300ms",
          },
          {
            name: "acko-menu-enter",
            desc: "Dropdown enter",
            keyframes:
              "from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); }",
            duration: "150ms",
          },
        ].map((k) => (
          <div key={k.name} className="rounded-lg border border-border bg-white p-4">
            <p className="text-sm font-semibold text-foreground">{k.name}</p>
            <p className="ds-caption mt-1 text-muted">{k.desc}</p>
            <code className="ds-caption mt-2 block font-mono text-[10px]">
              {k.keyframes.split("}")[0]}…
            </code>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <span className="text-purple-600">Duration: {k.duration}</span>
            </div>
          </div>
        ))}
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

      <h2 className="mt-12">Related</h2>
      <ul>
        <li>
          <Link href="/ui-kit">UI Kit</Link> — colors, spacing, shadows, radii
        </li>
        <li>
          <Link href="/foundations">Foundations</Link> — design tokens and
          reference
        </li>
        <li>
          <Link href="/visual-direction">Visual direction</Link> — imagery and
          brand narrative
        </li>
      </ul>
    </article>
  );
}
