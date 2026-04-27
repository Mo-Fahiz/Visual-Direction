import type { Metadata } from "next";
import Link from "next/link";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { ColorBand, CategorySwatches } from "@/components/showcase/ColorBand";
import { FilmMoments } from "@/components/showcase/FilmMoments";
import { MockFrame } from "@/components/showcase/MockFrame";
import {
  ImageryModes,
  NegativeAnchors,
  PromptArchitecture,
} from "@/components/showcase/ImageryModes";
import { palette } from "@/lib/showcase-tokens";

export const metadata: Metadata = {
  title: "Visual direction",
};

export default function VisualDirectionPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Visual direction"
        title="Grounded warmth"
        description="Calm precision when people are choosing coverage; deliberate warmth when they need us most."
        lastUpdated="April 27, 2026"
      />

      <p className="text-lg font-medium text-foreground">
        Precise when you&apos;re choosing.{" "}
        <span style={{ color: palette.O500 }}>Warm when you need us.</span>
      </p>

      <div className="not-prose mt-6">
        <MockFrame
          aspect="21/9"
          description="Hero — Documentary warm mode"
          brief="Indian family in their car, late afternoon sunlight through windshield, candid laughter, warm color grade, shot on 50mm f/2.8, slight film grain. Real middle-class sedan, natural not posed."
          mood={["family", "afternoon light", "documentary", "candid"]}
          color="#1a1418"
        />
      </div>

      <h2>Grounded warmth</h2>
      <p>
        ACKO uses a deliberate <strong>duality</strong>, not inconsistency. The
        same brand stays honest and clear in compare flows and becomes more
        supportive in claims and emergencies — similar to how a host can be crisp
        on the listing page and human when something goes wrong.
      </p>

      <h2>Four moments that define the brand</h2>
      <p className="text-muted">
        Every screen we ship can be traced to one of these moments. The
        photography brief and accent are part of the principle, not a styling
        choice.
      </p>
      <FilmMoments />

      <h2>Mode matrix</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pr-4 font-semibold text-foreground">Context</th>
              <th className="py-2 pr-4 font-semibold text-foreground">Mode</th>
              <th className="py-2 pr-4 font-semibold text-foreground">
                Tone &amp; surface
              </th>
              <th className="py-2 font-semibold text-foreground">Imagery</th>
            </tr>
          </thead>
          <tbody className="text-[#333]">
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Shopping, comparing, purchasing</td>
              <td className="py-3 pr-4">Precision</td>
              <td className="py-3 pr-4">
                Cool neutrals, purple accents, high scannability
              </td>
              <td className="py-3 pr-4">
                Product contextual; editorial where campaign needs it
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Claims, support, emergencies</td>
              <td className="py-3 pr-4">Warmth</td>
              <td className="py-3 pr-4">
                Warmer surfaces, conversational copy, human timelines
              </td>
              <td className="py-3 pr-4">Documentary warm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Category color (semantic)</h2>
      <p>
        Vertical colours (Auto, Health, Life, Travel) are{" "}
        <strong>semantic identifiers</strong>, not decoration. They blend with
        purple and follow the distribution band — see{" "}
        <Link href="/foundations/color">Color</Link>.
      </p>
      <CategorySwatches />
      <ColorBand />

      <h2>Imagery — three modes, one prompt</h2>
      <p className="text-muted">
        Photography for human moments, illustration for concepts. Three modes,
        one prompt architecture, one negative-anchor list — applied every time.
      </p>
      <ImageryModes />
      <PromptArchitecture />
      <NegativeAnchors />

      <h2>Decision guide</h2>
      <ul>
        <li>
          If the task is <strong>choosing or paying</strong>, default to
          precision.
        </li>
        <li>
          If the user is <strong>scared, blocked, or in crisis</strong>, default
          to warmth while staying fact-complete.
        </li>
        <li>
          If unsure, <strong>clarity wins</strong> — warmth never obscures terms.
        </li>
      </ul>

      <h2>Anti-patterns</h2>
      <ul>
        <li>Warmth visuals slapped onto dense compare tables without intent.</li>
        <li>Clever campaigns that obscure coverage or exclusions.</li>
        <li>
          Precision so cold that support feels like a different company.
        </li>
      </ul>

      <DoDont
        doItems={[
          "Shift mode with context — same voice, different temperature.",
          "Keep category colour meaningful per vertical.",
          "Link stressful moments to clear next steps and human help.",
        ]}
        dontItems={[
          "Mix modes arbitrarily on one screen without a reason.",
          "Use semantic colours as generic decoration.",
          "Sacrifice transparency for emotional copy.",
        ]}
      />

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/principles">Principles</Link> — the why behind these modes.
        </li>
        <li>
          <Link href="/foundations">Foundations</Link> — colour, type, imagery,
          voice.
        </li>
        <li>
          <Link href="/brand-story">Brand story</Link> — the showreel format.
        </li>
      </ul>
    </article>
  );
}
