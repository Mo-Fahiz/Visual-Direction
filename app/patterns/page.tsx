import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { FadeIn } from "@/components/docs/FadeIn";
import { molecules } from "@/lib/acko-tokens";

export const metadata: Metadata = {
  title: "Molecules",
};

export default function MoleculesPage() {
  return (
    <article>
      <PageHeader
        eyebrow="Design system"
        title="Molecules"
        description="Composed components built on the atoms. Every entry below maps to a published package in the live ACKO design system."
      />

      {/* ── About this page ─────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mb-12 rounded-[14px] border border-[#E4E5E9] bg-white p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6841E6]">
            Source of truth
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-[#1F1F23]">
            Specs, props, and visual states live in the live{" "}
            <a
              href="https://mo-fahiz.github.io/Acko-Design-system/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#6841E6] hover:underline"
            >
              ACKO Design System
            </a>
            . The list below mirrors the{" "}
            <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">
              /packages
            </code>{" "}
            tree in the repo — when a new molecule ships, add it here too.
          </p>
        </section>
      </FadeIn>

      {/* ── Molecule inventory ──────────────────────────────── */}
      <FadeIn>
        <section className="not-prose">
          <div className="mb-6">
            <h2 className="text-[20px] font-semibold tracking-tight text-[#1F1F23]">
              The library
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[#5C616B]">
              {molecules.length} molecules currently published.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-[#ECEDF0] sm:grid-cols-2 lg:grid-cols-3">
            {molecules.map((m) => (
              <article
                key={m.pkg}
                className="bg-white p-5 transition-colors duration-200 hover:bg-[#FAFAFB]"
              >
                <p className="text-[15px] font-semibold text-[#1F1F23]">
                  {m.name}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5C616B]">
                  {m.desc}
                </p>
                <p className="mt-3 font-mono text-[11px] text-[#8F8E92]">
                  {m.pkg}
                </p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Cross-link ──────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16 rounded-[14px] border border-[#E4E5E9] bg-[#F5F3FF] p-8">
          <h2 className="text-[18px] font-semibold tracking-tight text-[#1F1F23]">
            Looking for atoms?
          </h2>
          <p className="mt-2 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
            Atoms are the primitive components — Button, Input, Badge, Avatar,
            and friends. They&apos;re documented separately.
          </p>
          <a
            href="/ui-kit"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
          >
            Browse atoms
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path
                d="M2.5 6h7M7 3.5L9.5 6 7 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>
      </FadeIn>
    </article>
  );
}
