import type { Metadata } from "next";
import { MoleculePage } from "@/components/docs/MoleculeTemplate";

export const metadata: Metadata = {
  title: "Toast",
};

export default function ToastMoleculePage() {
  return (
    <MoleculePage
      title="Toast"
      description="Disposable, non-blocking feedback. Use toast to confirm an action succeeded or to report a non-critical failure — never for decisions."
      anatomyLabel="Annotated toast with numbered callouts: 1 icon (status), 2 title, 3 supporting description, 4 inline action (optional), 5 close button, 6 toast surface, 7 stack position (bottom-right on desktop, top-centre on mobile)."
      variants={[
        { name: "Success", use: "Confirm a completed action — Saved, Sent, Submitted.", notes: "Green icon. Auto-dismiss after 4s." },
        { name: "Error", use: "Report a recoverable error — Couldn't save, Connection lost.", notes: "Red icon. Auto-dismiss after 7s. Includes a retry action when relevant." },
        { name: "Warning", use: "Surface a recoverable concern — Draft will expire in 5 min.", notes: "Orange icon. Auto-dismiss after 6s." },
        { name: "Info", use: "Non-urgent updates — New version available.", notes: "Purple icon. Auto-dismiss after 5s." },
      ]}
      props={[
        { name: "title", type: "string", description: "Toast headline. ≤ 60 characters." },
        { name: "description", type: "string", description: "Optional supporting line. ≤ 120 characters." },
        { name: "variant", type: '"success" | "error" | "warning" | "info"', defaultValue: '"info"', description: "Status colour and icon." },
        { name: "duration", type: "number", defaultValue: "4000", description: "Auto-dismiss in ms. Set 0 to require manual dismiss." },
        { name: "action", type: "{ label: string; onClick: () => void }", description: "Inline action — retry, undo, view." },
      ]}
      behaviour={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Position:</strong> bottom-right on desktop, top-centre on mobile (below the status bar).</li>
          <li><strong>Stacking:</strong> newest toast on top; maximum 3 visible at once. Older toasts are queued.</li>
          <li><strong>Auto-dismiss:</strong> per-variant default. Hovering pauses the timer.</li>
          <li><strong>Entrance:</strong> slides in from the edge (200ms easeOut). Exits with a fade and slight slide.</li>
          <li><strong>Never used for decisions:</strong> if the user must choose, use a dialog.</li>
        </ul>
      }
      content={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Title: past-tense for completed actions — Saved, Sent, Deleted.</li>
          <li>Error titles: state what went wrong, then offer a verb — Couldn&apos;t save · Retry.</li>
          <li>One inline action maximum. Save the second action for a dialog.</li>
          <li>Never put critical information in a toast — it disappears.</li>
        </ul>
      }
      accessibility={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Region: <code className="font-mono text-[12px]">role=&quot;region&quot;</code> with <code className="font-mono text-[12px]">aria-label=&quot;Notifications&quot;</code>.</li>
          <li>Each toast: <code className="font-mono text-[12px]">role=&quot;status&quot;</code> for success/info; <code className="font-mono text-[12px]">role=&quot;alert&quot;</code> for error.</li>
          <li>Auto-dismiss timer pauses when the toast or its action is focused.</li>
          <li>Screen readers announce the title and description; the close button has an aria-label.</li>
        </ul>
      }
      doItems={[
        "Use toast to confirm a completed action.",
        "Pause the auto-dismiss timer on hover and focus.",
        "Include a retry action for transient errors.",
        "Place toasts bottom-right on desktop, top-centre on mobile.",
      ]}
      dontItems={[
        "Use toast for decisions — use a dialog.",
        "Stack more than 3 toasts at once.",
        "Put critical information (claim ID, error code) only in a toast.",
        "Add long descriptions — keep it scannable in under two seconds.",
      ]}
      doDontLabel="Two-column comparison. Left: a success toast confirming Saved with an Undo action. Right: an error toast asking the user to choose between two options — marked as incorrect (that's a dialog)."
      related={[
        { href: "/patterns/dialog", label: "Dialog", meta: "When the user must make a decision" },
        { href: "/foundations/motion", label: "Motion", meta: "Slide-in animation" },
        { href: "/foundations/color", label: "Colour", meta: "Status colours for variants" },
      ]}
    />
  );
}
