import type { Metadata } from "next";
import Link from "next/link";
import { CodeChip } from "@/components/docs/CodeChip";
import { PageTable } from "@/components/docs/PageTable";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { Section } from "@/components/docs/Section";
import { ColorAnatomyFlow } from "@/components/showcase/color/ColorAnatomyFlow";
import { ColorComponentExamples } from "@/components/showcase/color/ColorComponentExamples";
import { ColorSwatch } from "@/components/showcase/color/ColorSwatch";
import { LayeringModel } from "@/components/showcase/color/LayeringModel";
import { ThemePreviewPanel } from "@/components/showcase/color/ThemePreviewPanel";
import { greyRamp, primitiveHex, purpleRamp, themes } from "@/lib/color-tokens";

export const metadata: Metadata = {
  title: "Colour · Overview",
};

function BrandBand() {
  const purpleSteps = purpleRamp.steps.filter((s) => {
    const n = s.token.replace("--purple-", "");
    return n !== "150" && n !== "850";
  });
  const greySteps = greyRamp.steps.filter((s) => {
    const n = s.token.replace("--grey-", "");
    return !["White", "Black", "250", "350"].includes(n);
  });

  const labelColor = (hex: string) => {
    const v = hex.replace("#", "");
    const r = parseInt(v.slice(0, 2), 16);
    const g = parseInt(v.slice(2, 4), 16);
    const b = parseInt(v.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 > 160 ? "#1F1F23" : "#FFFFFF";
  };

  return (
    <div className="not-prose mb-12 space-y-6">
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#6841E6]">
          Brand purple
        </p>
        <div className="flex overflow-hidden rounded-[14px] border border-[#E4E5E9]">
          {purpleSteps.map((step) => {
            const label = step.token.replace("--purple-", "");
            return (
              <div
                key={step.token}
                className="group relative flex-1 transition-transform duration-200 hover:z-10 hover:scale-[1.04]"
                style={{ backgroundColor: step.hex, height: 96 }}
                title={`${step.token} — ${step.hex}`}
              >
                <div className="absolute inset-x-0 bottom-2 text-center">
                  <p
                    className="font-mono text-[10px] font-medium"
                    style={{ color: labelColor(step.hex) }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C616B]">
          Grey scale
        </p>
        <div className="flex overflow-hidden rounded-[14px] border border-[#E4E5E9]">
          {greySteps.map((step) => {
            const label = step.token.replace("--grey-", "");
            return (
              <div
                key={step.token}
                className="group relative flex-1 transition-transform duration-200 hover:z-10 hover:scale-[1.04]"
                style={{ backgroundColor: step.hex, height: 64 }}
                title={`${step.token} — ${step.hex}`}
              >
                <div className="absolute inset-x-0 bottom-2 text-center">
                  <p
                    className="font-mono text-[10px] font-medium"
                    style={{ color: labelColor(step.hex) }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ColorOverviewPage() {
  return (
    <>
      <BrandBand />

      <Section id="introduction" title="Introduction">
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Colour at ACKO is engineered, not decorated. Every value resolves through
          three layers — <em>primitives</em> (raw hex from{" "}
          <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px]">
            colours-primitive
          </code>
          ), <em>theme tokens</em> (role-based aliases like{" "}
          <CodeChip>--color-primary</CodeChip>), and <em>component CSS</em> (which
          only ever references theme tokens). This separation lets the same product
          render correctly in light, dark, and any future theme without component
          code changing.
        </p>
        <p className="mt-4 max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Brand purple is the centre of gravity. Greys provide hierarchy. Red, green,
          and orange are reserved for feedback.{" "}
          <strong>Info uses purple, not blue</strong> — blue is reserved for inline
          links only.
        </p>
      </Section>

      <Section
        id="color-anatomy"
        title="Colour anatomy"
        description="A theme assigns hex values to tokens. A token assigns a value to a role. Components consume the role, not the hex."
      >
        <PageTable
          headers={["Term", "Definition"]}
          colWidths={["28%", "72%"]}
          rows={[
            [
              <em key="theme">Theme</em>,
              "A collection of colours engineered to create a specific aesthetic. ACKO ships with acko-light and acko-dark.",
            ],
            [
              <em key="token">Token</em>,
              <>
                A role-based identifier that applies universally across themes — e.g.{" "}
                <CodeChip>--color-surface</CodeChip>.
              </>,
            ],
            [
              <em key="role">Role</em>,
              "What the colour is doing — main CTA fill, page background, error border, supporting text.",
            ],
            [
              <em key="component">Component</em>,
              <>
                The end consumer. Component CSS reads theme tokens only:{" "}
                <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">
                  background: var(--color-primary)
                </code>
                .
              </>,
            ],
          ]}
        />
        <div className="mt-6">
          <ColorAnatomyFlow />
        </div>
      </Section>

      <Section
        id="brand-layering"
        title="Brand layering"
        description="Surfaces stack. The page sits at the base; cards, modals, and popovers lift in measured steps so users read depth at a glance."
      >
        <p className="mb-4 max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Light themes <em>lift</em> toward white; dark themes <em>lift</em> toward
          lighter greys. Never skip a layer — a modal should never share the same
          surface token as the page behind it.
        </p>
        <LayeringModel />
      </Section>

      <Section
        id="themes"
        title="Themes"
        description="ACKO ships two production themes. Both are fully token-driven — product code never branches on theme name."
      >
        <PageTable
          headers={["Theme", "Primary background", "Token", "Hex"]}
          colWidths={["18%", "30%", "30%", "22%"]}
          rows={[
            [
              "ACKO Light",
              "Cream / white surface",
              <CodeChip key="l">--color-surface</CodeChip>,
              <span key="lh" className="inline-flex items-center gap-2">
                <ColorSwatch hex={themes[0].light} size={20} />
                <span className="font-mono text-xs">{themes[0].light}</span>
              </span>,
            ],
            [
              "ACKO Dark",
              "Inked surface",
              <CodeChip key="d">--color-surface</CodeChip>,
              <span key="dh" className="inline-flex items-center gap-2">
                <ColorSwatch hex={themes[1].light} size={20} />
                <span className="font-mono text-xs">{themes[1].light}</span>
              </span>,
            ],
          ]}
        />

        <div className="mt-6">
          <ThemePreviewPanel />
        </div>

        <Section id="light-theme" level={3} title="Light theme">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
            Cream/white base with dark text foreground. Layers lift by stepping up to
            white, then back down. Default for dense product surfaces — onboarding,
            claims, settings.
          </p>
        </Section>
        <Section id="dark-theme" level={3} title="Dark theme">
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
            Inked base with light foreground text. Layers lift toward lighter greys.
            Use for focused contexts — video, dashboards, late-night flows.
          </p>
        </Section>

        <pre className="not-prose mt-6 overflow-x-auto rounded-lg bg-[#161616] px-4 py-3 text-[12px] leading-relaxed text-white">
{`:root[data-theme="acko-light"] {
  --color-primary: ${primitiveHex("purple-600")};
  --color-surface: ${primitiveHex("grey-100")};
  --color-text-primary: ${primitiveHex("grey-800")};
}
:root[data-theme="acko-dark"] {
  --color-primary: ${primitiveHex("purple-500")};
  --color-surface: ${primitiveHex("grey-750")};
  --color-text-primary: ${primitiveHex("grey-50")};
}`}
        </pre>
      </Section>

      <Section
        id="tokens"
        title="Tokens"
        description="The primitive palette — raw hex values organised by hue and scale. Components never reference these directly; they exist to feed the theme layer."
      >
        <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-foreground">
          Every swatch follows the naming pattern{" "}
          <CodeChip>--&lt;hue&gt;-&lt;step&gt;</CodeChip> — for example{" "}
          <CodeChip tone="neutral">--purple-600</CodeChip> and{" "}
          <CodeChip tone="neutral">--grey-100</CodeChip>. The full inventory —
          grey, purple, red, green, amber, cyan, indigo, and more — lives on the{" "}
          <Link href="/foundations/color/tokens" className="underline">
            Tokens
          </Link>{" "}
          tab.
        </p>
      </Section>

      <Section
        id="accessibility"
        title="Accessibility"
        description="Colour pairings must clear WCAG AA at minimum: 4.5:1 for body text, 3:1 for large text and non-text UI."
      >
        <PageTable
          headers={["Foreground", "Background", "Ratio", "Verdict"]}
          rows={[
            [
              `grey-800 ${primitiveHex("grey-800")}`,
              `grey-100 ${primitiveHex("grey-100")}`,
              "≈ 18.8:1",
              "AAA · all sizes",
            ],
            [
              `purple-600 ${primitiveHex("purple-600")}`,
              `white ${primitiveHex("grey-White")}`,
              "≈ 5.5:1",
              "AA · body text & icons",
            ],
            [
              `white ${primitiveHex("grey-White")}`,
              `purple-600 ${primitiveHex("purple-600")}`,
              "≈ 5.5:1",
              "AA · CTA labels",
            ],
            [
              `red-700 ${primitiveHex("red-700")}`,
              `white ${primitiveHex("grey-White")}`,
              "≈ 7.1:1",
              "AAA · error text",
            ],
            [
              `grey-450 ${primitiveHex("grey-450")}`,
              `grey-100 ${primitiveHex("grey-100")}`,
              "≈ 5.7:1",
              "AA · supporting text",
            ],
          ]}
        />
        <ul className="mt-4 list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Pair colour with an icon or label — never use colour alone to convey state.</li>
          <li>Do not place purple text on a purple background — contrast fails.</li>
          <li>Anything outside this matrix needs an explicit accessibility review.</li>
        </ul>
      </Section>

      <Section
        id="colour-in-use"
        title="Colour in use"
        description="Badges and alerts are the most common feedback surfaces. Both use role-based colour tokens from the theme — never raw primitives."
      >
        <ColorComponentExamples />
      </Section>

      <Section id="resources" title="Resources">
        <ResourceCards
          resources={[
            {
              title: "Primitive palette",
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
              title: "Storybook playground",
              href: "https://mo-fahiz.github.io/Acko-Design-system/",
              meta: "Badge, Alert, Button",
            },
            {
              title: "About ACKO",
              href: "/principles",
              meta: "Brand traits and tone",
            },
          ]}
        />
      </Section>
    </>
  );
}
