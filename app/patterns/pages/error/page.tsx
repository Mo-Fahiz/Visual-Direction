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
  title: "Error page",
};

export default function ErrorPatternPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Error page"
        description="Two patterns: 404 (we can't find the page) and 500 (something on our side broke). Friendly headline, brief explanation, link back to safety."
      />

      <Section
        id="variants"
        title="Variants"
      >
        <PageTable
          headers={["Variant", "Headline", "When"]}
          colWidths={["20%", "44%", "36%"]}
          rows={[
            ["404", "We can't find that page", "URL doesn't resolve."],
            ["500", "Something's not working on our end", "Server error or unhandled exception."],
            ["Offline", "You're offline", "Network connectivity lost."],
            ["Permission", "You don't have access to this page", "User is authenticated but unauthorised."],
          ]}
        />
        <DocImage src={PIMG("error-anatomy.png")} alt="A 404 page: centred shield illustration, headline We can't find that page, supporting line, and two CTAs — Go home (primary) and Contact support (tertiary)." ratio="4/3" background="none" />
      </Section>

      <Section
        id="anatomy"
        title="Anatomy"
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Illustration</strong> — 120px spot illustration, brand purple accent.</li>
          <li><strong>Headline</strong> — what happened, in human language.</li>
          <li><strong>Description</strong> — what the user can do next.</li>
          <li><strong>Primary CTA</strong> — Go home or Retry.</li>
          <li><strong>Tertiary CTA</strong> — Contact support, View status page.</li>
          <li>For 500: include a short reference code below the description.</li>
        </ul>
      </Section>

      <Section
        id="behaviour"
        title="Behaviour"
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>404 pages keep the global header and footer — the rest of the site is still useful.</li>
          <li>500 pages also keep the header; if the header itself is broken, fall back to a chrome-free error.</li>
          <li>Retry on 500 should attempt the same route; if it fails twice, recommend Contact support.</li>
          <li>Offline errors auto-recover when the network returns — surface a toast confirming reconnection.</li>
        </ul>
      </Section>

      <Section
        id="content"
        title="Content guidelines"
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Headline: factual, no jargon. &quot;We can&apos;t find that page&quot;, not &quot;Error 404&quot;.</li>
          <li>Description: 1 sentence. Say what we know, then offer a path forward.</li>
          <li>Never blame the user. Never apologise twice in the same screen.</li>
          <li>Reference codes are optional — only show them for 500s where support might need them.</li>
        </ul>
      </Section>

      <Section id="do-dont" title="Do and don't">
        <DoDont
          doItems={[
            "Use plain language — say what happened.",
            "Offer one primary action and one tertiary action.",
            "Keep the global navigation visible.",
            "Include a reference code on 500s for support.",
          ]}
          dontItems={[
            "Use error codes as the headline (Error 404, Error 500).",
            "Apologise excessively or use sad copy.",
            "Hide the rest of the site behind the error page.",
            "Use a dialog for a 404 or 500 — they're full pages.",
          ]}
        />
        <DocImage src={PIMG("error-do-dont.png")} alt="Left: friendly 404 with illustration, plain headline, Go home CTA. Right: same screen with Error 404 headline and a long stack trace — marked incorrect." ratio="4/3" background="none" />
      </Section>

      <Section id="related" title="Related">
        <ul>
          <li><Link href="/patterns/pages/empty-state">Empty state</Link> — different intent, different pattern.</li>
          <li><Link href="/patterns/toast">Toast</Link> — for transient errors that don&apos;t take the page.</li>
          <li><Link href="/foundations/voice">Voice and tone</Link> — error copy style.</li>
        </ul>
      </Section>
    </article>
  );
}
