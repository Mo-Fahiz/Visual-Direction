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
  title: "Settings",
};

export default function SettingsPatternPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Settings"
        description="Grouped preferences with inline saves. Sidebar + content layout, toggle switches for binary preferences, save confirmation via toast."
      />

      <Section
        id="anatomy"
        title="Anatomy"
      >
        <DocImage src={PIMG("settings-anatomy.png")} alt="Settings wireframe with left sidebar (Account, Notifications, Security) and main content showing grouped toggle switches, form fields, and inline save indicators." ratio="4/3" background="none" />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Sidebar nav</strong> — top-level categories.</li>
          <li><strong>Grouped sections</strong> — Account, Notifications, Security, Communication.</li>
          <li><strong>Toggles</strong> — for binary preferences.</li>
          <li><strong>Form fields</strong> — for value preferences (display name, email).</li>
          <li><strong>Inline save</strong> — auto-save with a small confirmation toast.</li>
        </ul>
      </Section>

      <Section
        id="layout"
        title="Layout"
      >
        <PageTable
          headers={["Region", "Mobile", "Desktop"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Sidebar", "Top dropdown — Account ▼", "240px fixed sidebar"],
            ["Content column", "Full width", "Fluid, remaining columns"],
            ["Section spacing", "32px between sections", "48px between sections"],
            ["Save model", "Auto-save on blur", "Auto-save on blur"],
            ["Save feedback", "Toast at top-centre", "Toast at bottom-right"],
          ]}
        />
      </Section>

      <Section
        id="behaviour"
        title="Behaviour"
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Toggles save instantly on change — no Save button.</li>
          <li>Text fields save on blur. While saving, the field shows a tiny purple indicator on its right.</li>
          <li>Errors show inline under the field and roll back the value if the save fails.</li>
          <li>Destructive settings (Close account, Delete data) live at the bottom of the section, in a danger-styled card.</li>
        </ul>
      </Section>

      <Section
        id="content"
        title="Content guidelines"
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Section labels: noun-led — Notifications, Security, Communication.</li>
          <li>Toggle labels: state the preference, not the current state — &quot;Email me about claims&quot;, not &quot;Claim emails: On&quot;.</li>
          <li>Helper text under a toggle: ≤ 80 chars explaining what changes.</li>
          <li>Save toasts: short and past-tense — Saved, Updated, Changed.</li>
        </ul>
      </Section>

      <Section id="do-dont" title="Do and don't">
        <DoDont
          doItems={[
            "Auto-save on blur and on toggle change.",
            "Confirm saves with an unobtrusive toast.",
            "Group related preferences into sections.",
            "Put destructive settings at the bottom in a danger-styled card.",
          ]}
          dontItems={[
            "Use a Save button at the bottom of the page.",
            "Mix preferences and account actions in the same section.",
            "Label toggles with the current state.",
            "Open a confirmation dialog for non-destructive changes.",
          ]}
        />
        <DocImage src={PIMG("settings-do-dont.png")} alt="Left: settings with grouped sections, auto-save toggles, and unobtrusive Saved toast. Right: global Save button at the bottom with a confirmation dialog on every toggle — marked incorrect." ratio="4/3" background="none" />
      </Section>

      <Section id="related" title="Related">
        <ul>
          <li><Link href="/foundations/layout">Layout and grid</Link> — sidebar + content rules.</li>
          <li><Link href="/patterns/form-field">Form field</Link> — value preferences.</li>
          <li><Link href="/patterns/toast">Toast</Link> — save feedback.</li>
          <li><Link href="/patterns/dialog">Dialog</Link> — destructive confirmations only.</li>
        </ul>
      </Section>
    </article>
  );
}
