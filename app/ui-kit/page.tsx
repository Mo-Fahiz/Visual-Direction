import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";

export const metadata: Metadata = {
  title: "UI Kit",
};

export default function UIKitPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="UI Kit"
        description="High-level overview of the design system. Detailed specs live in Foundations."
        lastUpdated="April 27, 2026"
      />

      <p>
        The ACKO design system is organized in layers: <strong>Principles</strong>{" "}
        (why), <strong>Foundations</strong> (what), <strong>Patterns</strong>{" "}
        (how together), and <strong>UI Kit</strong> (overview). This page
        summarizes what&apos;s available; each section links to its canonical
        Foundation page.
      </p>

      <h2>Color</h2>
      <p>
        Brand purple (accent), semantic tokens for roles (primary, surfaces, text,
        feedback), and category colors per vertical (Auto, Health, Life, Travel).
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/color" className="text-accent hover:underline">
            Color overview →
          </Link>
        </li>
        <li>
          <Link href="/foundations/color/tokens" className="text-accent hover:underline">
            All color tokens →
          </Link>
        </li>
        <li>
          <Link href="/visual-direction" className="text-accent hover:underline">
            Visual Direction →
          </Link>
        </li>
      </ul>

      <h2>Typography</h2>
      <p>
        Euclid Circular B for product (weights 300–700), Gotham for brand. 15-step
        type scale with semantic aliases (Display, Heading, Body, Label, Caption).
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/typography" className="text-accent hover:underline">
            All Weights & Specimens →
          </Link>
        </li>
      </ul>

      <h2>Spacing</h2>
      <p>
        1px base system. Use <code>gap-8</code> for 8px, <code>gap-16</code> for
        16px (no math). Component heights (h-40, h-48, h-56) for buttons and inputs.
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/spacing" className="text-accent hover:underline">
            Spacing Scale →
          </Link>
        </li>
      </ul>

      <h2>Border Radii</h2>
      <p>
        Pill buttons (9999px), 20px for cards/dialogs, nested inset rule for inner
        elements.
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/radii" className="text-accent hover:underline">
            Radius Tokens →
          </Link>
        </li>
      </ul>

      <h2>Shadows</h2>
      <p>
        Six elevation tiers (xs–2xl), semantic aliases (card, dropdown, modal,
        subtle). Dark mode uses heavier blur for contrast.
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/shadows" className="text-accent hover:underline">
            Shadow Hierarchy →
          </Link>
        </li>
      </ul>

      <h2>Motion</h2>
      <p>
        Five easing curves (ease-out-quad, ease-out-cubic, etc.). Keyframes for
        spin, shake, pop. GPU-only animations (transform, opacity).
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/motion" className="text-accent hover:underline">
            Easing & Keyframes →
          </Link>
        </li>
        <li>
          <Link href="/patterns" className="text-accent hover:underline">
            See in Action →
          </Link>
        </li>
      </ul>

      <h2>Imagery</h2>
      <p>
        Three modes (documentary warm, editorial bright, product contextual) with
        shared prompt architecture.
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/imagery" className="text-accent hover:underline">
            Imagery Guide →
          </Link>
        </li>
        <li>
          <Link href="/visual-direction" className="text-accent hover:underline">
            Brand Narrative →
          </Link>
        </li>
      </ul>

      <h2>Iconography</h2>
      <p>
        Stroke-rounded (Hugeicons benchmark). 1.5px stroke at 24px. Monochrome
        default, duotone for featured states.
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <Link href="/foundations/iconography" className="text-accent hover:underline">
            Icon System →
          </Link>
        </li>
      </ul>

      <h2>Theming</h2>
      <p>
        Light theme (default). Dark theme available via{" "}
        <code>[data-theme=&quot;dark&quot;]</code> attribute. Semantic tokens
        remap across themes.
      </p>

      <h2>Z-Index Scale</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <code>--z-dropdown</code> = 100
        </li>
        <li>
          <code>--z-sticky</code> = 150
        </li>
        <li>
          <code>--z-modal</code> = 200
        </li>
        <li>
          <code>--z-tooltip</code> = 300
        </li>
        <li>
          <code>--z-toast</code> = 400
        </li>
      </ul>

      <h2>Responsive Breakpoints</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <strong>Mobile:</strong> 0–767px (base styles, no media query)
        </li>
        <li>
          <strong>Tablet:</strong> 768px–1023px (@media min-width: 768px)
        </li>
        <li>
          <strong>Desktop:</strong> ≥1024px (@media min-width: 1024px)
        </li>
      </ul>

      <h2 className="mt-12">Component Library</h2>
      <p>
        The production component library is being built in parallel and lives in a
        separate repository. It consumes the tokens defined here and implements
        them as React components with Tailwind CSS.
      </p>
      <ul className="not-prose mt-3 flex flex-wrap gap-3">
        <li>
          <a
            href="https://github.com/rahulpramod-stack/DS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Component library repo →
          </a>
        </li>
      </ul>

      <h2 className="mt-12">Next Steps</h2>
      <ul>
        <li>
          <Link href="/principles">Principles</Link> — the why behind every design
          decision
        </li>
        <li>
          <Link href="/visual-direction">Visual Direction</Link> — brand look and
          feel
        </li>
        <li>
          <Link href="/patterns">Patterns</Link> — recurring layouts and interactions
        </li>
        <li>
          <Link href="/foundations">Foundations</Link> — authoritative specs for all
          tokens
        </li>
      </ul>
    </article>
  );
}
