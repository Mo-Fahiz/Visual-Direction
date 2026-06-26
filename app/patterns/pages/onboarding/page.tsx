import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { DocImage } from "@/components/docs/DocImage";
import { assetPath } from "@/lib/base-path";
const PIMG = (f: string) => assetPath(`/images/Page_patterns/${f}`);
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Onboarding flow",
};

export default function OnboardingPatternPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Onboarding flow"
        description="A linear stepper that asks one question at a time. Minimal chrome, one decision per screen, the user always knows where they are and what's next."
      />

      <Section
        id="anatomy"
        title="Anatomy"
        description="Onboarding strips the chrome down to the essentials so the user can focus on one question."
      >
        <DocImage src={PIMG("onboarding-anatomy.png")} alt="A 3-step onboarding wireframe: vehicle details, personal info, and quote. Each step shows the progress indicator, a single question, helper copy, and primary CTA." ratio="4/3" background="none" />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Progress indicator</strong> at the top — discrete steps, current step highlighted.</li>
          <li><strong>Back affordance</strong> in the top-left, never as a footer button competing with the primary.</li>
          <li><strong>One question per step</strong> — never stack multiple decisions.</li>
          <li><strong>Primary CTA at the bottom</strong> — full-width on mobile, right-aligned on desktop.</li>
          <li><strong>No sidebar, no global footer</strong> — minimal chrome.</li>
        </ul>
      </Section>

      <Section
        id="layout"
        title="Layout"
        description="Single-column layout, max content width 480px, centred horizontally and vertically up to the comfortable scroll point."
      >
        <PageTable
          headers={["Region", "Mobile", "Desktop"]}
          colWidths={["32%", "34%", "34%"]}
          rows={[
            ["Page padding", "16px sides", "40px sides"],
            ["Content max-width", "100%", "480px"],
            ["Progress indicator", "Top of viewport, sticky", "Top of viewport, sticky"],
            ["Primary CTA position", "Full-width, sticky bottom", "Below content, right-aligned"],
            ["Step transition", "Slide right-to-left", "Crossfade"],
          ]}
        />
      </Section>

      <Section
        id="behaviour"
        title="Behaviour"
        description="Onboarding is forgiving. Users can go back without losing progress, and validation never blocks typing."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Back returns to the previous step with the answer pre-filled.</li>
          <li>Forward is locked until the current step is valid.</li>
          <li>Browser back button is wired to the previous step, not the previous URL.</li>
          <li>Refreshing keeps the user on the same step — state is persisted.</li>
          <li>The final step shows the result (quote, confirmation) and a single clear next action.</li>
        </ul>
      </Section>

      <Section
        id="content"
        title="Content guidelines"
        description="Onboarding is the most-read copy on the site. Write like you're handing the user a calm sentence at a time."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Step title: a question or short statement, ≤ 60 characters.</li>
          <li>Helper text: 1 line explaining why we&apos;re asking.</li>
          <li>Primary CTA: verb-led — Continue, Get quote, See plans. Never Next or OK.</li>
          <li>Progress label: &quot;Step 2 of 5&quot; under the indicator on mobile; numeric label inline on desktop.</li>
        </ul>
      </Section>

      <Section id="do-dont" title="Do and don't">
        <DoDont
          doItems={[
            "Ask one question per step.",
            "Show progress at every step.",
            "Persist answers across refresh and back-navigation.",
            "Make the primary CTA the most prominent element on the screen.",
          ]}
          dontItems={[
            "Surface a global header or footer during onboarding.",
            "Stack two questions to save a step.",
            "Use generic labels like Next or OK on the primary CTA.",
            "Validate on every keystroke — only on blur or submit.",
          ]}
        />
        <DocImage src={PIMG("onboarding-do-dont.png")} alt="Left: clean single-question onboarding step with progress bar and Continue CTA. Right: same step with three stacked questions, Next button, and no progress indicator — marked incorrect." ratio="4/3" background="none" />
      </Section>

      <Section id="related" title="Related">
        <ul>
          <li><Link href="/foundations/layout">Layout and grid</Link> — the single-column container.</li>
          <li><Link href="/patterns/form-field">Form field</Link> — the input unit used at every step.</li>
          <li><Link href="/foundations/cta-hierarchy">CTA hierarchy</Link> — primary placement rules.</li>
          <li><Link href="/foundations/motion">Motion</Link> — step transitions.</li>
        </ul>
      </Section>
    </article>
  );
}
