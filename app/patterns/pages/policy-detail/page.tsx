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
  title: "Policy detail",
};

export default function PolicyDetailPatternPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Policy detail"
        description="The home for a single policy. Summary at the top, sections grouped by intent, an action bar that's always reachable."
      />

      <Section
        id="anatomy"
        title="Anatomy"
        description="A sidebar + content layout. The sidebar carries navigation between policy sections; the content carries the data."
      >
        <DocImage src={PIMG("policy-anatomy.png")} alt="Policy detail wireframe. Left sidebar with nav (Overview, Coverage, Documents, Claims). Main column with summary card at top, section content below. Sticky action bar with Renew and File claim." ratio="4/3" background="none" />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Summary card</strong> at the top — policy number, status, expiry, premium.</li>
          <li><strong>Section nav</strong> — Overview, Coverage, Documents, Claims (tabs or sidebar).</li>
          <li><strong>Action bar</strong> — Renew (primary) and File claim (secondary), always reachable.</li>
          <li><strong>Status badge</strong> — Active, Expiring soon, Lapsed — colour follows the feedback tokens.</li>
        </ul>
      </Section>

      <Section
        id="layout"
        title="Layout"
        description="Sidebar + content on desktop. Mobile collapses the sidebar to a top dropdown."
      >
        <PageTable
          headers={["Region", "Mobile", "Desktop"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Sidebar / nav", "Top dropdown — Overview ▼", "280px fixed sidebar"],
            ["Content column", "Full width", "Fluid, remaining columns"],
            ["Summary card", "Top of content, full-width", "Top of content, full-width inside column"],
            ["Action bar", "Sticky bottom", "Sticky bottom of content column"],
            ["Section transitions", "Slide right-to-left", "Crossfade"],
          ]}
        />
      </Section>

      <Section
        id="behaviour"
        title="Behaviour"
        description="Section changes are URL-synced. Renew and File claim are always one tap away."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Section nav updates the URL — the user can deep-link to Documents or Claims.</li>
          <li>The action bar stays visible regardless of scroll position.</li>
          <li>Renew opens the renewal flow; File claim opens the claim intake flow — both as new routes, not modals.</li>
          <li>Expiring-soon policies surface a renewal banner above the summary card.</li>
        </ul>
      </Section>

      <Section
        id="content"
        title="Content guidelines"
        description="Insurance is administrative — be precise. Avoid hedging language."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Status badge labels: Active, Expiring soon, Lapsed, Cancelled.</li>
          <li>Section labels: short nouns — Overview, Coverage, Documents, Claims.</li>
          <li>Primary action label: Renew (not Renew now). Secondary: File claim (not Claim).</li>
          <li>Dates: <strong>15 Jun 2026</strong>, never 15/06/26.</li>
        </ul>
      </Section>

      <Section id="do-dont" title="Do and don't">
        <DoDont
          doItems={[
            "Pin the action bar — Renew and File claim must always be reachable.",
            "URL-sync the active section.",
            "Use feedback colours for status badges.",
            "Surface expiring-soon banners above the summary, not inside it.",
          ]}
          dontItems={[
            "Hide Renew inside a More menu.",
            "Stack two action bars (top + bottom).",
            "Use vague status labels like Pending or In progress.",
            "Open renewal as a modal — it's a flow, not a confirmation.",
          ]}
        />
        <DocImage src={PIMG("policy-do-dont.png")} alt="Left: policy page with sidebar nav, summary card, sticky Renew/File claim bar. Right: same page with actions buried in an overflow menu — marked incorrect." ratio="4/3" background="none" />
      </Section>

      <Section id="related" title="Related">
        <ul>
          <li><Link href="/foundations/layout">Layout and grid</Link> — sidebar + content layout.</li>
          <li><Link href="/patterns/tabs">Tabs</Link> — when sections become tabs instead of a sidebar.</li>
          <li><Link href="/patterns/card">Card</Link> — summary and content cards.</li>
          <li><Link href="/foundations/cta-hierarchy">CTA hierarchy</Link> — primary vs secondary in the action bar.</li>
        </ul>
      </Section>
    </article>
  );
}
