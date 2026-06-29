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
  title: "Co-branding",
};

export default function CoBrandingPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Brand identity" },
          { label: "Co-branding" },
        ]}
      />
      <PageHeader
        title="Co-branding"
        description="How the ACKO logo locks up with partner marks — hospitals, banks, OEMs, regulators. Equal weight, equal clear space, never a sub-brand."
      />

      <Section
        id="when-applies"
        title="When co-branding applies"
        description="We co-brand whenever a partner&apos;s product is part of the customer experience. The most common surface is Health, where hospital networks settle claims cashlessly. Each context follows the same lock-up rules."
      >
        <PageTable
          headers={["Partner type", "Where it appears", "Examples"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Hospital networks", "Health product pages, cashless lists", "Max, Manipal, Fortis, Apollo, Narayana, Aster"],
            ["Bank distribution", "Co-issued plan landing pages, footers", "Placeholder — pending list"],
            ["OEM partners", "Embedded auto policy flows", "Placeholder — pending list"],
            ["Reinsurance / regulatory", "Footer compliance strips", "IRDAI (Reg. No. 157)"],
          ]}
        />
      </Section>

      <Section
        id="lockup-rules"
        title="Lock-up rules"
        description="Two logos, one vertical divider, equal clear space. ACKO always appears on the left in horizontal lock-ups, or on top in stacked lock-ups."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Divider</strong> — a 1px vertical rule at 50% of the
            ACKO logo height, in <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">#E4E5E9</code>.
          </li>
          <li>
            <strong>Clear space</strong> — equal on both sides of the divider.
            Use the height of the ACKO &ldquo;K&rdquo; as the unit.
          </li>
          <li>
            <strong>Alignment</strong> — both marks aligned to optical centre,
            not bounding box. Partner logos that are taller than wide may need
            visual nudging.
          </li>
          <li>
            <strong>Order</strong> — ACKO left in LTR; ACKO top in stacked
            layouts. The exception is when the partner is the issuer of record
            (rare — check legal).
          </li>
        </ul>
        <PlaceholderImage
          label="Horizontal lock-up: ACKO logo on the left, 1px vertical divider at 50% height in #E4E5E9, partner logo on the right. Annotated with clear-space units (K-height) on either side."
          size="tall"
        />
      </Section>

      <Section
        id="partner-categories"
        title="Partner categories"
        description="Each category has its own conventions for placement, density, and how partners are surfaced in product."
      >
        <h3 className="mt-8 text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground">
          Hospital partners
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          ACKO partners with 11,500+ cashless hospitals across India. Anchor
          partners shown in marketing surfaces include Max, Manipal, Fortis,
          Apollo, Narayana, and Aster. These networks appear on the Health
          landing page in a horizontal logo strip and are searchable from the
          cashless-hospitals locator.
        </p>
        <PlaceholderImage label="Hospital partner strip — 6 partner logos (Max, Manipal, Fortis, Apollo, Narayana, Aster) in a single row, equal heights, equal spacing, on a white surface." />

        <h3 className="mt-10 text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground">
          Bank and financial partners
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          Distribution and co-issued plans through banks and NBFCs. Lock-ups
          appear on co-branded landing pages, in account integration screens,
          and in policy documents.
        </p>
        <PlaceholderImage label="Bank co-branded landing hero — ACKO logo + partner bank logo lock-up, headline, supporting copy. Annotation showing equal clear space and divider position." />

        <h3 className="mt-10 text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground">
          OEM partners
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          Embedded car insurance at the point of vehicle purchase. Lock-ups
          appear at the OEM&apos;s checkout and in the policy welcome email.
        </p>
        <PlaceholderImage label="OEM embedded checkout — ACKO logo + automaker logo in the order summary panel, with policy summary and CTA." />

        <h3 className="mt-10 text-[1.125rem] font-semibold tracking-[-0.01em] text-foreground">
          Reinsurer / regulatory
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
          IRDAI registration is referenced in the footer of every external
          surface. Format: &ldquo;ACKO General Insurance Limited · IRDAI Reg.
          No. 157&rdquo;. No IRDAI logo lock-up is used.
        </p>
      </Section>

      <Section
        id="examples"
        title="Lock-up examples"
        description="Auto-cycling through the most common co-branding patterns. Hover to pause."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Horizontal — bank partner",
              description: "ACKO + bank logo lock-up on a co-issued landing page hero. Divider at 50% height, equal clear space on both sides.",
            },
            {
              name: "Horizontal — hospital strip",
              description: "Six hospital partners in a single row under the Health landing hero. Equal heights, equal spacing.",
            },
            {
              name: "Stacked — OEM embedded",
              description: "ACKO logo stacked above automaker logo in the OEM checkout panel. Vertical divider replaced by a hairline rule.",
            },
            {
              name: "Footer — regulatory",
              description: "IRDAI registration text in the page footer alongside the ACKO wordmark and legal entity name.",
            },
          ]}
          size="tall"
          label="Co-branding lock-up examples"
        />
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
        description="Partner branding is where consistency slips fastest. These are the rules to enforce."
      >
        <DoDont
          doItems={[
            "Use equal clear space on both sides of the divider — measured in K-height.",
            "Place ACKO on the left (LTR) or on top (stacked).",
            "Align both marks to optical centre, not bounding box.",
            "Use white or light-cream backgrounds for partner strips — purple competes with partner colours.",
          ]}
          dontItems={[
            "Resize a partner logo to be taller or wider than the ACKO mark.",
            "Mix lock-up directions on the same surface (some horizontal, some stacked).",
            "Place partner logos on a purple surface without testing contrast.",
            "Use a partner logo without written approval and asset hand-off.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Logo usage", href: "/foundations/logo", meta: "Brand identity" },
            { title: "Brand architecture", href: "/brand/architecture", meta: "Brand identity" },
            { title: "Brand application", href: "/foundations/brand-application", meta: "Brand application" },
            { title: "Naming conventions", href: "/brand/naming", meta: "Brand identity" },
          ]}
        />
      </Section>
    </article>
  );
}
