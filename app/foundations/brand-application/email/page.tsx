import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTable } from "@/components/docs/PageTable";
import { PlaceholderCarousel } from "@/components/docs/PlaceholderCarousel";
import { PlaceholderImage } from "@/components/docs/PlaceholderImage";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";

export const metadata: Metadata = {
  title: "Email & notifications",
};

export default function EmailPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Brand application", href: "/foundations/brand-application" },
          { label: "Email & notifications" },
        ]}
      />
      <PageHeader
        title="Email & notifications"
        description="Email is read fast and rendered inconsistently. Stick to the template. Euclid loads in modern web clients only — plan for the fallback."
      />

      <Section
        id="categories"
        title="Transactional vs marketing"
        description="Two different rule sets. Transactional emails inherit product chrome; marketing emails inherit campaign chrome."
      >
        <PageTable
          headers={["Type", "Examples", "Surface", "CTA style"]}
          colWidths={["20%", "32%", "24%", "24%"]}
          rows={[
            ["Transactional", "Purchase confirmation, claim update, OTP, password reset", "White, product chrome", "Single purple pill"],
            ["Lifecycle", "Renewal nudge, policy expiry, welcome series", "Light surface, soft purple accent", "Single purple pill"],
            ["Marketing", "Campaign launches, new product, blog digest", "Brand-led, can use full-bleed visuals", "Purple pill + secondary text link"],
          ]}
        />
      </Section>

      <Section
        id="header"
        title="Header anatomy"
        description="Same layout across all three email types — the chrome that follows is what differentiates them."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Container</strong> — 600px max width, centred on most
            clients. Mobile collapses to 100%.
          </li>
          <li>
            <strong>Logo</strong> — ACKO mark at 92px wide, top-left, with
            24px padding above.
          </li>
          <li>
            <strong>Preview text</strong> — set the preheader explicitly; 50–90
            characters reads cleanly across inbox previews.
          </li>
        </ul>
        <PlaceholderImage
          label="Email header anatomy — 600px container, ACKO logo at 92px wide top-left, 24px padding above, preheader spec callout to the right."
          size="default"
        />
      </Section>

      <Section
        id="type"
        title="Type & font fallback"
        description="Euclid Circular B renders in iOS Mail, Apple Mail desktop, and most web-based clients. Outlook and Gmail web-app don&apos;t load custom fonts — plan for the fallback."
      >
        <PageTable
          headers={["Role", "Web-rendered", "Fallback stack"]}
          colWidths={["28%", "36%", "36%"]}
          rows={[
            ["Headline", "Euclid Circular B Bold 700", "Arial, Helvetica, sans-serif Bold"],
            ["Subhead", "Euclid Circular B Semibold 600", "Arial, Helvetica, sans-serif Bold"],
            ["Body", "Euclid Circular B Regular 400", "Arial, Helvetica, sans-serif Regular"],
            ["Caption", "Euclid Circular B Regular 400", "Arial, Helvetica, sans-serif Regular"],
          ]}
        />
        <p>
          Use the font stack <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">font-family: &quot;Euclid Circular B&quot;, Arial, Helvetica, sans-serif</code>{" "}
          on every text element. Test on Gmail web (Chrome), Outlook 2019 (Windows), and Apple Mail before shipping.
        </p>
      </Section>

      <Section
        id="cta"
        title="CTA pill specs"
        description="One primary action per email. Match the product button spec exactly."
      >
        <PageTable
          headers={["Property", "Value"]}
          colWidths={["32%", "68%"]}
          rows={[
            ["Background", "#6841E6 (purple-600)"],
            ["Label colour", "#FFFFFF"],
            ["Label size", "16px Semibold"],
            ["Height", "48px"],
            ["Min width", "200px"],
            ["Padding", "12px 24px"],
            ["Border radius", "9999px (pill)"],
            ["Alignment", "Centred in mobile, left-aligned acceptable on desktop"],
          ]}
        />
      </Section>

      <Section
        id="dark-mode"
        title="Dark mode rendering"
        description="Apple Mail, Outlook iOS, and Gmail Android invert colours automatically. Plan for it; don&apos;t fight it."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            Use transparent PNGs for the logo (the dark version is auto-applied).
          </li>
          <li>
            Pin purple-600 with the meta tag{" "}
            <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">color-scheme: light dark</code>{" "}
            to opt into per-client behaviour.
          </li>
          <li>
            Never put white-on-purple text inside a PNG — it inverts to
            purple-on-white in some clients.
          </li>
        </ul>
        <PlaceholderImage
          label="Side-by-side preview — same email rendered in light mode (purple CTA on white) and dark mode (purple CTA on near-black) — showing the inversion behaviour."
        />
      </Section>

      <Section
        id="templates"
        title="Template library"
        description="Auto-cycling through the three canonical email types."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Transactional — purchase confirmation",
              description: "Header with ACKO logo, success illustration, &lsquo;You&rsquo;re covered&rsquo; headline, policy summary card, single purple CTA &lsquo;Download policy&rsquo;, footer with legal.",
            },
            {
              name: "Lifecycle — renewal nudge",
              description: "Header, &lsquo;Your policy renews in 7 days&rsquo; headline, current plan recap, savings reminder, purple CTA &lsquo;Renew now&rsquo;, helpful FAQ links.",
            },
            {
              name: "Marketing — campaign launch",
              description: "Hero image full-width, display headline, three-feature grid with icons, purple CTA, secondary &lsquo;Learn more&rsquo; link, social footer.",
            },
          ]}
        />
      </Section>

      <Section
        id="footer"
        title="Footer pattern"
        description="Every email ends the same way. Compliance lives here."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>ACKO General Insurance Limited · IRDAI Reg. No. 157</li>
          <li>Registered address (placeholder — confirm with legal)</li>
          <li>Unsubscribe link (mandatory for marketing emails)</li>
          <li>Preference centre link (where users update what they receive)</li>
        </ul>
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Specify the font fallback on every text element.",
            "Test on Gmail web, Outlook 2019, Apple Mail before sending.",
            "Include alt text on every image — emails get blocked images often.",
            "Use one primary CTA per email; secondary actions as text links.",
          ]}
          dontItems={[
            "Embed Euclid as a custom font and assume it loads — it won&apos;t in Outlook or Gmail web.",
            "Use background images for critical content — many clients strip them.",
            "Send marketing emails without an unsubscribe link.",
            "Put white-on-purple text inside a PNG (breaks in dark mode).",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Typography", href: "/foundations/typography", meta: "Design system" },
            { title: "CTA hierarchy", href: "/foundations/cta-hierarchy", meta: "Components & patterns" },
            { title: "Voice and tone", href: "/foundations/voice", meta: "Media, content & voice" },
            { title: "Dark mode", href: "/foundations/color/dark-mode", meta: "Design system" },
          ]}
        />
      </Section>
    </>
  );
}
