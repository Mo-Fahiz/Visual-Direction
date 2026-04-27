import type { Metadata } from "next";
import Link from "next/link";
import { CodeChip } from "@/components/docs/CodeChip";
import { DoDont } from "@/components/docs/DoDont";
import { PageTable } from "@/components/docs/PageTable";
import { Section } from "@/components/docs/Section";
import { styleVariantRows, textColorIntents } from "@/lib/typography-tokens";

export const metadata: Metadata = {
  title: "Typography · Usage",
};

export default function TypographyUsagePage() {
  return (
    <>
      <Section
        id="rules"
        title="System rules"
        description="From Skills/typography.mdc — non-negotiables for product UI."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>15-step ramp + named variants only</strong> — no ad-hoc font sizes in
            components.
          </li>
          <li>
            <strong>Minimum legibility:</strong> 14px minimum for body, 12px for labels, 10px
            absolute floor (rare).
          </li>
          <li>
            <strong>Emphasis:</strong> Medium (500) in body — not Bold. Bold (700) for display
            and bold/bold-underline variants.
          </li>
          <li>
            <strong>Letter-spacing:</strong> tighter for large text, looser for small. Prefer{" "}
            <code className="font-mono">text-balance</code> on headings where supported.
          </li>
          <li>
            <strong>Numbers:</strong> use tabular numerals for dynamic values where applicable
            (see product CSS).
          </li>
        </ul>
      </Section>

      <Section
        id="style-variants"
        title="Named style variants (matrix)"
        description="Each size step can pair with one of ten variants. Below is a shortened list; the full matrix is 15 sizes × 10 variants."
      >
        <PageTable
          headers={["Variant", "Weight", "Tailwind"]}
          colWidths={["30%", "25%", "45%"]}
          rows={styleVariantRows.map((v) => [
            v.name,
            String(v.weight),
            <code key={v.name} className="font-mono text-[12px]">
              {v.tailwind}
            </code>,
          ])}
        />
      </Section>

      <Section
        id="text-color"
        title="Text colour intent"
        description="The Typography component’s color prop (and matching CSS tokens) maps to semantic text colours — not font metrics, but delivery."
      >
        <PageTable
          headers={["Value", "Token", "Use"]}
          colWidths={["20%", "35%", "45%"]}
          rows={textColorIntents.map((c) => [
            <CodeChip key={c.value}>{c.value}</CodeChip>,
            <code key={c.token} className="font-mono text-[12px]">
              {c.token}
            </code>,
            c.use,
          ])}
        />
      </Section>

      <Section
        id="sentence-case"
        title="Sentence case"
        description="All UI copy uses sentence case — one capital at the start, then lowercase except proper nouns and documented exceptions (ACKO, IRDAI, IDV, city names, etc.)."
      >
        <DoDont
          doItems={["Get a quote", "View my policy", "Continue to payment", "Check IDV in app"]}
          dontItems={["Get A Quote", "View My Policy", "Get a FREE quote (in a button label)"]}
        />
        <p className="mt-6 text-sm text-muted">
          <Link className="underline" href="/foundations/typography/code">
            Code
          </Link>{" "}
          shows how fonts load; badge and marketing exceptions follow component specs.
        </p>
      </Section>
    </>
  );
}
