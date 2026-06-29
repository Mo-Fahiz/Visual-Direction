import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { PageTable } from "@/components/docs/PageTable";
import { DocImage } from "@/components/docs/DocImage";
import { assetPath } from "@/lib/base-path";
const PIMG = (f: string) => assetPath(`/images/Page_patterns/${f}`);
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPatternPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs trail={[{ label: "Components & patterns" }, { label: "Page patterns" }, { label: "Checkout" }]} />
      <PageHeader
        title="Checkout"
        description="The purchase surface. Summary stays visible, the total never moves, trust signals sit next to the CTA — these are non-negotiable."
      />

      <Section
        id="anatomy"
        title="Anatomy"
        description="Checkout pages have two consistent regions: form on the left/top, summary on the right/below. The total is always visible."
      >
        <DocImage src={PIMG("checkout-anatomy.png")} alt="Desktop and mobile checkout wireframes. Desktop: form left, sticky summary card right. Mobile: collapsible summary top, form below, sticky CTA with total at the bottom." ratio="4/3" background="none" />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Summary card</strong> — line items, taxes, total. Sticky on desktop, collapsible on mobile.</li>
          <li><strong>Trust signals</strong> — IRDAI registration, payment partners — sit immediately above or below the CTA.</li>
          <li><strong>Always-visible total</strong> — never scrolls out of view.</li>
          <li><strong>Primary CTA</strong> — Pay, Confirm purchase. Single primary, always purple.</li>
        </ul>
      </Section>

      <Section
        id="layout"
        title="Layout"
        description="Desktop splits 60/40 form-to-summary. Mobile stacks summary at the top and pins the CTA at the bottom."
      >
        <PageTable
          headers={["Region", "Mobile", "Desktop"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Form column", "Full width", "60% / 8 cols"],
            ["Summary card", "Collapsible, top", "40% / 4 cols, sticky"],
            ["Primary CTA", "Full-width, sticky bottom", "Inside summary, right-aligned"],
            ["Total visibility", "Always visible above CTA", "Always visible in summary"],
            ["Trust signals", "Above CTA", "Inside summary, under CTA"],
          ]}
        />
      </Section>

      <Section
        id="behaviour"
        title="Behaviour"
        description="Checkout never surprises the user. Every change to the total is visible; every error is recoverable."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Totals update inline when add-ons or coupons change — never on submit.</li>
          <li>Payment errors return the user to the form with the error highlighted; the cart is preserved.</li>
          <li>Loading states use a non-blocking spinner inside the CTA, not a full-page overlay.</li>
          <li>After payment success, the user lands on a confirmation page (not a toast).</li>
        </ul>
      </Section>

      <Section
        id="content"
        title="Content guidelines"
        description="Money is sensitive. Be explicit and never use jargon."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Line items: short noun phrases — Auto policy, Health add-on, GST.</li>
          <li>Total label: <strong>Total payable</strong> — clearer than Total.</li>
          <li>CTA label: <strong>Pay ₹X,XXX</strong> — include the amount on the button.</li>
          <li>Trust signals: short, factual — &quot;IRDAI Reg. 157&quot;, &quot;Secured by Razorpay&quot;.</li>
        </ul>
      </Section>

      <Section id="do-dont" title="Do and don't">
        <DoDont
          doItems={[
            "Show the amount on the primary CTA button.",
            "Keep the total visible at all times.",
            "Update totals inline on every line-item change.",
            "Place trust signals next to the CTA, not in the footer.",
          ]}
          dontItems={[
            "Hide the total behind a See breakdown link.",
            "Use generic CTA labels like Submit or Pay now without the amount.",
            "Show errors only after submit — validate on blur.",
            "Use a full-page loading overlay during payment.",
          ]}
        />
        <DocImage src={PIMG("checkout-do-dont.png")} alt="Left: checkout with visible total, Pay ₹2,499 CTA, and IRDAI trust mark beside the button. Right: same checkout with total collapsed and generic Pay now label — marked incorrect." ratio="4/3" background="none" />
      </Section>

      <Section id="related" title="Related">
        <ul>
          <li><Link href="/foundations/layout">Layout and grid</Link> — split layout rules.</li>
          <li><Link href="/foundations/cta-hierarchy">CTA hierarchy</Link> — single primary, no competing actions.</li>
          <li><Link href="/patterns/form-field">Form field</Link> — payment input components.</li>
          <li><Link href="/foundations/voice">Voice and tone</Link> — money copy.</li>
        </ul>
      </Section>
    </article>
  );
}
