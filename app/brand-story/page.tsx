import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Brand story",
};

export default function BrandStoryPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Brand story"
        description="Narrative and showreel thinking—feel the brand first, then link to the same rules documented elsewhere. No duplicate sources of truth."
        lastUpdated="April 27, 2026"
      />

      <p className="text-lg font-medium text-foreground">
        Precise when choosing. Warm when you need us.
      </p>

      <h2>Narrative arc (reference)</h2>
      <ol>
        <li>
          <strong>Opening</strong> — Full-bleed hero with the line above; documentary-warm
          human moment.
        </li>
        <li>
          <strong>Film strip</strong> — Four 21:9 panels, one per principle (add a fifth
          if a fifth principle is named).
        </li>
        <li>
          <strong>Brand film</strong> — ~60s reel placeholder (replace with final cut).
        </li>
        <li>
          <strong>Transition</strong> — “From feeling to system.”
        </li>
        <li>
          <strong>Principles</strong> — Full-bleed stills + UI artifacts → link to{" "}
          <Link href="/principles">Principles</Link>.
        </li>
        <li>
          <strong>Fundamentals</strong> — Color, type, icons, imagery, composition → link
          to <Link href="/foundations">Foundations</Link>.
        </li>
        <li>
          <strong>Closing</strong> — ~30s brand film placeholder.
        </li>
      </ol>

      <h2>Canonical pages</h2>
      <p>Every rule in film or campaign work should trace back to:</p>
      <ul>
        <li>
          <Link href="/visual-direction">Visual direction</Link>
        </li>
        <li>
          <Link href="/principles">Principles</Link>
        </li>
        <li>
          <Link href="/foundations">Foundations</Link>
        </li>
      </ul>

      <h2>Production</h2>
      <p>
        Replace placeholders with final photography and video per{" "}
        <Link href="/resources/roadmap">Roadmap</Link>. Briefs should follow{" "}
        <Link href="/foundations/imagery">Imagery</Link> modes.
      </p>
    </article>
  );
}
