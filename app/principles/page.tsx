import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/docs/FadeIn";
import { principles } from "@/lib/principles";

export const metadata: Metadata = {
  title: "About ACKO",
};

/* ──────────────────────────────────────────────────────────────────
 * Each trait gets an ACKO icon (from the live R2 bucket — same source
 * as the iconography page). The mapping below uses the real manifest
 * paths so capitalisation and spaces resolve correctly.
 * ─────────────────────────────────────────────────────────────── */
const ICON_BUCKET = "https://pub-5a33ff699b8d4e15a765e8394fbc6d74.r2.dev";

function ackoIcon(path: string): string {
  return (
    ICON_BUCKET +
    path
      .split("/")
      .map((seg, i) => (i === 0 ? seg : encodeURIComponent(seg)))
      .join("/")
  );
}

const principleIcons: Record<string, { src: string; alt: string }> = {
  "clear-over-clever":       { src: ackoIcon("/Outline/magnifier.svg"),   alt: "Magnifier" },
  "effortless-by-default":   { src: ackoIcon("/Outline/bolt.svg"),        alt: "Bolt" },
  "present-when-it-matters": { src: ackoIcon("/Outline/Hand.svg"),        alt: "Hand" },
  "respectful-of-time":      { src: ackoIcon("/Outline/Time.svg"),        alt: "Time" },
};

export default function AboutAckoPage() {
  return (
    <div className="bg-[#FAFAFB]">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="px-6 pb-12 pt-20 md:px-12 md:pb-16 md:pt-32">
        <FadeIn>
          <div className="mx-auto max-w-[1100px]">
            <h1 className="max-w-[900px] text-[36px] font-semibold leading-[44px] tracking-tight text-[#1F1F23] md:text-[52px] md:leading-[60px]">
              What should every ACKO experience feel like?
            </h1>
            <p className="mt-6 max-w-[680px] text-[16px] leading-relaxed text-[#5C616B] md:text-[18px] md:leading-8">
              These are the four traits that should be true of every screen,
              every message, every claim — the working definition of ACKO at its
              best.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── Four trait cards ─────────────────────────────────── */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {principles.map((p) => {
                const icon = principleIcons[p.slug];
                return (
                  <article
                    key={p.slug}
                    className="group flex flex-col rounded-[16px] border border-[#E4E5E9] bg-white p-8 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#C0C3CC] hover:shadow-[0_4px_16px_rgba(15,15,20,0.06)]"
                  >
                    {/* Icon slot — ACKO icon from R2 */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#F5F3FF]">
                      {icon ? (
                        <Image
                          src={icon.src}
                          alt={icon.alt}
                          width={32}
                          height={32}
                          className="h-8 w-8"
                          unoptimized
                        />
                      ) : null}
                    </div>

                    <h2 className="text-[22px] font-semibold leading-[28px] tracking-tight text-[#1F1F23]">
                      {p.title}
                    </h2>

                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5C616B]">
                      {p.definition}
                    </p>

                    <Link
                      href={`/principles/${p.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#E4E5E9] px-4 py-2 text-[13px] font-medium text-[#1F1F23] transition-colors hover:border-[#6841E6] hover:text-[#6841E6]"
                    >
                      Read more
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                        <path
                          d="M2.5 6h7M7 3.5L9.5 6 7 8.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </article>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
