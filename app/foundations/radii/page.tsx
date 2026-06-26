import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { DocImage } from "@/components/docs/DocImage";
import { assetPath } from "@/lib/base-path";
import { FadeIn } from "@/components/docs/FadeIn";

export const metadata: Metadata = {
  title: "Border radii",
};

const RADII = [
  { token: "sm",   px: 4,   use: "Nested insets" },
  { token: "md",   px: 6,   use: "Checkboxes (md/lg)" },
  { token: "lg",   px: 8,   use: "Options, table cells" },
  { token: "xl",   px: 10,  use: "Tooltip" },
  { token: "2xl",  px: 12,  use: "Compact panels" },
  { token: "3xl",  px: 16,  use: "Inputs (legacy)" },
  { token: "4xl",  px: 20,  use: "Cards, dialogs, drawers, toasts" },
  { token: "5xl",  px: 24,  use: "Large cards · mobile" },
  { token: "6xl",  px: 32,  use: "Large cards · desktop ≥1024px" },
  { token: "full", px: 9999, use: "Pills, buttons, inputs", display: "round" as const },
];

const INSET = [
  { token: "insetSm", px: 8,  rule: "Inside padding-sm (12px) cards → 20 − 12" },
  { token: "insetMd", px: 4,  rule: "Inside padding-md (16px) cards → 20 − 16" },
  { token: "insetLg", px: 0,  rule: "Inside padding-lg (24px) cards → 20 − 24" },
];

export default function RadiiPage() {
  return (
    <article>
      <PageHeader
        title="Border radii"
        description="One pill, one card radius, three nested-inset sizes. Calm surfaces with intent at the corners."
      />

      {/* ── Specimen grid ────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            The scale
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {RADII.map((r) => (
              <div
                key={r.token}
                className="group flex flex-col items-center gap-4 rounded-[14px] border border-[#E4E5E9] bg-white p-6 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C0C3CC] hover:shadow-[0_4px_16px_rgba(15,15,20,0.06)]"
              >
                <div
                  className="h-20 w-20 bg-[#6841E6] transition-transform duration-300 group-hover:scale-105"
                  style={{
                    borderRadius:
                      r.display === "round" ? "9999px" : `${r.px}px`,
                  }}
                />
                <div className="space-y-1">
                  <code className="font-mono text-[13px] text-[#1F1F23]">
                    radius-{r.token}
                  </code>
                  <p className="font-mono text-[11px] text-[#5C616B]">
                    {r.px === 9999 ? "9999px" : `${r.px}px`}
                  </p>
                  <p className="text-[11px] leading-tight text-[#5C616B]">
                    {r.use}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Nested rule ──────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-2 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Nested radius rule
          </h2>
          <p className="mb-6 max-w-[620px] text-[14px] leading-relaxed text-[#5C616B]">
            When a rectangular element fills the inside of a rounded container,
            the inner radius equals the outer radius minus the padding.
          </p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
            {/* Live demo */}
            <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#E4E5E9] bg-[#FAFAFB] p-12">
              {/* Outer */}
              <div className="relative w-full max-w-[280px] rounded-[20px] bg-white p-4 shadow-[0_2px_16px_4px_rgba(0,0,0,0.04)]">
                {/* Inner — 20 − 16 = 4 */}
                <div className="h-32 w-full rounded-[4px] bg-[#F5F3FF] transition-colors duration-200 hover:bg-[#EAEAFD]" />
              </div>
              <div className="mt-6 space-y-1 text-center">
                <p className="font-mono text-[12px] text-[#5C616B]">
                  outer 20px · padding 16px · inner 4px
                </p>
                <p className="text-[13px] text-[#1F1F23]">
                  Hover the inner block to see the tint shift.
                </p>
              </div>
            </div>

            {/* Formula */}
            <div className="flex flex-col gap-5">
              <div className="rounded-[14px] border border-[#E4E5E9] bg-white p-6">
                <p className="font-mono text-[14px] text-[#1F1F23]">
                  inner radius = outer radius − padding
                </p>
              </div>
              <div className="overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white">
                {INSET.map((row, i) => (
                  <div
                    key={row.token}
                    className={[
                      "flex items-center gap-4 px-5 py-4 transition-colors duration-150 hover:bg-[#FAFAFB]",
                      i !== INSET.length - 1 ? "border-b border-[#ECEDF0]" : "",
                    ].join(" ")}
                  >
                    <div
                      className="h-8 w-8 shrink-0 bg-[#6841E6]"
                      style={{ borderRadius: `${row.px}px` }}
                    />
                    <div className="flex-1">
                      <code className="font-mono text-[13px] text-[#1F1F23]">
                        {row.token}
                      </code>
                      <p className="mt-0.5 text-[12px] text-[#5C616B]">
                        {row.rule}
                      </p>
                    </div>
                    <span className="font-mono text-[12px] text-[#5C616B]">
                      {row.px}px
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Do / Don't ──────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-2 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Do and don&apos;t
          </h2>
          <p className="mb-6 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
            Radii carry intent. Sharp corners feel rigid; mismatched radii feel sloppy.
          </p>
          <DoDont
            doItems={[
              "Use pills (radius-full) for buttons and inputs.",
              "Use 20px (radius-4xl) for cards, dialogs, drawers, and toasts.",
              "Apply the nested-inset rule (inner = outer − padding).",
              "Use 32px (radius-6xl) for large desktop cards (≥ 1024px).",
            ]}
            dontItems={[
              "Use sharp corners on primary actions — they feel rigid and unbranded.",
              "Mix radius values on the same surface (e.g. 4px badge inside a 20px card).",
              "Use a radius larger than half the element height — except pills.",
              "Ignore the nested-inset rule — it's what keeps surfaces feeling resolved.",
            ]}
          />
          <DocImage src={assetPath("/images/Page_radii/nested-radius.png")} alt="A card showing correct nested radius (4px inner inside 20px outer with 16px padding) vs incorrect (20px inner that visually clashes with the outer)." ratio="4/3" background="none" />
        </section>
      </FadeIn>

      {/* ── Exempt note ──────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16 rounded-[14px] border border-[#E4E5E9] bg-[#F5F3FF] p-8">
          <h2 className="text-[18px] font-semibold tracking-tight text-[#1F1F23]">
            Exempt from the nesting rule
          </h2>
          <p className="mt-2 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
            Buttons, badges, and avatars keep their own radius — pill or
            circular by intent, not by inheritance.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/foundations/spacing"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Spacing
            </Link>
            <Link
              href="/foundations/shadows"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Shadows
            </Link>
          </div>
        </section>
      </FadeIn>
    </article>
  );
}
