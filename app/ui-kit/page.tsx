import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "UI kit",
};

export default function UIKitPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="UI kit"
        description="Separate track: components and implementation details. Principles and foundations stay the primary journey—open this when you’re building UI."
        lastUpdated="April 27, 2026"
      />

      <p>
        Component inventory, variants, states, and accessibility notes will live here as
        the kit matures. Until then, align implementation with{" "}
        <Link href="/foundations">Foundations</Link> and{" "}
        <Link href="/develop">Develop</Link>.
      </p>

      <h2>Status model (future)</h2>
      <p>
        Optional labels such as Draft, Preview, and Stable—similar to mature public
        systems—can describe component readiness without blocking principles work.
      </p>
    </article>
  );
}
