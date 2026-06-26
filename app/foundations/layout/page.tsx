import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { DocImage } from "@/components/docs/DocImage";
import { Section } from "@/components/docs/Section";
import { assetPath } from "@/lib/base-path";

const IMG = (file: string) => assetPath(`/images/Page_layout/${file}`);

export const metadata: Metadata = {
  title: "Layout and grid",
};

export default function LayoutPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Layout and grid"
        description="The grid, container, and rhythm rules that hold every ACKO screen together. Use them to compose pages — the spacing scale handles the rest."
      />

      <Section
        id="grid-system"
        title="Grid system"
        description="A 12-column grid with responsive gutters. Layouts collapse to 8 columns on tablet and 4 on mobile. The container caps at 1280px on desktop and is centred above that."
      >
        <PageTable
          headers={["Breakpoint", "Columns", "Gutter", "Outer margin", "Container max"]}
          colWidths={["28%", "14%", "14%", "22%", "22%"]}
          rows={[
            ["Mobile (0–767px)", "4", "16px", "16px", "100%"],
            ["Tablet (768–1023px)", "8", "24px", "32px", "100%"],
            ["Desktop (1024px+)", "12", "24px", "40px", "1280px"],
          ]}
        />
        <DocImage src={IMG("grid-columns.png")} alt="Three device frames — phone, tablet, desktop — each showing the column grid overlaid on a sample ACKO product screen. Columns in translucent purple, gutters in white." ratio="4/3" background="none" />
      </Section>

      <Section
        id="common-layouts"
        title="Common layouts"
        description="Five layouts cover roughly 90% of product surfaces. Start from one of these before inventing a new structure."
      >
        <PageTable
          headers={["Layout", "Use for", "Anatomy"]}
          colWidths={["22%", "38%", "40%"]}
          rows={[
            [
              "Single column",
              "Onboarding, checkout, focused forms.",
              "Max content width 560px, centred. No sidebar.",
            ],
            [
              "Sidebar + content",
              "Settings, policy details, account.",
              "Sidebar 280px fixed, content fluid in the remaining columns.",
            ],
            [
              "Card grid",
              "Product listings, plan comparison, dashboards.",
              "2-up mobile, 3-up tablet, 4-up desktop.",
            ],
            [
              "Split",
              "Marketing landing sections, feature breakouts.",
              "50/50 or 60/40 image and content.",
            ],
            [
              "Dashboard",
              "Data-heavy surfaces and admin tools.",
              "Sidebar nav + top metrics bar + content grid.",
            ],
          ]}
        />
        <DocImage src={IMG("common-layouts.png")} alt="Wireframes for each of the five layouts — single column, sidebar+content, card grid, split, dashboard — showing column usage, content zones, and responsive behaviour." ratio="4/3" background="none" />
      </Section>

      <Section
        id="hierarchy"
        title="Content hierarchy"
        description="Every page has one visual hierarchy: one primary heading, one primary action, and supporting content arranged by importance. Avoid multiple competing focal points."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>One H1 per page</strong>, always the first content element.
          </li>
          <li>
            <strong>Primary CTA above the fold</strong> on mobile.
          </li>
          <li>
            <strong>Supporting actions never compete visually</strong> with the
            primary action — see{" "}
            <Link href="/foundations/cta-hierarchy">CTA hierarchy</Link>.
          </li>
          <li>
            <strong>White space increases with importance</strong> — hero
            sections get more breathing room than list items.
          </li>
        </ul>
        <DocImage src={IMG("content-hierarchy.png")} alt="Annotated product page showing the hierarchy layers: H1 → primary CTA → supporting content → secondary actions → footer, with arrows tracing the eye-flow path." ratio="4/3" background="none" />
      </Section>

      <Section
        id="spacing-rhythm"
        title="Spacing rhythm"
        description="Vertical spacing between sections follows a consistent rhythm. Use the spacing scale, not eyeballed values."
      >
        <PageTable
          headers={["Between", "Spacing", "Token"]}
          colWidths={["44%", "20%", "36%"]}
          rows={[
            ["Major sections", "48–64px", "space-48 / space-64"],
            ["Subsections", "32px", "space-32"],
            ["Related elements within a group", "16–24px", "space-16 / space-24"],
            ["Label and input", "8px", "space-8"],
          ]}
        />
        <DocImage src={IMG("spacing-rhythm.png")} alt="A product page with vertical spacing annotated between sections, showing the 48 / 32 / 24 / 16 values." ratio="4/3" background="none" />
        <p className="text-sm text-muted">
          The full numeric ladder lives on{" "}
          <Link href="/foundations/spacing">Spacing</Link>.
        </p>
      </Section>

      <Section
        id="do-dont"
        title="Do and don't"
        description="The grid is a guardrail, not a cage."
      >
        <DoDont
          doItems={[
            "Align content to the grid — don't eyeball positions.",
            "Use consistent section spacing from the scale.",
            "Let the grid break for full-bleed heroes and images.",
            "Reserve full-bleed treatments for hero or campaign moments.",
          ]}
          dontItems={[
            "Mix grid systems on the same page.",
            "Centre everything — left-align body content for readability.",
            "Cram content to avoid scrolling — white space is functional.",
            "Use more than one primary CTA per viewport.",
          ]}
        />
        <DocImage src={IMG("do-dont.png")} alt="Side-by-side layout comparison. Left: clean product page with consistent grid alignment and spacing. Right: same content with misaligned elements, inconsistent gaps, and two competing CTAs." ratio="4/3" background="none" />
      </Section>
    </article>
  );
}
