import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { PlaceholderImage } from "@/components/docs/PlaceholderImage";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Brand architecture",
};

export default function BrandArchitecturePage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Brand identity" },
          { label: "Brand architecture" },
        ]}
      />
      <PageHeader
        title="Brand architecture"
        description="ACKO is a branded house. One master brand carries every product, with light vertical differentiation through accent colour and named SKUs. Never a separate logo, never a separate identity."
      />

      <Section
        id="model"
        title="One master, four verticals"
        description="ACKO Auto, Health, Life, and Travel all sit under the same logo, the same purple, the same voice. Differentiation is light — it happens through accent colour and product naming, not visual identity."
      >
        <PlaceholderImage
          label="Diagram: ACKO master logo at top, four vertical branches below (Auto · Health · Life · Travel) with accent colour swatches and named SKUs underneath each branch."
          size="tall"
        />
        <p>
          This is the opposite of a house of brands. We don&apos;t spin up
          sub-logos for each vertical — every product carries the ACKO mark and
          inherits the master visual system. Customers should feel one
          continuous experience, whether they&apos;re comparing car policies or
          filing a hospital claim.
        </p>
      </Section>

      <Section
        id="accents"
        title="Accent colours per vertical"
        description="Each vertical gets a light accent that shifts the temperature without breaking the purple-first system. Accents support — they never lead."
      >
        <PageTable
          headers={["Vertical", "Accent", "When it surfaces", "When it doesn't"]}
          colWidths={["18%", "20%", "32%", "30%"]}
          rows={[
            ["Auto", "Sunshade yellow", "Category nav, badges, illustration spots", "Primary CTAs, body text, surfaces"],
            ["Health", "Vivid cerise", "Category nav, partner sections, illustration", "Primary CTAs, body text, surfaces"],
            ["Life", "Picton blue", "Category nav, emotive moments, illustration", "Primary CTAs, body text, surfaces"],
            ["Travel", "Leafy green", "Category nav, journey moments, illustration", "Primary CTAs, body text, surfaces"],
          ]}
        />
        <PlaceholderImage
          label="Swatch grid: four vertical accents alongside ACKO Purple #6841E6. Each accent shown at 600 step plus a 50 tint, with a sample badge or icon in context."
        />
      </Section>

      <Section
        id="sub-products"
        title="Named SKUs (sub-products)"
        description="Specific plans get capitalised product names. The pattern is always &lsquo;ACKO + Plan Name&rsquo; — never a separate logo or visual treatment."
      >
        <PageTable
          headers={["Vertical", "Named SKU", "Used for", "Capitalisation"]}
          colWidths={["18%", "30%", "32%", "20%"]}
          rows={[
            ["Health", "ACKO Platinum", "Flagship health plan", "Title Case"],
            ["Health", "ACKO Platinum Lite", "Entry-level health plan", "Title Case"],
            ["Health", "ACKO Platinum Super Top-up", "Top-up policy", "Title Case"],
            ["Travel", "ACKO AirPass", "Domestic flight protection", "Title Case (compound)"],
            ["Life", "ACKO Life Flexi Term Plan", "Term life policy", "Title Case"],
          ]}
        />
        <p>
          When a plan name appears in body copy, treat it as a proper noun:
          capitalise on first mention and stay consistent thereafter. Never
          shorten to acronyms in customer-facing copy (no &ldquo;APL&rdquo; for
          ACKO Platinum Lite).
        </p>
      </Section>

      <Section
        id="surfacing"
        title="When to surface category vs master"
        description="A simple rule: master brand drives acquisition and trust; category accents support comparison and category context."
      >
        <DoDont
          doItems={[
            "Lead with the ACKO master logo on every external surface — campaigns, social, OOH.",
            "Use category accents inside product surfaces (Auto landing, Health hub) where users are already in context.",
            "Treat named SKUs as proper nouns — capitalise on first mention.",
            "Keep all CTAs purple, regardless of which vertical the surface belongs to.",
          ]}
          dontItems={[
            "Create a new logo or wordmark for any vertical — there&apos;s one ACKO logo.",
            "Use a category accent as a primary CTA colour.",
            "Mix two category accents on the same screen.",
            "Use a sub-product name without the ACKO prefix (&lsquo;Platinum Lite&rsquo; on its own is incorrect).",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Naming conventions", href: "/brand/naming", meta: "Brand identity" },
            { title: "Co-branding", href: "/brand/co-branding", meta: "Brand identity" },
            { title: "Category colours", href: "/foundations/color/categories", meta: "Colour" },
            { title: "Logo usage", href: "/foundations/logo", meta: "Brand identity" },
          ]}
        />
      </Section>
    </article>
  );
}
