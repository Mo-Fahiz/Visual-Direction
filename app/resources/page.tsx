import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Resources",
};

type ResourceLink = {
  title: string;
  href: string;
  description: string;
  meta?: string;
  external?: boolean;
};

function ResourceGroup({
  title,
  description,
  links,
}: {
  title: string;
  description?: string;
  links: ResourceLink[];
}) {
  return (
    <Section id={title.toLowerCase().replace(/\s+/g, "-")} title={title} description={description}>
      <ul className="not-prose grid gap-3 sm:grid-cols-2">
        {links.map((link) => {
          const external = link.external ?? link.href.startsWith("http");
          return (
            <li key={link.href + link.title}>
              <Link
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="block h-full rounded-[14px] border border-[#E4E5E9] bg-white p-5 transition hover:border-[#6841E6] hover:bg-[#FAFAFB]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[15px] font-semibold text-[#1F1F23]">
                    {link.title}
                  </span>
                  {external ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#6841E6"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  ) : null}
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-[#5C616B]">
                  {link.description}
                </p>
                {link.meta ? (
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8F8E92]">
                    {link.meta}
                  </p>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

const designTools: ResourceLink[] = [
  { title: "Figma library", href: "#", description: "Components, tokens, and brand styles. Subscribe to receive updates.", meta: "Figma · v2.0" },
  { title: "Figma token plugin", href: "#", description: "Syncs design tokens between Figma and the @acko/tokens package." },
  { title: "Icon library (Figma)", href: "#", description: "313 rounded-stroke icons published in the design system file." },
];

const development: ResourceLink[] = [
  { title: "Storybook playground", href: "https://mo-fahiz.github.io/Acko-Design-system/", description: "Live component examples, prop tables, visual states.", meta: "External" },
  { title: "Token package", href: "#", description: "npm install @acko/tokens — full token graph as CSS variables and JS exports." },
  { title: "Component packages", href: "#", description: "npm install @acko/button @acko/card — tree-shakeable, install only what you use." },
];

const externalSystems: ResourceLink[] = [
  { title: "Motion system", href: "https://acko-motion-system.vercel.app/", description: "Motion specs and live examples for transitions and microinteractions.", meta: "External" },
  { title: "Content design system", href: "https://appuajt.github.io/acko-content-design-system/", description: "Voice, tone, and content patterns across product and brand.", meta: "External" },
  { title: "Design system playground", href: "https://mo-fahiz.github.io/Acko-Design-system/", description: "Component-level Storybook for the production library.", meta: "External" },
];

const brandAssets: ResourceLink[] = [
  { title: "Logo files", href: "/foundations/logo", description: "SVG, PNG, PDF for all four colour variations and the symbol.", meta: "ZIP downloads" },
  { title: "Presentation template", href: "#", description: "Title, content, divider, and closing slide templates in Euclid." },
  { title: "Social media templates", href: "#", description: "Pre-sized canvases for Instagram, LinkedIn, and Twitter with safe zones marked." },
  { title: "Email template", href: "#", description: "Header, body, CTA, and footer template with Euclid + system font fallback." },
];

export default function ResourcesPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Resources"
        description="Every tool, asset, and external system the design system depends on — in one place."
      />

      <ResourceGroup
        title="Design tools"
        description="Figma libraries, plugins, and the icon set."
        links={designTools}
      />

      <ResourceGroup
        title="Development"
        description="Packages, the Storybook playground, and setup."
        links={development}
      />

      <ResourceGroup
        title="External systems"
        description="Sibling systems maintained outside this site."
        links={externalSystems}
      />

      <ResourceGroup
        title="Brand assets"
        description="Logos, templates, and shipping-ready brand files."
        links={brandAssets}
      />

      <Section id="changelog" title="Changelog">
        <ul className="not-prose grid gap-3 sm:grid-cols-2">
          <li>
            <Link
              href="/resources/changelog"
              className="block h-full rounded-[14px] border border-[#E4E5E9] bg-white p-5 transition hover:border-[#6841E6] hover:bg-[#FAFAFB]"
            >
              <span className="text-[15px] font-semibold text-[#1F1F23]">
                Read the changelog
              </span>
              <p className="mt-1 text-[13px] leading-relaxed text-[#5C616B]">
                Notable updates to the documentation, tokens, and components.
              </p>
            </Link>
          </li>
        </ul>
      </Section>
    </article>
  );
}
