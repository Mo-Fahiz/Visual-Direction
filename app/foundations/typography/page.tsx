import type { Metadata } from "next";
import Link from "next/link";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";
import { TypeScaleTable } from "@/components/showcase/typography/TypeScaleTable";
import tokens from "@/data/tokens.json";

export const metadata: Metadata = {
  title: "Typography · Overview",
};

export default function TypographyOverviewPage() {
  const { typography, logo } = tokens;

  return (
    <>
      <Section
        id="type-tokens-and-sets"
        title="Type tokens and sets"
        description="ACKO organises typography in three layers: a numeric size ramp (steps 1–15), named style variants (weight, italic, underline), and semantic aliases (display, heading, body, label) that map to the ramp. Components should consume semantic tokens first, then the ramp — not one-off font-size values. Structure is inspired by IBM Carbon’s typography model (type sets + tokenised styles), implemented here for Euclid and this site’s CSS."
      >
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          <strong>Product and digital</strong> use <strong>Euclid Circular B</strong> for all
          interface text. <strong>Brand and marketing</strong> may use the brand family where
          campaigns require it; the product UI remains on Euclid for consistency and
          legibility. One family in-app avoids unnecessary font loading and keeps focus on
          content, not typeface changes.
        </p>
        <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          {typography.note}
        </p>
        <ul className="mt-4 list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Brand &amp; marketing:</strong> {typography.brandMarketing}
          </li>
          <li>
            <strong>Product &amp; digital:</strong> {typography.productDigital}
          </li>
        </ul>
      </Section>

      <Section
        id="scale"
        title="Size ramp"
        description="Fifteen steps from 10px to 128px. Every text style resolves to a step (and a line height on the same step). The table matches Skills/typography.mdc. The Sample column renders Euclid at the real token size and line height (CSS variables in :root). Use the CSS or Tailwind columns in product code."
      >
        <TypeScaleTable />
        <p className="not-prose mt-4 text-sm text-muted">
          <strong>Style × size:</strong> each step can combine with ten named variants (e.g.{" "}
          <code className="font-mono text-foreground">normal</code>,{" "}
          <code className="font-mono text-foreground">bold</code>,{" "}
          <code className="font-mono text-foreground">medium-italic</code>) for a finite matrix
          of product-safe styles — see the{" "}
          <Link className="underline" href="/foundations/typography/usage">
            Usage
          </Link>{" "}
          tab for rules and the{" "}
          <Link className="underline" href="/foundations/typography/types">
            Types
          </Link>{" "}
          tab for live semantic specimens.
        </p>
      </Section>

      <Section id="logo" title="Logo" description="Lockups and minimum sizes for digital use.">
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          {logo.variations.map((v) => (
            <li key={v}>{v}</li>
          ))}
          <li>
            Minimum digital size: {logo.minimumDigitalPx.horizontal}px horizontal,{" "}
            {logo.minimumDigitalPx.vertical}px vertical.
          </li>
        </ul>
      </Section>

      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            { title: "Type styles (live)", href: "/foundations/typography/types", meta: "Types tab" },
            { title: "Sentence case and rules", href: "/foundations/typography/usage", meta: "Usage tab" },
            { title: "Font loading and code", href: "/foundations/typography/code", meta: "Code tab" },
            { title: "Color — text intent", href: "/foundations/color/tokens", meta: "Foundation" },
          ]}
        />
      </Section>

      <p className="not-prose mt-10 text-sm text-muted">
        <Link className="underline" href="/principles/clear-over-clever">
          Clear over clever
        </Link>{" "}
        ·{" "}
        <Link className="underline" href="/develop">
          Develop
        </Link>
      </p>
    </>
  );
}
