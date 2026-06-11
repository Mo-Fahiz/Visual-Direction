import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Imagery",
};

export default function ImageryPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Imagery"
        description="Three modes for different contexts; use creative briefs (including AI prompts) so outputs stay on-brand."
        lastUpdated="April 27, 2026"
      />

      <h2>Modes</h2>
      <ul>
        <li>
          <strong>Documentary warm</strong> — Claims, support, human moments; natural
          light, real situations.
        </li>
        <li>
          <strong>Editorial bright</strong> — Marketing and campaigns; optimistic,
          legible, brand-forward.
        </li>
        <li>
          <strong>Product contextual</strong> — Product surfaces; UI-adjacent,
          explanatory, clean.
        </li>
      </ul>

      <h2>Brief checklist</h2>
      <p>Each shoot or generation should define:</p>
      <ul>
        <li>Subject, setting, light, camera angle, composition</li>
        <li>Mood tags</li>
        <li>Prompt-ready language where AI is involved</li>
      </ul>

      <h2>Showreel formats (reference)</h2>
      <ul>
        <li>4:5 portrait explorations for the three modes</li>
        <li>21:9 cinematic strips for principle moments</li>
        <li>Cluttered vs composed layout comparison for education</li>
      </ul>

      <DoDont
        doItems={[
          "Match imagery mode to the moment in the customer journey.",
          "Show diversity and real Indian contexts authentically.",
          "Keep product shots legible at mobile sizes.",
        ]}
        dontItems={[
          "Stock that contradicts the brand's visual direction.",
          "Busy scenes behind critical UI or copy.",
        ]}
      />

      <p>
        <Link href="/principles">About ACKO</Link>
      </p>
    </article>
  );
}
