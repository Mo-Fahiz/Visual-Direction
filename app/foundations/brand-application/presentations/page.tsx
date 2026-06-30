import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { PlaceholderCarousel } from "@/components/docs/PlaceholderCarousel";
import { PlaceholderImage } from "@/components/docs/PlaceholderImage";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Presentations",
};

export default function PresentationsPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Brand application", href: "/foundations/brand-application" },
          { label: "Presentations" },
        ]}
      />
      <PageHeader
        title="Presentations"
        description="One slide template covers internal, customer, and partner decks. Use it like a system, not a starting point."
      />

      <Section
        id="anatomy"
        title="Slide template anatomy"
        description="A 16:9 canvas with consistent margins, a defined type scale, and three repeating slide types."
      >
        <PlaceholderImage
          label="Slide template overview — four panels showing the canvas with margins, the three repeating slide types (title, content, section divider), and the type scale anchored to the right."
          size="tall"
        />
        <PageTable
          headers={["Slide type", "Purpose", "Background", "Typography"]}
          colWidths={["22%", "28%", "26%", "24%"]}
          rows={[
            ["Title slide", "Opening, agenda, closing", "Inked surface (purple-900)", "Display 60pt, white"],
            ["Content slide", "Body of the deck", "Light surface (purple-50)", "Heading 32pt + body 18pt"],
            ["Section divider", "Chapter breaks", "Full-bleed purple-600", "Display 60pt, white"],
            ["Data slide", "Charts, tables, metrics", "Light surface", "Heading 24pt + tabular 14pt"],
          ]}
        />
      </Section>

      <Section
        id="type-scale"
        title="Type scale for slides"
        description="Slides are read from further away than UI. Type sizes step up accordingly."
      >
        <PageTable
          headers={["Role", "Size", "Weight", "Use"]}
          colWidths={["22%", "20%", "22%", "36%"]}
          rows={[
            ["Display", "60pt", "Bold 700", "Title slide hero, section dividers"],
            ["Heading", "32pt", "Semibold 600", "Slide titles"],
            ["Subhead", "24pt", "Semibold 600", "Bullet group headers"],
            ["Body", "18pt", "Regular 400", "Bullet content"],
            ["Caption", "14pt", "Regular 400", "Source notes, chart labels"],
            ["Tabular", "14pt", "Tabular nums 500", "Numeric tables"],
          ]}
        />
      </Section>

      <Section
        id="chart-style"
        title="Chart and diagram style"
        description="Keep data slides flat — no 3D, no shadows, no gradient fills. Charts inherit from the data visualisation foundation."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Use the data viz palette (purple ramp + four vertical accents).</li>
          <li>Label data points directly when there are fewer than 8 bars/segments.</li>
          <li>Use tabular numerals so numbers align in stacks.</li>
          <li>Always cite the source under the chart, 14pt caption weight.</li>
        </ul>
        <PlaceholderImage label="Sample data slide — bar chart left, two-column commentary right, source citation under the chart in 14pt caption weight." />
      </Section>

      <Section
        id="templates"
        title="Template library"
        description="Auto-cycling through the canonical slide types."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Title slide — quarterly review",
              description: "Inked surface, white ACKO wordmark top-left, display headline centre-left, date + presenter bottom-left.",
            },
            {
              name: "Content slide — three-point structure",
              description: "Light surface, heading top-left, three-column bullet structure beneath, ACKO mark top-right, page number bottom-right.",
            },
            {
              name: "Section divider — &lsquo;Where we&apos;re going&rsquo;",
              description: "Full-bleed purple-600, white display headline centred, no chrome.",
            },
            {
              name: "Data slide — claim settlement ratio",
              description: "Bar chart left (purple ramp), takeaway sentence right in body 18pt, source citation at the foot in 14pt caption.",
            },
            {
              name: "Closing slide — &lsquo;Questions?&rsquo;",
              description: "Inked surface, ACKO wordmark centred, contact details in muted-on-dark, no other chrome.",
            },
          ]}
        />
      </Section>

      <Section
        id="exports"
        title="Export & sharing"
        description="Decks ship as PDF for external; native Keynote / PowerPoint files stay internal."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Export as PDF for any external send — fonts embed reliably.</li>
          <li>Embed Euclid Circular B in source files (Keynote and PowerPoint both support font embedding).</li>
          <li>Bundle the deck with an asset folder (logos, photos, fonts) when handing off.</li>
          <li>
            Avoid linking to internal-only assets in customer-facing decks —
            they break the moment the deck leaves the network.
          </li>
        </ul>
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Use the master template — don&apos;t spin up a one-off for one deck.",
            "Keep one idea per slide. If it needs two slides, split it.",
            "Embed Euclid in the source file before handing off.",
            "Cite sources under every chart, every quoted statistic.",
          ]}
          dontItems={[
            "Use stock PowerPoint templates with default fonts.",
            "Stuff six bullets onto a slide because &lsquo;they all matter&rsquo;.",
            "Use 3D charts or gradient fills.",
            "Drop the ACKO mark below 32px on a 1920×1080 canvas.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Typography", href: "/foundations/typography", meta: "Design system" },
            { title: "Data visualisation", href: "/foundations/data-viz", meta: "Design system" },
            { title: "Logo usage", href: "/foundations/logo", meta: "Brand identity" },
            { title: "Print & OOH", href: "/foundations/brand-application/print-ooh", meta: "Brand application" },
          ]}
        />
      </Section>
    </>
  );
}
