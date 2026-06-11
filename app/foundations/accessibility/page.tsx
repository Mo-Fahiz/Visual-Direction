import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { CodeChip } from "@/components/docs/CodeChip";

export const metadata: Metadata = {
  title: "Accessibility",
};

export default function AccessibilityPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation"
        title="Accessibility"
        description="WCAG AA is the minimum bar. Every foundation carries accessibility requirements — this page consolidates them in one place."
        lastUpdated="May 12, 2026"
      />

      <Section
        id="color"
        title="Colour"
        description="Colour pairings must clear WCAG AA at minimum. Colour must never be the sole indicator of state."
      >
        <PageTable
          headers={["Requirement", "Ratio", "Applies to"]}
          colWidths={["40%", "15%", "45%"]}
          rows={[
            ["Body text on background", "4.5:1", "All text at body sizes (14px+)"],
            ["Large text on background", "3:1", "Text at 18px+ regular or 14px+ bold"],
            ["Non-text UI elements", "3:1", "Icons, borders, form controls, focus rings"],
            ["Decorative elements", "—", "No contrast requirement"],
          ]}
        />
        <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-foreground space-y-1">
          <li>Never use colour alone to indicate error, success, or selection — pair with icon, text, or pattern.</li>
          <li>Category colours (Auto, Health, Life, Travel) must pass 3:1 against their background in both themes.</li>
          <li>Test all pairings in both light and dark themes.</li>
        </ul>

        <Section id="safe-pairings" title="Safe pairings" level={3}>
          <PageTable
            headers={["Pairing", "Ratio", "Grade"]}
            colWidths={["50%", "20%", "30%"]}
            rows={[
              ["Grey-800 (#0A0A0A) on Grey-100 (#F5F5F5)", "18.8:1", "AAA"],
              ["Purple-600 (#6841E6) on White", "5.5:1", "AA"],
              ["White on Purple-600", "5.5:1", "AA"],
              ["Red-700 (#B91C1C) on White", "7.1:1", "AAA"],
              ["Grey-450 (#605F63) on Grey-100 (#F5F5F5)", "5.7:1", "AA"],
            ]}
          />
        </Section>
      </Section>

      <Section
        id="typography"
        title="Typography"
        description="Minimum sizes and rendering rules for legibility."
      >
        <PageTable
          headers={["Rule", "Value", "Notes"]}
          colWidths={["35%", "20%", "45%"]}
          rows={[
            ["Body text minimum", "14px", "Applies to all body-sm and above"],
            ["Label minimum", "12px", "Form labels, metadata, captions"],
            ["Absolute floor", "10px", "Overline and label-sm only — use sparingly"],
            ["Heading balance", <CodeChip key="tb">text-wrap: balance</CodeChip>, "Prevents orphans on headings"],
            ["Tabular numbers", <CodeChip key="tn">tabular-nums</CodeChip>, "For dynamic numeric values (prices, counts)"],
          ]}
        />
      </Section>

      <Section
        id="motion"
        title="Motion"
        description="Respect user preferences. Never convey meaning through motion alone."
      >
        <PageTable
          headers={["Rule", "Details"]}
          colWidths={["35%", "65%"]}
          rows={[
            [<CodeChip key="prm">prefers-reduced-motion</CodeChip>, "Replace movement with fade or instant end-state. Never ignore this preference."],
            ["GPU-only properties", "Animate only transform and opacity. Never animate padding, margin, height, or width."],
            ["Motion as supplement", "Motion must supplement, not replace, a visible state change (colour, icon, text)."],
            ["Exit faster than enter", "Exit animations should be 20–30% shorter than entrance animations."],
            ["High-frequency elements", "Elements seen 100+ times daily (list items, table rows) should not animate."],
          ]}
        />
      </Section>

      <Section
        id="spacing"
        title="Touch & spacing"
        description="Minimum interactive target sizes for mobile and pointer accessibility."
      >
        <PageTable
          headers={["Rule", "Value", "Notes"]}
          colWidths={["35%", "20%", "45%"]}
          rows={[
            ["Minimum tap target", "44px", "h-44 in the spacing scale (WCAG 2.5.8)"],
            ["Target spacing", "8px", "Minimum gap between interactive targets"],
            ["Click area padding", "≥ 8px", "Invisible hit area can extend beyond visible bounds"],
          ]}
        />
      </Section>

      <Section
        id="focus"
        title="Focus management"
        description="Focus must always be visible and follow a logical order."
      >
        <PageTable
          headers={["Rule", "Details"]}
          colWidths={["35%", "65%"]}
          rows={[
            ["Focus ring", <span key="fr">Always visible using <CodeChip>--shadow-focus-ring</CodeChip> (3px purple ring). Never removed or hidden.</span>],
            ["Focus order", "Follows DOM order. Use tabindex only when natural order is insufficient."],
            ["Skip-to-content", "Provide a skip-to-content link as the first focusable element on every page."],
            ["Modal focus trap", "When a modal opens, trap focus inside. On close, return focus to the trigger."],
            ["Focus on route change", "Move focus to the main heading or content region after client-side navigation."],
          ]}
        />
      </Section>

      <Section
        id="semantics"
        title="Semantic HTML & ARIA"
        description="Prefer semantic HTML over ARIA. Use ARIA only when no native element fits."
      >
        <PageTable
          headers={["Rule", "Details"]}
          colWidths={["35%", "65%"]}
          rows={[
            ["Heading hierarchy", "Use h1–h6 in order. Never skip levels (h2 → h4). One h1 per page."],
            ["Landmark regions", <span key="lr">Use <CodeChip>main</CodeChip>, <CodeChip>nav</CodeChip>, <CodeChip>aside</CodeChip>, <CodeChip>footer</CodeChip> for page structure.</span>],
            ["Decorative icons", <span key="di">Hide with <CodeChip>aria-hidden=&quot;true&quot;</CodeChip>. Icons paired with text are decorative.</span>],
            ["Actionable icons", "Icon-only buttons must have aria-label describing the action."],
            ["Live regions", <span key="live">Use <CodeChip>aria-live=&quot;polite&quot;</CodeChip> for status updates (toasts, form feedback).</span>],
          ]}
        />
      </Section>

      <Section
        id="forms"
        title="Forms"
        description="Every form input must be labelled and errors must be programmatically associated."
      >
        <PageTable
          headers={["Rule", "Details"]}
          colWidths={["35%", "65%"]}
          rows={[
            ["Label association", <span key="la">Every input has a visible <CodeChip>&lt;label&gt;</CodeChip> linked via <CodeChip>htmlFor</CodeChip>.</span>],
            ["Error association", <span key="ea">Error messages linked to their input via <CodeChip>aria-describedby</CodeChip>.</span>],
            ["Required fields", <span key="rf">Indicate with <CodeChip>aria-required=&quot;true&quot;</CodeChip> and a visible marker (text or asterisk).</span>],
            ["Error announcement", "On validation failure, move focus to the first errored field or announce the error."],
            ["Autocomplete", <span key="ac">Use <CodeChip>autocomplete</CodeChip> attribute for name, email, phone, address fields.</span>],
          ]}
        />
      </Section>
    </article>
  );
}
