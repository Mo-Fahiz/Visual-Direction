import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { PlaceholderImage } from "@/components/docs/PlaceholderImage";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Contributing",
};

export default function ContributingPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Governance & onboarding" },
          { label: "Contributing" },
        ]}
      />
      <PageHeader
        title="Contributing"
        description="How to propose a new token, component, pattern, or guideline. The design system stays alive by accepting contributions — within a clear process."
      />

      <Section
        id="process"
        title="The contribution process"
        description="A predictable path from idea to shipped token. Five stages, owned by different people at each step."
      >
        <PageTable
          headers={["Stage", "Owner", "Output"]}
          colWidths={["20%", "28%", "52%"]}
          rows={[
            ["1 — Propose", "Anyone", "An issue describing the problem, not the solution. Links to surfaces where the gap appears."],
            ["2 — Triage", "Design system team", "Within 5 working days: accept, decline (with reason), or request more detail."],
            ["3 — Design", "Contributor + DS team", "RFC document: anatomy, variants, states, tokens used, accessibility plan."],
            ["4 — Build", "Contributor or DS team", "Code implementation, Storybook entry, Figma component, docs page."],
            ["5 — Ship", "DS team", "Versioned release, changelog entry, migration notes (if any)."],
          ]}
        />
        <PlaceholderImage
          label="Process flow diagram — 5 stages laid out left to right with owner labels, decision diamonds for triage, feedback loops between Design and Build."
        />
      </Section>

      <Section
        id="checklist"
        title="Review checklist"
        description="Every proposal is scored against the same checklist. If any item fails, the proposal goes back to revision."
      >
        <PageTable
          headers={["Dimension", "Check"]}
          colWidths={["28%", "72%"]}
          rows={[
            ["Brand", "Does it match the four personality traits? Does it sound and look like ACKO?"],
            ["Accessibility", "WCAG AA contrast, 44px touch target, focus-visible state, semantic markup, keyboard nav, screen reader announcement."],
            ["Token compliance", "Uses semantic tokens — never raw hex, never invented spacing. Cites the tokens it consumes."],
            ["Naming", "Follows the naming conventions doc. No ad-hoc acronyms."],
            ["Internationalisation", "Works for Indian English; tested with long Hindi transliterations; tabular numerals on numbers."],
            ["British English", "Copy uses British spellings — colour, behaviour, recognise."],
            ["Responsive", "Tested on 360px, 768px, 1280px viewports."],
            ["Themes", "Tested in both light and dark theme."],
            ["Documentation", "Has a docs page with anatomy, variants, states, do/don&apos;t, related links."],
          ]}
        />
      </Section>

      <Section
        id="versioning"
        title="Versioning policy"
        description="Semver-aligned. Breaking changes are rare and pre-announced."
      >
        <PageTable
          headers={["Version bump", "When", "Examples"]}
          colWidths={["20%", "32%", "48%"]}
          rows={[
            ["Patch (1.0.x)", "Bug fixes, doc corrections, non-breaking visual polish", "Fix focus ring colour, correct typo in tokens"],
            ["Minor (1.x.0)", "New tokens, new components, additive variants", "Add data-viz palette, add Forms pattern"],
            ["Major (x.0.0)", "Breaking changes — renamed tokens, removed components, changed defaults", "Rename --color-bg to --color-surface; remove deprecated Banner"],
          ]}
        />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Breaking changes ship with a migration guide and at least 30 days&apos; notice.</li>
          <li>
            Deprecated tokens stay in the system for one major version before
            removal — with console warnings on use.
          </li>
          <li>Patch releases ship weekly; minor releases ship monthly.</li>
        </ul>
      </Section>

      <Section
        id="ownership"
        title="Ownership"
        description="Who to talk to about what."
      >
        <PageTable
          headers={["Area", "Owner", "Contact"]}
          colWidths={["32%", "36%", "32%"]}
          rows={[
            ["Tokens, foundations, components", "Design system team", "Placeholder — design-system@acko"],
            ["Brand identity, voice, photography", "Brand team", "Placeholder — brand@acko"],
            ["Accessibility audits", "Accessibility lead", "Placeholder — a11y@acko"],
            ["Engineering implementation", "Frontend platform team", "Placeholder — fe-platform@acko"],
          ]}
        />
        <p>
          Contact details are placeholders — replace with the actual team email
          aliases before this page goes live.
        </p>
      </Section>

      <Section
        id="migration"
        title="Migration guides"
        description="When a breaking change ships, a migration guide is published here, linked from the changelog."
      >
        <p>
          No active migrations. The most recent breaking release was v1.0.0 —
          the initial design system release. See the{" "}
          <a href="/resources/changelog" className="text-[#6841E6] underline">
            changelog
          </a>{" "}
          for what landed.
        </p>
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "File an issue describing the problem before proposing a solution.",
            "Reference existing tokens, components, and patterns in your proposal.",
            "Run the review checklist on your own work before submitting.",
            "Volunteer to maintain what you contribute.",
          ]}
          dontItems={[
            "Add a new token because &lsquo;the existing one is close but not quite&rsquo; — push back on the design instead.",
            "Ship a new component without a docs page.",
            "Bypass the review process for &lsquo;urgent&rsquo; work — urgency is the most expensive bug.",
            "Add a third-party library without DS team review.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Changelog", href: "/resources/changelog", meta: "Governance" },
            { title: "Resources", href: "/resources", meta: "Governance" },
            { title: "Accessibility", href: "/foundations/accessibility", meta: "Governance" },
            { title: "Naming conventions", href: "/brand/naming", meta: "Brand identity" },
          ]}
        />
      </Section>
    </article>
  );
}
