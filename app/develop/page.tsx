import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import tokens from "@/data/tokens.json";

export const metadata: Metadata = {
  title: "Develop",
};

export default function DevelopPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Develop"
        description="Foundations-level tokens and how to keep product implementation aligned with this site. Ship code and docs together when values change."
        lastUpdated="April 27, 2026"
      />

      <h2>Token file</h2>
      <p>
        Seed JSON lives at <code className="rounded bg-white px-1.5 py-0.5 text-sm font-mono">data/tokens.json</code>. Promote to Style Dictionary or your package of choice; the names and meanings documented here remain authoritative.
      </p>

      <h2>Snapshot</h2>
      <pre className="not-prose overflow-x-auto rounded-xl border border-border bg-white p-4 text-xs leading-relaxed shadow-sm">
        {JSON.stringify(tokens, null, 2)}
      </pre>

      <h2>Theming</h2>
      <p>
        Map CSS variables or platform tokens from this seed. Component-level tokens join
        when the <Link href="/ui-kit">UI kit</Link> matures.
      </p>

      <h2>Versioning</h2>
      <p>
        Record breaking token or rule changes in <Link href="/resources/changelog">Changelog</Link>.
      </p>
    </article>
  );
}
