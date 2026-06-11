import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/docs/FadeIn";

export const metadata: Metadata = {
  title: "Typography · Overview",
};

/* ── Data ─────────────────────────────────────────────────────────── */

const HERO_SAMPLE = "Plain language, written like you mean it.";

const SEMANTIC_SPECIMENS = [
  { name: "Display XL", token: "displayXl", size: 72, line: 80, weight: 600, sample: "Display extra-large" },
  { name: "Display LG", token: "displayLg", size: 60, line: 72, weight: 300, sample: "Display large" },
  { name: "Display MD", token: "displayMd", size: 48, line: 56, weight: 400, sample: "Display medium" },
  { name: "Heading 1",  token: "heading1",  size: 30, line: 36, weight: 700, sample: "Heading one" },
  { name: "Heading 3",  token: "heading3",  size: 20, line: 28, weight: 600, sample: "Heading three" },
  { name: "Body MD",    token: "bodyMd",    size: 16, line: 24, weight: 400, sample: "Body medium — the default for paragraphs and most UI copy." },
  { name: "Label MD",   token: "labelMd",   size: 12, line: 16, weight: 600, sample: "LABEL MEDIUM" },
];

const WEIGHTS = [
  { num: 300, label: "Light"    },
  { num: 400, label: "Regular"  },
  { num: 500, label: "Medium"   },
  { num: 600, label: "Semibold" },
  { num: 700, label: "Bold"     },
];

/* ── Page ─────────────────────────────────────────────────────────── */

export default function TypographyOverviewPage() {
  return (
    <>
      {/* ── Hero specimen ────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-8 overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-gradient-to-br from-[#F5F3FF] via-white to-white p-10 md:p-14">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#6841E6]">
            Euclid Circular B
          </p>
          <p
            className="text-[#1F1F23]"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              fontWeight: 600,
            }}
          >
            {HERO_SAMPLE}
          </p>
          <p className="mt-6 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
            One typeface across product, brand, and support. Five weights, fifteen
            sizes, twelve semantic aliases. Use the alias first; fall back to the
            ramp; never invent a one-off size.
          </p>
        </section>
      </FadeIn>

      {/* ── Weight specimens ─────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Five weights
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {WEIGHTS.map((w) => (
              <div
                key={w.num}
                className="group flex flex-col items-start gap-4 rounded-[14px] border border-[#E4E5E9] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C0C3CC] hover:shadow-[0_4px_16px_rgba(15,15,20,0.06)]"
              >
                <p
                  className="text-[40px] leading-none text-[#1F1F23] transition-colors group-hover:text-[#6841E6]"
                  style={{ fontWeight: w.num }}
                >
                  Aa
                </p>
                <div>
                  <p className="text-[13px] font-medium text-[#1F1F23]">
                    {w.label}
                  </p>
                  <code className="font-mono text-[11px] text-[#5C616B]">
                    {w.num}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Semantic role specimens ──────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <div className="mb-6">
            <h2 className="text-[20px] font-semibold tracking-tight text-[#1F1F23]">
              Semantic styles
            </h2>
            <p className="mt-2 max-w-[620px] text-[14px] leading-relaxed text-[#5C616B]">
              Components consume these — not the raw ramp. Each style is a
              fixed combination of size, line-height, and weight.
            </p>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white">
            {SEMANTIC_SPECIMENS.map((s, i) => (
              <div
                key={s.token}
                className={[
                  "group grid grid-cols-[160px_1fr] items-center gap-8 px-6 py-6 transition-colors duration-150 hover:bg-[#FAFAFB]",
                  i !== SEMANTIC_SPECIMENS.length - 1 ? "border-b border-[#ECEDF0]" : "",
                ].join(" ")}
              >
                {/* Meta column */}
                <div>
                  <p className="text-[13px] font-semibold text-[#1F1F23]">
                    {s.name}
                  </p>
                  <code className="font-mono text-[11px] text-[#5C616B]">
                    {s.token}
                  </code>
                  <p className="mt-1 font-mono text-[11px] text-[#8F8E92]">
                    {s.size}/{s.line} · {s.weight}
                  </p>
                </div>

                {/* Live specimen */}
                <p
                  className="truncate text-[#1F1F23] transition-colors group-hover:text-[#1F1F23]"
                  style={{
                    fontSize: `${s.size}px`,
                    lineHeight: `${s.line}px`,
                    fontWeight: s.weight,
                    letterSpacing: s.size >= 30 ? "-0.02em" : "0",
                  }}
                >
                  {s.sample}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Tab links ───────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16 rounded-[14px] border border-[#E4E5E9] bg-[#F5F3FF] p-8">
          <h2 className="text-[18px] font-semibold tracking-tight text-[#1F1F23]">
            Go deeper
          </h2>
          <p className="mt-2 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
            Live size ramp, sanctioned pairings, code snippets, and the rules of
            sentence case live in the sub-tabs above.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/foundations/typography/types"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Types
            </Link>
            <Link
              href="/foundations/typography/usage"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Usage
            </Link>
            <Link
              href="/foundations/typography/code"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Code
            </Link>
          </div>
        </section>
      </FadeIn>
    </>
  );
}
