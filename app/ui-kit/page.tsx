import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { palette } from "@/lib/showcase-tokens";

export const metadata: Metadata = {
  title: "UI Kit",
};

/** Color swatch display — shows primitive + semantic pair. */
function ColorSwatch({
  name,
  hex,
  role,
  className,
}: {
  name: string;
  hex: string;
  role?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className="h-16 rounded-lg border border-border"
        style={{ background: hex }}
        aria-label={`${name} swatch`}
      />
      <p className="ds-caption mt-2 font-mono font-medium text-foreground">
        {name}
      </p>
      <p className="ds-caption font-mono text-muted">{hex}</p>
      {role && <p className="ds-caption mt-1 text-[11px] text-muted">{role}</p>}
    </div>
  );
}

export default function UIKitPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="UI Kit"
        description="Comprehensive design system reference: colors, spacing, radii, shadows, and theming."
        lastUpdated="April 27, 2026"
      />

      <h2>Color System</h2>
      <p className="text-muted">
        Organized in two layers: <strong>primitives</strong> (raw palette) and{" "}
        <strong>semantics</strong> (role-based tokens). Components always
        reference semantics.
      </p>

      <h3>Brand Purple</h3>
      <div className="not-prose mt-4 grid gap-3 md:grid-cols-4 lg:grid-cols-6">
        {[
          { name: "50", hex: palette.P50, role: "Subtle bg" },
          { name: "100", hex: palette.P100, role: "Tinted bg" },
          { name: "200", hex: palette.P200, role: "Ring" },
          { name: "400", hex: palette.P400, role: "Muted" },
          { name: "600", hex: palette.P600, role: "Primary" },
          { name: "700", hex: palette.P700, role: "Primary hover" },
          { name: "800", hex: palette.P800, role: "Primary active" },
          { name: "950", hex: palette.P950, role: "Dark mode" },
        ].map((c) => (
          <ColorSwatch
            key={c.name}
            name={`P${c.name}`}
            hex={c.hex}
            role={c.role}
          />
        ))}
      </div>

      <h3>Semantic Color Tokens</h3>
      <div className="not-prose mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-sm font-semibold text-foreground">Primary</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-purple-600" />
              <span className="text-sm">--color-primary</span>
              <code className="ml-auto text-xs">#6841E6</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded border border-border bg-white" />
              <span className="text-sm">--color-on-primary</span>
              <code className="ml-auto text-xs">#FFFFFF</code>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-sm font-semibold text-foreground">Surfaces</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded border border-border bg-gray-100" />
              <span className="text-sm">--color-surface</span>
              <code className="ml-auto text-xs">#F5F5F5</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded border border-border bg-white" />
              <span className="text-sm">--color-surface-raised</span>
              <code className="ml-auto text-xs">#FFFFFF</code>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-sm font-semibold text-foreground">Text</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-black" />
              <span className="text-sm">--color-text-primary</span>
              <code className="ml-auto text-xs">#0A0A0A</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gray-500" />
              <span className="text-sm">--color-text-secondary</span>
              <code className="ml-auto text-xs">#605F63</code>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-white p-4">
          <p className="text-sm font-semibold text-foreground">Feedback</p>
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-red-600" />
              <span className="text-sm">--color-error</span>
              <code className="ml-auto text-xs">#DC2626</code>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-green-600" />
              <span className="text-sm">--color-success</span>
              <code className="ml-auto text-xs">#16A34A</code>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Spacing System</h2>
      <p className="text-muted">
        Based on <code>--spacing: 0.0625rem</code> (1px). The utility number
        equals pixels: <code>gap-16</code> = 16px.
      </p>

      <div className="not-prose mt-4 grid gap-2 md:grid-cols-4">
        {[4, 8, 12, 16, 20, 24, 32, 48, 64].map((px) => (
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

      <h2 className="mt-12">Border Radius Tokens</h2>
      <div className="not-prose mt-4 grid gap-4 md:grid-cols-4">
        {[
          { name: "sm", value: "4px", use: "Nested insets" },
          { name: "md", value: "6px", use: "Checkboxes" },
          { name: "lg", value: "8px", use: "Options, cells" },
          { name: "xl", value: "10px", use: "Tooltips" },
          { name: "2xl", value: "12px", use: "General" },
          {
            name: "4xl",
            value: "20px",
            use: "Cards, dialogs, menus",
          },
          { name: "full", value: "9999px", use: "Buttons, pills" },
        ].map((r) => (
          <div
            key={r.name}
            className="rounded-lg border border-border bg-white p-4 text-center"
          >
            <div
              className="mx-auto mb-3 h-12 w-12 bg-purple-600"
              style={{ borderRadius: r.value }}
            />
            <p className="text-sm font-semibold text-foreground">
              --radius-{r.name}
            </p>
            <code className="ds-caption font-mono">{r.value}</code>
            <p className="ds-caption mt-1 text-muted">{r.use}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Shadow Tokens (Elevation Hierarchy)</h2>
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

      <h2 className="mt-12">Typography Scale (15 steps)</h2>
      <div className="not-prose mt-4 space-y-3">
        {[
          { step: "10px", lh: "12px", use: "Extra small" },
          { step: "12px", lh: "16px", use: "Captions, labels" },
          { step: "14px", lh: "20px", use: "Small text" },
          { step: "16px", lh: "24px", use: "Body default" },
          { step: "18px", lh: "24px", use: "Body lg" },
          { step: "20px", lh: "28px", use: "Subheading" },
          { step: "24px", lh: "32px", use: "Heading" },
          { step: "30px", lh: "36px", use: "Display sm" },
          { step: "36px", lh: "44px", use: "Display md" },
          { step: "48px", lh: "56px", use: "Display lg" },
        ].map((t) => (
          <div key={t.step} className="rounded border border-border bg-white p-4">
            <div
              style={{ fontSize: t.step, lineHeight: t.lh }}
              className="font-semibold text-foreground"
            >
              The quick brown fox
            </div>
            <div className="ds-caption mt-2 flex gap-4 text-muted">
              <span>
                Size: <code>{t.step}</code>
              </span>
              <span>
                Line height: <code>{t.lh}</code>
              </span>
              <span>{t.use}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Theming</h2>
      <p className="text-muted">
        The system supports light and dark themes via CSS custom properties.
        Switch themes with <code>[data-theme=&quot;dark|light&quot;]</code> on the root element.
      </p>

      <div className="not-prose mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border-2 border-purple-600 bg-white p-6">
          <p className="mb-4 text-sm font-semibold text-foreground">
            Light Theme
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-purple-600" />
              <span className="text-sm">Primary: #6841E6</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded border border-border bg-white" />
              <span className="text-sm">Surface: #FFFFFF</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-black" />
              <span className="text-sm">Text: #0A0A0A</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-blue-400 bg-gray-900 p-6 text-white">
          <p className="mb-4 text-sm font-semibold">Dark Theme</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-purple-500" />
              <span className="text-sm">Primary: #7A62F0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded border border-gray-600 bg-gray-800" />
              <span className="text-sm">Surface: #0F0F10</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-white" />
              <span className="text-sm">Text: #FBFBFB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose mt-6 rounded-xl border border-border bg-blue-50 p-4">
        <p className="text-sm text-blue-900">
          <strong>Theme activation:</strong> Add{" "}
          <code className="rounded bg-white px-2 py-1">
            data-theme=&quot;dark&quot;
          </code>{" "}
          to <code className="rounded bg-white px-2 py-1">&lt;html&gt;</code> or
          use JavaScript to detect system preference.
        </p>
      </div>

      <h2 className="mt-12">Component-Specific Tokens</h2>
      <p className="text-muted">
        Beyond global semantics, components define their own token sets for
        detailed control:
      </p>

      <ul className="mt-4 space-y-2">
        <li>
          <strong>Button:</strong> Primary, secondary, ghost, danger, disabled
          states
        </li>
        <li>
          <strong>Input:</strong> Default, focus, error, disabled, hover borders
        </li>
        <li>
          <strong>Badge:</strong> Solid + outline variants in 6 colors each
        </li>
        <li>
          <strong>Tab:</strong> Pill container, active/inactive states
        </li>
        <li>
          <strong>Calendar:</strong> Selected, range, hover, today states
        </li>
        <li>
          <strong>Slider:</strong> Track gradient, thumb states, ring
        </li>
      </ul>

      <h2 className="mt-12">Z-Index Scale</h2>
      <div className="not-prose mt-4 grid gap-2">
        {[
          { name: "dropdown", z: 100 },
          { name: "sticky", z: 150 },
          { name: "modal", z: 200 },
          { name: "tooltip", z: 300 },
          { name: "toast", z: 400 },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded border border-border bg-white px-4 py-2"
          >
            <code className="text-sm font-mono">--z-{item.name}</code>
            <span className="text-sm font-semibold text-purple-600">
              {item.z}
            </span>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Related</h2>
      <ul>
        <li>
          <Link href="/foundations/typography">Typography</Link> — font families,
          weights, scale
        </li>
        <li>
          <Link href="/foundations/color">Color</Link> — semantic palette
        </li>
        <li>
          <Link href="/patterns">Patterns</Link> — motion, layout, interactions
        </li>
      </ul>
    </article>
  );
}
