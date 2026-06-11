import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { FadeIn } from "@/components/docs/FadeIn";

export const metadata: Metadata = {
  title: "Spacing",
};

/* ── Data ─────────────────────────────────────────────────────────── */

const SPACING_STEPS = [
  { px: 4,  label: "Micro gap" },
  { px: 8,  label: "Icon padding" },
  { px: 12, label: "Form field gap" },
  { px: 16, label: "Standard" },
  { px: 20, label: "Card padding md" },
  { px: 24, label: "Card padding lg" },
  { px: 32, label: "Group spacing" },
  { px: 40, label: "Block break" },
  { px: 48, label: "Section gap" },
  { px: 64, label: "Page section" },
  { px: 80, label: "Hero spacing" },
  { px: 96, label: "Large break" },
];

const COMPONENT_HEIGHTS = [
  { px: 32, label: "Button xs" },
  { px: 40, label: "Button sm · Text input sm" },
  { px: 44, label: "Min tap target" },
  { px: 48, label: "Button md · Text input md" },
  { px: 56, label: "Button lg · Text input lg" },
  { px: 64, label: "Button xl" },
];

const INTERS = [
  { between: "Label and input",          util: "gap-8" },
  { between: "Input and helper text",    util: "gap-8" },
  { between: "Form fields",              util: "gap-20" },
  { between: "Section heading and body", util: "gap-32" },
  { between: "Cards (mobile)",           util: "gap-16" },
  { between: "Cards (desktop)",          util: "gap-24" },
  { between: "Buttons in a group",       util: "gap-12" },
  { between: "Icon and adjacent text",   util: "gap-8" },
];

/* ── Page ─────────────────────────────────────────────────────────── */

export default function SpacingPage() {
  return (
    <article>
      <PageHeader
        title="Spacing"
        description="A 1px-base scale where the utility number is the pixel value. gap-16 = 16px, p-24 = 24px, h-48 = 48px. No math, no indirection."
      />

      {/* ── Visual scale ─────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            The scale
          </h2>
          <div className="overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white">
            {SPACING_STEPS.map((step, i) => (
              <div
                key={step.px}
                className={[
                  "group flex items-center gap-6 px-6 py-4 transition-colors duration-150 hover:bg-[#FAFAFB]",
                  i !== SPACING_STEPS.length - 1 ? "border-b border-[#ECEDF0]" : "",
                ].join(" ")}
              >
                <code className="w-[80px] shrink-0 font-mono text-[13px] text-[#1F1F23]">
                  gap-{step.px}
                </code>
                <span className="w-[60px] shrink-0 text-[12px] font-medium tabular-nums text-[#5C616B]">
                  {step.px}px
                </span>
                <div className="relative flex-1">
                  <div
                    className="h-2 rounded-full bg-[#6841E6] transition-all duration-200 group-hover:bg-[#582FD2]"
                    style={{ width: `${step.px * 2}px`, maxWidth: "100%" }}
                  />
                </div>
                <span className="w-[180px] shrink-0 text-right text-[12px] text-[#5C616B]">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Component heights ────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-2 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Component heights
          </h2>
          <p className="mb-6 text-[14px] leading-relaxed text-[#5C616B]">
            Fixed heights for interactive components. Match these — never
            improvise.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {COMPONENT_HEIGHTS.map((c) => (
              <div
                key={c.px}
                className="group flex flex-col items-start gap-4 rounded-[14px] border border-[#E4E5E9] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C0C3CC] hover:shadow-[0_4px_16px_rgba(15,15,20,0.06)]"
              >
                <div
                  className="w-full rounded-full bg-[#F5F3FF] transition-colors group-hover:bg-[#EAEAFD]"
                  style={{ height: `${c.px}px` }}
                />
                <div>
                  <code className="font-mono text-[13px] text-[#1F1F23]">
                    h-{c.px}
                  </code>
                  <p className="mt-1 text-[12px] text-[#5C616B]">{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Inter-component spacing ──────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Inter-component spacing
          </h2>
          <div className="overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white">
            <table className="w-full">
              <thead className="bg-[#FAFAFB]">
                <tr>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Between
                  </th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Utility
                  </th>
                </tr>
              </thead>
              <tbody>
                {INTERS.map((row, i) => (
                  <tr
                    key={row.between}
                    className={[
                      "transition-colors duration-150 hover:bg-[#FAFAFB]",
                      i !== INTERS.length - 1 ? "border-t border-[#ECEDF0]" : "border-t border-[#ECEDF0]",
                    ].join(" ")}
                  >
                    <td className="px-6 py-3.5 text-[14px] text-[#1F1F23]">
                      {row.between}
                    </td>
                    <td className="px-6 py-3.5 font-mono text-[13px] text-[#5C616B]">
                      {row.util}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeIn>

      {/* ── Related ──────────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16 rounded-[14px] border border-[#E4E5E9] bg-[#F5F3FF] p-8">
          <h2 className="text-[18px] font-semibold tracking-tight text-[#1F1F23]">
            Related foundations
          </h2>
          <p className="mt-2 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
            Spacing rarely travels alone — pair with border radii and shadows for surface treatment.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/foundations/radii"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Border radii
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
