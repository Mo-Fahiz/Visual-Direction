import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, type Crumb } from "@/components/docs/Breadcrumbs";
import { CodeChip } from "@/components/docs/CodeChip";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { PlaceholderImage } from "@/components/docs/PlaceholderImage";
import { Section } from "@/components/docs/Section";

export type MoleculeProp = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

export type MoleculeVariant = {
  name: string;
  use: string;
  notes?: string;
};

export type RelatedLink = {
  href: string;
  label: string;
  meta?: string;
};

export type MoleculePageProps = {
  title: string;
  description: string;
  /** Defaults to "Components & patterns / {title}" when omitted. */
  breadcrumb?: Crumb[];
  anatomyLabel: string;
  variants: MoleculeVariant[];
  props: MoleculeProp[];
  behaviour: ReactNode;
  content: ReactNode;
  accessibility: ReactNode;
  doItems: string[];
  dontItems: string[];
  doDontLabel: string;
  related: RelatedLink[];
};

/**
 * Shared template for every molecule page. Keeps the structure (anatomy →
 * variants → API → behaviour → content → a11y → do/don't → related) identical
 * across the library so designers and engineers always know where to look.
 */
export function MoleculePage(props: MoleculePageProps) {
  const trail: Crumb[] =
    props.breadcrumb ?? [
      { label: "Components & patterns" },
      { label: props.title },
    ];
  return (
    <article className="doc-prose">
      <Breadcrumbs trail={trail} />
      <PageHeader title={props.title} description={props.description} />

      <Section
        id="anatomy"
        title="Anatomy"
        description="Every named part of the component. Use these names in design specs, code, and review feedback."
      >
        <PlaceholderImage size="tall" label={props.anatomyLabel} />
      </Section>

      <Section
        id="variants"
        title="Variants"
        description="The visual variants this component ships with. Pick the variant that matches the role on the surface, not the look you want."
      >
        <PageTable
          headers={["Variant", "Use when", "Notes"]}
          colWidths={["22%", "44%", "34%"]}
          rows={props.variants.map((v) => [v.name, v.use, v.notes ?? "—"])}
        />
      </Section>

      <Section
        id="api"
        title="Props"
        description="Key configuration options. Full prop tables for each component live in the live Storybook."
      >
        <PageTable
          headers={["Prop", "Type", "Default", "Description"]}
          colWidths={["22%", "22%", "16%", "40%"]}
          rows={props.props.map((p) => [
            <CodeChip key={p.name}>{p.name}</CodeChip>,
            <code key={`t-${p.name}`} className="font-mono text-[12px]">
              {p.type}
            </code>,
            p.defaultValue ?? "—",
            p.description,
          ])}
        />
      </Section>

      <Section id="behaviour" title="Behaviour">
        {props.behaviour}
      </Section>

      <Section
        id="content"
        title="Content guidelines"
        description="What the labels, titles, and copy inside this component should and shouldn't say."
      >
        {props.content}
      </Section>

      <Section
        id="accessibility"
        title="Accessibility"
        description="ARIA roles, keyboard shortcuts, and screen-reader expectations."
      >
        {props.accessibility}
      </Section>

      <Section id="do-dont" title="Do and don't">
        <DoDont doItems={props.doItems} dontItems={props.dontItems} />
        <PlaceholderImage label={props.doDontLabel} />
      </Section>

      <Section id="related" title="Related">
        <ul>
          {props.related.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>{r.label}</Link>
              {r.meta ? (
                <span className="text-[13px] text-muted"> — {r.meta}</span>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
