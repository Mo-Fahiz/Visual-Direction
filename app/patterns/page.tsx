import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Patterns",
};

export default function PatternsPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Patterns"
        description="Flows that combine components—documented after core patterns are validated in product."
        lastUpdated="April 27, 2026"
      />

      <p>
        Pattern pages will reference <Link href="/visual-direction">precision vs warmth</Link>{" "}
        and link to relevant <Link href="/ui-kit">UI kit</Link> pieces. No pattern should
        contradict <Link href="/principles">Principles</Link>.
      </p>
    </article>
  );
}
