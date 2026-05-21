import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/docs/FadeIn";

export const metadata: Metadata = {
  title: "Get started",
};

const journeySteps = [
  {
    num: "01",
    title: "Visual direction",
    desc: "The brand personality and how the system flexes by context.",
    href: "/visual-direction",
  },
  {
    num: "02",
    title: "Principles",
    desc: "Four rules that shape every design decision.",
    href: "/principles",
  },
  {
    num: "03",
    title: "Foundations",
    desc: "Colour, type, spacing, motion, imagery, voice.",
    href: "/foundations",
  },
  {
    num: "04",
    title: "Brand story",
    desc: "The narrative that ties everything together.",
    href: "/brand-story",
  },
  {
    num: "05",
    title: "Develop",
    desc: "Tokens, code, and implementation.",
    href: "/develop",
  },
];

const roles = [
  {
    title: "Design",
    desc: "Principles, foundations, visual direction, Figma alignment.",
    start: "/visual-direction",
    startLabel: "Start with Visual direction",
  },
  {
    title: "Product & content",
    desc: "Voice, clarity, lifecycle moments, copy patterns.",
    start: "/foundations/voice",
    startLabel: "Start with Voice & tone",
  },
  {
    title: "Engineering",
    desc: "Tokens, implementation, component library.",
    start: "/develop",
    startLabel: "Start with Develop",
  },
];

export default function GetStartedPage() {
  return (
    <article className="max-w-[900px]">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="relative mb-16 overflow-hidden rounded-2xl">
        <Image
          src="/images/get-started-hero.jpg"
          alt="ACKO Visual Direction"
          width={1024}
          height={768}
          className="h-[340px] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/30 to-transparent p-8 md:p-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-white/60">
            Design System
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            ACKO Visual Direction
          </h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
            One brand. One personality. Everything you need to design, build,
            and create on-brand — whether it&apos;s a landing page, a claims
            flow, or a campaign.
          </p>
        </div>
      </div>

      {/* ── One brand, every context ─────────────────────────────── */}
      <FadeIn>
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-bold text-foreground">
            One brand, every context
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            ACKO&apos;s personality is{" "}
            <strong className="text-foreground">Clear &amp; Human</strong> —
            clear when you&apos;re deciding, present when you need us. The brand
            doesn&apos;t switch modes. It adapts naturally — precise when
            you&apos;re comparing plans, warm when you&apos;re filing a claim.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Product */}
            <Link
              href="/visual-direction"
              className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/card-product.jpg"
                  alt="Product — focused, systematic, clear"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0a0a0a] backdrop-blur-sm">
                  Product
                </div>
              </div>
              <div className="p-6">
                <p className="mb-1 text-sm font-medium text-foreground">
                  Focused
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  Follow the system. Components and tokens as documented.
                  Consistent across every screen.
                </p>
              </div>
            </Link>

            {/* Marketing */}
            <Link
              href="/visual-direction"
              className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/card-brand.jpg"
                  alt="Brand — expressive, human, warm"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute left-3 top-3 rounded-full bg-[#6841E6]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Brand
                </div>
              </div>
              <div className="p-6">
                <p className="mb-1 text-sm font-medium text-foreground">
                  Expressive
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  Same foundations, more freedom. Bold headlines, editorial
                  photography, layouts that breathe.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* ── Your role, your starting point ────────────────────── */}
      <FadeIn>
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-bold text-foreground">
            Your role, your starting point
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Jump straight to what matters most for your work.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.title}
                href={role.start}
                className="group rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
              >
                <p className="mb-1 text-sm font-semibold text-foreground">
                  {role.title}
                </p>
                <p className="mb-4 text-xs leading-relaxed text-muted">
                  {role.desc}
                </p>
                <span className="text-xs font-medium text-[#6841E6] group-hover:underline">
                  {role.startLabel} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Explore the system ───────────────────────────────── */}
      <FadeIn>
        <section className="mb-16">
          <h2 className="mb-2 text-xl font-bold text-foreground">
            Explore the system
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Walk through the system in order, or jump to any section.
          </p>

          <div className="space-y-3">
            {journeySteps.map((step) => (
              <Link
                key={step.num}
                href={step.href}
                className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-white px-6 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
              >
                <span className="text-xl font-bold text-[#6841E6]/30 transition-colors group-hover:text-[#6841E6]">
                  {step.num}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {step.title}
                  </p>
                  <p className="text-xs text-muted">{step.desc}</p>
                </div>
                <span className="text-muted opacity-0 transition-opacity group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Your tools ───────────────────────────────────────── */}
      <FadeIn>
        <section className="mb-8">
          <h2 className="mb-2 text-xl font-bold text-foreground">Your tools</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Resources that complement this documentation.
          </p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <a
              href="https://github.com/rahulpramod-stack/DS"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
            >
              <p className="mb-1 text-sm font-semibold text-foreground">
                Component library
              </p>
              <p className="mb-3 text-xs leading-relaxed text-muted">
                Production React components built on these tokens.
              </p>
              <span className="text-xs font-medium text-[#6841E6] group-hover:underline">
                GitHub &rarr;
              </span>
            </a>

            <Link
              href="/ui-kit"
              className="group rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
            >
              <p className="mb-1 text-sm font-semibold text-foreground">
                UI kit overview
              </p>
              <p className="mb-3 text-xs leading-relaxed text-muted">
                Component inventory with links to every foundation.
              </p>
              <span className="text-xs font-medium text-[#6841E6] group-hover:underline">
                View UI kit &rarr;
              </span>
            </Link>

            <Link
              href="/patterns"
              className="group rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
            >
              <p className="mb-1 text-sm font-semibold text-foreground">
                Patterns
              </p>
              <p className="mb-3 text-xs leading-relaxed text-muted">
                Recurring layouts and interactions in action.
              </p>
              <span className="text-xs font-medium text-[#6841E6] group-hover:underline">
                View patterns &rarr;
              </span>
            </Link>
          </div>
        </section>
      </FadeIn>
    </article>
  );
}
