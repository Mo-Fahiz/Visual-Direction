import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { DocImage } from "@/components/docs/DocImage";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { Section } from "@/components/docs/Section";
import { assetPath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Brand application",
};

const IMG = (file: string) => assetPath(`/images/Page_brand-application/${file}`);

export default function BrandApplicationPage() {
  return (
    <article className="doc-prose">
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
        id="social"
        title="Social media"
        description="Canvas sizes, safe zones, logo placement, type scale, and CTA treatment for the platforms ACKO ships to."
      >
        <PageTable
          headers={["Platform", "Canvas size", "Safe zone", "Logo position"]}
          colWidths={["28%", "24%", "26%", "22%"]}
          rows={[
            ["Instagram post", "1080×1080", "80px all sides", "Top-left"],
            ["Instagram story", "1080×1920", "80px sides, 200px top/bottom", "Top-left"],
            ["LinkedIn post", "1200×628", "60px all sides", "Top-left"],
            ["Twitter / X post", "1200×675", "60px all sides", "Top-left"],
          ]}
        />
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            Headlines on a 1080×1080 canvas: minimum 24px, ideal 48–72px for
            single-line statements.
          </li>
          <li>CTA pill follows product specs — purple fill, white label.</li>
          <li>
            Always include the ACKO logo. Never crop it into the safe zone.
          </li>
        </ul>
        <DocImage
          src={IMG("social-templates.png")}
          alt="Four social media post templates — Instagram post, Instagram story, LinkedIn, and Twitter — showing ACKO purple, Euclid typography, logo placement top-left, and safe zones marked."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="email"
        title="Email"
        description="Email is read fast and rendered inconsistently. Stick to the template."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Header</strong> — ACKO logo, max-width 600px container,
            centred or left-aligned.
          </li>
          <li>
            <strong>Body type</strong> — Euclid Circular B in web-rendered
            emails. System font stack fallback (Arial, Helvetica) for legacy
            clients.
          </li>
          <li>
            <strong>CTA</strong> — purple pill, 48px height, 200px minimum
            width, centred.
          </li>
          <li>
            <strong>Footer</strong> — legal text, unsubscribe link, IRDAI
            registration.
          </li>
        </ul>
        <DocImage
          src={IMG("email-template.png")}
          alt="A complete email template wireframe annotated with header, body, CTA, and footer zones — including spacing values between sections."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="ooh-print"
        title="OOH and print"
        description="Out-of-home and print have different physics. Plan for distance, viewing time, and CMYK gamut."
      >
        <PageTable
          headers={["Surface", "Minimum type", "Notes"]}
          colWidths={["32%", "22%", "46%"]}
          rows={[
            ["Billboard headline", "48pt+", "Test at viewing distance. One idea per board."],
            ["Billboard body", "18pt+", "Use sparingly — one short line maximum."],
            ["Brochure body", "10pt+", "Use the type scale; never go below 10pt for body."],
            ["Press CMYK purple", "C82 M93 Y0 K0", "Test on the actual stock; ink absorption shifts hue."],
          ]}
        />
        <p>
          Include bleed and trim marks on every print-ready file. Bundle the
          Euclid font licence with the artwork file when handing off to print
          vendors.
        </p>
        <DocImage
          src={IMG("ooh-print.png")}
          alt="A billboard mockup and a brochure mockup showing ACKO branding applied — type sizes, logo placement, and colour treatment."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="slides"
        title="Presentation slides"
        description="One slide template covers internal, customer, and partner decks."
      >
        <PageTable
          headers={["Slide", "Type scale", "Notes"]}
          colWidths={["30%", "22%", "48%"]}
          rows={[
            ["Title slide", "Title 44pt", "Inked surface background. White logo top-left."],
            ["Content slide", "Body 18pt", "Light surface. Logo top-left, page number top-right."],
            ["Section divider", "Display 60pt", "Full-bleed purple. White wordmark or display headline only."],
            ["Closing slide", "Title 44pt", "Inked surface. Wordmark centred."],
          ]}
        />
        <DocImage
          src={IMG("slides.png")}
          alt="A 4-slide preview showing the title slide, content slide, section divider, and closing slide — all in Euclid Circular B."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="do-dont"
        title="Do and don't"
        description="Marketing has more room to breathe, but the same brand rules apply."
      >
        <DoDont
          doItems={[
            "Use Euclid Circular B for all marketing materials — it is the single ACKO typeface.",
            "Keep the purple primary CTA in marketing too — same #6841E6, no green or black.",
            "Apply the same four traits — clear, effortless, present, respectful — to every campaign.",
            "Bundle font licences and brand assets when handing off to agencies.",
          ]}
          dontItems={[
            "Use Gotham, Inter, or any other typeface in body or display roles.",
            "Invent campaign-only colours that aren't in the palette.",
            "Use AI-generated imagery that contradicts the imagery modes.",
            "Skip the logo clear space because it's a small social tile.",
          ]}
        />
        <DocImage
          src={IMG("do-dont.png")}
          alt="Before and after of a social post. Before: a post using Gotham, a green CTA, and an AI car-on-clouds image. After: the same message using Euclid, a purple CTA, and grounded documentary imagery."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="related"
        title="Related"
        description="Marketing inherits from the same foundations."
      >
        <ul>
          <li>
            <Link href="/foundations/logo">Logo</Link> — clear space, sizing,
            file formats.
          </li>
          <li>
            <Link href="/foundations/typography">Typography</Link> — Euclid
            type scale and weights.
          </li>
          <li>
            <Link href="/foundations/imagery">Imagery</Link> — three modes for
            campaign photography.
          </li>
          <li>
            <Link href="/foundations/voice">Voice and tone</Link> — how ACKO
            sounds in campaign copy.
          </li>
        </ul>
      </Section>
    </article>
  );
}
