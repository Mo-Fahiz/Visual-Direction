import type { Metadata } from "next";
import { MoleculePage } from "@/components/docs/MoleculeTemplate";

export const metadata: Metadata = {
  title: "Dropdown",
};

export default function DropdownMoleculePage() {
  return (
    <MoleculePage
      title="Dropdown"
      description="Three patterns get mistaken for each other: Menu (actions), Select (a single value from a list), and Combobox (a value with type-to-filter). Pick by purpose, not appearance."
      anatomyLabel="Annotated dropdown with numbered callouts: 1 trigger, 2 chevron, 3 popover surface, 4 search field (combobox only), 5 option, 6 selected indicator, 7 group label, 8 divider, 9 footer action."
      variants={[
        { name: "Menu", use: "Triggers an action — Edit, Duplicate, Delete. Closes after each click.", notes: "No value, no selection state." },
        { name: "Select", use: "Pick one value from a short list (≤ 7 options).", notes: "Selected option is highlighted and shown in the trigger." },
        { name: "Multi-select", use: "Pick zero or more values from a short list.", notes: "Trigger shows count or chips." },
        { name: "Combobox", use: "Pick a value from a long list with type-to-filter.", notes: "Open with click or focus; filter as you type." },
      ]}
      props={[
        { name: "value", type: "string | string[]", description: "Selected value(s). Omit for menu variant." },
        { name: "options", type: "Option[]", description: "Array of { value, label, icon?, group?, disabled? }." },
        { name: "placeholder", type: "string", description: "Trigger text when no value is selected." },
        { name: "searchable", type: "boolean", defaultValue: "false", description: "Adds an inline search field — auto-true for combobox." },
        { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Matches input sizing — 40 / 48 / 56px." },
        { name: "disabled", type: "boolean", defaultValue: "false", description: "Disables the trigger and prevents opening." },
      ]}
      behaviour={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Open:</strong> click trigger, ArrowDown when focused, or focus the combobox input.</li>
          <li><strong>Close:</strong> click outside, ESC, or select an option (menu and single select).</li>
          <li><strong>Keyboard:</strong> ArrowUp/Down navigates, Enter selects, Home/End jumps to ends, type-ahead jumps to matching options.</li>
          <li><strong>Position:</strong> opens below by default; flips above if there isn&apos;t room. Aligns to the trigger&apos;s left edge.</li>
          <li><strong>Width:</strong> matches the trigger width by default; menus may exceed if labels are longer.</li>
        </ul>
      }
      content={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Option labels: ≤ 40 characters. Sentence case. No periods.</li>
          <li>Use a placeholder only when no default exists — &quot;Select a state&quot;, not &quot;Choose one&quot;.</li>
          <li>Group options when the list exceeds 10 items.</li>
          <li>Use a combobox at 12+ options. Use a dialog with search at 100+.</li>
        </ul>
      }
      accessibility={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Menu: <code className="font-mono text-[12px]">role=&quot;menu&quot;</code> with <code className="font-mono text-[12px]">role=&quot;menuitem&quot;</code> children.</li>
          <li>Select: <code className="font-mono text-[12px]">role=&quot;listbox&quot;</code> with <code className="font-mono text-[12px]">role=&quot;option&quot;</code> and <code className="font-mono text-[12px]">aria-selected</code>.</li>
          <li>Combobox: <code className="font-mono text-[12px]">role=&quot;combobox&quot;</code> with <code className="font-mono text-[12px]">aria-expanded</code> and <code className="font-mono text-[12px]">aria-activedescendant</code>.</li>
          <li>Trigger has an accessible name even when it shows only an icon.</li>
        </ul>
      }
      doItems={[
        "Pick the right variant: menu for actions, select for one value, combobox for many.",
        "Use combobox at 12+ options.",
        "Keep labels short and verb-led for menus, noun-led for selects.",
        "Provide an aria-label when the trigger is icon-only.",
      ]}
      dontItems={[
        "Use a select to trigger actions — that's a menu.",
        "Use a dropdown when 2–3 options would fit as inline pills or radio buttons.",
        "Hide critical fields inside an overflow menu.",
        "Make the popover wider than the page.",
      ]}
      doDontLabel="Two-column comparison. Left: clear menu with verb actions and a combobox with type-to-filter for state selection. Right: a select labelled Actions with verb options inside — marked as incorrect."
      related={[
        { href: "/patterns/form-field", label: "Form field", meta: "When the dropdown is a form input" },
        { href: "/foundations/cta-hierarchy", label: "CTA hierarchy", meta: "Menus often live next to primary actions" },
        { href: "/foundations/iconography", label: "Iconography", meta: "Chevron vs caret usage" },
      ]}
    />
  );
}
