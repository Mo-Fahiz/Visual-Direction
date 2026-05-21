import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { imageryModes, negativeAnchors } from "@/lib/asset-tokens";

export const metadata: Metadata = {
  title: "Image generation",
};

export default function ImageGenerationPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation · Asset creation"
        title="Image generation"
        description="Three imagery modes with specific colour grading, composition rules, and prompt templates. Pick the mode that fits the moment — the specs follow."
        lastUpdated="May 12, 2026"
      />

      <Section
        id="prompt-architecture"
        title="Prompt architecture"
        description="Every prompt follows a six-slot structure. The mode determines what fills each slot."
      >
        <div className="not-prose mt-4 rounded-[10px] border border-border bg-[#fafaf8] p-5">
          <code className="text-sm leading-relaxed text-foreground">
            [subject] · [setting] · [light] · [camera] · [composition] · [treatment]
          </code>
        </div>
      </Section>

      {imageryModes.map((mode) => (
        <Section
          key={mode.id}
          id={mode.id}
          title={mode.title}
          description={mode.when}
        >
          <Section id={`${mode.id}-grading`} title="Colour grading" level={3}>
            <PageTable
              headers={["Property", "Value"]}
              colWidths={["30%", "70%"]}
              rows={[
                ["Kelvin", mode.colorGrading.kelvin],
                ["Saturation", mode.colorGrading.saturation],
                ["Contrast", mode.colorGrading.contrast],
                ["Highlights", mode.colorGrading.highlights],
              ]}
            />
          </Section>

          <Section id={`${mode.id}-comp`} title="Composition" level={3}>
            <PageTable
              headers={["Property", "Value"]}
              colWidths={["30%", "70%"]}
              rows={[
                ["Framing", mode.composition.framing],
                ["Depth of field", mode.composition.depth],
                ["Angle", mode.composition.angle],
              ]}
            />
          </Section>

          <Section id={`${mode.id}-prompt`} title="Prompt template" level={3}>
            <div className="not-prose mt-2 rounded-lg border border-border bg-[#1a1a1a] p-4">
              <code className="text-sm leading-relaxed text-[#e0e0e0] whitespace-pre-wrap">
                {mode.promptTemplate}
              </code>
            </div>
          </Section>
        </Section>
      ))}

      <Section
        id="negative-anchors"
        title="Negative anchors"
        description="Include all 10 anchors in every image generation prompt to prevent common brand violations."
      >
        <ol className="mt-4 list-decimal pl-5 text-sm leading-relaxed text-foreground space-y-2">
          {negativeAnchors.map((anchor) => (
            <li key={anchor}>{anchor}</li>
          ))}
        </ol>
      </Section>
    </article>
  );
}
