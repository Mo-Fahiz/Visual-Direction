import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { DoDont } from "@/components/docs/DoDont";
import {
  categoryColors,
  allowedZones,
  forbiddenZones,
  blendingRules,
  distributionBand,
} from "@/lib/category-color-tokens";

export const metadata: Metadata = {
  title: "Category colours",
};

export default function CategoryColorsPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation"
        title="Category colours"
        description="Vertical colours (Auto, Health, Life, Travel) are semantic identifiers, not decoration. They blend with purple and follow the distribution band. Purple owns the CTA — always."
        lastUpdated="May 12, 2026"
      />

      <Section
        id="palette"
        title="Category palette"
        description="Each vertical has a primary colour, a light tint for backgrounds, and dark-mode variants."
      >
        <div className="not-prose mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categoryColors.map((c) => (
            <div key={c.id} className="rounded-[10px] border border-border bg-white p-4 shadow-sm">
              <div
                className="mb-3 h-16 w-full rounded-lg"
                style={{ backgroundColor: c.color }}
              />
              <p className="text-sm font-medium text-foreground">{c.label}</p>
              <p className="font-mono text-xs text-muted">{c.color}</p>
              <div className="mt-2 flex gap-2">
                <div
                  className="h-6 w-6 rounded border border-border"
                  style={{ backgroundColor: c.light }}
                  title={`Light: ${c.light}`}
                />
                <div
                  className="h-6 w-6 rounded border border-border"
                  style={{ backgroundColor: c.darkColor }}
                  title={`Dark: ${c.darkColor}`}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="allowed"
        title="Where category colours appear"
        description="Category colour serves as a visual identifier for the vertical. It complements purple — never replaces it."
      >
        <PageTable
          headers={["Zone", "How it's used"]}
          colWidths={["35%", "65%"]}
          rows={allowedZones.map((z) => [
            z.zone,
            z.description,
          ])}
        />
      </Section>

      <Section
        id="forbidden"
        title="Where category colours must not appear"
        description="These zones are always purple, neutral, or feedback-specific. Category colour never enters them."
      >
        <PageTable
          headers={["Zone", "Why it's restricted"]}
          colWidths={["35%", "65%"]}
          rows={forbiddenZones.map((z) => [
            <span key={z.zone} className="font-medium text-[#dc2626]">{z.zone}</span>,
            z.description,
          ])}
        />
      </Section>

      <Section
        id="blending"
        title="Blending with purple"
        description="Purple and category colour must coexist without competing. These rules govern how."
      >
        <PageTable
          headers={["Scenario", "Rule", ""]}
          colWidths={["30%", "55%", "15%"]}
          rows={blendingRules.map((r) => [
            r.scenario,
            r.rule,
            r.allowed
              ? <span key={r.scenario} className="inline-flex items-center gap-1 text-[#16a34a] text-sm font-medium"><span className="inline-block h-2 w-2 rounded-full bg-[#16a34a]" />OK</span>
              : <span key={r.scenario} className="inline-flex items-center gap-1 text-[#dc2626] text-sm font-medium"><span className="inline-block h-2 w-2 rounded-full bg-[#dc2626]" />No</span>,
          ])}
        />
      </Section>

      <Section
        id="distribution"
        title="Distribution band"
        description="Every page or creative follows this colour ratio. The headline slot changes per vertical; purple CTA stays constant."
      >
        <div className="not-prose mt-4 space-y-6">
          <PageTable
            headers={["Slot", "Percentage", "What fills it"]}
            colWidths={["25%", "20%", "55%"]}
            rows={distributionBand.map((d) => [
              d.slot,
              d.percentage,
              d.description,
            ])}
          />

          <div className="space-y-3">
            {categoryColors.map((c) => (
              <div key={c.id} className="flex items-center gap-3">
                <span className="w-16 text-sm font-medium text-foreground">{c.label}</span>
                <div className="flex h-8 flex-1 overflow-hidden rounded-lg border border-border">
                  <div className="flex-[50]" style={{ backgroundColor: "#F5F5F5" }} title="Background 50%" />
                  <div className="flex-[20]" style={{ backgroundColor: c.color }} title={`${c.label} accent 20%`} />
                  <div className="flex-[10]" style={{ backgroundColor: "#0A0A0A" }} title="Body 10%" />
                  <div className="flex-[10]" style={{ backgroundColor: "#6841E6" }} title="CTA 10%" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted">
            Purple CTA is the constant across all four verticals. Only the headline/accent slot changes.
          </p>
        </div>
      </Section>

      <Section
        id="dark-mode"
        title="Dark mode"
        description="Category colours shift brighter on dark surfaces to maintain contrast. Tinted backgrounds use 8% opacity."
      >
        <PageTable
          headers={["Vertical", "Light", "Dark", "Subtle (dark bg)", "Text on colour"]}
          colWidths={["15%", "17%", "17%", "30%", "21%"]}
          rows={categoryColors.map((c) => [
            c.label,
            <div key={`l-${c.id}`} className="flex items-center gap-2">
              <span className="inline-block h-4 w-4 rounded" style={{ backgroundColor: c.color }} />
              <code className="font-mono text-[11px]">{c.color}</code>
            </div>,
            <div key={`d-${c.id}`} className="flex items-center gap-2">
              <span className="inline-block h-4 w-4 rounded" style={{ backgroundColor: c.darkColor }} />
              <code className="font-mono text-[11px]">{c.darkColor}</code>
            </div>,
            <code key={`s-${c.id}`} className="font-mono text-[11px]">{c.darkSubtle}</code>,
            c.onColor === "#FFFFFF" ? "White" : "Black",
          ])}
        />
      </Section>

      <Section id="rules" title="Rules summary">
        <DoDont
          doItems={[
            "Use category colour to identify the vertical at a glance",
            "Keep category colour in the 20% headline/accent band",
            "Pair with purple CTA — always",
            "Adjust brightness in dark mode for legibility",
            "Use the light variant for tinted section backgrounds",
          ]}
          dontItems={[
            "Use category colour for CTAs, buttons, or interactive elements",
            "Mix two vertical colours on the same screen",
            "Use category colour for system feedback (error, success, warning)",
            "Apply category colour to navigation or chrome",
            "Use gradients between purple and category in product UI",
          ]}
        />
      </Section>
    </article>
  );
}
