import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { videoDirection } from "@/lib/asset-tokens";

export const metadata: Metadata = {
  title: "Video direction",
};

export default function VideoPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation · Asset creation"
        title="Video direction"
        description="Pacing, transitions, and music mood guidelines for brand films and motion graphics. All rules build on the existing motion token system."
        lastUpdated="May 12, 2026"
      />

      <Section
        id="pacing"
        title="Pacing"
        description="Tempo and timing vary by content type. Emotional content is slower; factual content is tighter."
      >
        <PageTable
          headers={["Property", "Value"]}
          colWidths={["30%", "70%"]}
          rows={[
            ["BPM", videoDirection.pacing.bpm],
            ["Cut duration", videoDirection.pacing.cutDuration],
            ["Hold duration", videoDirection.pacing.holdDuration],
          ]}
        />
      </Section>

      <Section
        id="transitions"
        title="Transitions"
        description="Keep transitions simple. Movement should serve the story, not decorate it."
      >
        <ul className="list-disc pl-5 text-sm leading-relaxed text-foreground space-y-2">
          {videoDirection.transitions.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Section>

      <Section
        id="music"
        title="Music mood"
        description="Each imagery mode has a matching audio palette."
      >
        <PageTable
          headers={["Mode", "Mood", "Instruments"]}
          colWidths={["25%", "30%", "45%"]}
          rows={videoDirection.musicMood.map((m) => [
            m.mode,
            m.mood,
            m.instruments,
          ])}
        />
      </Section>

      <Section
        id="motion-rules"
        title="Motion graphics rules"
        description="Motion graphics in video follow the same token system as product UI."
      >
        <ul className="list-disc pl-5 text-sm leading-relaxed text-foreground space-y-2">
          {videoDirection.rules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
