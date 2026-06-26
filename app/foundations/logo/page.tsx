import type { Metadata } from "next";
import Link from "next/link";
import { DocImage } from "@/components/docs/DocImage";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { assetPath } from "@/lib/base-path";
import { VariationsCarousel, type VariationSlide } from "./VariationsCarousel";

export const metadata: Metadata = {
  title: "Logo",
};

const IMG = (file: string) => assetPath(`/images/Page_logo/${file}`);

type DownloadVariant = {
  name: string;
  description: string;
  image: string;
  href: string;
};

const downloads: DownloadVariant[] = [
  {
    name: "Logo Default",
    description: "Full-colour logo for white and light backgrounds.",
    image: "Logo Default.svg",
    href: assetPath("/downloads/logo/acko-logo-light.zip"),
  },
  {
    name: "Logo Invert",
    description: "Reverse-colour logo for black or dark backgrounds.",
    image: "Logo Invert.svg",
    href: assetPath("/downloads/logo/acko-logo-dark.zip"),
  },
  {
    name: "Logo White",
    description: "Full white logo for dark or category-colour backgrounds.",
    image: "Logo White.svg",
    href: assetPath("/downloads/logo/acko-logo-white.zip"),
  },
  {
    name: "Logo Black",
    description: "Offset black logo for single-colour print.",
    image: "Logo Black.svg",
    href: assetPath("/downloads/logo/acko-logo-black.zip"),
  },
  {
    name: "Symbol",
    description:
      "The Möbius symbol alone, in black and white, for small surfaces and favicon use.",
    image: "Symbol.svg",
    href: assetPath("/downloads/logo/acko-symbol.zip"),
  },
];

function DownloadCard({ variant }: { variant: DownloadVariant }) {
  return (
    <div className="flex items-center gap-5 rounded-[14px] border border-[#E4E5E9] bg-white p-4 sm:gap-6 sm:p-5">
      <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">
        <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[#E4E5E9] bg-[#FAFAFB] sm:h-20 sm:w-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMG(variant.image)}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="min-w-0">
          <p className="text-[14px] font-semibold text-[#1F1F23]">{variant.name}</p>
          <p className="mt-1 text-[13px] leading-relaxed text-[#5C616B]">
            {variant.description}
          </p>
        </div>
      </div>
      <a
        href={variant.href}
        download
        className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#E4E5E9] px-4 py-2 text-[13px] font-medium text-[#6841E6] transition hover:border-[#6841E6] hover:bg-[#6841E6] hover:text-white"
      >
        <span>Download</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </a>
    </div>
  );
}

/* ── Combinations data ─────────────────────────────────────────────── */

type Combination = {
  label: string;
  caption: string;
  image: string;
  alt: string;
};

const combinations: Combination[] = [
  {
    label: "Horizontal",
    caption: "Default for most digital and print surfaces.",
    image: "L1.svg",
    alt: "ACKO horizontal logo lockup on a neutral background.",
  },
  {
    label: "Stacked (Vertical)",
    caption: "For square or vertical canvases.",
    image: "L2.svg",
    alt: "ACKO stacked logo lockup on a neutral background.",
  },
  {
    label: "Horizontal with tagline",
    caption: "Ad film end logo, Shark Tank wall.",
    image: "L3.svg",
    alt: "ACKO horizontal logo lockup with tagline on a neutral background.",
  },
  {
    label: "Stacked with tagline",
    caption: "Office building exterior, reception area.",
    image: "L4.svg",
    alt: "ACKO stacked logo lockup with tagline on a neutral background.",
  },
];

/* ── Variations carousel data (L5a–L5d) ────────────────────────────── */

const variations: VariationSlide[] = [
  {
    src: IMG("L5a.svg"),
    name: "Primary",
    description:
      "The default. Full-colour ACKO logo on white or light neutral surfaces.",
    alt: "ACKO primary full-colour logo on a white background.",
  },
  {
    src: IMG("L5b.svg"),
    name: "Secondary",
    description:
      "Reverse-colour logo for black or near-black backgrounds.",
    alt: "ACKO secondary reverse-colour logo on a black background.",
  },
  {
    src: IMG("L5c.svg"),
    name: "White offset",
    description:
      "Full white logo for category colour or any dark colour fill.",
    alt: "ACKO white offset logo on a purple category-colour background.",
  },
  {
    src: IMG("L5d.svg"),
    name: "Black offset",
    description:
      "Offset black logo for single-colour print where colour is unavailable.",
    alt: "ACKO black offset logo on a cream background.",
  },
];

/* ── Incorrect-use data (L13) ──────────────────────────────────────── */

type LogoExample = {
  image: string;
  status: "correct" | "incorrect";
  description: string;
  alt: string;
};

/**
 * Image order is fixed (L13a → L13h). Only the copy under each cell maps
 * to the correct intent per the official brand guideline:
 *  1 don't (same-shade) · 2 tilted · 3 realigned · 4 off-brand colour
 *  5 effect · 6 font change · 7 cropped · 8 don't (squeeze/stretch)
 */
const logoExamples: LogoExample[] = [
  {
    image: "L13a.svg",
    status: "incorrect",
    description:
      "Don't use the logo with the same colour or close shades as the primary logo.",
    alt: "ACKO logo placed on a background that matches its own colour, marked as incorrect.",
  },
  {
    image: "L13b.svg",
    status: "incorrect",
    description: "Don't tilt, rotate, or skew the symbol or the lockup.",
    alt: "ACKO logo with the symbol rotated, marked as incorrect.",
  },
  {
    image: "L13c.svg",
    status: "incorrect",
    description: "Don't realign, shift, or rebuild the logo construct.",
    alt: "ACKO logo with the symbol and wordmark realigned out of position, marked as incorrect.",
  },
  {
    image: "L13d.svg",
    status: "incorrect",
    description: "Don't change the logo colour outside the permissible variations.",
    alt: "ACKO logo recoloured in an off-brand hue, marked as incorrect.",
  },
  {
    image: "L13e.svg",
    status: "incorrect",
    description: "Don't add drop shadows, outlines, gradients, or glows to the logo.",
    alt: "ACKO logo with effects applied, marked as incorrect.",
  },
  {
    image: "L13f.svg",
    status: "incorrect",
    description: "Don't change the font of the wordmark.",
    alt: "ACKO logo with the wordmark in a substituted typeface, marked as incorrect.",
  },
  {
    image: "L13g.svg",
    status: "incorrect",
    description: "Don't crop the logo or any part of it.",
    alt: "ACKO logo with part of it cropped out of frame, marked as incorrect.",
  },
  {
    image: "L13h.svg",
    status: "incorrect",
    description: "Don't squeeze, stretch, or distort the lockup.",
    alt: "ACKO logo squeezed or stretched, marked as incorrect.",
  },
];

/* ── Minimum-size data ─────────────────────────────────────────────── */

type MinSizeItem = {
  image: string;
  label: string;
  description: string;
  alt: string;
};

const minSizeItems: MinSizeItem[] = [
  {
    image: "L10.svg",
    label: "Horizontal",
    description: "150 px digital · 50 mm print",
    alt: "Horizontal ACKO logo shown at its minimum size (150 px digital / 50 mm print).",
  },
  {
    image: "L11.svg",
    label: "Stacked",
    description: "75 px digital · 25 mm print",
    alt: "Stacked ACKO logo shown at its minimum size (75 px digital / 25 mm print).",
  },
  {
    image: "L12.svg",
    label: "Symbol only",
    description: "24 px digital · 8 mm print",
    alt: "ACKO Möbius symbol shown at its minimum size (24 px digital / 8 mm print).",
  },
];

export default function LogoPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Logo"
        description="The ACKO Möbius mark and wordmark. One system, four combinations, four colour variations — applied consistently across every brand surface."
      />

      {/* ── Combinations ──────────────────────────────────────────── */}
      <Section
        id="combinations"
        title="Combinations"
        description="The logo has four canonical lockups. Use without the tagline for most branding materials; reserve the tagline variants for the contexts listed below."
      >
        <div className="not-prose grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {combinations.map((c) => (
            <figure key={c.label} className="flex flex-col gap-2.5">
              <DocImage src={IMG(c.image)} alt={c.alt} ratio="2/1" />
              <figcaption className="text-[14px] font-semibold text-[#1F1F23]">
                {c.label}
              </figcaption>
              <p className="text-[13px] leading-relaxed text-[#5C616B]">
                {c.caption}
              </p>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-[14px] leading-relaxed text-foreground">
          For all other branding materials, the logo is used <strong>without the tagline</strong> to
          maintain consistency and clarity.
        </p>
      </Section>

      {/* ── Variations ────────────────────────────────────────────── */}
      <Section
        id="variations"
        title="Variations"
        description="Two simple rules cover every background. Pick the variation that gives the logo the strongest, cleanest contrast with the surface behind it. Four colour variations cover every background. They apply to all four combinations above."
      >
        <VariationsCarousel slides={variations} duration={3000} />
      </Section>

      {/* ── Measurements (grid system) ────────────────────────────── */}
      <Section
        id="measurements"
        title="Logo measurements"
        description='The letter "A" defines the scaling ratio at 2x in height. Every other proportion follows from this. Miscalculations disrupt the grid and the overall form — the lockup must always be used as-is.'
      >
        <div className="not-prose space-y-10">
          <figure className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6841E6]">
              Horizontal grid
            </p>
            <DocImage
              src={IMG("L6.svg")}
              alt="Horizontal ACKO lockup overlaid with a measurement grid showing the 2x, 3x, 4x, 0.5x and 8x ratios."
              ratio="2/1"
            />
            <ul className="space-y-1 text-[13px] leading-relaxed text-[#5C616B]">
              <li><span className="font-mono text-[#1F1F23]">2x</span> — height of letter A</li>
              <li><span className="font-mono text-[#1F1F23]">3x</span> — symbol height</li>
              <li><span className="font-mono text-[#1F1F23]">4x</span> — wordmark width segment</li>
              <li><span className="font-mono text-[#1F1F23]">0.5x</span> — gap between symbol and wordmark</li>
              <li><span className="font-mono text-[#1F1F23]">8x</span> — full lockup width</li>
            </ul>
          </figure>
          <figure className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6841E6]">
              Vertical grid
            </p>
            <DocImage
              src={IMG("L7.svg")}
              alt="Stacked ACKO lockup overlaid with a measurement grid showing the 2x, 3x, 0.75x, 4x and 6x ratios."
              ratio="2/1"
            />
            <ul className="space-y-1 text-[13px] leading-relaxed text-[#5C616B]">
              <li><span className="font-mono text-[#1F1F23]">2x</span> — height of letter A</li>
              <li><span className="font-mono text-[#1F1F23]">3x</span> — symbol height</li>
              <li><span className="font-mono text-[#1F1F23]">0.75x</span> — gap between symbol and wordmark</li>
              <li><span className="font-mono text-[#1F1F23]">4x</span> — wordmark width</li>
              <li><span className="font-mono text-[#1F1F23]">6x</span> — full lockup height</li>
            </ul>
          </figure>
        </div>
      </Section>

      {/* ── Clear space ───────────────────────────────────────────── */}
      <Section
        id="clear-space"
        title="Clear space"
        description='The height of the letter "K" defines the clear space that must be maintained on every side of the logo. No element, text, or canvas edge may enter this zone.'
      >
        <div className="not-prose space-y-10">
          <figure className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6841E6]">
              Horizontal lockup
            </p>
            <DocImage
              src={IMG("L8.svg")}
              alt="Horizontal ACKO logo with a translucent clear-space zone equal to the height of the letter K on all four sides."
              ratio="2/1"
            />
            <p className="text-[13px] leading-relaxed text-[#5C616B]">
              Clear space on the horizontal lockup matches the height of the letter
              <strong> K</strong> on every side.
            </p>
          </figure>
          <figure className="flex flex-col gap-2.5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6841E6]">
              Stacked lockup
            </p>
            <DocImage
              src={IMG("L9.svg")}
              alt="Stacked ACKO logo with the same K-height clear-space zone applied on all four sides."
              ratio="2/1"
            />
            <p className="text-[13px] leading-relaxed text-[#5C616B]">
              The same K-height rule applies to the stacked lockup — no element or
              edge may enter the zone.
            </p>
          </figure>
        </div>
      </Section>

      {/* ── Minimum size ──────────────────────────────────────────── */}
      <Section
        id="minimum-size"
        title="Minimum size"
        description="Below the minimum, the wordmark stops being legible. Use the symbol alone for surfaces smaller than these thresholds."
      >
        <div className="not-prose grid grid-cols-2 gap-4 md:grid-cols-3">
          {minSizeItems.map((item) => (
            <figure key={item.image} className="flex flex-col gap-2.5">
              <DocImage
                src={IMG(item.image)}
                alt={item.alt}
                ratio="1/1"
                background="white"
              />
              <figcaption className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1F1F23]">
                {item.label}
              </figcaption>
              <p className="text-[12px] leading-relaxed text-[#5C616B]">
                {item.description}
              </p>
            </figure>
          ))}
        </div>
      </Section>

      {/* ── Incorrect use ─────────────────────────────────────────── */}
      <Section
        id="incorrect-use"
        title="Incorrect use"
        description="The logo is a fixed asset. These are the recurring violations that compromise it."
      >
        <div className="not-prose grid grid-cols-2 gap-4 md:grid-cols-4">
          {logoExamples.map((item) => {
            const isCorrect = item.status === "correct";
            return (
              <figure key={item.image} className="flex flex-col gap-2.5">
                <DocImage
                  src={IMG(item.image)}
                  alt={item.alt}
                  ratio="1/1"
                  background="white"
                />
                <figcaption className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {isCorrect ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#16A34A"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-[#16A34A]">Do</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#DC2626"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      <span className="text-[#DC2626]">Don&apos;t</span>
                    </>
                  )}
                </figcaption>
                <p className="text-[12px] leading-relaxed text-[#1F1F23]">
                  {item.description}
                </p>
              </figure>
            );
          })}
        </div>
      </Section>

      {/* ── Download (per-format zips) ────────────────────────────── */}
      <Section
        id="downloads"
        title="Download"
        description="One zip per variation. Each zip contains horizontal and vertical lockups, with and without the tagline."
      >
        <div className="not-prose grid gap-3">
          {downloads.map((d) => (
            <DownloadCard key={d.name} variant={d} />
          ))}
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-muted">
          Looking for a format that isn&apos;t here? See the{" "}
          <Link href="/resources/changelog">changelog</Link> for recent
          additions, or reach the design team.
        </p>
      </Section>
    </article>
  );
}
