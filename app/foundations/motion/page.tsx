import type { Metadata } from "next";
import { PageTable } from "@/components/docs/PageTable";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";
import { PageTransitionDemos, MicroInteractionDemos } from "./MotionDemos";

export const metadata: Metadata = {
  title: "Motion · Overview",
};

export default function MotionOverviewPage() {
  return (
    <>
      <Section id="introduction" title="Introduction">
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          A unified motion system for creating consistent, smooth, and
          meaningful UI animations across ACKO products — delivering a
          seamless, premium experience through purposeful motion.
        </p>
        <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-muted">
          Four words anchor every decision: <strong>Purposeful</strong>,{" "}
          <strong>Consistent</strong>, <strong>Premium</strong>,{" "}
          <strong>Fluid</strong>.
        </p>
      </Section>

      <Section
        id="principles"
        title="Core motion principles"
        description="Three rules that shape every animation we ship."
      >
        <div className="not-prose grid gap-5 md:grid-cols-3">
          {[
            {
              num: "01",
              title: "Calm, smooth, trustworthy",
              desc: "Motion should feel effortless and steady — like a brand you can rely on. No sudden jumps, no unnecessary flair.",
            },
            {
              num: "02",
              title: "Purposeful & helpful",
              desc: "Every animation has a reason. Use motion to guide users, confirm actions, and make the experience easier to understand — not just to look good.",
            },
            {
              num: "03",
              title: "Consistent, reusable, on-brand",
              desc: "The same interaction always feels the same across the app — smooth, modern, and unmistakably ACKO. Familiarity builds trust.",
            },
          ].map((p) => (
            <div
              key={p.num}
              className="rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6841E6]">
                {p.num}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {p.title}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="page-transitions"
        title="Page transitions"
        description="Four transition types cover every navigation context. Each demo below loops every few seconds — observe the curve and the duration."
      >
        <PageTransitionDemos />
        <div className="mt-8">
          <PageTable
            caption="Page transition types"
            headers={["Type", "Context", "Usage"]}
            rows={[
              [
                "Right to left (default)",
                "Primary navigation — cards, links, CTAs",
                "90% of transitions",
              ],
              [
                "Crossfade",
                "Bottom navbar only",
                "Tab switching (Home, Discover, Support)",
              ],
              [
                "Bottom sheet",
                "In-context information",
                "Slides up for filters, details, confirmations",
              ],
              [
                "Card expand",
                "Discover tab",
                "Cards grow to fill screen — blogs, articles, vlogs",
              ],
            ]}
          />
        </div>
      </Section>

      <Section
        id="microinteractions"
        title="Microinteractions"
        description="Timing values for the most common in-product animations. Every value is part of the system — don't invent new ones."
      >
        <PageTable
          caption="Microinteraction timings"
          headers={["Interaction", "Timing"]}
          rows={[
            ["Button press", "80ms press · 140ms release"],
            ["Sheet open", "550ms ease-out · 400ms ease-in"],
            ["Accordion", "280ms ease-out"],
            ["Toast", "260ms ease-out · 220ms ease-in"],
            ["Input focus", "180ms · label floats up"],
            ["Error shake", "240ms · 6 keyframes"],
            ["Toggle", "220ms · spring settle"],
            ["Success state", "500ms scale · 700ms hold"],
            ["Spinner", "800ms · linear · tap to pause"],
            ["Chip select", "180ms ease-out"],
            ["Skeleton shimmer", "1400ms · linear loop"],
            ["Stagger list", "56ms offset · 300ms ease-out"],
            ["Checkbox tick", "80ms press · 180ms draw"],
            ["Number count-up", "400–700ms ease-out (rAF)"],
            ["Three-dot loader", "1200ms · 160ms offset"],
            ["Card swipe", "Linear drag · 320ms ease-out settle"],
            ["Progress bar", "2s linear bar · ease-out %"],
          ]}
        />
      </Section>

      <Section
        id="microinteraction-demos"
        title="Microinteractions in motion"
        description="Six common moments — hover the cards or just watch the loop. Every demo uses real ACKO timings and curves."
      >
        <MicroInteractionDemos />
      </Section>

      <Section
        id="rules"
        title="Implementation rules"
        description="Three constraints that keep motion fast and accessible."
      >
        <ul className="space-y-3 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Animate only transform and opacity.</strong> The compositor
            handles them off the main thread. Anything else (width, height,
            margin) triggers layout or paint and risks dropped frames.
          </li>
          <li>
            <strong>Exits run faster than entrances.</strong> A 550ms enter
            pairs with a 400ms exit. Users feel the speed difference as
            responsiveness.
          </li>
          <li>
            <strong>
              Respect <code>prefers-reduced-motion</code>.
            </strong>{" "}
            Replace movement with a fade or render the end state instantly.
            Never rely on motion alone to communicate a state change.
          </li>
        </ul>
      </Section>

      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            {
              title: "ACKO Motion System",
              href: "https://acko-motion-system.vercel.app/",
              meta: "External · The full motion system reference",
              external: true,
            },
            {
              title: "All motion tokens",
              href: "/foundations/motion/tokens",
              meta: "Tokens tab",
            },
            {
              title: "How to apply motion",
              href: "/foundations/motion/usage",
              meta: "Usage tab",
            },
            {
              title: "Setup & code",
              href: "/foundations/motion/code",
              meta: "Code tab",
            },
          ]}
        />
      </Section>
    </>
  );
}
