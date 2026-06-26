import type { Metadata } from "next";
import { MoleculePage } from "@/components/docs/MoleculeTemplate";

export const metadata: Metadata = {
  title: "Form field",
};

export default function FormFieldMoleculePage() {
  return (
    <MoleculePage
      title="Form field"
      description="The atomic unit of every form: label, control, helper text, and validation feedback. Every input on every ACKO surface resolves to this composition."
      anatomyLabel="Annotated form field with numbered callouts: 1 label, 2 required indicator (asterisk), 3 input control, 4 placeholder, 5 leading icon, 6 trailing icon or action, 7 helper text, 8 error message, 9 character counter."
      variants={[
        { name: "Text", use: "Single-line text — name, email, address line.", notes: "44/48/56px heights depending on size." },
        { name: "Textarea", use: "Multi-line text — claim description, feedback.", notes: "Auto-grows up to a max height, then scrolls." },
        { name: "Number", use: "Numeric input — age, IDV, amount.", notes: "Tabular numerals, optional currency prefix." },
        { name: "Password", use: "Password input with visibility toggle.", notes: "Trailing eye icon toggles plaintext." },
        { name: "Dropdown", use: "Single-value selection from a list.", notes: "Uses the dropdown molecule under the hood." },
        { name: "Date", use: "Date selection with calendar popover.", notes: "Calendar uses the molecule's keyboard rules." },
      ]}
      props={[
        { name: "label", type: "string", description: "Field label. Always required for accessibility." },
        { name: "required", type: "boolean", defaultValue: "false", description: "Shows the required asterisk and adds aria-required." },
        { name: "helper", type: "string", description: "Helper text shown under the input." },
        { name: "error", type: "string", description: "Error message. Replaces helper text when present." },
        { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "44 / 48 / 56px input height." },
        { name: "leadingIcon", type: "ReactNode", description: "Icon inside the input, left." },
        { name: "trailingAction", type: "ReactNode", description: "Icon button inside the input, right — clear, reveal, search." },
      ]}
      behaviour={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Focus:</strong> 2px purple ring outside the border; border colour shifts to purple-600.</li>
          <li><strong>Validation:</strong> validate on blur for format errors, on submit for required fields. Never block typing.</li>
          <li><strong>Error state:</strong> red border, red error message replaces helper text, error icon in the trailing position.</li>
          <li><strong>Disabled:</strong> reduced opacity surface, cursor not-allowed, no focus ring.</li>
          <li><strong>Clear:</strong> when controlled and non-empty, a trailing × clears the value and refocuses the input.</li>
        </ul>
      }
      content={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Label: 1–3 words, sentence case — Full name, Mobile number.</li>
          <li>Placeholder: optional. Use only as a format hint — DD / MM / YYYY — not as a label substitute.</li>
          <li>Helper text: ≤ 80 characters. Explain format, expectation, or constraint.</li>
          <li>Error text: state what is wrong in plain language. Suggest a fix — &quot;Enter a 10-digit mobile number&quot;, not &quot;Invalid input&quot;.</li>
        </ul>
      }
      accessibility={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Label is always present (visible by default, <code className="font-mono text-[12px]">sr-only</code> when the design calls for it).</li>
          <li><code className="font-mono text-[12px]">label[for]</code> matches <code className="font-mono text-[12px]">input[id]</code>; never substitute placeholder for label.</li>
          <li>Helper and error: linked via <code className="font-mono text-[12px]">aria-describedby</code>; errors also set <code className="font-mono text-[12px]">aria-invalid=&quot;true&quot;</code>.</li>
          <li>Required: visible asterisk plus <code className="font-mono text-[12px]">aria-required=&quot;true&quot;</code>.</li>
          <li>Touch target: minimum 44px height regardless of visual size.</li>
        </ul>
      }
      doItems={[
        "Always show a label — visible by default, sr-only when the layout requires.",
        "Validate on blur, not on every keystroke.",
        "Write error messages that suggest the fix.",
        "Pair leading icons with format hints (📞 for phone, ₹ for amount).",
      ]}
      dontItems={[
        "Use placeholders as labels.",
        "Show error messages while the user is still typing.",
        "Use vague errors like Invalid or Please check.",
        "Disable submit without explaining what's wrong.",
      ]}
      doDontLabel="Side-by-side. Left: a labelled mobile-number field with helper Enter your 10-digit number and a clear error Enter a valid Indian mobile number. Right: the same field with no label, generic Invalid error, and red border — marked as incorrect."
      related={[
        { href: "/patterns/dropdown", label: "Dropdown", meta: "When the control is a select" },
        { href: "/foundations/cta-hierarchy", label: "CTA hierarchy", meta: "Primary submit, secondary save draft" },
        { href: "/foundations/voice", label: "Voice and tone", meta: "Error message style" },
        { href: "/foundations/accessibility", label: "Accessibility", meta: "Touch targets and ARIA" },
      ]}
    />
  );
}
