import type { Metadata } from "next";
import Link from "next/link";
import { CodeChip } from "@/components/docs/CodeChip";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";
import { DurationLadder } from "@/components/showcase/motion/DurationLadder";
import { EaseCompareGrid } from "@/components/showcase/motion/EaseCompareGrid";
import { EaseCurveDemo } from "@/components/showcase/motion/EaseCurveDemo";
import { KeyframeDemo } from "@/components/showcase/motion/KeyframeDemo";
import { PerformanceCompare } from "@/components/showcase/motion/PerformanceCompare";
import { ReducedMotionDemo } from "@/components/showcase/motion/ReducedMotionDemo";
import { easings, keyframes } from "@/lib/motion-tokens";

export const metadata: Metadata = {
  title: "Motion · Overview",
};

export default function MotionOverviewPage() {
  return (
    <>
      <Section id="introduction" title="Introduction">
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Motion is part of the language. It tells users which element changed,
          where it came from, and where it&apos;s going next. Done well, motion
          disappears — done badly, it slows people down. ACKO motion sticks to a
          tight token set so every flow inherits the same rhythm without
          designers reinventing curves at the component level.
        </p>
        <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          The rules are simple: <strong>animate transform and opacity</strong>,{" "}
          <strong>exits run faster than entrances</strong>, and{" "}
          <strong>respect <CodeChip tone="neutral">prefers-reduced-motion</CodeChip></strong>.
          Anything you see here can be lifted directly into product code.
        </p>
      </Section>

      <Section
        id="curve-family"
        title="Curve family at a glance"
        description="The five tokens cover every motion need across the product. Press Race — they all travel the same distance over the same time so the differences are pure curve."
      >
        <div className="not-prose">
          <EaseCompareGrid />
        </div>
      </Section>

      <Section
        id="easing-curves"
        title="Easing curves"
        description="Each curve carries an intent. Reach for the one whose intent matches your interaction; never invent new bezier values inside component code."
      >
        <div className="not-prose space-y-5">
          {easings.map((e) => (
            <EaseCurveDemo key={e.token} easing={e} />
          ))}
        </div>
      </Section>

      <Section
        id="duration"
        title="Duration"
        description="Duration tokens are descriptive — they capture what each speed feels like. Hover and micro-feedback at 100ms feel instant; 500ms+ is reserved for hero moments."
      >
        <div className="not-prose">
          <DurationLadder />
        </div>
      </Section>

      <Section
        id="keyframes"
        title="Shared keyframes"
        description="Five named animations that handle 90% of in-product motion. Each one ships with its component so consumers don't redefine the moves."
      >
        <div className="not-prose grid gap-5 lg:grid-cols-2">
          {keyframes.map((k) => (
            <KeyframeDemo key={k.name} keyframe={k} />
          ))}
        </div>
      </Section>

      <Section
        id="accessibility"
        title="Accessibility"
        description="Motion has accessibility cost. Some users get nauseous from parallax and slides; others lose information that's only conveyed by the animation. Two rules cover both."
      >
        <div className="not-prose">
          <ReducedMotionDemo />
        </div>
        <ul className="mt-6 space-y-2 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Respect <CodeChip tone="neutral">prefers-reduced-motion: reduce</CodeChip>.</strong>{" "}
            Replace movement with a fade, or render the end state immediately.
          </li>
          <li>
            <strong>Never rely on motion alone.</strong> The animation can
            decorate state changes, but the underlying state must also be
            visible without it.
          </li>
        </ul>
      </Section>

      <Section
        id="performance"
        title="Performance"
        description="Smooth motion comes from animating the right properties. Animate transform and opacity — the compositor handles them off the main thread. Anything else triggers layout or paint and risks dropping frames."
      >
        <div className="not-prose">
          <PerformanceCompare />
        </div>
      </Section>

      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            { title: "All motion tokens", href: "/foundations/motion/tokens", meta: "Tokens tab" },
            { title: "How to apply motion", href: "/foundations/motion/usage", meta: "Usage tab" },
            { title: "Setup & code", href: "/foundations/motion/code", meta: "Code tab" },
            { title: "motion (npm)", href: "https://motion.dev/docs/react-quick-start", meta: "External · React API", external: true },
          ]}
        />
      </Section>

      <p className="mt-10 text-sm text-muted">
        See it in product:{" "}
        <Link href="/patterns" className="underline">
          Patterns
        </Link>{" "}
        ·{" "}
        <Link href="/principles/effortless-by-default" className="underline">
          Effortless by default
        </Link>
      </p>
    </>
  );
}
