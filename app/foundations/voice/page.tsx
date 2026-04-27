import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Voice & tone",
};

export default function VoicePage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Voice & tone"
        description="How ACKO sounds when words show up in UI, email, and support—grounded in the four principles."
        lastUpdated="April 27, 2026"
      />

      <h2>North star</h2>
      <p>
        Plain, respectful, and present. We explain trade-offs clearly, avoid hustle
        language, and never disappear after the sale.
      </p>

      <h2>By principle</h2>
      <ul>
        <li>
          <Link href="/principles/clear-over-clever">Clear over clever</Link> — say what
          something means; skip gimmicks.
        </li>
        <li>
          <Link href="/principles/effortless-by-default">Effortless by default</Link> —
          short sentences, strong verbs, obvious next steps.
        </li>
        <li>
          <Link href="/principles/present-when-it-matters">Present when it matters</Link>{" "}
          — acknowledge lifecycle moments; offer help.
        </li>
        <li>
          <Link href="/principles/respectful-of-time">Respectful of time</Link> — no
          manufactured urgency; don&apos;t repeat questions we already answered.
        </li>
      </ul>

      <h2>Mode</h2>
      <p>
        Precision flows can be more compact; warmth flows add reassurance while staying
        factual. See <Link href="/visual-direction">Visual direction</Link>.
      </p>
    </article>
  );
}
