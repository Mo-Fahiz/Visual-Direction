import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { DocImage } from "@/components/docs/DocImage";
import { assetPath } from "@/lib/base-path";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Getting started",
};

type Track = {
  id: string;
  title: string;
  description: string;
  steps: { label: string; detail: string; href?: string }[];
};

const tracks: Track[] = [
  {
    id: "designers",
    title: "For designers",
    description: "Five steps to start designing with the system in Figma.",
    steps: [
      { label: "Install Euclid Circular B", detail: "Pull the font from the brand asset library and install it locally before opening the Figma file." },
      { label: "Connect to the Figma library", detail: "Subscribe to the ACKO Design System library so tokens and components publish updates to your file." },
      { label: "Read About ACKO", detail: "The four traits set the personality every visual decision rolls up to.", href: "/principles" },
      { label: "Browse foundations", detail: "Start with Colour and Typography — they unlock the rest of the system.", href: "/foundations" },
      { label: "Check atoms and molecules", detail: "Component specs include anatomy, variants, props, and content guidelines.", href: "/patterns" },
    ],
  },
  {
    id: "developers",
    title: "For developers",
    description: "Get the token package, then pull components as you need them.",
    steps: [
      { label: "Install the token package", detail: "npm install @acko/tokens — exposes the full token graph as CSS variables and JS exports." },
      { label: "Install components as needed", detail: "Add packages incrementally: npm install @acko/button @acko/card. Tree-shaking keeps bundles small." },
      { label: "Apply the theme", detail: "Set data-theme=\"acko-light\" on your html element. Components consume the theme variable, not raw hex." },
      { label: "Reference the Storybook", detail: "Live examples, prop tables, and visual states.", href: "https://mo-fahiz.github.io/Acko-Design-system/" },
      { label: "Read the patterns", detail: "Page-level patterns show how to compose atoms and molecules into real surfaces.", href: "/patterns" },
    ],
  },
  {
    id: "marketers",
    title: "For marketers and content",
    description: "Use the brand assets and follow the voice and tone rules.",
    steps: [
      { label: "Read About ACKO", detail: "The four personality traits apply equally to product and brand work.", href: "/principles" },
      { label: "Read Brand application", detail: "Social, email, OOH, and presentation specs.", href: "/foundations/brand-application" },
      { label: "Download the logo files", detail: "Per-variation zips for all four colour combinations and the symbol.", href: "/foundations/logo" },
      { label: "Reference voice and tone", detail: "How ACKO sounds in headlines, body copy, and customer comms.", href: "/foundations/voice" },
    ],
  },
];

function TrackCard({ track }: { track: Track }) {
  return (
    <section
      id={track.id}
      className="not-prose rounded-[14px] border border-[#E4E5E9] bg-white p-6 md:p-8"
    >
      <h2 className="text-[20px] font-semibold tracking-tight text-[#1F1F23]">
        {track.title}
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-[#5C616B]">
        {track.description}
      </p>
      <ol className="mt-6 space-y-4">
        {track.steps.map((step, i) => (
          <li key={step.label} className="flex gap-4">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F5F3FF] font-mono text-[12px] font-semibold text-[#6841E6]">
              {i + 1}
            </span>
            <div className="min-w-0">
              {step.href ? (
                <Link
                  href={step.href}
                  className="text-[14px] font-semibold text-[#1F1F23] hover:text-[#6841E6]"
                  target={step.href.startsWith("http") ? "_blank" : undefined}
                  rel={step.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {step.label}
                </Link>
              ) : (
                <p className="text-[14px] font-semibold text-[#1F1F23]">
                  {step.label}
                </p>
              )}
              <p className="mt-1 text-[13px] leading-relaxed text-[#5C616B]">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function GettingStartedPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Getting started"
        description="Three tracks — design, code, brand — to get you working with the system in the next ten minutes."
      />

      <div className="not-prose grid gap-4 md:grid-cols-3">
        {tracks.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className="rounded-[14px] border border-[#E4E5E9] bg-white p-5 transition hover:border-[#6841E6] hover:bg-[#FAFAFB]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6841E6]">
              Track
            </p>
            <p className="mt-2 text-[15px] font-semibold text-[#1F1F23]">
              {t.title}
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-[#5C616B]">
              {t.description}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-12 space-y-4">
        {tracks.map((t) => (
          <TrackCard key={t.id} track={t} />
        ))}
      </div>

      <Section
        id="mental-model"
        title="Mental model"
        description="Everything in the system flows from the four personality traits. Foundations express the traits, components apply the foundations, patterns compose the components, screens ship the patterns."
      >
        <DocImage src={assetPath("/images/Page_getting-started/mental-model.png")} alt="A horizontal flow diagram: About ACKO (four traits) → Foundations → Atoms → Molecules → Page patterns → Shipped screens." ratio="4/3" background="none" />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li><strong>Traits</strong> set the personality.</li>
          <li><strong>Foundations</strong> turn the personality into rules.</li>
          <li><strong>Atoms</strong> apply the rules to single primitives.</li>
          <li><strong>Molecules</strong> compose atoms with behaviour and content.</li>
          <li><strong>Page patterns</strong> assemble molecules into surfaces.</li>
          <li><strong>Screens</strong> are the shipped product.</li>
        </ul>
      </Section>
    </article>
  );
}
