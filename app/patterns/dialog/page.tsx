import type { Metadata } from "next";
import { MoleculePage } from "@/components/docs/MoleculeTemplate";

export const metadata: Metadata = {
  title: "Dialog",
};

export default function DialogMoleculePage() {
  return (
    <MoleculePage
      title="Dialog"
      description="Modal interactions that interrupt the flow to capture a decision or confirm an action. Use sparingly — every dialog is a hard stop."
      anatomyLabel="Annotated dialog with numbered callouts: 1 backdrop, 2 surface, 3 title, 4 close button, 5 body content, 6 primary action, 7 secondary action, 8 dialog max-width (480px standard, 640px wide)."
      variants={[
        { name: "Confirmation", use: "Confirm a one-step action — Save changes, Discard, Logout.", notes: "Title + supporting line + two actions. Max-width 400px." },
        { name: "Destructive", use: "Confirm an irreversible action — Delete, Cancel policy.", notes: "Red destructive primary on the right; secondary returns to safety." },
        { name: "Form", use: "Capture a small amount of structured input — Edit profile, Add address.", notes: "Max-width 480–640px. Scrollable body if needed." },
        { name: "Information", use: "Surface critical information that must be acknowledged.", notes: "Single primary action; no secondary." },
      ]}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state." },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Handler called when the dialog opens or closes." },
        { name: "title", type: "string", description: "Dialog title. Required for accessibility." },
        { name: "description", type: "string", description: "Optional supporting line, also wired to aria-describedby." },
        { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "400 / 480 / 640px max-width." },
        { name: "dismissable", type: "boolean", defaultValue: "true", description: "Whether ESC, backdrop click, and the close button dismiss the dialog." },
      ]}
      behaviour={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Open:</strong> backdrop fades in (150ms), surface scales from 0.96 to 1 (200ms easeOut).</li>
          <li><strong>Close:</strong> ESC, backdrop click, close button, or the secondary action.</li>
          <li><strong>Focus:</strong> moves to the first interactive element on open; returns to the trigger on close.</li>
          <li><strong>Focus trap:</strong> tab cycles inside the dialog; the rest of the page is inert.</li>
          <li><strong>Scroll lock:</strong> background scroll is disabled while the dialog is open.</li>
          <li>Destructive dialogs do <em>not</em> dismiss on backdrop click — the user must make a deliberate choice.</li>
        </ul>
      }
      content={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Title: verb-led, ≤ 50 characters. Sentence case.</li>
          <li>Body: ≤ 2 short paragraphs. State the consequence of each action.</li>
          <li>Primary button: the action being confirmed — Save, Delete, Submit. Never OK or Yes.</li>
          <li>Secondary button: the safe path — Cancel, Keep editing, Go back.</li>
        </ul>
      }
      accessibility={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Root has <code className="font-mono text-[12px]">role=&quot;dialog&quot;</code> and <code className="font-mono text-[12px]">aria-modal=&quot;true&quot;</code>.</li>
          <li><code className="font-mono text-[12px]">aria-labelledby</code> points at the title; <code className="font-mono text-[12px]">aria-describedby</code> at the description.</li>
          <li>ESC closes; SR announces the title on open.</li>
          <li>Background content uses <code className="font-mono text-[12px]">aria-hidden</code> while the dialog is open.</li>
        </ul>
      }
      doItems={[
        "Use dialogs for decisions, confirmations, and small forms.",
        "Always label the primary action with the verb being committed.",
        "Confirm destructive actions in a dialog before executing.",
        "Return focus to the trigger element when the dialog closes.",
      ]}
      dontItems={[
        "Use a dialog when a toast or inline message would do.",
        "Stack dialogs on top of each other.",
        "Use OK / Yes / No labels — they hide intent.",
        "Allow backdrop dismiss on destructive dialogs.",
      ]}
      doDontLabel="Side-by-side. Left: a clear destructive dialog with Cancel policy as the primary action and Keep policy as secondary. Right: the same dialog labelled OK and Cancel — marked as incorrect."
      related={[
        { href: "/patterns/toast", label: "Toast", meta: "Non-blocking feedback" },
        { href: "/foundations/cta-hierarchy", label: "CTA hierarchy", meta: "Primary vs destructive" },
        { href: "/foundations/motion", label: "Motion", meta: "Open/close transitions" },
      ]}
    />
  );
}
