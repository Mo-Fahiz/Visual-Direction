import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { DocImage } from "@/components/docs/DocImage";
import { assetPath } from "@/lib/base-path";
const PIMG = (f: string) => assetPath(`/images/Page_patterns/${f}`);
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Empty state",
};

export default function EmptyStatePatternPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs trail={[{ label: "Components & patterns" }, { label: "Page patterns" }, { label: "Empty state" }]} />
      <PageHeader
        title="Empty state"
        description="The first impression of a surface that has no data yet. Centred illustration, one sentence of context, one action."
      />

      <Section
        id="anatomy"
        title="Anatomy"
      >
        <DocImage src={PIMG("empty-state-anatomy.png")} alt="An empty state screen: centred spot illustration of a shield, headline No active policies yet, supporting copy, and a single primary CTA — Get a quote." ratio="4/3" background="none" />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Illustration</strong> — 48px icon or 96–120px spot illustration. Brand purple as the accent.</li>
          <li><strong>Headline</strong> — short, factual — No claims yet, No documents uploaded.</li>
          <li><strong>Description</strong> — 1 sentence explaining what would appear here.</li>
          <li><strong>Single CTA</strong> — the next useful step — Learn about claims, Upload a document.</li>
        </ul>
      </Section>

      <Section
        id="layout"
        title="Layout"
        description="Centred vertically and horizontally inside the available surface, with generous breathing room above and below."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Max width 360px on mobile, 480px on desktop — keeps the message scannable.</li>
          <li>32px gap between illustration and headline, 12px between headline and description, 24px between description and CTA.</li>
          <li>Background follows the parent surface — no card chrome around an empty state.</li>
        </ul>
      </Section>

      <Section
        id="behaviour"
        title="Behaviour"
        description="An empty state is not a loading state and not an error state — be explicit about which one is showing."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Loading: show a skeleton, not an empty state.</li>
          <li>Empty: there is no data yet — render the empty state.</li>
          <li>Error: failed to load — render the error pattern, not the empty state.</li>
          <li>The CTA navigates or opens a flow; it never just refreshes.</li>
        </ul>
      </Section>

      <Section
        id="content"
        title="Content guidelines"
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Headline: ≤ 6 words, factual.</li>
          <li>Description: ≤ 80 characters. Set expectations — &quot;When you file a claim it&apos;ll appear here&quot;.</li>
          <li>CTA: action-led — Learn about claims, Get a quote, Upload a document.</li>
          <li>Never apologise or use sad copy — &quot;Nothing here yet&quot; is enough, &quot;Oops, no data!&quot; is not.</li>
        </ul>
      </Section>

      <Section id="do-dont" title="Do and don't">
        <DoDont
          doItems={[
            "Show one illustration, one headline, one description, one CTA.",
            "Make the CTA the next useful step — never a refresh.",
            "Use a skeleton during loading, not an empty state.",
            "Centre the content vertically inside its container.",
          ]}
          dontItems={[
            "Use empty states for loading or errors.",
            "Stack multiple CTAs — pick the most useful next step.",
            "Apologise — Oops, Sorry, Looks empty.",
            "Use illustrations that pull focus from the message.",
          ]}
        />
        <DocImage src={PIMG("empty-state-do-dont.png")} alt="Left: clean empty state with one illustration, factual headline, single CTA. Right: same with three CTAs, apology headline, and busy illustration — marked incorrect." ratio="4/3" background="none" />
      </Section>

      <Section id="related" title="Related">
        <ul>
          <li><Link href="/patterns/pages/error">Error page</Link> — different intent, different pattern.</li>
          <li><Link href="/foundations/imagery">Imagery</Link> — spot-illustration style.</li>
          <li><Link href="/foundations/voice">Voice and tone</Link> — no apologies.</li>
        </ul>
      </Section>
    </article>
  );
}
