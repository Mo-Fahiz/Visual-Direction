import type { Metadata } from "next";
import { MoleculePage } from "@/components/docs/MoleculeTemplate";

export const metadata: Metadata = {
  title: "Tabs",
};

export default function TabsMoleculePage() {
  return (
    <MoleculePage
      title="Tabs"
      description="Switch between sibling views of the same object. Tabs are not navigation — if the destination is a different object, use links."
      anatomyLabel="Annotated tabs component with numbered callouts: 1 tab list, 2 active tab, 3 inactive tab, 4 active indicator underline, 5 tab panel, 6 optional count badge inside a tab label."
      variants={[
        { name: "Underline", use: "The default. In-page tab switcher for sibling content.", notes: "2px purple underline under the active tab. Used on most surfaces." },
        { name: "Pill", use: "Compact tabbed surfaces — filters, toolbar segments.", notes: "Filled pill background on the active tab; no underline." },
        { name: "Segmented", use: "Mutually exclusive toggle within a small control — 2–4 options.", notes: "Connected button group; the active option is filled." },
      ]}
      props={[
        { name: "value", type: "string", description: "Controlled active tab id." },
        { name: "onValueChange", type: "(value: string) => void", description: "Fires on tab change." },
        { name: "variant", type: '"underline" | "pill" | "segmented"', defaultValue: '"underline"', description: "Visual style." },
        { name: "syncToUrl", type: "boolean", defaultValue: "false", description: "Persist the active tab to the URL hash or query string." },
        { name: "orientation", type: '"horizontal" | "vertical"', defaultValue: '"horizontal"', description: "Vertical tabs for long lists on wide layouts." },
      ]}
      behaviour={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Clicking a tab activates it instantly — no loading state for the tab itself, only for its content.</li>
          <li>Keyboard: ArrowLeft/Right (or ArrowUp/Down when vertical) moves focus and activates the tab. Home/End jumps to ends.</li>
          <li>Active indicator animates between tabs (180ms easeOut).</li>
          <li>Tab panels are mounted but visually hidden by default; the framework decides when to lazy-load expensive panels.</li>
        </ul>
      }
      content={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Labels: 1 word ideal, ≤ 18 characters max. Sentence case, no periods.</li>
          <li>Each tab should describe a sibling view of the same object — Overview, Policy, Claims, Documents.</li>
          <li>Maximum 5 tabs on mobile, 7 on desktop. Beyond that, use a sidebar.</li>
          <li>Count badges inside a tab label are right-aligned and use the muted style.</li>
        </ul>
      }
      accessibility={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Tablist: <code className="font-mono text-[12px]">role=&quot;tablist&quot;</code> with <code className="font-mono text-[12px]">aria-orientation</code>.</li>
          <li>Tab: <code className="font-mono text-[12px]">role=&quot;tab&quot;</code> with <code className="font-mono text-[12px]">aria-selected</code> and <code className="font-mono text-[12px]">aria-controls</code>.</li>
          <li>Panel: <code className="font-mono text-[12px]">role=&quot;tabpanel&quot;</code> with <code className="font-mono text-[12px]">aria-labelledby</code>.</li>
          <li>Focus moves with arrow keys; tab to next focusable element exits the tablist.</li>
        </ul>
      }
      doItems={[
        "Use tabs for sibling views of the same object.",
        "Keep labels to one word where possible.",
        "Sync the active tab to the URL when deep links matter.",
        "Animate the indicator between tabs.",
      ]}
      dontItems={[
        "Use tabs as navigation to different objects.",
        "Mix variants on the same surface.",
        "Stack two tab strips on the same page.",
        "Hide critical content behind a tab that isn't active by default.",
      ]}
      doDontLabel="Side-by-side. Left: a policy page with Overview, Coverage, Documents, Claims tabs (underline variant). Right: the same page with one tab labelled More that hides three critical sections — marked as incorrect."
      related={[
        { href: "/foundations/motion", label: "Motion", meta: "Indicator animation" },
        { href: "/foundations/layout", label: "Layout and grid", meta: "Where tabs sit in the page hierarchy" },
        { href: "/patterns/pages/policy-detail", label: "Policy detail pattern", meta: "Where tabs commonly appear" },
      ]}
    />
  );
}
