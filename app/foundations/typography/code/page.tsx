import type { Metadata } from "next";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Typography · Code",
};

export default function TypographyCodePage() {
  return (
    <>
      <Section
        id="font-face"
        title="Font face"
        description="Euclid Circular B is loaded as EuclidCircular with five weights. Hosts can point to the ACKO CDN (woff2) or self-host under public/."
      >
        <pre className="not-prose mb-4 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`/* app/font-euclid.css — see file for full @font-face rules */
font-family: "EuclidCircular", ui-sans-serif, system-ui, sans-serif;`}
        </pre>
        <p className="text-sm text-muted">
          The site imports <code className="font-mono">./font-euclid.css</code> from{" "}
          <code className="font-mono">app/globals.css</code>. Update URLs there if you move
          assets.
        </p>
      </Section>

      <Section
        id="css-tokens"
        title="CSS custom properties"
        description="Map semantic usage to the size ramp. Example: heading-lg uses 24px / 32px with default medium weight from the matrix."
      >
        <pre className="not-prose overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`.title {
  font-size: var(--font-24-size, 1.5rem);
  line-height: var(--font-24-line, 2rem);
  font-weight: var(--font-24-medium-weight, 500);
  letter-spacing: -0.3px;
  font-family: var(--font-sans);
}`}
        </pre>
      </Section>

      <Section
        id="tailwind"
        title="Tailwind"
        description="Ad-hoc development on this site uses the Tailwind column in the size ramp. Prefer design tokens in product code; arbitrary values are for one-offs."
      >
        <pre className="not-prose overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`<h2 class="text-2xl font-medium leading-8 tracking-tight">…</h2>
<p class="text-base font-normal leading-6">…</p>
<span class="text-xs font-medium leading-4">…</span>`}
        </pre>
      </Section>

      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            { title: "Type ramp table", href: "/foundations/typography", meta: "Overview" },
            { title: "Live type specimens", href: "/foundations/typography/types", meta: "Types" },
            { title: "Usage and casing", href: "/foundations/typography/usage", meta: "Usage" },
          ]}
        />
      </Section>
    </>
  );
}
