import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { FadeIn } from "@/components/docs/FadeIn";
import { ColorBand, CategorySwatches } from "@/components/showcase/ColorBand";
import { FilmMoments } from "@/components/showcase/FilmMoments";
import {
  ImageryModes,
  NegativeAnchors,
  PromptArchitecture,
} from "@/components/showcase/ImageryModes";
import { PageTable } from "@/components/docs/PageTable";
import { ResourceCards } from "@/components/docs/ResourceCards";

export const metadata: Metadata = {
  title: "Visual direction",
};

export default function VisualDirectionPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Visual direction"
        title="This is ACKO"
        description="One brand, one personality — Clear &amp; Human. Clear when you're deciding, present when you need us."
        lastUpdated="May 13, 2026"
      />

      {/* ── Hero image ─────────────────────────────────────────── */}
      <FadeIn>
        <div className="not-prose mb-12 w-full min-w-0 overflow-hidden rounded-2xl">
          <Image
            src="/images/visual-direction-hero.jpg"
            alt="ACKO brand visual — purple and gold flowing forms representing the Clear &amp; Human brand personality"
            width={1024}
            height={768}
            className="h-[320px] w-full object-cover md:h-[400px]"
            priority
          />
        </div>
      </FadeIn>

      {/* ── Brand personality ──────────────────────────────────── */}
      <FadeIn>
        <h2>Clear &amp; Human</h2>
        <p>
          ACKO&apos;s personality is <strong>Clear &amp; Human</strong>. One
          brand, one voice — factual when you&apos;re deciding, human when you
          need us. The tone shifts naturally with context. The brand never does.
        </p>
        <blockquote className="not-prose my-8 border-l-4 border-[var(--acko-purple)] pl-5 text-lg font-medium leading-relaxed text-foreground">
          Clear when you&apos;re deciding. Present when you need us.
        </blockquote>
      </FadeIn>

      {/* ── How the system flexes ──────────────────────────────── */}
      <FadeIn>
        <h2>How the system flexes</h2>
        <p>
          Same foundations, same tokens, same voice. What changes is how much
          creative freedom you have — depending on whether you&apos;re building
          a product screen or a brand campaign.
        </p>

        <div className="not-prose mt-8 mb-12 grid min-w-0 gap-6 md:grid-cols-2">
          {/* Product card */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/card-product.jpg"
                alt="Product — focused, systematic, clear"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0a0a0a] backdrop-blur-sm">
                Product
              </div>
            </div>
            <div className="p-6">
              <p className="mb-1 text-base font-semibold text-foreground">
                Focused
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Follow the system. Use components, tokens, and patterns as
                documented. Every screen should feel consistent and predictable.
              </p>
            </div>
          </div>

          {/* Marketing card */}
          <div className="min-w-0 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/card-brand.jpg"
                alt="Brand — expressive, human, warm"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 rounded-full bg-[var(--acko-purple)]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                Brand
              </div>
            </div>
            <div className="p-6">
              <p className="mb-1 text-base font-semibold text-foreground">
                Expressive
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Same foundations, more freedom. Headlines can be bold.
                Photography can be editorial. Layouts can breathe more — as
                long as it still feels like ACKO.
              </p>
            </div>
          </div>
        </div>

        <PageTable
          caption="Focused vs Expressive"
          headers={["Foundation", "Product (focused)", "Brand (expressive)"]}
          rows={[
            [
              "Typography",
              "Sanctioned pairings only. Semantic roles enforced.",
              "Display sizes unlocked. Weight mixing allowed for headlines.",
            ],
            [
              "Color",
              "Token palette only. Category color in designated zones.",
              "Broader tints. Category gradients allowed (70/30 rule).",
            ],
            [
              "Imagery",
              "Product contextual mode. Clean backgrounds.",
              "All three modes. Editorial and documentary for campaigns.",
            ],
            [
              "Layout",
              "Component grid. Standard spacing tokens.",
              "Custom layouts permitted. Breathing space encouraged.",
            ],
            [
              "Voice",
              "Factual and scannable. No wordplay in UI copy.",
              "Bold headlines OK if meaning is instant. Body copy stays clear.",
            ],
            [
              "Motion",
              "Functional only. Micro-interactions from token set.",
              "Expressive transitions. Scroll-triggered effects allowed.",
            ],
          ]}
        />
      </FadeIn>

      {/* ── Tone shifts naturally ──────────────────────────────── */}
      <FadeIn>
        <h2>Tone shifts naturally</h2>
        <p>
          The tone follows the customer&apos;s moment — not a rule you apply.
          A comparison page is naturally factual. A claims page is naturally
          warmer. Same brand, different emphasis.
        </p>

        <PageTable
          caption="Tone by customer moment"
          headers={["Customer moment", "Tone emphasis", "What it sounds like"]}
          rows={[
            [
              "Browsing & exploring",
              "Factual, confident",
              <>
                <q>Covers engine, gearbox, and 6 more parts.</q>
              </>,
            ],
            [
              "Comparing plans",
              "Scannable, neutral",
              <>
                <q>Zero depreciation — parts paid at invoice price.</q>
              </>,
            ],
            [
              "Purchasing",
              "Clear, decisive",
              <>
                <q>Pay ₹4,299 annually. Your car is covered from today.</q>
              </>,
            ],
            [
              "Post-purchase",
              "Helpful, informative",
              <>
                <q>Your policy is active. Here&apos;s what to do if you need us.</q>
              </>,
            ],
            [
              "Filing a claim",
              "Empathetic, direct",
              <>
                <q>We&apos;re sorry this happened. Let&apos;s get started.</q>
              </>,
            ],
            [
              "Claim in progress",
              "Reassuring, specific",
              <>
                <q>Your claim is with the assessor. You&apos;ll hear back by Thursday.</q>
              </>,
            ],
            [
              "Emergency",
              "Calm, action-first",
              <>
                <q>Call 112 for help. We&apos;ll handle paperwork after.</q>
              </>,
            ],
          ]}
        />
      </FadeIn>

      {/* ── Four principles ────────────────────────────────────── */}
      <FadeIn>
        <h2>Four principles</h2>
        <p>
          Every design decision traces back to one of these. They don&apos;t
          compete — they layer.
        </p>

        <div className="not-prose mt-6 grid min-w-0 gap-5 sm:grid-cols-2">
          {[
            {
              title: "Clear over clever",
              tagline: "Transparent. Plain. Understood.",
              href: "/principles/clear-over-clever",
            },
            {
              title: "Effortless by default",
              tagline: "Simple. Not simplified.",
              href: "/principles/effortless-by-default",
            },
            {
              title: "Present when it matters",
              tagline: "Calm. Human. There.",
              href: "/principles/present-when-it-matters",
            },
            {
              title: "Respectful of time",
              tagline: "Context. Clarity. Zero friction.",
              href: "/principles/respectful-of-time",
            },
          ].map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
            >
              <p className="text-base font-semibold tracking-tight text-foreground">
                {p.title}
              </p>
              <p className="mt-1 text-sm text-muted">{p.tagline}</p>
              <span className="mt-4 text-xs font-medium text-[var(--acko-muted)] transition-colors group-hover:text-foreground">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </FadeIn>

      {/* ── Four moments that define the brand ─────────────────── */}
      <FadeIn>
        <h2>Four moments that define the brand</h2>
        <p className="text-muted">
          Every screen we ship can be traced to one of these moments. The
          photography brief and accent are part of the principle, not a styling
          choice.
        </p>
        <FilmMoments />
      </FadeIn>

      {/* ── Category colour ────────────────────────────────────── */}
      <FadeIn>
        <h2>Category colour</h2>
        <p>
          Vertical colours (Auto, Health, Life, Travel) are{" "}
          <strong>semantic identifiers</strong>, not decoration. They blend with
          purple and follow the distribution band — see{" "}
          <Link href="/foundations/color">Color</Link>.
        </p>
        <CategorySwatches />
        <ColorBand />
      </FadeIn>

      {/* ── Imagery ────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Imagery — three modes, one prompt</h2>
        <p className="text-muted">
          Photography for human moments, illustration for concepts. Three
          imagery modes (documentary warm, editorial bright, product contextual),
          one prompt architecture, one negative-anchor list.
        </p>
        <ImageryModes />
        <PromptArchitecture />
        <NegativeAnchors />
      </FadeIn>

      {/* ── Decision guide ─────────────────────────────────────── */}
      <FadeIn>
        <h2>Decision guide</h2>
        <ul>
          <li>
            If the task is <strong>choosing or paying</strong> — keep tone factual
            and scannable. Stay focused.
          </li>
          <li>
            If the user is <strong>scared, blocked, or in crisis</strong> — lead
            with empathy while staying fact-complete. The brand naturally warms.
          </li>
          <li>
            If it&apos;s a <strong>campaign or brand moment</strong> — switch to
            be expressive. Be bold. Stay ACKO.
          </li>
          <li>
            If unsure — <strong>clarity wins</strong>. Empathy never obscures
            terms.
          </li>
        </ul>
      </FadeIn>

      {/* ── Anti-patterns ──────────────────────────────────────── */}
      <FadeIn>
        <h2>Anti-patterns</h2>
        <DoDont
          doItems={[
            "Shift tone naturally with context — same voice, different emphasis.",
            "Stay focused for product UI, be expressive for brand campaigns.",
            "Keep category colour meaningful per vertical.",
            "Link stressful moments to clear next steps and human help.",
          ]}
          dontItems={[
            "Invent a visual style that doesn't trace back to a foundation.",
            "Use brand-level creativity inside product flows.",
            "Use semantic colours as generic decoration.",
            "Sacrifice transparency for emotional copy.",
          ]}
        />
      </FadeIn>

      {/* ── Related ────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Explore further</h2>
        <ResourceCards
          resources={[
            { title: "Principles", href: "/principles", meta: "The why behind every decision" },
            { title: "Foundations", href: "/foundations", meta: "Colour, type, imagery, voice" },
            { title: "Voice & tone", href: "/foundations/voice", meta: "How ACKO writes" },
            { title: "Asset creation", href: "/foundations/asset-creation", meta: "AI-first image & video" },
            { title: "Brand story", href: "/brand-story", meta: "The narrative" },
            { title: "Get started", href: "/get-started", meta: "Quick orientation" },
          ]}
        />
      </FadeIn>
    </article>
  );
}
