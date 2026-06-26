import type { Metadata } from "next";
import Link from "next/link";
import { CodeChip } from "@/components/docs/CodeChip";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { DocImage } from "@/components/docs/DocImage";
import { Section } from "@/components/docs/Section";
import { assetPath } from "@/lib/base-path";

const IMG = (file: string) => assetPath(`/images/Page_cta-hierarchy/${file}`);

export const metadata: Metadata = {
  title: "CTA hierarchy",
};

export default function CtaHierarchyPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="CTA hierarchy"
        description="Every screen has at most one primary action. Supporting actions step down in visual weight so the next step is always obvious."
      />

      <Section
        id="hierarchy"
        title="The hierarchy"
        description="Five levels, ranked by visual weight. Every button on every ACKO surface resolves to one of these."
      >
        <PageTable
          headers={["Level", "Variant", "When to use", "Visual weight"]}
          colWidths={["18%", "18%", "44%", "20%"]}
          rows={[
            [
              "Primary",
              <CodeChip key="p">primary</CodeChip>,
              "The single most important action on the screen — Buy, Submit claim, Continue.",
              "Highest — filled purple (#6841E6).",
            ],
            [
              "Secondary",
              <CodeChip key="s">secondary</CodeChip>,
              "Important but not the main action — Save draft, Add another.",
              "Medium — purple outline.",
            ],
            [
              "Tertiary",
              <CodeChip key="t">ghost</CodeChip>,
              "Supporting navigation or optional actions — Learn more, Skip.",
              "Low — text only.",
            ],
            [
              "Destructive",
              <CodeChip key="d">danger</CodeChip>,
              "Irreversible actions — Cancel policy, Delete account.",
              "High but red — signals caution.",
            ],
            [
              "Link",
              <CodeChip key="l">link</CodeChip>,
              "Inline navigation or non-critical actions.",
              "Lowest — underlined text.",
            ],
          ]}
        />
        <DocImage src={IMG("cta-levels.png")} alt="A checkout product screen with each CTA level annotated — Primary, Secondary, Tertiary, Destructive, Link — showing how they coexist without competing." ratio="4/3" background="none" />
      </Section>

      <Section
        id="pairing"
        title="Pairing rules"
        description="Common CTA pairings and where each variant sits in the layout."
      >
        <PageTable
          headers={["Pairing", "Example", "Layout"]}
          colWidths={["32%", "38%", "30%"]}
          rows={[
            ["Primary + Tertiary", "Continue · Go back", "Primary on the right, tertiary on the left."],
            ["Primary + Secondary", "Submit · Save draft", "Primary on the right, secondary on the left."],
            ["Primary + Destructive", "Keep policy · Cancel policy", "Primary on the right, destructive on the left with a confirmation step."],
          ]}
        />
        <DocImage src={IMG("cta-pairings.png")} alt="Three card examples — Primary+Tertiary, Primary+Secondary, Primary+Destructive — shown in a form footer context with the recommended layout." ratio="4/3" background="none" />
      </Section>

      <Section
        id="mobile"
        title="Mobile stacking"
        description="Mobile collapses inline buttons into a stack. Primary always on top so the thumb reaches it first; secondary below."
      >
        <DocImage src={IMG("mobile-stacking.png")} alt="Side-by-side mobile vs desktop CTA layout. Mobile: stacked full-width buttons, primary on top. Desktop: inline buttons, primary on the right." ratio="4/3" background="none" />
      </Section>

      <Section
        id="do-dont"
        title="Do and don't"
        description="Most CTA mistakes come from competing primaries or vague labels. These rules eliminate both."
      >
        <DoDont
          doItems={[
            "One primary CTA per viewport.",
            "Verb-first labels: Get quote, File claim, Renew policy.",
            "Purple primary CTA everywhere — no green, no black, no blue.",
            "Confirm destructive actions in a second step.",
          ]}
          dontItems={[
            "Two filled buttons competing on the same screen.",
            "Vague labels like Submit, OK, or Click here.",
            "Ghost buttons for critical actions — too easy to miss.",
            "Destructive variants without a confirmation step.",
          ]}
        />
        <DocImage src={IMG("do-dont.png")} alt="Left: a clean form with one purple primary CTA and a ghost Go back. Right: the same form with two filled buttons — purple and green — competing for attention." ratio="4/3" background="none" />
      </Section>

      <Section
        id="related"
        title="Related"
        description="CTA decisions sit inside the larger layout and accessibility system."
      >
        <ul>
          <li>
            <Link href="/foundations/layout">Layout and grid</Link> — where the
            CTA sits in the page hierarchy.
          </li>
          <li>
            <Link href="/foundations/color">Colour</Link> — primary token and
            interaction states.
          </li>
          <li>
            <Link href="/ui-kit">Atoms</Link> — production button specs.
          </li>
        </ul>
      </Section>
    </article>
  );
}
