import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import tokens from "@/data/tokens.json";

export const metadata: Metadata = {
  title: "Color",
};

export default function ColorPage() {
  const { color } = tokens;
  return (
    <article className="doc-prose">
      <PageHeader
        title="Color"
        description="Core palette, semantic vertical colors, and layout distribution band. Category colors identify verticals—they are not arbitrary decoration."
        lastUpdated="April 27, 2026"
      />

      <h2>Core</h2>
      <div className="not-prose flex flex-wrap gap-3">
        {Object.entries(color.core).map(([name, hex]) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 text-sm shadow-sm"
          >
            <span
              className="h-8 w-8 rounded border border-black/10"
              style={{ backgroundColor: hex as string }}
              title={hex as string}
            />
            <span className="font-mono text-xs">{name}</span>
            <span className="text-muted">{hex as string}</span>
          </div>
        ))}
      </div>

      <h2>Neutrals &amp; surfaces</h2>
      <p>Editorial cream for long-form docs: <code className="rounded bg-white px-1.5 py-0.5 text-sm">{color.neutral.cream}</code></p>
      <div className="not-prose flex flex-wrap gap-2">
        {Object.entries(color.neutral).filter(([k]) => k !== "cream").map(([name, hex]) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded border border-border bg-white px-2 py-1 text-xs font-mono shadow-sm"
          >
            <span className="h-5 w-5 rounded border border-black/10" style={{ backgroundColor: hex as string }} />
            {name}
          </span>
        ))}
      </div>

      <h2>Semantic verticals</h2>
      <div className="not-prose space-y-2">
        {Object.entries(color.semantic).map(([key, v]) => (
          <div key={key} className="flex items-center gap-3 rounded-lg border border-border bg-white p-3 text-sm shadow-sm">
            <span className="h-10 w-10 shrink-0 rounded border border-black/10" style={{ backgroundColor: v.hex }} />
            <div>
              <strong className="capitalize">{key}</strong> — {v.name}{" "}
              <span className="font-mono text-muted">{v.hex}</span>
            </div>
          </div>
        ))}
      </div>

      <h2>Distribution band</h2>
      <p>Approximate layout balance for branded compositions:</p>
      <ul>
        <li>Background: {color.distributionBand.background}</li>
        <li>Headline / accent (category): {color.distributionBand.headlineAccentCategory}</li>
        <li>Body: {color.distributionBand.body}</li>
        <li>CTA: {color.distributionBand.cta}</li>
      </ul>

      <DoDont
        doItems={[
          "Use vertical color when the UI refers to that product line.",
          "Pair vertical accents with core purple per brand rules.",
          "Keep stressful flows readable—contrast over decoration.",
        ]}
        dontItems={[
          "Use semantic colors as generic gradients or stickers.",
          "Hide critical states behind low-contrast pastels.",
        ]}
      />

      <p>
        <Link href="/visual-direction">Visual direction</Link> ·{" "}
        <Link href="/develop">Develop (tokens)</Link>
      </p>
    </article>
  );
}
