import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Foundations",
};

export default function FoundationsIndexPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Foundations"
        description="Visual and verbal building blocks. Specs here are authoritative; implement them in Figma and code in sync with this site."
        lastUpdated="April 27, 2026"
      />

      <ul className="not-prose space-y-3">
        {[
          { href: "/foundations/color", title: "Color", desc: "Core purple, neutrals, semantic verticals, distribution band." },
          { href: "/foundations/typography", title: "Typography", desc: "Gotham for brand; Euclid Circular B for product." },
          { href: "/foundations/imagery", title: "Imagery", desc: "Three modes and brief discipline for consistency." },
          { href: "/foundations/iconography", title: "Iconography", desc: "Stroke-rounded benchmark and usage." },
          { href: "/foundations/voice", title: "Voice & tone", desc: "How principles read in words." },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-xl border border-border bg-white p-4 shadow-sm transition hover:bg-[#fafafa]"
            >
              <span className="font-semibold text-accent">{item.title}</span>
              <span className="mt-1 block text-sm text-[#333]">{item.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
