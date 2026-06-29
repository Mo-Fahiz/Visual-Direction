import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { DoDont } from "@/components/docs/DoDont";
import { templateSpecs } from "@/lib/asset-tokens";

export const metadata: Metadata = {
  title: "Templates",
};

export default function TemplatesPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs trail={[{ label: "Media, content & voice" }, { label: "Asset creation", href: "/foundations/asset-creation" }, { label: "Templates" }]} />
      <PageHeader
        eyebrow="Foundation · Asset creation"
        title="Templates"
        description="Specs for reusable collateral: emails, banners, print documents, and social media. Each template defines grid, typography, colour rules, and guardrails."
        lastUpdated="May 12, 2026"
      />

      {templateSpecs.map((spec) => (
        <Section
          key={spec.id}
          id={spec.id}
          title={spec.name}
        >
          <Section id={`${spec.id}-sizes`} title="Sizes" level={3}>
            <PageTable
              headers={["Format", "Width", "Height", "Unit"]}
              colWidths={["35%", "20%", "20%", "25%"]}
              rows={spec.sizes.map((s) => [
                s.name,
                String(s.width),
                s.height === 0 ? "Variable" : String(s.height),
                s.unit,
              ])}
            />
          </Section>

          <Section id={`${spec.id}-specs`} title="Grid & typography" level={3}>
            <PageTable
              headers={["Property", "Value"]}
              colWidths={["30%", "70%"]}
              rows={[
                ["Grid", spec.grid],
                ["Typography", spec.typographyHierarchy],
              ]}
            />
          </Section>

          <Section id={`${spec.id}-color`} title="Colour rules" level={3}>
            <ul className="list-disc pl-5 text-sm leading-relaxed text-foreground space-y-1">
              {spec.colorRules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Section>

          <DoDont doItems={spec.dos} dontItems={spec.donts} />
        </Section>
      ))}
    </article>
  );
}
