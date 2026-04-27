import type { Metadata } from "next";
import Link from "next/link";
import { CodeChip } from "@/components/docs/CodeChip";
import { DoDont } from "@/components/docs/DoDont";
import { PageTable } from "@/components/docs/PageTable";
import { Section } from "@/components/docs/Section";
import { antiPatterns, performanceRules } from "@/lib/motion-tokens";

export const metadata: Metadata = {
  title: "Motion · Usage",
};

export default function MotionUsagePage() {
  return (
    <>
      <Section
        id="when-to-animate"
        title="When to animate"
        description="Motion earns its keep when it teaches the eye something — where an element came from, that an action committed, that two surfaces are connected. Outside those moments, hold still."
      >
        <DoDont
          doItems={[
            "Animate state transitions: a value validating, a sheet opening, a menu landing on screen.",
            "Animate continuity: a card lifting into a modal, a list reordering after a sort.",
            "Animate attention only when the user needs it — error shake, success tick, focus drift.",
          ]}
          dontItems={[
            "Animate things the user sees 100+ times a day. Repetition turns motion into noise.",
            "Animate decoration. Particles, glows, marquee text — none of it survives a 4G connection.",
            "Re-purpose motion to mask a slow API. Fix the API.",
          ]}
        />
      </Section>

      <Section
        id="enter-vs-exit"
        title="Enter vs. exit"
        description="Entrances earn a beat of attention; exits should clear the way. As a rule of thumb, exits are 20–30% faster than entrances and use the same curve family."
      >
        <PageTable
          headers={["Action", "Curve", "Duration"]}
          colWidths={["40%", "32%", "28%"]}
          rows={[
            [
              "Dropdown / popover · enter",
              <CodeChip key="e1">--ease-out-cubic</CodeChip>,
              "200ms",
            ],
            [
              "Dropdown / popover · exit",
              <CodeChip key="e2">--ease-out-quad</CodeChip>,
              "150ms",
            ],
            [
              "Modal / sheet · enter",
              <CodeChip key="e3">--ease-out-quart</CodeChip>,
              "300ms",
            ],
            [
              "Modal / sheet · exit",
              <CodeChip key="e4">--ease-out-cubic</CodeChip>,
              "200ms",
            ],
            [
              "Toast · enter",
              <CodeChip key="e5">--ease-out-cubic</CodeChip>,
              "200ms",
            ],
            [
              "Toast · auto-dismiss",
              <CodeChip key="e6">--ease-out-quad</CodeChip>,
              "150ms",
            ],
          ]}
        />
      </Section>

      <Section
        id="performance"
        title="Performance"
        description="Smooth motion is mostly a property choice. Animate transform and opacity; avoid anything that triggers layout."
      >
        <ul className="not-prose mb-6 grid gap-3 sm:grid-cols-2">
          {performanceRules.map((r) => (
            <li
              key={r.do}
              className="rounded-xl border border-border bg-white p-4"
            >
              <p className="text-sm font-semibold text-foreground">{r.do}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                {r.why}
              </p>
            </li>
          ))}
        </ul>
        <ul className="not-prose grid gap-3 sm:grid-cols-2">
          {antiPatterns.map((r) => (
            <li
              key={r.avoid}
              className="rounded-xl border border-red-200 bg-red-50/40 p-4"
            >
              <p className="text-sm font-semibold text-red-700">
                Avoid · {r.avoid}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-red-700/80">
                {r.why}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="reduced-motion"
        title="Reduced motion"
        description="Some users explicitly opt out of motion. Treat their setting as a hard contract — never override it, even for hero moments."
      >
        <PageTable
          headers={["Setting", "What you ship"]}
          colWidths={["35%", "65%"]}
          rows={[
            [
              <CodeChip key="r1" tone="neutral">
                prefers-reduced-motion: no-preference
              </CodeChip>,
              "Default. Use motion tokens as designed.",
            ],
            [
              <CodeChip key="r2" tone="neutral">
                prefers-reduced-motion: reduce
              </CodeChip>,
              "Replace movement (slide, scale > 1.05, parallax) with an opacity fade or render the end state instantly. Keep informative animations like the loading spinner — but with no motion duration on entry/exit.",
            ],
          ]}
        />
      </Section>

      <p className="mt-10 text-sm text-muted">
        See also: <Link href="/foundations/motion/tokens">Tokens</Link> ·{" "}
        <Link href="/foundations/motion/code">Code</Link> ·{" "}
        <Link href="/patterns">Patterns</Link>
      </p>
    </>
  );
}
