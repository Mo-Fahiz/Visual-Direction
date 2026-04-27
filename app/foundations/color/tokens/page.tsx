import type { Metadata } from "next";
import { CodeChip } from "@/components/docs/CodeChip";
import { Section } from "@/components/docs/Section";
import { ColorRamp } from "@/components/showcase/color/ColorRamp";
import { SemanticTokenTable } from "@/components/showcase/color/SemanticTokenTable";
import {
  allChromaticRamps,
  greyRamp,
  semanticGroups,
} from "@/lib/color-tokens";

export const metadata: Metadata = {
  title: "Color · Tokens",
};

export default function ColorTokensPage() {
  return (
    <>
      <Section
        id="primitives"
        title="Primitives"
        description="Layer 1 — raw palette values. Components NEVER reference these directly. They exist to feed the semantic layer below and to make value debugging possible."
      >
        <Section id="grey" level={3} title="Grey — extended neutral">
          <ColorRamp
            ramp={greyRamp}
            labelOf={(s) => s.token.replace("--grey-", "")}
          />
        </Section>

        {allChromaticRamps.map((ramp) => (
          <Section
            key={ramp.name}
            id={ramp.name.toLowerCase()}
            level={3}
            title={ramp.name}
          >
            <ColorRamp
              ramp={ramp}
              labelOf={(s) => s.token.replace(/^--[a-z]+-/, "")}
            />
          </Section>
        ))}
      </Section>

      <Section
        id="semantic"
        title="Semantic tokens"
        description="Layer 2 — the only colour tokens components are allowed to consume. Each row shows the token, its role, and the resolved value in light and dark themes."
      >
        <p className="not-prose mb-6 max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Pattern: <CodeChip>--color-&lt;group&gt;-&lt;modifier&gt;</CodeChip>.
          The same token name renders different hex per theme — switching{" "}
          <CodeChip tone="neutral">data-theme</CodeChip> on{" "}
          <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">
            html
          </code>{" "}
          remaps every value at once.
        </p>

        {semanticGroups.map((group) => (
          <Section
            key={group.id}
            id={`semantic-${group.id}`}
            level={3}
            title={group.name}
            description={group.description}
          >
            <SemanticTokenTable group={group} />
          </Section>
        ))}
      </Section>
    </>
  );
}
