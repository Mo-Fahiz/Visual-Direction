import type { Metadata } from "next";
import { DoDont } from "@/components/docs/DoDont";
import { PageTable } from "@/components/docs/PageTable";
import { PlaceholderImage } from "@/components/docs/PlaceholderImage";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Colour · Dark mode",
};

export default function DarkModePage() {
  return (
    <>
      <Section
        id="when"
        title="When to use dark mode"
        description="Dark mode is not a free design choice — it&apos;s an affordance for specific contexts. Use it where it helps; don&apos;t force it where it doesn&apos;t."
      >
        <PageTable
          headers={["Context", "Use dark?", "Why"]}
          colWidths={["38%", "16%", "46%"]}
          rows={[
            ["Form-heavy product surfaces", "No", "Reduced contrast hurts data entry and scanning"],
            ["Policy reading / document view", "No", "Long-form reading is faster on light"],
            ["Dashboards / analytics", "Yes", "Charts and data-dense surfaces benefit from reduced glare"],
            ["Video, media, scanning", "Yes", "Surrounding chrome stays out of the way"],
            ["Late-night flows (post-22:00)", "Yes (auto)", "Respect system preference, default to light"],
            ["Marketing landing pages", "No", "Photography and brand colour read best on light"],
          ]}
        />
      </Section>

      <Section
        id="token-mappings"
        title="Token mappings"
        description="The same semantic token resolves differently per theme. Always reference the semantic name; the theme layer handles the rest."
      >
        <PageTable
          headers={["Semantic token", "Light value", "Dark value"]}
          colWidths={["36%", "32%", "32%"]}
          rows={[
            ["--color-surface", "white", "grey-950"],
            ["--color-surface-subtle", "purple-50", "purple-950"],
            ["--color-text-primary", "grey-900", "grey-50"],
            ["--color-text-supporting", "grey-600", "grey-400"],
            ["--color-text-muted", "grey-500", "grey-500"],
            ["--color-primary", "purple-600", "purple-400 (lifted for contrast)"],
            ["--color-border", "grey-200", "grey-800"],
            ["--color-elevation", "white + shadow", "grey-900 + heavier shadow"],
          ]}
        />
        <p>
          Purple is brightened one step in dark mode — purple-400 reads as the
          accent against grey-950, where purple-600 would muddy.
        </p>
      </Section>

      <Section
        id="component-behaviour"
        title="Component behaviour"
        description="Most components don&apos;t need separate dark variants — they consume semantic tokens. A few exceptions need attention."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Shadows:</strong> heavier in dark to compensate for lower
            ambient contrast. The shadow scale doubles the opacity steps.
          </li>
          <li>
            <strong>Borders:</strong> grey-800 in dark mode reads as the
            hairline; grey-200 would disappear.
          </li>
          <li>
            <strong>Images:</strong> photography stays in original tone — no
            invert filter. Apply a subtle border-radius shadow to separate
            from background.
          </li>
          <li>
            <strong>Charts:</strong> swap to the dark-mode data palette (also
            documented on the Data visualisation page).
          </li>
          <li>
            <strong>Logo:</strong> use the white variant on dark surfaces;
            never the purple primary.
          </li>
        </ul>
        <PlaceholderImage
          label="Side-by-side comparison — the same dashboard surface rendered in light and dark. Annotated semantic token mappings between the two."
          size="tall"
        />
      </Section>

      <Section
        id="user-control"
        title="System preference & manual toggle"
        description="Respect the system preference first. Allow a manual toggle for users who want explicit control."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            On first paint, read <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">prefers-color-scheme</code>.
            Set the theme attribute before content renders.
          </li>
          <li>
            Persist the user&apos;s manual choice to localStorage as{" "}
            <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">acko-theme</code>.
          </li>
          <li>
            The toggle lives in account settings. No floating theme-switch
            button — it&apos;s noise on every screen.
          </li>
          <li>
            Updates apply instantly with no transition flicker. Use{" "}
            <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">data-theme</code>{" "}
            attribute on <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">&lt;html&gt;</code>.
          </li>
        </ul>
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Reference semantic tokens — never primitives — so themes resolve automatically.",
            "Brighten purple one step (purple-600 → purple-400) on dark surfaces.",
            "Test every new surface in both themes before shipping.",
            "Use the white logo variant on dark surfaces.",
          ]}
          dontItems={[
            "Force dark mode on form-heavy or long-reading surfaces.",
            "Use the same purple value across themes — it muddies on dark.",
            "Apply blanket invert filters to photography.",
            "Ship a floating theme-toggle button on every screen.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Colour tokens", href: "/foundations/color/tokens", meta: "Colour" },
            { title: "Colour usage", href: "/foundations/color/usage", meta: "Colour" },
            { title: "Shadows", href: "/foundations/shadows", meta: "Design system" },
            { title: "Data visualisation", href: "/foundations/data-viz", meta: "Design system" },
          ]}
        />
      </Section>
    </>
  );
}
