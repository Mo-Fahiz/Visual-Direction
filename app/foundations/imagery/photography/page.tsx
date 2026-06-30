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
  title: "Photography direction",
};

export default function PhotographyDirectionPage() {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[
          { label: "Media, content & voice" },
          { label: "Imagery", href: "/foundations/imagery" },
          { label: "Photography direction" },
        ]}
      />
      <PageHeader
        title="Photography direction"
        description="The direction behind ACKO photography — casting, wardrobe, set, sensitivity. The imagery modes tell you what to capture; this tells you how to capture it."
      />

      <Section
        id="casting"
        title="Casting"
        description="ACKO photography is set in modern India. Casting reflects that — across age, region, religion, body type, and family composition. We hire models the customer actually looks like."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Age range:</strong> 25–65 for adults; children always
            present with a parent or guardian.
          </li>
          <li>
            <strong>Regional spread:</strong> cast across South, North, East,
            and West India over a campaign — not all from one region.
          </li>
          <li>
            <strong>Body type:</strong> realistic. Avoid only-thin or
            only-fit casting.
          </li>
          <li>
            <strong>Family composition:</strong> nuclear, joint, single-parent,
            and inter-generational. Avoid stereotyping any one structure.
          </li>
          <li>
            <strong>Inclusion:</strong> visible representation of disability,
            same-sex partners, single adults — without making it the subject of
            the shot.
          </li>
        </ul>
        <PlaceholderImage
          label="Casting reference grid — 8 portrait photos showing the range: different ages, regions, body types, family configurations. Same warm documentary grading across all."
          size="tall"
        />
      </Section>

      <Section
        id="wardrobe"
        title="Wardrobe & styling"
        description="Wardrobe is real — what people would actually wear, not what a stylist thinks is photogenic."
      >
        <PageTable
          headers={["Context", "Wardrobe direction", "Avoid"]}
          colWidths={["28%", "40%", "32%"]}
          rows={[
            ["Home / family", "Everyday clothes — cotton, linen, t-shirts, salwars", "Pressed shirts, branded logos, costume saris"],
            ["Healthcare", "Hospital staff in real scrubs, patients in regular clothes", "Glossy doctor coats, props"],
            ["Work / commute", "Real office wear — business casual, salwar suit, sari", "Polished suit-and-tie cliché"],
            ["Travel", "Practical travel wear — jeans, kurta, layers", "Resort wear, posed luxury"],
          ]}
        />
      </Section>

      <Section
        id="set"
        title="Set direction"
        description="Locations are real or set-dressed to feel real. Studios are for product shots, not lifestyle."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Interiors:</strong> lived-in homes, real hospitals where
            permission is granted, real offices. Studio sets only when the
            shot needs perfect control.
          </li>
          <li>
            <strong>Lighting:</strong> available light first; bounce or fill
            second; never the only-source artificial look.
          </li>
          <li>
            <strong>Props:</strong> existing items in the space. Don&apos;t
            place a kettle on a desk to add &lsquo;life&rsquo;.
          </li>
          <li>
            <strong>Background:</strong> in focus enough to feel real,
            not so sharp it competes with the subject.
          </li>
        </ul>
      </Section>

      <Section
        id="sensitivity"
        title="Sensitivity in claim contexts"
        description="Insurance imagery often touches loss, illness, or accident. The rule is to dignify the moment, not dramatise it."
      >
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>
            <strong>Accidents:</strong> never show the moment of impact, blood,
            or panic. Show the aftermath in resolution — a person on the
            phone, a quiet conversation.
          </li>
          <li>
            <strong>Hospital:</strong> never show visible procedures, needles,
            tubes near the face. Frame from a respectful distance.
          </li>
          <li>
            <strong>Grief:</strong> never stage grief. Use absence — an empty
            chair, a quiet room — rather than a posed tear.
          </li>
          <li>
            <strong>Children:</strong> never the subject of a claim or illness
            shot. Include only in positive, family-context imagery.
          </li>
        </ul>
        <PlaceholderImage label="Sensitivity reference grid — examples of dignified post-event imagery (a person on the phone in resolution, a quiet hospital corridor at distance) vs incorrect dramatised versions." />
      </Section>

      <Section
        id="references"
        title="Mood references"
        description="Auto-cycling through reference frames for each imagery mode and context."
      >
        <PlaceholderCarousel
          slides={[
            {
              name: "Documentary warm — family review",
              description: "A family at a kitchen table reviewing policy documents on a phone. Available light, warm grading, off-centre composition.",
            },
            {
              name: "Editorial bright — Auto launch",
              description: "Vehicle hero shot at golden hour, clean background, saturated but not garish, ACKO purple supporting prop or graphic accent.",
            },
            {
              name: "Product contextual — UI inset",
              description: "Tight crop of a phone showing the policy renewal screen, real hand holding the device, soft daylight from window left.",
            },
            {
              name: "Sensitivity — claim resolution",
              description: "Subject mid-call on phone, calm body language, kitchen background out of focus, mid-afternoon light. The opposite of panic.",
            },
            {
              name: "Travel — practical adventure",
              description: "Traveller checking a phone at an airport gate, backpack visible, ambient light, no glamour cliché.",
            },
          ]}
        />
      </Section>

      <Section
        id="do-dont"
        title="Do and don&apos;t"
      >
        <DoDont
          doItems={[
            "Cast across regions, ages, body types, and family configurations.",
            "Use available light first; bounce and fill second.",
            "Frame claim or illness contexts with dignity and distance.",
            "Set-dress real locations rather than building studio fakes.",
          ]}
          dontItems={[
            "Use stock photography that reads as Western or generic.",
            "Stage grief, panic, or dramatic accident moments.",
            "Cast only one body type, region, or age range.",
            "Place children inside illness, claim, or accident shots.",
          ]}
        />
      </Section>

      <Section id="related" title="Related">
        <ResourceCards
          resources={[
            { title: "Imagery modes", href: "/foundations/imagery", meta: "Media, content & voice" },
            { title: "Asset creation", href: "/foundations/asset-creation", meta: "Media, content & voice" },
            { title: "Voice and tone", href: "/foundations/voice", meta: "Media, content & voice" },
            { title: "Illustration", href: "/foundations/illustration", meta: "Media, content & voice" },
          ]}
        />
      </Section>
    </article>
  );
}
