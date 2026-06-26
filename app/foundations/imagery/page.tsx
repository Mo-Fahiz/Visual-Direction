import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { DocImage } from "@/components/docs/DocImage";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { assetPath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "Imagery",
};

const IMG = (file: string) => assetPath(`/images/Page_imagery/${file}`);

export default function ImageryPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Imagery"
        description="Three imagery modes, one prompt architecture, one set of negative anchors. Photography for human moments, illustration for concepts."
      />

      <Section
        id="modes"
        title="Three imagery modes"
        description="Every image at ACKO resolves to one of three modes. Pick the mode based on the customer journey moment, then brief or generate accordingly."
      >
        <Section id="documentary-warm" level={3} title="Documentary warm">
          <p>
            Real situations, natural light, eye-level camera, warm colour
            grading. Used for claims, support, and human moments. Subjects are
            real people in authentic Indian settings — not Western stock.
          </p>
          <DocImage
            src={IMG("documentary-warm.png")}
            alt="Four documentary-warm reference photographs: Indian family reviewing insurance documents at home, woman on phone during a claim call, hospital reception with staff helping a patient, couple reading policy papers together. Warm natural light, eye-level framing."
            ratio="4/3"
            background="none"
          />
        </Section>

        <Section id="editorial-bright" level={3} title="Editorial bright">
          <p>
            Optimistic, high contrast, brand-forward. Used for marketing,
            campaigns, and launch moments. Clean backgrounds, product-forward
            framing, saturated but not garish.
          </p>
          <DocImage
            src={IMG("editorial-bright.png")}
            alt="Four editorial-bright reference images: car hero shot on urban Indian street at golden hour, close-up of car dashboard, aspirational Indian couple in colourful setting, confident professional walking in a modern Indian city. High contrast, vibrant, brand-forward."
            ratio="4/3"
            background="none"
          />
        </Section>

        <Section id="product-contextual" level={3} title="Product contextual">
          <p>
            UI-adjacent, explanatory, minimal. Used inside product surfaces.
            Clean backgrounds, tight crops, no emotional loading — purely
            informational.
          </p>
          <DocImage
            src={IMG("product-contextual.png")}
            alt="Four product-contextual reference images: tight crop of a car on an Indian street, hand holding smartphone with insurance app, insurance documents on desk top-down, car key and policy folder on plain surface. Neutral light, informational."
            ratio="4/3"
            background="none"
          />
        </Section>
      </Section>

      <Section
        id="grading"
        title="Colour grading"
        description="A warm bias across all three modes. Shadows lifted (never crushed to black), highlights soft (never blown), skin tones preserved accurately."
      >
        <DocImage
          src={IMG("colour-grading.png")}
          alt="Before and after colour grading split: same scene of an Indian family reviewing documents. Left half ungraded — flat, cool, crushed shadows. Right half ACKO-graded — warm 5200–5800K, lifted shadows, soft highlights, accurate skin tones."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="cropping"
        title="Cropping and composition"
        description="Subject-centred framing for product. Rule of thirds for editorial. Never crop faces at the chin or forehead. Always leave breathing room around the subject."
      >
        <DocImage
          src={IMG("cropping-composition.png")}
          alt="Correct vs incorrect crop comparison of an Indian woman's portrait. Correct: full face with breathing room and rule-of-thirds grid overlay. Incorrect: forehead and chin cropped, no breathing room, marked with red X indicator."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="ai-imagery"
        title="AI-generated imagery"
        description="AI imagery is acceptable for marketing under strict conditions. Every output must be reviewed for anatomical accuracy, text rendering, cultural sensitivity, and brand consistency before publication."
      >
        <p>
          <strong>Prompt template:</strong>
        </p>
        <pre className="not-prose mb-2 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`[Subject], [setting], [lighting: natural / studio / dramatic],
[mood tags], [camera: eye level / overhead / 45-degree],
[style: photorealistic / editorial / minimal].
ACKO brand colours where appropriate. No text in image.`}
        </pre>
        <p>
          Always include negative anchors in the exclusion list:{" "}
          <em>no text, no watermarks, no logo artefacts, no extra fingers, no
          uncanny faces, no Western stock aesthetic, no over-saturated skin
          tones.</em>
        </p>
        <DocImage
          src={IMG("ai-imagery.png")}
          alt="Side-by-side comparison: Good AI-generated image of an Indian person on a claim call with correct anatomy and warm grade. Rejected image alongside it showing text artefacts, anatomically incorrect hands, and off-brand colour cast — each flaw annotated."
          ratio="4/3"
          background="none"
        />
      </Section>

      <Section
        id="do-dont"
        title="Do and don't"
        description="Match the mode to the moment; never reach for stock."
      >
        <DoDont
          doItems={[
            "Match imagery mode to the customer journey moment.",
            "Show diversity and authentic Indian contexts.",
            "Keep product imagery legible at mobile sizes.",
            "Use the prompt template and negative anchors for every AI generation.",
          ]}
          dontItems={[
            "Generic Western stock photography.",
            "Busy backgrounds behind critical UI or copy.",
            "Dark, moody imagery on ACKO product surfaces.",
            "AI imagery with visible text, anatomical errors, or cultural inaccuracies.",
          ]}
        />
      </Section>

      <Section
        id="related"
        title="Related"
        description="Imagery is one part of how the brand looks and feels."
      >
        <ul>
          <li>
            <Link href="/foundations/brand-application">Brand application</Link>{" "}
            — where each imagery mode shows up across marketing surfaces.
          </li>
          <li>
            <Link href="/foundations/asset-creation">Asset creation</Link> —
            scenes, briefs, and templates for shooting and generating imagery.
          </li>
          <li>
            <Link href="/principles">About ACKO</Link> — the personality
            imagery should always reflect.
          </li>
        </ul>
      </Section>
    </article>
  );
}
