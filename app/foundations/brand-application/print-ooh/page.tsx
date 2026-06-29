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
  title: "Print & OOH",
};

export default function PrintOohPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Brand application", href: "/foundations/brand-application" },
          { label: "Print & OOH" },
        ]}
      />
      <PageHeader
        title="Print & OOH"
        description="Print and out-of-home have different physics — distance, viewing time, ink gamut. Plan for them, then enforce the rules."
      />

      <Section
        id="cmyk"
        title="CMYK conversion of ACKO Purple"
        description="The screen colour #6841E6 doesn&apos;t print cleanly. Use the calibrated CMYK build below as the start, then test on the actual stock."
      >
        <PageTable
          headers={["Build", "Value", "Notes"]}
          colWidths={["28%", "30%", "42%"]}
          rows={[
            ["Screen (sRGB)", "#6841E6", "Source of truth"],
            ["CMYK (uncoated)", "C82 M93 Y0 K0", "Lifts red — test for shift on uncoated stock"],
            ["CMYK (coated)", "C82 M88 Y0 K0", "Cleaner reproduction on coated stock"],
            ["Pantone", "PMS 2725 C (placeholder — confirm with brand)", "Use for single-colour print or signage"],
            ["Foil", "Matte purple foil — confirm with vendor", "Reserve for premium collateral"],
          ]}
        />
        <p>
          Always print a small swatch on the production stock before signing off
          a long run. Ink absorption changes hue and saturation, especially on
          uncoated stocks where purple drifts towards red.
        </p>
      </Section>

      <Section
        id="type-min"
        title="Minimum type sizes"
        description="Outdoor copy that&apos;s legible at viewing distance is the only copy that matters."
      >
        <PageTable
          headers={["Surface", "Headline min", "Body min", "Viewing distance"]}
          colWidths={["28%", "20%", "20%", "32%"]}
          rows={[
            ["Hoarding / billboard", "120pt", "Avoid body copy", "30m+"],
            ["Bus shelter", "72pt headline", "24pt body", "5–10m"],
            ["Metro car panel", "48pt headline", "18pt body", "1–3m"],
            ["Brochure / leaflet", "24pt headline", "10pt body", "Reading distance"],
            ["Business card", "11pt name", "8pt details", "Reading distance"],
            ["Letterhead", "—", "10pt body", "Reading distance"],
          ]}
        />
      </Section>

      <Section
        id="bleed"
        title="Bleed & trim specs"
        description="Standard 3mm bleed across all formats unless the press shop specifies otherwise."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Bleed:</strong> 3mm on all four sides for trimmed pieces.
          </li>
          <li>
            <strong>Safe zone:</strong> 5mm inset from the trim line — never
            put critical type or logos closer.
          </li>
          <li>
            <strong>Trim marks:</strong> standard registration marks plus
            colour bars on every press-ready PDF.
          </li>
          <li>
            <strong>Resolution:</strong> 300dpi at final size for raster
            assets. SVG for the logo whenever the press supports it.
          </li>
        </ul>
        <PlaceholderImage
          label="Press-ready brochure spread with bleed area (red), trim line (cyan), and 5mm safe zone (magenta) annotated. Crop marks and colour bars on the perimeter."
        />
      </Section>

      <Section
        id="substrate"
        title="Substrate notes"
        description="The ACKO purple performs differently depending on what you print it on."
      >
        <PageTable
          headers={["Substrate", "Purple behaviour", "Recommended use"]}
          colWidths={["28%", "40%", "32%"]}
          rows={[
            ["Coated matte", "Clean, even — best match to screen", "Brochures, business cards, premium collateral"],
            ["Coated gloss", "Saturated, slightly cooler", "Posters, retail signage"],
            ["Uncoated", "Drifts warmer, less saturated", "Letterheads, recycled stock"],
            ["Newsprint", "Heavy hue shift toward grey-purple", "Avoid unless unavoidable"],
            ["Vinyl banner", "Vivid but UV-sensitive", "Test outdoor lifespan before long-run"],
          ]}
        />
      </Section>

      <Section
        id="templates"
        title="Template library"
        description="Auto-cycling through the most common print and OOH formats."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Billboard — Auto launch",
              description: "Full-bleed purple background, single display headline (120pt), product mockup right-third, ACKO logo top-left at minimum sizing.",
            },
            {
              name: "Bus shelter — Health hospital network",
              description: "Photo-led with documentary-warm imagery, headline overlay, partner hospital strip along the bottom, CTA-free.",
            },
            {
              name: "Brochure — Term life",
              description: "Cover with hero photo and named SKU (ACKO Life Flexi Term Plan), 4-spread interior with feature breakdown, contact spread at the back.",
            },
            {
              name: "Business card",
              description: "Front: ACKO logo top-left, name + role centre. Back: contact details, IRDAI reg, purple wordmark.",
            },
            {
              name: "Letterhead",
              description: "ACKO logo top-left, IRDAI reg under, address in footer, body area in 10pt minimum.",
            },
            {
              name: "Policy certificate",
              description: "Formal layout, ACKO master logo header, policy details table, signature block, footer with legal entity name.",
            },
          ]}
        />
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Test purple on the actual stock before signing off a long run.",
            "Include 3mm bleed and a 5mm safe zone on every press-ready file.",
            "Use vector logos (SVG, EPS, AI) at 100% scale — never resize raster.",
            "Bundle the Euclid font licence when handing artwork to print vendors.",
          ]}
          dontItems={[
            "Use the screen hex #6841E6 directly for print — convert to CMYK first.",
            "Put critical type inside the bleed area — it gets trimmed off.",
            "Drop the logo below the minimum print size (50mm horizontal lockup).",
            "Use AI-upscaled raster images for billboards — they fall apart at distance.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Logo usage", href: "/foundations/logo", meta: "Brand identity" },
            { title: "Colour", href: "/foundations/color", meta: "Design system" },
            { title: "Typography", href: "/foundations/typography", meta: "Design system" },
            { title: "Presentations", href: "/foundations/brand-application/presentations", meta: "Brand application" },
          ]}
        />
      </Section>
    </>
  );
}
