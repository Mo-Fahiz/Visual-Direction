import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "Get started",
};

export default function GetStartedPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Get started"
        eyebrow="Onboarding"
        description="Who this site is for and how to use it. The documentation site is the source of truth—workshops and files feed updates here."
        lastUpdated="April 27, 2026"
      />

      <h2>Who this is for</h2>
      <ul>
        <li>
          <strong>Design</strong> — Principles, modes (precision vs warmth), foundations,
          Figma alignment.
        </li>
        <li>
          <strong>Product & content</strong> — Voice, clarity, lifecycle moments.
        </li>
        <li>
          <strong>Engineering</strong> — Tokens and implementation under Develop; UI kit
          lives separately.
        </li>
      </ul>

      <h2>Recommended reading order</h2>
      <ol>
        <li>
          <Link href="/visual-direction">Visual direction</Link> — Grounded warmth and
          when to be precise vs warm.
        </li>
        <li>
          <Link href="/principles">Principles</Link> — The four customer-feel principles.
        </li>
        <li>
          <Link href="/foundations">Foundations</Link> — Color, type, imagery, icons,
          voice.
        </li>
        <li>
          <Link href="/brand-story">Brand story</Link> — Narrative and film-strip
          thinking (links back to the same rules).
        </li>
        <li>
          <Link href="/develop">Develop</Link> — Tokens and consumption.
        </li>
      </ol>

      <h2>Precision vs warmth (one-minute version)</h2>
      <p>
        <strong>Precision</strong> — Shopping, comparing, purchasing: cool neutrals,
        purple accents, scannable structure, minimal friction.
      </p>
      <p>
        <strong>Warmth</strong> — Claims, support, emergencies: warmer surfaces,
        conversational copy, human timelines, reassurance without hiding facts.
      </p>
      <p>
        <Link href="/visual-direction">Read the full visual direction →</Link>
      </p>

      <h2>Figma & code</h2>
      <p>
        Link your org Figma libraries from team resources when available. Kits and code
        should implement what this site documents; when something changes, update the
        site first (or in the same change) so nothing becomes a shadow source of truth.
      </p>

      <h2>UI kit & patterns</h2>
      <p>
        Component inventory and patterns are a{" "}
        <Link href="/ui-kit">separate track</Link>—use them after the principles and
        foundations make sense.
      </p>
    </article>
  );
}
