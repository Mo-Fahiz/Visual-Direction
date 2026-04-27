import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import tokens from "@/data/tokens.json";

export const metadata: Metadata = {
  title: "Typography",
};

type WeightSpec = {
  weight: 300 | 400 | 500 | 600 | 700;
  name: string;
  cssClass: string;
  use: string;
};

const euclidWeights: WeightSpec[] = [
  { weight: 300, name: "Light", cssClass: "font-light", use: "Body alt, low emphasis" },
  { weight: 400, name: "Regular", cssClass: "font-normal", use: "Body copy, standard" },
  { weight: 500, name: "Medium", cssClass: "font-medium", use: "Emphasis, labels, secondaries" },
  { weight: 600, name: "Semibold", cssClass: "font-semibold", use: "Headings, section titles" },
  { weight: 700, name: "Bold", cssClass: "font-bold", use: "Display, strong headlines" },
];

export default function TypographyPage() {
  const { typography, logo } = tokens;

  return (
    <article className="doc-prose">
      <PageHeader
        title="Typography"
        description="Two contexts, one hierarchy: brand and marketing vs product and digital."
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

      <h2>Euclid Circular B — weights &amp; usage</h2>
      <p className="text-muted">
        All five weights are loaded and applied across the site. The product UI
        uses sentence case and prefers Medium (500) for emphasis over Bold.
      </p>

      <div className="not-prose mt-6 space-y-8">
        {euclidWeights.map((w) => (
          <div key={w.weight} className="rounded-xl border border-border bg-white p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {w.name}
                </h3>
                <p className="ds-caption text-muted">Weight {w.weight}</p>
              </div>
              <code className="rounded bg-[#FBFBFB] px-2 py-1 text-xs text-muted">
                font-weight: {w.weight}
              </code>
            </div>
            <p className="text-muted">{w.use}</p>

            {/* Specimen lines */}
            <div className="mt-6 space-y-4 border-t border-border pt-6">
              <div>
                <p
                  style={{ fontWeight: w.weight }}
                  className="text-lg leading-relaxed text-foreground"
                >
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p className="ds-caption mt-1 text-muted">Paragraph (16px / 1.5rem)</p>
              </div>

              <div>
                <p
                  style={{ fontWeight: w.weight }}
                  className="text-sm font-medium leading-relaxed text-foreground"
                >
                  Insurance that respects you. No asterisks, no surprises.
                </p>
                <p className="ds-caption mt-1 text-muted">Small (14px)</p>
              </div>

              <div>
                <p
                  style={{ fontWeight: w.weight }}
                  className="text-2xl leading-tight text-foreground md:text-3xl"
                >
                  Clear over clever
                </p>
                <p className="ds-caption mt-1 text-muted">Large (20–24px)</p>
              </div>

              <div>
                <p
                  style={{ fontWeight: w.weight }}
                  className="ds-caption text-foreground"
                >
                  Last updated: April 27, 2026
                </p>
                <p className="ds-caption mt-1 text-muted">Caption (12px)</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-12">Established type patterns</h2>
      <p className="text-muted">
        The CSS below shows all the type utilities and prose styles in use
        across the site. Use these as the foundation for consistency.
      </p>

      <div className="not-prose mt-6 space-y-6">
        {/* Display hero */}
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">.ds-display-hero</h3>
            <code className="rounded bg-[#FBFBFB] px-2 py-1 text-xs text-muted">
              clamp(52–120px)
            </code>
          </div>
          <p className="ds-caption mb-4 text-muted">
            Responsive display for landing heroes. Weight 600, tight letter-spacing.
          </p>
          <p className="ds-display-hero text-foreground">
            Insurance that respects your time.
          </p>
        </div>

        {/* Caption */}
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">.ds-caption</h3>
            <code className="rounded bg-[#FBFBFB] px-2 py-1 text-xs text-muted">
              12px / 500
            </code>
          </div>
          <p className="ds-caption mb-4 text-muted">
            Used for UI labels, side notes, and metadata. Consistent tracking.
          </p>
          <p className="ds-caption text-foreground">
            ONBOARDING · Step 1 of 4
          </p>
        </div>

        {/* Nav prefix */}
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">.ds-nav-prefix</h3>
            <code className="rounded bg-[#FBFBFB] px-2 py-1 text-xs text-muted">
              8px / 500
            </code>
          </div>
          <p className="ds-caption mb-4 text-muted">
            Sidebar navigation numbering (e.g. &quot;01&quot;, &quot;02&quot;). Muted colour.
          </p>
          <span className="ds-nav-prefix">01</span>
        </div>

        {/* Doc prose headings */}
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-foreground">
              .doc-prose (h1 / h2 / h3)
            </h3>
          </div>
          <p className="ds-caption mb-6 text-muted">
            Established hierarchy used throughout the site.
          </p>
          <div className="space-y-4">
            <div>
              <h1 className="doc-prose-h1 text-2xl font-semibold text-foreground md:text-[2.5rem]">
                H1: Clear over clever
              </h1>
              <p className="ds-caption mt-1 text-muted">
                clamp(28–40px), weight 600, tight tracking
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground md:text-2xl">
                H2: Use plain language
              </h2>
              <p className="ds-caption mt-1 text-muted">
                20–24px, weight 700, tight tracking, +1.5rem top margin
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                H3: Heading level 3
              </h3>
              <p className="ds-caption mt-1 text-muted">
                16px, weight 600, +1rem top margin
              </p>
            </div>
          </div>
        </div>

        {/* Body + list */}
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-foreground">
              .doc-prose (p / li)
            </h3>
          </div>
          <p className="ds-caption mb-4 text-muted">Standard paragraph and list copy.</p>
          <p className="text-[0.9375rem] leading-relaxed text-foreground">
            Paragraph copy sits at 15px with 1.65 line-height. Sentence case is
            the standard; bold only for term emphasis, not whole phrases.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="text-[0.9375rem] leading-relaxed text-foreground">
              List item one — clear and scannable.
            </li>
            <li className="text-[0.9375rem] leading-relaxed text-foreground">
              List item two — consistent formatting.
            </li>
          </ul>
        </div>

        {/* Button text */}
        <div className="rounded-xl border border-border bg-white p-6">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-foreground">
              .ds-btn-* (button labels)
            </h3>
          </div>
          <p className="ds-caption mb-6 text-muted">
            All buttons share 12px, 500 weight, uppercase. Click to interact.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="ds-btn-outline">Learn more →</button>
            <button className="ds-btn-fill">Get started</button>
          </div>
        </div>
      </div>

      <h2 className="mt-12">Logo</h2>
      <ul>
        {logo.variations.map((v) => (
          <li key={v}>{v}</li>
        ))}
        <li>
          Minimum digital size: {logo.minimumDigitalPx.horizontal}px horizontal,{" "}
          {logo.minimumDigitalPx.vertical}px vertical.
        </li>
      </ul>

      <h2>Font loading &amp; sources</h2>
      <p>
        This site loads <strong>Euclid Circular B</strong> (all five weights) as{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-sm">EuclidCircular</code> via{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-sm font-mono">
          app/font-euclid.css
        </code>
        . Source URLs point to the ACKO CMS (woff2 format). Edit that file to
        change sources or add/remove weights.
      </p>

      <h2 className="mt-12">Rules of thumb</h2>
      <ul>
        <li>
          <strong>Sentence case everywhere.</strong> Title Case is not used in
          the product UI.
        </li>
        <li>
          <strong>Emphasis via Medium (500), not Bold (700).</strong> Save Bold
          for display contexts.
        </li>
        <li>
          <strong>Light (300) is reserved.</strong> Use only for low-emphasis
          metadata or when space permits.
        </li>
        <li>
          <strong>Tight letter-spacing.</strong> Headings use −0.03em to
          −0.06em; body is −0.01em.
        </li>
        <li>
          <strong>Line-height ≥ 1.5.</strong> Body copy at 1.65lh; headings at
          1.1–1.3lh.
        </li>
      </ul>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/principles/clear-over-clever">Clear over clever</Link> —
          the principle behind readable type.
        </li>
        <li>
          <Link href="/develop">Develop</Link> — CSS variables and theming.
        </li>
      </ul>
    </article>
  );
}
