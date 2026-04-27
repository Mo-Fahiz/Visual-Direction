import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import tokens from "@/data/tokens.json";

export const metadata: Metadata = {
  title: "Iconography",
};

export default function IconographyPage() {
  const { iconography } = tokens;
  return (
    <article className="doc-prose">
      <PageHeader
        title="Iconography"
        description="Friendly, rounded stroke icons with a clear default and a featured treatment when emphasis is needed."
        lastUpdated="April 27, 2026"
      />

      <h2>Benchmark</h2>
      <ul>
        <li>Set: {iconography.benchmark}</li>
        <li>Stroke: {iconography.strokePx}px</li>
        <li>Default: {iconography.default}</li>
        <li>Featured states: {iconography.featured}</li>
      </ul>

      <h2>Roadmap</h2>
      <p>
        Expand to a complete kit (on the order of 150–200 icons) with shared grid and
        corner radii. Document component usage in{" "}
        <Link href="/ui-kit">UI kit</Link> when components ship.
      </p>

      <p>
        <Link href="/principles/effortless-by-default">Effortless by default</Link>
      </p>
    </article>
  );
}
