import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { PageHeader } from "@/components/docs/PageHeader";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Brand application",
};

export default function BrandApplicationOverview() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Brand application" },
          { label: "Overview" },
        ]}
      />
      <PageHeader
        title="Brand application"
        description="How the foundations extend beyond product — into social, email, OOH, print, and presentations. Same system, different volume."
      />

      <Section
        id="extension"
        title="How the system extends to marketing"
        description="The same foundations apply everywhere — colour, typography, personality, voice. The volume changes, not the language. Marketing can be louder (more purple, larger type, bolder imagery) while staying inside the system."
      >
        <p>
          Product surfaces stay focused: tight type, restrained colour, and
          functional motion. Brand surfaces flex the same tokens with more
          confidence — same Euclid Circular B, same purple{" "}
          <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">
            #6841E6
          </code>
          , same four traits. The personality never changes; only how much
          oxygen each piece gets.
        </p>
      </Section>

      <Section
        id="surfaces"
        title="Surfaces covered"
        description="Each surface has its own page with platform specs, templates, and do-and-don&apos;t guidance."
      >
        <ResourceCards
          resources={[
            { title: "Social media", href: "/foundations/brand-application/social-media", meta: "Platforms · safe zones · tone" },
            { title: "Email & notifications", href: "/foundations/brand-application/email", meta: "Headers · CTAs · fallbacks" },
            { title: "Print & OOH", href: "/foundations/brand-application/print-ooh", meta: "CMYK · bleed · billboards" },
            { title: "Presentations", href: "/foundations/brand-application/presentations", meta: "Slide templates · type scale" },
          ]}
        />
      </Section>

      <Section
        id="related"
        title="Related foundations"
        description="Brand application inherits from the same foundations."
      >
        <ResourceCards
          resources={[
            { title: "Logo usage", href: "/foundations/logo", meta: "Brand identity" },
            { title: "Typography", href: "/foundations/typography", meta: "Design system" },
            { title: "Imagery", href: "/foundations/imagery", meta: "Media, content & voice" },
            { title: "Voice and tone", href: "/foundations/voice", meta: "Media, content & voice" },
          ]}
        />
      </Section>
    </>
  );
}
