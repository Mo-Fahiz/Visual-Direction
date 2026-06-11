import type { Metadata } from "next";
import Link from "next/link";
import { CodeChip } from "@/components/docs/CodeChip";
import { PageTable } from "@/components/docs/PageTable";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";
import { ColorSwatch } from "@/components/showcase/color/ColorSwatch";
import { InteractionStateExample } from "@/components/showcase/color/InteractionStateExample";
import { LayeringModel } from "@/components/showcase/color/LayeringModel";
import {
  DropdownMock,
  InputMock,
  PrimaryButtonMock,
} from "@/components/showcase/color/UIMocks";
import { greyRamp, purpleRamp } from "@/lib/color-tokens";
import { purple, grey } from "@/lib/acko-tokens";

export const metadata: Metadata = {
  title: "Colour · Overview",
};

/* ──────────────────────────────────────────────────────────────────
 * Atlassian-style brand band: full-width swatch row at the top.
 * Brand purple anchors the system; greys carry hierarchy.
 * ─────────────────────────────────────────────────────────────── */
function BrandBand() {
  const purpleSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
  const greySteps = [50, 100, 150, 200, 300, 450, 550, 700, 800] as const;
  return (
    <div className="not-prose mb-12 space-y-6">
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6841E6]">
          Brand purple
        </p>
        <div className="flex overflow-hidden rounded-[14px] border border-[#E4E5E9]">
          {purpleSteps.map((step) => (
            <div
              key={step}
              className="group relative flex-1 transition-transform duration-200 hover:scale-[1.04] hover:z-10"
              style={{ backgroundColor: purple[step], height: 96 }}
            >
              <div className="absolute inset-x-0 bottom-2 text-center">
                <p
                  className="font-mono text-[10px] font-medium"
                  style={{ color: step >= 400 ? "#FFFFFF" : "#1F1F23" }}
                >
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C616B]">
          Grey scale
        </p>
        <div className="flex overflow-hidden rounded-[14px] border border-[#E4E5E9]">
          {greySteps.map((step) => (
            <div
              key={step}
              className="group relative flex-1 transition-transform duration-200 hover:scale-[1.04] hover:z-10"
              style={{ backgroundColor: grey[step], height: 64 }}
            >
              <div className="absolute inset-x-0 bottom-2 text-center">
                <p
                  className="font-mono text-[10px] font-medium"
                  style={{ color: step >= 400 ? "#FFFFFF" : "#1F1F23" }}
                >
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ColorOverviewPage() {
  return (
    <>
      <BrandBand />

      {/* Introduction --------------------------------------------------- */}
      <Section id="introduction" title="Introduction">
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Colour at ACKO is engineered, not decorated. Every value in the
          interface resolves through three layers — <em>primitives</em> (raw
          hex), <em>semantics</em> (role-based aliases like{" "}
          <CodeChip>--color-primary</CodeChip>), and <em>component CSS</em> (which
          only ever references semantics). This separation is what lets the
          same product render correctly in light, dark, and any future theme
          without component code changing.
        </p>
        <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Brand purple is the centre of gravity. Greys provide hierarchy.
          Reds, greens, and oranges are reserved for feedback. <strong>Info
          uses purple, not blue</strong> — blue is reserved for inline links
          only.
        </p>
      </Section>

      {/* Colour anatomy -------------------------------------------------- */}
      <Section
        id="color-anatomy"
        title="Colour anatomy"
        description="A theme assigns hex values to tokens. A token assigns a value to a role. A role describes what the colour does in the interface — for example, a card background or an error border. Components consume the role, not the hex."
      >
        <PageTable
          headers={["Term", "Definition"]}
          colWidths={["28%", "72%"]}
          rows={[
            [
              <em key="theme">Theme</em>,
              "A collection of colours engineered to create a specific aesthetic. Themes control the value assigned to a token. ACKO ships with `acko-light` and `acko-dark`.",
            ],
            [
              <em key="token">Token</em>,
              <>
                A role-based identifier that assigns a colour. Unlike hex codes,
                tokens apply universally across themes. For example,{" "}
                <CodeChip>--color-surface</CodeChip>.
              </>,
            ],
            [
              <em key="role">Role</em>,
              "What the colour is doing in the UI — main CTA fill, page background, supporting text, error border, and so on.",
            ],
            [
              <em key="component">Component</em>,
              <>
                The end consumer. Component CSS only ever reads semantic tokens
                (e.g.{" "}
                <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">
                  background: var(--color-primary)
                </code>
                ).
              </>,
            ],
          ]}
        />

        <Section id="layering-model" level={3} title="Layering model">
          <p className="mb-4 max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
            Surfaces stack. The page sits at the base; cards, modals, and
            popovers stack on top in measured steps so users can read depth at
            a glance. The two themes invert the rule — light themes <em>lift</em>{" "}
            to white, dark themes <em>lift</em> toward the lighter greys.
          </p>
          <LayeringModel />
        </Section>
      </Section>

      {/* Implementing colour ------------------------------------------- */}
      <Section
        id="implementing-colour"
        title="Implementing colour"
        description="Themes ship as CSS custom properties scoped to a [data-theme] attribute. Switching themes is a single attribute swap on <html> — no component re-render is required."
      >
        <pre className="not-prose mb-2 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`/* tokens.css (excerpt) */
:root[data-theme="acko-light"] {
  --color-primary: #6841E6;   /* purple-600 */
  --color-surface: #F5F5F5;   /* grey-100   */
  --color-text-primary: #0A0A0A;
}
:root[data-theme="acko-dark"] {
  --color-primary: #7A62F0;   /* purple-500 */
  --color-surface: #0F0F10;   /* grey-750   */
  --color-text-primary: #FBFBFB;
}`}
        </pre>
      </Section>

      {/* Themes -------------------------------------------------------- */}
      <Section
        id="themes"
        title="Themes"
        description="ACKO ships two production themes today. Both are fully token-driven; product code never branches on theme name."
      >
        <PageTable
          headers={["Theme", "Primary background", "Token", "Hex"]}
          colWidths={["18%", "30%", "30%", "22%"]}
          rows={[
            [
              "ACKO Light",
              "Cream / White surface",
              <CodeChip key="l">--color-surface</CodeChip>,
              <span key="lh" className="inline-flex items-center gap-2">
                <ColorSwatch hex="#F5F5F5" size={20} />
                <span className="font-mono text-xs">#F5F5F5</span>
              </span>,
            ],
            [
              "ACKO Dark",
              "Inked surface",
              <CodeChip key="d">--color-surface</CodeChip>,
              <span key="dh" className="inline-flex items-center gap-2">
                <ColorSwatch hex="#0F0F10" size={20} />
                <span className="font-mono text-xs">#0F0F10</span>
              </span>,
            ],
          ]}
        />

        <Section id="light-themes" level={3} title="Light theme">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
            Light themes work on a cream/white base with a dark text foreground.
            Layers <em>lift</em> by stepping up to white, then back down. Use
            for dense, content-heavy product surfaces.
          </p>
        </Section>
        <Section id="dark-themes" level={3} title="Dark theme">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
            Dark themes invert: an inked base with light foreground text. Layers
            lift by stepping toward lighter greys. Use for focused contexts —
            video, dashboards, late-night flows.
          </p>
        </Section>
      </Section>

      {/* Tokens -------------------------------------------------------- */}
      <Section
        id="tokens"
        title="Tokens"
        description="Every interface colour is owned by exactly one semantic token. Components consume the token; designers consume the role. See the Tokens tab for the full inventory with live swatches."
      >
        <Section id="token-names" level={3} title="Token names">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
            Names follow{" "}
            <CodeChip>--color-&lt;group&gt;-&lt;modifier&gt;</CodeChip>. The
            group declares <em>what part of the UI</em> the colour belongs to;
            the modifier declares <em>which state or variant</em>.
          </p>
        </Section>

        <Section id="core-tokens" level={3} title="Core tokens">
          <PageTable
            headers={["Token group", "Applied to"]}
            colWidths={["28%", "72%"]}
            rows={[
              ["Primary", "Brand CTAs, focus rings, primary surfaces"],
              ["Surface", "Page and elevated layer backgrounds"],
              ["Text", "All text — headings, body, supporting, brand, feedback"],
              ["Border", "Dividers, rules, and outlines"],
              ["Disabled", "Inactive controls, both fill and label"],
              ["Feedback", "Error, success, warning, info — solid + subtle"],
              ["Card", "Card surfaces and outlines"],
              ["Component", "Tabs, toggles, accordions, badges, calendar, slider, OTP"],
            ]}
          />
          <p className="text-[0.9375rem] leading-relaxed text-foreground">
            See the{" "}
            <Link href="/foundations/color/tokens" className="underline">
              Tokens
            </Link>{" "}
            tab for the full list with live swatches.
          </p>
        </Section>
      </Section>

      {/* Interaction states -------------------------------------------- */}
      <Section
        id="interaction-states"
        title="Interaction states"
        description="Five states cover every interactive surface. The numbered pin in each example marks which step in the ramp is active."
      >
        <Section id="hover" level={3} title="Hover">
          <InteractionStateExample
            state="hover"
            caption="Cursor is over an interactive element."
            visualLeft={<DropdownMock variant="hover" pin={1} />}
            visualRight={<DropdownMock variant="hover" pin={2} dark />}
            rampLeft={purpleRamp}
            pinsLeft={[
              { index: 5, n: 1 },
              { index: 1, n: 2 },
            ]}
          />
        </Section>

        <Section id="active" level={3} title="Active">
          <InteractionStateExample
            state="active"
            caption="The element is being pressed or its action is committing."
            visualLeft={<PrimaryButtonMock variant="default" pin={1} />}
            visualRight={<PrimaryButtonMock variant="active" pin={2} dark />}
            rampLeft={purpleRamp}
            pinsLeft={[
              { index: 6, n: 1 },
              { index: 7, n: 2 },
            ]}
          />
        </Section>

        <Section id="focus" level={3} title="Focus">
          <InteractionStateExample
            state="focus"
            caption="Keyboard focus or programmatic focus has landed."
            visualLeft={<InputMock variant="focus" pin={1} />}
            visualRight={<InputMock variant="focus" pin={2} dark />}
            rampLeft={purpleRamp}
            pinsLeft={[
              { index: 6, n: 1 },
              { index: 2, n: 2 },
            ]}
          />
        </Section>

        <Section id="selected" level={3} title="Selected">
          <InteractionStateExample
            state="selected"
            caption="A persistent commitment — the user has chosen this option."
            visualLeft={<DropdownMock variant="selected" pin={1} />}
            visualRight={<DropdownMock variant="selected" pin={2} dark />}
            rampLeft={purpleRamp}
            pinsLeft={[
              { index: 1, n: 1 },
              { index: 9, n: 2 },
            ]}
          />
        </Section>

        <Section id="disabled" level={3} title="Disabled">
          <InteractionStateExample
            state="disabled"
            caption="The control cannot accept input. Maintains AA non-text contrast against its background."
            visualLeft={<PrimaryButtonMock variant="disabled" pin={1} />}
            visualRight={<PrimaryButtonMock variant="disabled" pin={2} dark />}
            rampLeft={greyRamp}
            pinsLeft={[
              { index: 6, n: 1 },
              { index: 12, n: 2 },
            ]}
          />
        </Section>
      </Section>

      {/* Accessibility -------------------------------------------------- */}
      <Section
        id="accessibility"
        title="Accessibility"
        description="Colour pairings must clear WCAG AA at minimum: 4.5:1 for body text, 3:1 for large text and non-text UI. Pairings below are the safe defaults — anything outside this matrix needs an explicit accessibility review."
      >
        <Section id="contrast-ratios" level={3} title="Contrast ratios">
          <PageTable
            headers={[
              "Foreground",
              "Background",
              "Ratio",
              "Verdict",
            ]}
            rows={[
              [
                "grey-800 #0A0A0A",
                "grey-100 #F5F5F5",
                "≈ 18.8:1",
                "AAA · all sizes",
              ],
              [
                "purple-600 #6841E6",
                "white #FFFFFF",
                "≈ 5.5:1",
                "AA · body text & icons",
              ],
              [
                "white #FFFFFF",
                "purple-600 #6841E6",
                "≈ 5.5:1",
                "AA · CTA labels",
              ],
              [
                "red-700 #B91C1C",
                "white #FFFFFF",
                "≈ 7.1:1",
                "AAA · error text",
              ],
              [
                "grey-450 #605F63",
                "grey-100 #F5F5F5",
                "≈ 5.7:1",
                "AA · supporting text",
              ],
            ]}
          />
        </Section>
      </Section>

      {/* Resources ------------------------------------------------------ */}
      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            {
              title: "All semantic tokens",
              href: "/foundations/color/tokens",
              meta: "Tokens tab",
            },
            {
              title: "How to apply colour",
              href: "/foundations/color/usage",
              meta: "Usage tab",
            },
            {
              title: "Setup & code",
              href: "/foundations/color/code",
              meta: "Code tab",
            },
            {
              title: "About ACKO",
              href: "/principles",
              meta: "Brand traits and tone",
            },
            {
              title: "Brand purple in product",
              href: "/principles/clear-over-clever",
              meta: "Trait",
            },
          ]}
        />
      </Section>
    </>
  );
}
