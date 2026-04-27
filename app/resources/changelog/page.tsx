import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Changelog",
};

export default function ChangelogPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Changelog"
        description="Notable updates to the documentation site and documented rules."
        lastUpdated="April 27, 2026"
      />

      <h2>0.1.0 — April 27, 2026</h2>
      <ul>
        <li>Initial site: IA per principles-first plan.</li>
        <li>Principles (four), visual direction, foundations, brand story, develop, roadmap.</li>
        <li>Seed <code className="rounded bg-white px-1 py-0.5 text-sm">data/tokens.json</code>.</li>
        <li>UI kit and patterns stubs for separate track.</li>
      </ul>
    </article>
  );
}
