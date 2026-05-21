import type { Metadata } from "next";
import { Section } from "@/components/docs/Section";
import { PageTable } from "@/components/docs/PageTable";
import { CodeChip } from "@/components/docs/CodeChip";
import { DoDont } from "@/components/docs/DoDont";
import { sentencePatterns, errorFramework, ctaHierarchy } from "@/lib/voice-tokens";

export const metadata: Metadata = {
  title: "Voice & tone · Patterns",
};

export default function PatternsPage() {
  return (
    <>
      <Section
        id="sentence-patterns"
        title="Sentence patterns"
        description="Length and structure guidance by context. Shorter is almost always better — but never at the cost of clarity."
      >
        <PageTable
          headers={["Context", "Max words", "Pattern", "Example"]}
          colWidths={["18%", "12%", "30%", "40%"]}
          rows={sentencePatterns.map((s) => [
            s.context,
            String(s.maxWords),
            s.pattern,
            <span key={s.context} className="italic text-muted">{s.example}</span>,
          ])}
        />
      </Section>

      <Section
        id="error-framework"
        title="Error message framework"
        description="Every error follows a three-part structure: What happened (neutral, factual) → Why it matters (only if non-obvious) → What to do next (always present, always actionable)."
      >
        <PageTable
          headers={["Error type", "Template", "Example"]}
          colWidths={["18%", "35%", "47%"]}
          rows={errorFramework.map((e) => [
            <CodeChip key={e.type}>{e.type}</CodeChip>,
            <code key={`t-${e.type}`} className="font-mono text-xs">{e.template}</code>,
            e.example,
          ])}
        />
        <div className="mt-6">
          <DoDont
            doItems={[
              "\"Phone number needs 10 digits.\"",
              "\"Something went wrong on our end. We've saved your progress.\"",
              "\"This repair isn't covered because it's classified as regular wear.\"",
            ]}
            dontItems={[
              "\"Invalid input\"",
              "\"Error 500\"",
              "\"Oops! Something went wrong\"",
              "\"Please try again later\" (without a timeline)",
              "\"Contact support\" (without a channel or number)",
            ]}
          />
        </div>
      </Section>

      <Section
        id="cta-hierarchy"
        title="CTA phrasing hierarchy"
        description={"Button labels name the outcome, not the action type. Never use \"Submit\" — always describe what happens."}
      >
        <PageTable
          headers={["Priority", "Type", "Pattern", "Examples"]}
          colWidths={["12%", "18%", "25%", "45%"]}
          rows={ctaHierarchy.map((c) => [
            <span key={c.priority} className="font-medium">{c.priority}</span>,
            c.type,
            c.pattern,
            c.examples.join(" · "),
          ])}
        />
        <ul className="mt-6 list-disc pl-5 text-sm leading-relaxed text-muted space-y-1">
          <li>Ghost/tertiary CTAs can be shorter but must still be unambiguous.</li>
          <li>Destructive CTAs name what is affected — never just &quot;Delete&quot;.</li>
          <li>Always sentence case (per typography rules).</li>
        </ul>
      </Section>
    </>
  );
}
