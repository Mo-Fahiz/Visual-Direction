import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/docs/FadeIn";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Patterns",
};

const priorityMolecules = [
  { href: "/patterns/card", title: "Card", desc: "The most common container. Surfaces, padding, and inner radii." },
  { href: "/patterns/dialog", title: "Dialog", desc: "Modal interactions, focus management, and dismissal." },
  { href: "/patterns/dropdown", title: "Dropdown", desc: "Menu, select, and combobox patterns — and when to use each." },
  { href: "/patterns/tabs", title: "Tabs", desc: "Variants, URL-syncing, and keyboard navigation." },
  { href: "/patterns/toast", title: "Toast", desc: "Timing, placement, and the rules of disposable feedback." },
  { href: "/patterns/form-field", title: "Form field", desc: "Label, input, helper, error — the field unit and its validation pattern." },
];

const pagePatterns = [
  { href: "/patterns/pages/onboarding", title: "Onboarding", desc: "Linear stepper with progress indicator and one question per step." },
  { href: "/patterns/pages/checkout", title: "Checkout", desc: "Summary, trust signals, and the always-visible total." },
  { href: "/patterns/pages/policy-detail", title: "Policy detail", desc: "Sidebar + content layout with renew and claim actions." },
  { href: "/patterns/pages/empty-state", title: "Empty state", desc: "Illustration, headline, description, single CTA." },
  { href: "/patterns/pages/error", title: "Error page", desc: "404 and 500 patterns with friendly recovery." },
  { href: "/patterns/pages/settings", title: "Settings", desc: "Grouped sections, toggle preferences, save via toast." },
];

function CardGrid({
  items,
}: {
  items: { href: string; title: string; desc: string }[];
}) {
  return (
    <ul className="not-prose grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="block h-full rounded-[14px] border border-[#E4E5E9] bg-white p-5 transition hover:border-[#D0D3DA] hover:bg-[#FAFAFB]"
          >
            <span className="text-[15px] font-semibold text-[#1F1F23]">
              {item.title}
            </span>
            <span className="mt-1 block text-[13px] leading-relaxed text-[#5C616B]">
              {item.desc}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function PatternsIndexPage() {
  return (
    <article>
      <PageHeader
        title="Patterns"
        description="Components composed together, and the page layouts they assemble into. Each entry below carries anatomy, props, behaviour, and content guidelines."
      />

      <FadeIn>
        <section className="not-prose">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Molecules
          </h2>
          <CardGrid items={priorityMolecules} />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Page patterns
          </h2>
          <CardGrid items={pagePatterns} />
        </section>
      </FadeIn>

      <FadeIn>
        <section className="not-prose mt-16 rounded-[14px] border border-[#E4E5E9] bg-[#F5F3FF] p-8">
          <h2 className="text-[18px] font-semibold tracking-tight text-[#1F1F23]">
            Looking for atoms?
          </h2>
          <p className="mt-2 max-w-[640px] text-[14px] leading-relaxed text-[#5C616B]">
            Buttons, inputs, badges, and other primitives live in the atoms
            inventory.
          </p>
          <Link
            href="/ui-kit"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
          >
            Browse atoms
          </Link>
        </section>
      </FadeIn>
    </article>
  );
}
