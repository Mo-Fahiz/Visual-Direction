import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import tokens from "@/data/tokens.json";

export const metadata: Metadata = {
  title: "Typography",
};

export default function TypographyPage() {
  const { typography, logo } = tokens;
  return (
    <article className="doc-prose">
      <PageHeader
        title="Typography"
        description="Two contexts, one hierarchy logic: brand and marketing vs product and digital."
        lastUpdated="April 27, 2026"
      />

      <h2>Families</h2>
      <ul>
        <li>
          <strong>Brand &amp; marketing:</strong> {typography.brandMarketing}
        </li>
        <li>
          <strong>Product &amp; digital:</strong> {typography.productDigital}
        </li>
      </ul>
      <p>{typography.note}</p>

      <h2>Logo</h2>
      <ul>
        {logo.variations.map((v) => (
          <li key={v}>{v}</li>
        ))}
        <li>
          Minimum digital size: {logo.minimumDigitalPx.horizontal}px horizontal,{" "}
          {logo.minimumDigitalPx.vertical}px vertical.
        </li>
      </ul>

      <h2>Documentation site</h2>
      <p>
        This site loads <strong>Euclid Circular B</strong> as <code className="rounded bg-white px-1.5 py-0.5 text-sm">EuclidCircular</code> via{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-sm font-mono">app/font-euclid.css</code>{" "}
        (ACKO CMS woff2 URLs). Edit that file to change sources or add weights.
      </p>

      <p>
        <Link href="/principles/clear-over-clever">Clear over clever</Link> ·{" "}
        <Link href="/develop">Develop</Link>
      </p>
    </article>
  );
}
