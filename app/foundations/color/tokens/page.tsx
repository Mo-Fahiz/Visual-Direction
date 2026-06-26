import type { Metadata } from "next";
import { Section } from "@/components/docs/Section";
import { ColorRamp } from "@/components/showcase/color/ColorRamp";
import { allChromaticRamps, greyRamp } from "@/lib/color-tokens";

export const metadata: Metadata = {
  title: "Colour · Tokens",
};

export default function ColorTokensPage() {
  return (
    <>
      <Section
        id="primitives"
        title="Primitives"
        description="Layer 1 — raw palette values from colours-primitive. Components never reference these directly. They exist to feed the theme layer and to make value debugging possible."
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
    </>
  );
}
