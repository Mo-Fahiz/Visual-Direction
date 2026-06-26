import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { DocImage } from "@/components/docs/DocImage";
import { FadeIn } from "@/components/docs/FadeIn";
import { Section } from "@/components/docs/Section";
import { IconLibraryGrid } from "./IconLibraryGrid";
import type { IconEntry } from "./IconLibraryGrid";
import { assetPath } from "@/lib/base-path";

const IIMG = (file: string) => assetPath(`/images/Page_iconography/${file}`);

export const metadata: Metadata = {
  title: "Iconography",
};

const ICON_BUCKET = "https://pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev";
const ICON_MANIFEST = `${ICON_BUCKET}/icons.json`;

type IconManifest = {
  icons: IconEntry[];
};

/** Fetch the live manifest from R2. Cached for an hour at build time. */
async function getIconManifest(): Promise<IconManifest> {
  const res = await fetch(ICON_MANIFEST, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch icon manifest: ${res.status}`);
  }
  return res.json();
}

const features = [
  {
    image: assetPath("/images/cards/rounded-stroke.svg"),
    title: "Rounded stroke",
    desc: "Every glyph drawn on a shared 24px grid with a 1.5px stroke and rounded line caps. Friendly, never sharp.",
  },
  {
    image: assetPath("/images/cards/scalability.svg"),
    title: "Scalability",
    desc: "Vector-first. Renders crisp from 16px UI labels to 96px hero illustrations without losing the line weight.",
  },
];

export default async function IconographyPage() {
  const manifest = await getIconManifest();
  const allIcons = manifest.icons;

  return (
    <article>
      <PageHeader
        title="Iconography"
        description="Friendly, rounded stroke icons. One grid, one stroke weight, one set of rules for sizing and pairing."
      />

      {/* ── Feature tiles ───────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white"
            >
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#F5F3FF]">
                <Image
                  src={f.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
              <div className="p-6">
                <h2 className="text-[18px] font-semibold tracking-tight text-[#1F1F23]">
                  {f.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5C616B]">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </section>
      </FadeIn>

      <Section
        id="style"
        title="Style"
        description="Rounded stroke icons on a 24px grid. 1.5px stroke, rounded line caps and joins. Single colour — icons inherit from their context."
      >
        <DocImage src={IIMG("style.png")} alt="Construction diagram of an icon on the 24px artboard: 2px padding, 1.5px stroke, rounded caps. Four example icons shown on the grid with construction lines visible." ratio="4/3" background="none" />
      </Section>

      <Section
        id="sizing"
        title="Sizing"
        description="Icons scale proportionally. Stroke weight stays at 1.5px up to 24px, then bumps to 2px at larger sizes so the line stays visually balanced."
      >
        <PageTable
          headers={["Size", "Stroke", "Context"]}
          colWidths={["18%", "18%", "64%"]}
          rows={[
            ["16px", "1.5px", "Inline with body text, compact lists."],
            ["20px", "1.5px", "Buttons with a label, form fields."],
            ["24px", "1.5px", "Navigation, standalone actions, cards."],
            ["32px", "2px", "Section headers, feature highlights."],
            ["48px", "2px", "Empty states, inline illustrations."],
          ]}
        />
        <DocImage src={IIMG("sizing.png")} alt="The same shield icon shown at all five sizes — 16, 20, 24, 32, 48px — annotated with stroke weight (1.5px or 2px) under each." ratio="4/3" background="none" />
      </Section>

      <Section
        id="pairing"
        title="Icon and label pairing"
        description="Icons paired with text are decorative — the label carries the meaning. Icon-only controls require an aria-label and a minimum 44px touch target regardless of icon size."
      >
        <DocImage src={IIMG("pairing.png")} alt="Three icon pairing patterns: icon+label (correct), icon-only with tooltip (acceptable), icon-only with no label or aria-label (incorrect)." ratio="4/3" background="none" />
      </Section>

      <Section
        id="creating"
        title="Creating new icons"
        description="New icons must match the grid, stroke weight, and cap style. Search the library first — most concepts already exist."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Start from the 24px master artboard with 2px safe-area padding.</li>
          <li>Use a 1.5px stroke with rounded caps and joins.</li>
          <li>Avoid filled shapes unless the entire family is filled (it isn&apos;t).</li>
          <li>Submit new icons through the design system intake — they get reviewed for redundancy and style fit.</li>
        </ul>
        <DocImage src={IIMG("creating.png")} alt="Step-by-step icon creation: artboard → primitive shapes → stroke applied → final glyph, with construction lines visible at each stage." ratio="4/3" background="none" />
      </Section>

      <Section
        id="do-dont"
        title="Do and don't"
        description="Consistency at small sizes is what makes the library feel like a system."
      >
        <DoDont
          doItems={[
            "Use icons from the library — search before creating new ones.",
            "Pair icons with labels for clarity.",
            "Use consistent sizing within a single surface.",
            "Inherit colour from context — purple for active, grey for default.",
          ]}
          dontItems={[
            "Mix filled and outlined icons on the same surface.",
            "Use icons below 16px — they become illegible.",
            "Add colour to icons beyond the inherited context colour (except feedback states).",
            "Use decorative icons that don't add meaning to the surrounding label.",
          ]}
        />
        <DocImage src={IIMG("do-dont.png")} alt="Left: navigation bar with consistent 24px outlined icons. Right: same bar with a mix of filled and outlined icons at different sizes — labelled as incorrect." ratio="4/3" background="none" />
      </Section>

      {/* ── The library (animated cycling grid) ───────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-[20px] font-semibold tracking-tight text-[#1F1F23]">
              The library
            </h2>
            <span className="hidden text-[12px] font-medium uppercase tracking-[0.14em] text-[#5C616B] sm:inline">
              {allIcons.length} icons
            </span>
          </div>
          <IconLibraryGrid icons={allIcons} />
        </section>
      </FadeIn>

      <Section
        id="related"
        title="Related"
        description="Icons sit inside the broader visual language."
      >
        <ul>
          <li>
            <Link href="/foundations/typography">Typography</Link> — pairing
            icons with labels.
          </li>
          <li>
            <Link href="/foundations/color">Colour</Link> — when icons should
            take on a feedback colour.
          </li>
          <li>
            <Link href="/ui-kit">Atoms</Link> — production button and badge
            specs that consume the icon system.
          </li>
        </ul>
      </Section>
    </article>
  );
}
