import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/docs/PageHeader";
import { FadeIn } from "@/components/docs/FadeIn";
import { IconLibraryGrid } from "./IconLibraryGrid";
import type { IconEntry } from "./IconLibraryGrid";
import { assetPath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Icons",
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
        eyebrow="Design system"
        title="Icons"
        description="Friendly, rounded stroke icons with a clear default and a featured treatment when emphasis is needed."
      />

      {/* ── Feature tiles ─────────────────────────────────────────── */}
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

          {/* Client component: 7 rows × 8 cols, bottom fades into page bg,
              cycles every 10 s. */}
          <IconLibraryGrid icons={allIcons} />
        </section>
      </FadeIn>
    </article>
  );
}
