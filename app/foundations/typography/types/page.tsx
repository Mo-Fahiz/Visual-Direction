import type { Metadata } from "next";
import { Section } from "@/components/docs/Section";
import {
  TypeSetExample,
  TypeSetGroupHeader,
} from "@/components/showcase/typography/TypeSetExample";
import { semanticTypeStyles } from "@/lib/typography-tokens";

export const metadata: Metadata = {
  title: "Typography · Types",
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

const groupOrder = ["Display", "Heading", "Body", "Label & utility"] as const;

export default function TypographyTypesPage() {
  return (
    <>
      <Section
        id="semantic-type-styles"
        title="Semantic type styles"
        description="Each row follows the Carbon “typeset” pattern: usage note, token spec (Euclid, size, line height, weight, tracking), and a live specimen. Token names align with Skills/typography.mdc semantic aliases."
      >
        {groupOrder.map((g) => {
          const items = semanticTypeStyles.filter((s) => s.group === g);
          if (!items.length) return null;
          return (
            <div key={g}>
              <TypeSetGroupHeader title={g} />
              <div className="not-prose space-y-4">
                {items.map((style) => (
                  <TypeSetExample key={style.id} style={style} />
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <Section
        id="weights"
        title="Euclid weights"
        description="All five loaded weights, with quick specimens. Prefer Medium (500) for emphasis in body; reserve Bold (700) for display-scale styles."
      >
        <div className="not-prose space-y-8">
          {euclidWeights.map((w) => (
            <div key={w.weight} className="rounded-xl border border-border bg-white p-6">
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{w.name}</h3>
                  <p className="ds-caption text-muted">Weight {w.weight}</p>
                </div>
                <code className="rounded bg-[#FBFBFB] px-2 py-1 text-xs text-muted">
                  font-weight: {w.weight}
                </code>
              </div>
              <p className="text-sm text-muted">{w.use}</p>
              <div className="mt-6 space-y-4 border-t border-border pt-6">
                <p
                  style={{ fontWeight: w.weight }}
                  className="text-lg leading-relaxed text-foreground"
                >
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p
                  style={{ fontWeight: w.weight }}
                  className="text-2xl leading-tight text-foreground md:text-3xl"
                >
                  Clear over clever
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="established-patterns"
        title="Site utilities"
        description="Class-level patterns in use on this site (see globals). Prefer semantic type tokens in product; these are documentation and layout helpers."
      >
        <div className="not-prose space-y-4">
          <div className="rounded-xl border border-border bg-white p-6">
            <p className="text-sm font-semibold text-foreground">.ds-display-hero</p>
            <p className="ds-display-hero mt-2 text-foreground">
              Insurance that respects your time.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <p className="text-sm font-semibold text-foreground">.ds-caption</p>
            <p className="ds-caption mt-2 text-foreground">ONBOARDING · Step 1 of 4</p>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <p className="text-sm font-semibold text-foreground">.doc-prose (sample)</p>
            <h2 className="mb-2 mt-2 text-xl font-bold text-foreground">Section title</h2>
            <p className="text-[0.9375rem] leading-relaxed text-foreground">
              Body copy at 15px for documentation.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
