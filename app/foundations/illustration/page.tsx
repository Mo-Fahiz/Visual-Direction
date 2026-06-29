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
  title: "Illustration",
};

export default function IllustrationPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Media, content & voice" },
          { label: "Illustration" },
        ]}
      />
      <PageHeader
        title="Illustration"
        description="Flat, geometric, purple-led. Illustration carries weight where photography would feel staged — onboarding, empty states, marketing accents."
      />

      <Section
        id="style"
        title="Style"
        description="One illustration style across all product and marketing surfaces. Consistency comes from a tight set of formal choices."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Form:</strong> flat geometric shapes with soft rounded
            corners. No outlines on filled shapes; 2px strokes where outlines
            are needed.
          </li>
          <li>
            <strong>Palette:</strong> ACKO purple as the lead, two greys, and
            one spot accent per illustration. Never more than 5 distinct
            colours in a single piece.
          </li>
          <li>
            <strong>Depth:</strong> single-tone shadows only (no gradients).
            Layered shapes give the illusion of depth.
          </li>
          <li>
            <strong>Detail level:</strong> low — geometric, schematic, never
            photo-realistic.
          </li>
          <li>
            <strong>People:</strong> abstracted figures with simple silhouettes.
            Skin in single neutral tones (avoid hyper-realistic skin tones in
            illustration).
          </li>
        </ul>
        <PlaceholderImage
          label="Style reference — six spot illustrations side by side (car, health, home, travel, shield, document) demonstrating the flat geometric style, ACKO purple lead, 5-colour palette limit."
          size="tall"
        />
      </Section>

      <Section
        id="sizes"
        title="Spot vs hero illustration"
        description="Two sizes, two purposes. Don&apos;t stretch a spot illustration to fill a hero — design at the target size."
      >
        <PageTable
          headers={["Type", "Size", "Use cases", "Colour count"]}
          colWidths={["20%", "20%", "40%", "20%"]}
          rows={[
            ["Spot (small)", "24–48px", "Inline content, list items, list icons", "1–2 colours"],
            ["Spot (medium)", "64–96px", "Empty states, feature highlights, badge spots", "2–3 colours"],
            ["Spot (large)", "120–200px", "Empty state centrepiece, marketing thumb", "3–4 colours"],
            ["Hero", "Full-width", "Landing page hero, campaign visuals", "4–5 colours max"],
          ]}
        />
      </Section>

      <Section
        id="empty-states"
        title="Empty states"
        description="An empty state is a brand moment. Illustrations make absence feel intentional."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            Centred illustration (120–200px), headline below in heading-md
            weight, one supporting line in body, one primary CTA.
          </li>
          <li>
            Match the illustration to the context. &lsquo;No claims&rsquo;
            shows a shield; &lsquo;No saved searches&rsquo; shows a magnifier.
          </li>
          <li>
            Never use the same illustration for two distinct empty states
            on the same product.
          </li>
        </ul>
        <PlaceholderImage label="Empty state mock — &lsquo;No claims yet&rsquo; — 160px shield illustration centred, headline below, supporting line, primary CTA &lsquo;Learn about claims&rsquo;." />
      </Section>

      <Section
        id="library"
        title="Spot illustration library"
        description="Auto-cycling through the canonical spot illustrations we ship across the product."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Car",
              description: "Side-profile car silhouette in geometric forms, ACKO purple lead, single yellow accent for headlamp.",
            },
            {
              name: "Health",
              description: "Stylised medical cross with rounded corners, purple primary, cerise accent — used on health surfaces.",
            },
            {
              name: "Home",
              description: "Simple house silhouette with rounded roof, purple primary, soft grey base, used in saved-address contexts.",
            },
            {
              name: "Travel",
              description: "Paper plane in flight, purple body, leafy green motion trail — used on travel insurance surfaces.",
            },
            {
              name: "Shield",
              description: "Rounded shield with subtle highlight, used to communicate cover, protection, and policy status.",
            },
            {
              name: "Document",
              description: "Stylised certificate with fold lines, purple lead, used for policy and document contexts.",
            },
          ]}
        />
      </Section>

      <Section
        id="colour-rules"
        title="Colour rules"
        description="One spot illustration, one accent. Never two."
      >
        <PageTable
          headers={["Lead colour", "Permitted accents", "When"]}
          colWidths={["28%", "40%", "32%"]}
          rows={[
            ["Purple-600", "Yellow OR cerise OR teal OR green — pick one", "Always — purple-600 is the lead"],
            ["Grey-200", "Used as a base / shadow layer", "Backgrounds, shadows under main shapes"],
            ["White", "Used for highlights and inner shapes", "Inside purple shapes"],
          ]}
        />
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Design at the target size — never stretch a 48px spot to 200px.",
            "Use ACKO purple as the lead, one supporting accent per piece.",
            "Match illustration to context — context first, decoration second.",
            "Use rounded corners on geometric shapes — sharp corners read as harsh.",
          ]}
          dontItems={[
            "Use gradients on illustration fills.",
            "Mix two vertical accents (yellow + cerise) in one illustration.",
            "Use photo-realistic detail in illustration work.",
            "Use third-party illustration packs without restyling to the ACKO system.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Iconography", href: "/foundations/iconography", meta: "Media, content & voice" },
            { title: "Imagery", href: "/foundations/imagery", meta: "Media, content & voice" },
            { title: "Colour", href: "/foundations/color", meta: "Design system" },
            { title: "Empty state pattern", href: "/patterns/pages/empty-state", meta: "Components & patterns" },
          ]}
        />
      </Section>
    </article>
  );
}
