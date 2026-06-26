import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Foundations",
};

const sections = [
  { href: "/foundations/logo", title: "Logo", desc: "Primary lockup, clear space, sizing, variations, file formats." },
  { href: "/foundations/color", title: "Colour", desc: "Primitives, semantic tokens, layering model, theming, contrast." },
  { href: "/foundations/typography", title: "Typography", desc: "Euclid Circular B. Sanctioned pairings and sentence-case rules." },
  { href: "/foundations/layout", title: "Layout and grid", desc: "12-column grid, common layouts, hierarchy, spacing rhythm." },
  { href: "/foundations/spacing", title: "Spacing", desc: "Numeric scale for margins, padding, gaps, sizing." },
  { href: "/foundations/radii", title: "Border radii", desc: "Pills, cards, nested inset rule." },
  { href: "/foundations/shadows", title: "Shadows", desc: "Elevation hierarchy and semantic aliases." },
  { href: "/foundations/cta-hierarchy", title: "CTA hierarchy", desc: "When to use primary, secondary, tertiary, destructive, and link." },
  { href: "/foundations/motion", title: "Motion", desc: "Easing curves, keyframes, and performance rules." },
  { href: "/foundations/imagery", title: "Imagery", desc: "Three modes and brief discipline for consistency." },
  { href: "/foundations/iconography", title: "Iconography", desc: "Stroke-rounded benchmark, sizing, pairing." },
  { href: "/foundations/brand-application", title: "Brand application", desc: "Social, email, OOH, print, and presentations." },
  { href: "/foundations/voice", title: "Voice and Tone", desc: "How ACKO sounds across UI, email, and support." },
  { href: "/ui-kit", title: "Atoms", desc: "Buttons, inputs, badges — primitive components." },
  { href: "/patterns", title: "Molecules", desc: "Composed patterns and recurring layouts." },
];

export default function FoundationsIndexPage() {
  return (
    <article>
      <PageHeader
        title="Design system"
        description="Visual and verbal building blocks. Specs here are authoritative; implement them in Figma and code in sync with this site."
      />

      <ul className="not-prose grid gap-3 sm:grid-cols-2">
        {sections.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block h-full rounded-[14px] border border-[#E4E5E9] bg-white p-5 transition hover:border-[#D0D3DA] hover:bg-[#FAFAFB]"
            >
              <span className="text-[15px] font-semibold text-[#1F1F23]">{item.title}</span>
              <span className="mt-1 block text-[13px] leading-relaxed text-[#5C616B]">{item.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
