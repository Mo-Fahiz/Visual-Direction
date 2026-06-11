import type { Metadata } from "next";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Voice and Tone",
};

const pillars = [
  {
    title: "Plain",
    desc: "We use everyday words. If insurance jargon shows up, we explain it on the same screen.",
  },
  {
    title: "Respectful",
    desc: "We never blame, rush, or shame. Errors and rejections include a reason and a path forward.",
  },
  {
    title: "Present",
    desc: "We don&rsquo;t disappear after the sale. Lifecycle moments — claims, renewals, emergencies — get dedicated copy.",
  },
];

const toneMoments = [
  { moment: "Browsing", tone: "Cool, factual" },
  { moment: "Comparing", tone: "Neutral, scannable" },
  { moment: "Purchasing", tone: "Confident, clear" },
  { moment: "Post-purchase", tone: "Helpful, grounded" },
  { moment: "Filing a claim", tone: "Empathetic, factual" },
  { moment: "Emergency", tone: "Calm, direct, human" },
];

export default function VoicePage() {
  return (
    <>
      {/* ── Summary preview ─────────────────────────────────── */}
      <Section
        id="north-star"
        title="North star"
        description="The single sentence that governs all ACKO copy."
      >
        <blockquote className="rounded-[12px] border border-[#E4E5E9] bg-white p-6 text-[18px] font-medium leading-relaxed text-[#1F1F23]">
          Plain, respectful, and present. We explain trade-offs clearly, avoid
          hustle language, and never disappear after the sale.
        </blockquote>
      </Section>

      <Section
        id="three-pillars"
        title="Three pillars"
        description="The shape of every ACKO sentence."
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[12px] border border-[#E4E5E9] bg-white p-5"
            >
              <p className="text-[15px] font-semibold text-[#1F1F23]">
                {pillar.title}
              </p>
              <p
                className="mt-2 text-[13px] leading-relaxed text-[#5C616B]"
                dangerouslySetInnerHTML={{ __html: pillar.desc }}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="tone-snapshot"
        title="Tone snapshot"
        description="Tone shifts naturally based on where the customer is in their journey. The full table, with examples for every moment, lives on the dedicated content design site."
      >
        <div className="overflow-hidden rounded-[12px] border border-[#E4E5E9] bg-white">
          {toneMoments.map((row, idx) => (
            <div
              key={row.moment}
              className={`flex items-center justify-between px-5 py-3 text-[14px] ${
                idx < toneMoments.length - 1 ? "border-b border-[#ECEDF0]" : ""
              }`}
            >
              <span className="font-medium text-[#1F1F23]">{row.moment}</span>
              <span className="text-[#5C616B]">{row.tone}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="what-lives-elsewhere"
        title="What lives on the full content design site"
        description="The ACKO Content Design System is the authoritative source for vocabulary, error patterns, CTA hierarchy, before-and-after rewrites, and Indian English conventions."
      >
        <ul className="list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-[#1F1F23]">
          <li>Insurance vocabulary &mdash; preferred terms and explanations.</li>
          <li>Error message framework &mdash; templates and six common types.</li>
          <li>CTA hierarchy &mdash; primary, secondary, tertiary, destructive.</li>
          <li>Indian English conventions &mdash; lakh/crore, dates, bilingual rules.</li>
          <li>Before-and-after rewrites &mdash; real product copy reworked.</li>
        </ul>
      </Section>

      {/* ── Read more CTA ───────────────────────────────────── */}
      <div className="mt-12 rounded-[16px] border border-[#E4E5E9] bg-white p-8 md:p-10">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6841E6]">
          External resource
        </p>
        <h3 className="mt-2 text-[22px] font-semibold leading-[28px] tracking-tight text-[#1F1F23]">
          ACKO Content Design System
        </h3>
        <p className="mt-3 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
          Full vocabulary, voice rules, tone calibration, error patterns, and
          rewriting examples live on the dedicated content design site.
        </p>
        <a
          href="https://appuajt.github.io/acko-content-design-system/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-[#6841E6] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#582FD2]"
        >
          Read more
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path
              d="M4 2h6v6M10 2L4 8M4 4v6h6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
