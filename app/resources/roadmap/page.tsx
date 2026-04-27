import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Roadmap",
};

export default function RoadmapPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Roadmap"
        description="Next steps for brand expression and system maturity—inputs from workshops and execution planning."
        lastUpdated="April 27, 2026"
      />

      <h2>Near term</h2>
      <ul>
        <li>Replace imagery and video placeholders in brand story with final assets.</li>
        <li>Produce main (~60s) and closing (~30s) brand films.</li>
        <li>Deepen icon library toward ~150–200 consistent glyphs.</li>
        <li>Explore serif pairing for brand typography where needed.</li>
        <li>Integrate product marketing workflows with the same SSOT discipline.</li>
        <li>Assign ownership matrix responsibilities to specific owners.</li>
      </ul>

      <h2>System</h2>
      <ul>
        <li>
          Expand <Link href="/ui-kit">UI kit</Link> documentation as components stabilize.
        </li>
        <li>
          Add search and polish per <Link href="/resources/changelog">Changelog</Link>{" "}
          cadence.
        </li>
      </ul>
    </article>
  );
}
