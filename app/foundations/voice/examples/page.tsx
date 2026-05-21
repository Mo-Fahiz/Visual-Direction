import type { Metadata } from "next";
import { Section } from "@/components/docs/Section";
import { beforeAfterRewrites } from "@/lib/voice-tokens";

export const metadata: Metadata = {
  title: "Voice & tone · Examples",
};

export default function ExamplesPage() {
  return (
    <>
      <Section
        id="before-after"
        title="Before → After rewrites"
        description="Real UI copy rewritten to follow ACKO voice principles. Each pair shows the principle that drives the change."
      >
        <div className="space-y-6">
          {beforeAfterRewrites.map((r) => (
            <div
              key={r.context}
              className="not-prose rounded-[10px] border border-border bg-white shadow-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 border-b border-border bg-[#fafaf8] px-5 py-3">
                <span className="text-sm font-medium text-foreground">{r.context}</span>
                <span className="ml-auto rounded-full bg-[var(--acko-purple-soft)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--acko-purple)]">
                  {r.principle}
                </span>
              </div>
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-5">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#dc2626]">
                    Before
                  </p>
                  <p className="text-sm leading-relaxed text-[#333]">{r.before}</p>
                </div>
                <div className="p-5">
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-[#16a34a]">
                    After
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">{r.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="rules-of-thumb"
        title="Writing rules of thumb"
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground space-y-2">
          <li>Lead with the outcome, then supporting detail.</li>
          <li>One idea per sentence. Two short sentences beat one long one.</li>
          <li>Use &quot;you&quot; and &quot;your&quot; — never &quot;the user&quot; or &quot;the policyholder&quot; in UI.</li>
          <li>Avoid jargon unless legally required — then explain it inline.</li>
          <li>Name specific actions: &quot;Call 1800-xxx-xxxx&quot; not &quot;Contact support&quot;.</li>
          <li>Include timelines when promising something: &quot;by Thursday&quot; not &quot;soon&quot;.</li>
          <li>Acknowledge the moment before giving instructions in claims and support flows.</li>
          <li>Never blame the user in error states — describe what&apos;s needed, not what&apos;s wrong.</li>
        </ul>
      </Section>
    </>
  );
}
