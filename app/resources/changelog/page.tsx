import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Changelog",
};

export default function ChangelogPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Changelog"
        description="Notable updates to the documentation site and documented rules."
      />

      <h2>1.0.0 — June 11, 2026</h2>
      <p className="font-semibold text-[#6841E6]">Major design system refresh</p>
      <ul>
        <li><strong>Rebranded to "ACKO Design Standards"</strong> — renamed from "Visual Standards" across all pages, navigation, and metadata.</li>
        <li><strong>About ACKO page redesign</strong> — updated heading to "What should every ACKO experience feel like?" and replaced all tile icons with ACKO icons from R2 bucket.</li>
        <li><strong>Iconography animation overhaul</strong> — implemented smooth slide-down animation with 3-phase state machine, cycling every 5 seconds through all 313 icons with no glitches.</li>
        <li><strong>Motion foundation expansion</strong> — added live visual demos for page transitions (right-to-left, bottom sheet, crossfade, card expand) and microinteractions (button press, accordion, toast, input focus, error shake, spinner).</li>
        <li><strong>Atlassian-style visual refresh</strong> — redesigned Spacing, Border Radii, Typography, and Shadows pages with rounded cards, hover lifts, hairline borders, and soft shadows.</li>
        <li><strong>Colour foundation enhancement</strong> — added Atlassian-style brand palette band showing purple and grey scales with interactive hover states.</li>
        <li><strong>British English localisation</strong> — converted all user-facing text (Color → Colour, organized → organised) while preserving technical terms.</li>
        <li><strong>Navigation cleanup</strong> — removed Brand Story, Develop, and Roadmap pages; kept only Changelog under Resources.</li>
        <li><strong>Removed eyebrow labels</strong> — eliminated "FOUNDATION / ABOUT ACKO / DESIGN SYSTEM" chips from all page headers for cleaner presentation.</li>
        <li><strong>Homepage foundation icons</strong> — replaced all 9 foundation tile icons with proper ACKO icons from the live R2 manifest (Colour, Typography, Spacing, Border Radii, Shadows, Motion, Imagery, Iconography, Voice and Tone).</li>
      </ul>

      <h2>0.1.0 — April 27, 2026</h2>
      <ul>
        <li>Initial site rolled out with the trait-first IA.</li>
        <li>About ACKO, design system foundations, brand story, develop, roadmap.</li>
        <li>Seed <code className="rounded bg-white px-1 py-0.5 text-sm">data/tokens.json</code>.</li>
        <li>Atoms and molecules stubs for the separate component track.</li>
      </ul>
    </article>
  );
}
