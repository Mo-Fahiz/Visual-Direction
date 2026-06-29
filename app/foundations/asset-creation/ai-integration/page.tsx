import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { CodeChip } from "@/components/docs/CodeChip";
import { aiModelAdapters, negativeAnchors } from "@/lib/asset-tokens";

export const metadata: Metadata = {
  title: "AI integration",
};

export default function AIIntegrationPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs trail={[{ label: "Media, content & voice" }, { label: "Asset creation", href: "/foundations/asset-creation" }, { label: "AI integration" }]} />
      <PageHeader
        eyebrow="Foundation · Asset creation"
        title="AI integration"
        description="Platform-specific prompt formatting, negative anchors, and guidance for using the ACKO visual direction as a knowledge base for AI-assisted asset creation."
        lastUpdated="May 12, 2026"
      />

      <Section
        id="negative-anchors"
        title="Negative anchors"
        description="Always include these guardrails in negative prompts or exclusion lists. They prevent the most common brand-violating outputs."
      >
        <div className="not-prose mt-4 flex flex-wrap gap-2">
          {negativeAnchors.map((anchor) => (
            <span
              key={anchor}
              className="rounded-full border border-[#dc2626]/20 bg-[#fef2f2] px-3 py-1 text-xs font-medium text-[#dc2626]"
            >
              {anchor}
            </span>
          ))}
        </div>
      </Section>

      <Section
        id="model-adapters"
        title="Model adapters"
        description="Each AI model needs prompts formatted differently. Use these adapters to translate ACKO prompts into platform-specific syntax."
      >
        {aiModelAdapters.map((adapter) => (
          <Section
            key={adapter.model}
            id={adapter.model.toLowerCase().replace(/\s+/g, "-")}
            title={adapter.model}
            level={3}
          >
            <PageTable
              headers={["Property", "Value"]}
              colWidths={["30%", "70%"]}
              rows={[
                [
                  "Prompt prefix",
                  adapter.promptPrefix
                    ? <code key="pp" className="font-mono text-xs">{adapter.promptPrefix}</code>
                    : <span key="pp" className="text-muted italic">None</span>,
                ],
                [
                  "Negative prompt",
                  <code key="np" className="font-mono text-xs">{adapter.negativePromptFormat}</code>,
                ],
                [
                  "Aspect ratio",
                  <CodeChip key="ar">{adapter.aspectRatioParam}</CodeChip>,
                ],
              ]}
            />
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-muted space-y-1">
              {adapter.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </Section>
        ))}
      </Section>

      <Section
        id="knowledge-base"
        title="Knowledge base structure"
        description="The ACKO visual direction is structured as modular knowledge files that can be fed into AI systems for consistent output."
      >
        <PageTable
          headers={["Use case", "How"]}
          colWidths={["30%", "70%"]}
          rows={[
            [
              "System prompt",
              "Include the .mdc Skills files as system context. The AI will follow brand rules for copy, imagery, and layout.",
            ],
            [
              "Image generation",
              "Combine the prompt architecture + imagery mode specs + negative anchors as a pre-prompt for any image model.",
            ],
            [
              "Design review",
              "Feed the category colour rules and distribution band to an AI reviewer to flag off-brand usage.",
            ],
            [
              "Copy generation",
              "Use the voice & tone vocabulary and patterns as constraints for AI-generated UI copy.",
            ],
          ]}
        />
      </Section>

      <Section
        id="using-with-claude"
        title="Using with Claude"
        description="Claude can consume the ACKO design system as .mdc files in its system prompt. This makes every generation — copy, image prompts, layout suggestions — brand-aware by default."
      >
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Place the design-system knowledge files in your project&apos;s{" "}
          <CodeChip>.claude/</CodeChip> directory. Claude reads these as Skills
          and applies them automatically when generating assets, writing copy, or
          reviewing designs.
        </p>
        <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-foreground space-y-2">
          <li>
            <strong>Brand voice</strong> — voice-and-tone.mdc constrains all
            generated copy to the brand&apos;s tone calibration guidelines.
          </li>
          <li>
            <strong>Imagery</strong> — asset-creation.mdc provides prompt
            templates, negative anchors, and mode selection guidance.
          </li>
          <li>
            <strong>Colour</strong> — color-tokens.mdc ensures any generated CSS
            or design specs use semantic tokens, not raw hex.
          </li>
          <li>
            <strong>Motion</strong> — motion-tokens.mdc keeps animation
            suggestions within the approved curve and duration set.
          </li>
        </ul>
      </Section>

      <Section
        id="system-prompt-assembly"
        title="System prompt assembly"
        description="Below is an example of how to assemble a system prompt that makes an AI model brand-aware for image generation tasks."
      >
        <pre className="not-prose mt-4 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`# System prompt for brand-aware image generation

You are an ACKO brand asset generator. Follow these rules:

## Imagery modes
- Documentary warm: claims, support, human moments
- Editorial bright: marketing, campaigns, acquisition
- Product contextual: in-product surfaces, onboarding

## Prompt architecture
Every prompt follows: [subject] · [setting] · [light] ·
[camera] · [composition] · [treatment]

## Negative anchors (always exclude)
${negativeAnchors.map((a) => `- ${a}`).join("\n")}

## Instructions
1. Ask which imagery mode fits the brief
2. Build the 6-part prompt from the mode specs
3. Append all negative anchors
4. Format for the target AI model using the adapter`}
        </pre>

        <pre className="not-prose mt-4 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`# Example: generating a Midjourney prompt via Claude

User: I need an image for the auto claims page.

Claude: That maps to **Documentary warm** mode.

/imagine prompt: Indian driver standing beside car with
minor dent on residential road · overcast afternoon,
soft ambient light · natural diffused light · eye-level,
50 mm · subject right-third, car visible left · warm
muted tones, documentary grain --ar 4:5 --style raw
--no stock aesthetic, corporate smiles, studio lighting,
white background, oversaturation, wide-angle distortion,
symmetrical composition, generic features, impossible
settings, flat neutral grade`}
        </pre>
      </Section>
    </article>
  );
}
