import type { Metadata } from "next";
import Link from "next/link";
import { CodeChip } from "@/components/docs/CodeChip";
import { DoDont } from "@/components/docs/DoDont";
import { PageTable } from "@/components/docs/PageTable";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Colour · Usage",
};

export default function ColorUsagePage() {
  return (
    <>
      <Section
        id="when-to-use-semantic"
        title="When to use semantic tokens"
        description="Always. Components must read semantic tokens — never primitives. The only exception is when you are *defining* a semantic token in the theme layer."
      >
        <DoDont
          doItems={[
            "Reference --color-primary, --color-surface, --color-text-default, --color-error.",
            "Pick the token whose role matches your intent — error text always uses --color-text-error, even if it happens to look right with --color-text-primary today.",
            "When a value is missing, propose a new semantic token rather than reaching for a primitive.",
          ]}
          dontItems={[
            "Reference --purple-600 or any other primitive in component CSS.",
            "Hard-code hex values in JSX or inline styles in product code.",
            "Reuse a feedback colour for decoration. Red means error, not 'a fun accent'.",
          ]}
        />
      </Section>

      <Section
        id="designing-for-modes"
        title="Designing for modes"
        description="Light and dark are not visual variants of the same screen — they are two production environments. Every flow must be reviewed in both."
      >
        <Section id="when-to-use-modes" level={3} title="When to use which mode">
          <PageTable
            headers={["Context", "Recommended mode"]}
            colWidths={["55%", "45%"]}
            rows={[
              ["Marketing, onboarding, claim flows, dashboards", "ACKO Light"],
              ["Video, focused diagnostics, late-night review surfaces", "ACKO Dark"],
              ["Print or PDF exports", "ACKO Light only"],
            ]}
          />
        </Section>

        <Section id="how-modes-work" level={3} title="How modes work">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
            Each theme is a flat block of CSS custom properties scoped to{" "}
            <CodeChip tone="neutral">[data-theme=&quot;...&quot;]</CodeChip>.
            Switching themes is a single attribute change on{" "}
            <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">
              html
            </code>
            ; no re-render, no class shuffle, no specificity dance.
          </p>
        </Section>
      </Section>

      <Section
        id="layering-tokens"
        title="Layering tokens"
        description="Surface tokens come in tiers — page, raised, raised-hover, raised-active. Stack them so depth reads at a glance."
      >
        <PageTable
          headers={["Tier", "Token", "Use for"]}
          colWidths={["20%", "40%", "40%"]}
          rows={[
            [
              "Page",
              <CodeChip key="s">--color-surface</CodeChip>,
              "Outermost canvas. The base of every screen.",
            ],
            [
              "Raised",
              <CodeChip key="r">--color-surface-raised</CodeChip>,
              "Cards, sheets, popovers, modals.",
            ],
            [
              "Raised · hover",
              <CodeChip key="rh">--color-surface-raised-hover</CodeChip>,
              "Cursor over a raised element. Optional — only when feedback is needed.",
            ],
            [
              "Raised · active",
              <CodeChip key="ra">--color-surface-raised-active</CodeChip>,
              "Pressed / committing.",
            ],
          ]}
        />
      </Section>

      <Section
        id="contextual-tokens"
        title="Contextual tokens"
        description="Some token groups carry an implied context — buttons, inputs, tabs, calendar, badges. Use the contextual token when one exists; reach for a generic surface token only when no contextual one applies."
      >
        <PageTable
          headers={["Use case", "Reach for", "Don’t reach for"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            [
              "Button background fills",
              <CodeChip key="b">--color-btn-secondary-bg</CodeChip>,
              <CodeChip key="bn">--color-surface-raised</CodeChip>,
            ],
            [
              "Selected dropdown option",
              <CodeChip key="d">--color-input-option-selected-bg</CodeChip>,
              <CodeChip key="dn">--color-primary-subtle</CodeChip>,
            ],
            [
              "Tab pill (active)",
              <CodeChip key="t">--color-tab-pill-active-bg</CodeChip>,
              <CodeChip key="tn">--color-primary-subtle</CodeChip>,
            ],
          ]}
        />
      </Section>

      <Section
        id="info-uses-purple"
        title="Info uses purple, not blue"
        description="Brand alignment: every informational notice — the (i) icon, info banners, neutral toasts — uses the purple feedback ramp. Blue is reserved for inline links inside body text."
      >
        <DoDont
          doItems={[
            "Render info banners with --color-info-* (purple).",
            "Use --color-btn-link-color (blue) only for an inline link inside a paragraph.",
            "Reach for --color-text-brand for short emphasis like the cost label in a quote.",
          ]}
          dontItems={[
            "Replace info banners with blue 'because that's what the rest of the internet does'.",
            "Use blue as a generic accent in dashboards.",
          ]}
        />
      </Section>

      <p className="mt-10 text-sm text-muted">
        See also: <Link href="/foundations/color/tokens">Tokens</Link> ·{" "}
        <Link href="/foundations/color/code">Code</Link> ·{" "}
        <Link href="/principles">About ACKO</Link>
      </p>
    </>
  );
}
