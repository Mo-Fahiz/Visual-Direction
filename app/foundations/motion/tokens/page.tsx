import type { Metadata } from "next";
import { CodeChip } from "@/components/docs/CodeChip";
import { PageTable } from "@/components/docs/PageTable";
import { Section } from "@/components/docs/Section";
import {
  decisionMatrix,
  durations,
  easings,
  keyframes,
} from "@/lib/motion-tokens";

export const metadata: Metadata = {
  title: "Motion · Tokens",
};

export default function MotionTokensPage() {
  return (
    <>
      <Section
        id="easing"
        title="Easing tokens"
        description="Defined as CSS custom properties on :root. Each curve carries an intent — components reference the token by name, never the raw bezier."
      >
        <PageTable
          headers={["Token", "Bezier", "Intent", "Default"]}
          colWidths={["28%", "30%", "26%", "16%"]}
          rows={easings.map((e) => [
            <CodeChip key={`t-${e.token}`}>{e.token}</CodeChip>,
            <span key={`b-${e.token}`} className="font-mono text-[12px]">
              [{e.bezier.join(", ")}]
            </span>,
            e.use,
            <span key={`d-${e.token}`} className="font-mono text-[12px]">
              {e.defaultDuration}ms
            </span>,
          ])}
        />
      </Section>

      <Section
        id="duration"
        title="Duration tokens"
        description="No --duration-* CSS tokens are emitted today — durations are passed as ms in CSS or in the JS animation library. Stick to this short ladder."
      >
        <PageTable
          headers={["Duration", "Use"]}
          colWidths={["20%", "80%"]}
          rows={durations.map((d) => [
            <span key={d.label} className="font-mono text-[12px] font-semibold">
              {d.label}
            </span>,
            d.use,
          ])}
        />
      </Section>

      <Section
        id="decision-matrix"
        title="Decision matrix"
        description="Picking a curve and a duration shouldn't take long. If the row matches your scenario, use that pairing."
      >
        <PageTable
          headers={["Scenario", "Easing", "Duration"]}
          colWidths={["48%", "30%", "22%"]}
          rows={decisionMatrix.map((m) => [
            m.scenario,
            <span key={`e-${m.scenario}`} className="font-mono text-[12px]">
              {m.easing}
            </span>,
            m.duration,
          ])}
        />
      </Section>

      <Section
        id="keyframes"
        title="Keyframe tokens"
        description="Named animations that ship with the components that use them. Reach for these instead of writing bespoke @keyframes."
      >
        <PageTable
          headers={["Name", "Duration", "Easing", "Used by"]}
          colWidths={["28%", "14%", "20%", "38%"]}
          rows={keyframes.map((k) => [
            <CodeChip key={`n-${k.name}`}>{`@keyframes ${k.name}`}</CodeChip>,
            <span key={`d-${k.name}`} className="font-mono text-[12px]">
              {k.duration}ms
            </span>,
            <span key={`e-${k.name}`} className="font-mono text-[12px]">
              {k.easing}
            </span>,
            <span key={`u-${k.name}`} className="text-xs text-muted">
              {k.consumers.join(", ")}
            </span>,
          ])}
        />
      </Section>
    </>
  );
}
