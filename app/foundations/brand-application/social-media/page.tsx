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
  title: "Social media",
};

export default function SocialMediaPage() {
  return (
    <>
      <Breadcrumbs
        trail={[
          { label: "Brand application", href: "/foundations/brand-application" },
          { label: "Social media" },
        ]}
      />
      <PageHeader
        title="Social media"
        description="Platform-specific canvas sizes, safe zones, type rules, and tone calibration for the channels ACKO ships to."
      />

      <Section
        id="platforms"
        title="Platform specifications"
        description="One row per surface. Headlines must clear minimum sizes at native canvas resolution."
      >
        <PageTable
          headers={["Platform", "Canvas", "Safe zone", "Logo position", "Headline min"]}
          colWidths={["20%", "16%", "22%", "20%", "22%"]}
          rows={[
            ["Instagram post", "1080×1080", "80px all sides", "Top-left", "24px"],
            ["Instagram story", "1080×1920", "80px sides, 200px top/bottom", "Top-left", "32px"],
            ["Instagram reel cover", "1080×1920", "120px top, 250px bottom", "Top-left", "32px"],
            ["LinkedIn post", "1200×628", "60px all sides", "Top-left", "20px"],
            ["LinkedIn carousel", "1080×1080", "80px all sides", "Top-left", "24px"],
            ["X / Twitter post", "1200×675", "60px all sides", "Top-left", "20px"],
            ["YouTube thumbnail", "1280×720", "120px all sides", "Bottom-right", "60px"],
          ]}
        />
      </Section>

      <Section
        id="tone-by-platform"
        title="Tone calibration by platform"
        description="The voice is one voice. The volume changes by where it lands."
      >
        <PageTable
          headers={["Platform", "Tone bias", "Caption length", "Hashtags"]}
          colWidths={["22%", "30%", "22%", "26%"]}
          rows={[
            ["Instagram (feed)", "Visual-first, breezy, emoji-friendly", "70–125 chars", "3–5, vertical-relevant"],
            ["Instagram (story)", "Reactive, in-the-moment", "Sticker-led, minimal", "0–2"],
            ["LinkedIn", "Authoritative, business-context, no emoji", "200–400 chars", "0–3, formal"],
            ["X / Twitter", "Concise, single-idea, occasional emoji", "≤180 chars", "0–2"],
            ["YouTube", "Long-form, narrative, descriptive", "120 chars hook + chapters", "5–10, SEO-aligned"],
          ]}
        />
      </Section>

      <Section
        id="templates"
        title="Template library"
        description="Auto-cycling through the most common post types across all verticals. Hover to pause."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Instagram square — Car insurance launch",
              description: "Bold purple background, white display headline (&lsquo;Renew in 2 minutes&rsquo;), product mockup bottom-right, CTA pill below.",
            },
            {
              name: "Instagram story — Health awareness",
              description: "Vertical canvas with full-bleed photography (warm documentary mode), gradient overlay bottom third, headline + sticker CTA.",
            },
            {
              name: "Instagram reel cover — Travel campaign",
              description: "Travel scene photography with teal accent overlay, episode title in display weight, play affordance bottom-left.",
            },
            {
              name: "LinkedIn carousel — quarterly results",
              description: "10-slide deck. Cover with display headline, 8 data slides with charts and key numbers, closing slide with CTA.",
            },
            {
              name: "X / Twitter — single insight",
              description: "Wide canvas, headline left, supporting visual right (illustration or photo), ACKO logo top-left.",
            },
            {
              name: "YouTube thumbnail — explainer",
              description: "Tight head-and-shoulders portrait of presenter on purple background, large title overlay (60px+), ACKO mark bottom-right.",
            },
          ]}
        />
      </Section>

      <Section
        id="caption-guidance"
        title="Caption guidance"
        description="The caption does the heavy lifting on social — write it like body copy, not headline copy."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Lead with the value.</strong> What does the reader get if
            they keep reading?
          </li>
          <li>
            <strong>Sentence case.</strong> Never ALL CAPS for emphasis. Use
            line breaks instead of walls of text.
          </li>
          <li>
            <strong>Caption length:</strong> aim for under 125 characters on
            Instagram (before the &lsquo;more&rsquo; cut), under 280 on X,
            200–400 on LinkedIn.
          </li>
          <li>
            <strong>Hashtags:</strong> stay relevant to the vertical. #ACKO
            always included.
          </li>
        </ul>
      </Section>

      <Section
        id="vertical-notes"
        title="Notes by vertical"
        description="Each vertical has its own social voice within the master tone."
      >
        <PageTable
          headers={["Vertical", "Social voice", "Visual accent", "Caption style"]}
          colWidths={["18%", "30%", "22%", "30%"]}
          rows={[
            ["Auto", "Breezy, speed-led, contractions OK", "Sunshade yellow", "Emoji OK, short sentences"],
            ["Health", "Authoritative, empathetic, partner-name-led", "Vivid cerise", "Plain language, no emoji on serious topics"],
            ["Life", "Emotive, family-centric, slower pace", "Picton blue", "Longer-form, warm phrasing"],
            ["Travel", "Adventurous, GST-savings-led, vivid", "Leafy green", "Punchy, often number-led"],
          ]}
        />
        <PlaceholderImage label="Four side-by-side mock posts — one per vertical — showing how the master purple system flexes with each accent colour." />
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Always include the ACKO logo inside the safe zone — top-left default, bottom-right for video covers.",
            "Use platform-native aspect ratios — don&apos;t letterbox or stretch.",
            "Keep one primary message per post; carousels for multi-point stories.",
            "Test legibility at phone size before publishing.",
          ]}
          dontItems={[
            "Crop the logo into the safe zone or over critical type.",
            "Mix two vertical accents on the same post (yellow + cerise, etc.).",
            "Use AI-generated imagery that contradicts the imagery modes.",
            "Use Gotham, Inter, or any non-Euclid typeface.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Imagery", href: "/foundations/imagery", meta: "Media, content & voice" },
            { title: "Voice and tone", href: "/foundations/voice", meta: "Media, content & voice" },
            { title: "Typography", href: "/foundations/typography", meta: "Design system" },
            { title: "Logo usage", href: "/foundations/logo", meta: "Brand identity" },
          ]}
        />
      </Section>
    </>
  );
}
