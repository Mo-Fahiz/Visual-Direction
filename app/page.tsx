import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/docs/FadeIn";
import DotGrid from "@/components/DotGrid";
import { assetPath } from "@/lib/base-path";

/* ── R2 icon helpers ─────────────────────────────────────────────── */
const ICON_BUCKET = "https://pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev";

/** Build a CDN URL from a real manifest path (handles spaces/capitalisation). */
function ackoIcon(path: string): string {
  return (
    ICON_BUCKET +
    path
      .split("/")
      .map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg)))
      .join("/")
  );
}

/* ── Data ────────────────────────────────────────────────────────── */
const quickStart = [
  {
    title: "About ACKO",
    desc: "The brand personality and the four traits that shape every decision.",
    href: "/principles",
    image: assetPath("/images/cards/about-acko.svg"),
  },
  {
    title: "Design system",
    desc: "Colour, typography, spacing, radii, shadows — the building blocks.",
    href: "/foundations",
    image: assetPath("/images/cards/design-system.svg"),
  },
  {
    title: "Voice and Tone",
    desc: "How ACKO sounds across UI, email, and support.",
    href: "/foundations/voice",
    image: assetPath("/images/cards/voice-and-tone.svg"),
  },
  {
    title: "Accessibility",
    desc: "WCAG AA baseline and the rules every screen inherits.",
    href: "/foundations/accessibility",
    image: assetPath("/images/cards/accessibility.svg"),
  },
];

/**
 * Foundation tiles. Icon paths are real manifest paths from
 * https://pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev/icons.json — capitalisation
 * and hyphens matter, so use the verbatim path field, not a guessed filename.
 */
const foundations = [
  {
    title: "Colour",
    desc: "Primitives, semantic tokens, layering, theming.",
    href: "/foundations/color",
    icon: "/Outline/Colour.svg",
  },
  {
    title: "Typography",
    desc: "Euclid Circular B. Sanctioned pairings, weight rules.",
    href: "/foundations/typography",
    icon: "/Outline/typography.svg",
  },
  {
    title: "Spacing",
    desc: "1px base scale. Numeric tokens for margin, padding, gaps.",
    href: "/foundations/spacing",
    icon: "/Outline/Measure.svg",
  },
  {
    title: "Border radii",
    desc: "Pills (9999px), cards (20px), nested inset rule.",
    href: "/foundations/radii",
    icon: "/Outline/border radii.svg",
  },
  {
    title: "Shadows",
    desc: "Seven-tier elevation. Soft in light, heavier in dark.",
    href: "/foundations/shadows",
    icon: "/Outline/layers.svg",
  },
  {
    title: "Motion",
    desc: "Purposeful, consistent, premium, fluid.",
    href: "/foundations/motion",
    icon: "/Outline/bolt.svg",
  },
  {
    title: "Imagery",
    desc: "Three modes, one prompt architecture.",
    href: "/foundations/imagery",
    icon: "/Outline/image-mountain.svg",
  },
  {
    title: "Iconography",
    desc: "Stroke-rounded. 1.5px at 24px grid.",
    href: "/foundations/iconography",
    icon: "/Outline/craft.svg",
  },
  {
    title: "Voice and Tone",
    desc: "Clear, human, sentence case. Errors that respect.",
    href: "/foundations/voice",
    icon: "/Outline/Messages.svg",
  },
];

const recent = [
  {
    label: "Updated",
    title: "Motion foundation refreshed",
    desc: "Aligned with the ACKO Motion System. New traits, page transitions, and microinteraction timings.",
    href: "/foundations/motion",
  },
  {
    label: "Updated",
    title: "Atoms aligned with the component library",
    desc: "Buttons, cards, inputs, dialogs, badges — every value matches the production library.",
    href: "/ui-kit",
  },
  {
    label: "New",
    title: "About ACKO sets the brand",
    desc: "One brand, one personality — Clear & Human. Focused for product, expressive for brand.",
    href: "/principles",
  },
];

export default function HomePage() {
  return (
    <div className="relative bg-[#FAFAFB]">
      {/* ── DotGrid Background ──────────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <DotGrid
          dotSize={4}
          gap={34}
          baseColor="#eaeaea"
          activeColor="#a38cff"
          proximity={150}
          speedTrigger={100}
          shockRadius={330}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-16 pt-20 md:px-12 md:pb-24 md:pt-32">
        <FadeIn>
          <div className="mx-auto max-w-[1100px]">
            <h1 className="text-[40px] font-bold leading-[44px] tracking-[-0.02em] text-[#1F1F23] md:text-[64px] md:leading-[68px]">
              ACKO Design Standards
            </h1>
            <p className="mt-6 max-w-[640px] text-[16px] leading-relaxed text-[#5C616B] md:text-[18px] md:leading-8">
              A shared reference for creating consistent and recognisable ACKO
              experiences.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Quick start tiles ─────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-20 md:px-12 md:pb-28">
        <div className="mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickStart.map((tile) => (
                <Link
                  key={tile.href}
                  href={tile.href}
                  className="group flex flex-col overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#C0C3CC] hover:shadow-[0_4px_16px_rgba(15,15,20,0.06)]"
                >
                  <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#F5F3FF]">
                    <Image
                      src={tile.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[15px] font-semibold text-[#1F1F23]">
                      {tile.title}
                    </p>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#5C616B]">
                      {tile.desc}
                    </p>
                    <span className="mt-5 inline-flex items-center text-[12px] font-medium text-[#5C616B] transition-colors group-hover:text-[#6841E6]">
                      Explore &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About this site ─────────────────────────────────── */}
      <section className="relative z-10 border-y border-[#ECEDF0] bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <div>
                <h2 className="text-[28px] font-semibold leading-[36px] tracking-tight text-[#1F1F23] md:text-[32px] md:leading-[40px]">
                  One ACKO. One visual language.
                </h2>
              </div>
              <div className="space-y-4 text-[16px] leading-relaxed text-[#1F1F23] md:text-[18px] md:leading-8">
                <p>
                  As ACKO grows across products, services, and channels, visual
                  consistency becomes increasingly important in creating a
                  cohesive customer experience.
                </p>
                <p className="text-[#5C616B]">
                  This initiative strengthens a shared visual language across
                  product and brand touchpoints — so every screen, post, and
                  document feels unmistakably ACKO.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Foundations grid ──────────────────────────────────── */}
      <section className="relative z-10 px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="mb-12 max-w-[640px]">
              <h2 className="text-[28px] font-semibold leading-[36px] tracking-tight text-[#1F1F23] md:text-[32px] md:leading-[40px]">
                The building blocks
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#5C616B] md:text-[18px] md:leading-8">
                Tokens, scales, and rules that every screen and asset inherits.
                Authoritative — implement them in Figma and code in sync.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-[#ECEDF0] sm:grid-cols-2 lg:grid-cols-3">
              {foundations.map((f) => (
                <Link
                  key={f.href + f.title}
                  href={f.href}
                  className="group bg-white p-7 transition-colors duration-200 hover:bg-[#FAFAFB]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#F5F3FF] transition-colors group-hover:bg-[#EAEAFD]">
                    <Image
                      src={ackoIcon(f.icon)}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6"
                      unoptimized
                    />
                  </div>
                  <p className="text-[15px] font-semibold text-[#1F1F23] transition-colors group-hover:text-[#6841E6]">
                    {f.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5C616B]">
                    {f.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-[12px] font-medium text-[#5C616B] opacity-0 transition-opacity group-hover:opacity-100">
                    Open &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What's new ────────────────────────────────────────── */}
      <section className="relative z-10 border-t border-[#ECEDF0] bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-[28px] font-semibold leading-[36px] tracking-tight text-[#1F1F23] md:text-[32px] md:leading-[40px]">
                  What&apos;s new
                </h2>
              </div>
              <Link
                href="/resources/changelog"
                className="hidden text-[13px] font-medium text-[#6841E6] hover:underline sm:inline"
              >
                Full changelog &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {recent.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block rounded-[14px] border border-[#E4E5E9] bg-white p-6 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#C0C3CC] hover:shadow-[0_4px_16px_rgba(15,15,20,0.06)]"
                >
                  <p className="mb-3 inline-block rounded-full bg-[#F5F3FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#582FD2]">
                    {item.label}
                  </p>
                  <p className="text-[15px] font-semibold text-[#1F1F23]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5C616B]">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="relative z-10 px-6 pb-28 pt-20 md:px-12 md:pb-32 md:pt-24">
        <div className="mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="overflow-hidden rounded-[20px] bg-gradient-to-br from-[#241362] via-[#4E29BB] to-[#6841E6] px-8 py-14 text-white md:px-16 md:py-20">
              <div className="max-w-[640px]">
                <h2 className="text-[28px] font-semibold leading-[36px] tracking-tight md:text-[32px] md:leading-[40px]">
                  Start with what ACKO stands for
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-white/80 md:text-[18px] md:leading-8">
                  Four traits — clear, effortless, present, respectful — shape
                  every product, brand, and support decision.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/principles"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-[#241362] transition-transform hover:scale-[0.98]"
                  >
                    Read About ACKO &rarr;
                  </Link>
                  <Link
                    href="/foundations"
                    className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Browse design system
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
