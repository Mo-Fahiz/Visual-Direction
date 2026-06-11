import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { FadeIn } from "@/components/docs/FadeIn";
import { PageTable } from "@/components/docs/PageTable";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { atoms } from "@/lib/acko-tokens";

export const metadata: Metadata = {
  title: "Atoms",
};

export default function UIKitPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Design system"
        title="Atoms"
        description="Primitive components from the live ACKO design system. Every value below comes directly from the production library."
      />

      {/* ── Source-of-truth callout ─────────────────────────── */}
      <FadeIn>
        <div className="not-prose mb-12 rounded-[14px] border border-[#E4E5E9] bg-white p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6841E6]">
            Source of truth
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-[#1F1F23]">
            All specs below mirror the live{" "}
            <a
              href="https://mo-fahiz.github.io/Acko-Design-system/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#6841E6] hover:underline"
            >
              ACKO Design System
            </a>
            . Tokens (colour, typography, radii, shadows) are sourced from{" "}
            <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">
              @acko/tokens
            </code>
            . Per-component styles live in{" "}
            <code className="rounded bg-[#F5F5F5] px-1.5 py-0.5 text-[12px] text-[#1F1F23]">
              @acko/css/&lt;component&gt;.css
            </code>
            .
          </p>
        </div>
      </FadeIn>

      {/* ── Atom inventory ──────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mb-16">
          <div className="mb-6">
            <h2 className="text-[20px] font-semibold tracking-tight text-[#1F1F23]">
              The {atoms.length} atoms
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[#5C616B]">
              Primitive building blocks. Each one is a single package in the
              live design system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-[#ECEDF0] sm:grid-cols-2 lg:grid-cols-3">
            {atoms.map((a) => (
              <article
                key={a.pkg}
                className="bg-white p-5 transition-colors duration-200 hover:bg-[#FAFAFB]"
              >
                <p className="text-[15px] font-semibold text-[#1F1F23]">
                  {a.name}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-[#5C616B]">
                  {a.desc}
                </p>
                <p className="mt-3 font-mono text-[11px] text-[#8F8E92]">
                  {a.pkg}
                </p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Design language ──────────────────────────────────── */}
      <FadeIn>
        <p>
          Pill-shaped buttons, 20px card radius, soft layered shadows, Euclid
          Circular B everywhere, and purple as the primary accent. The aesthetic
          is approachable and rounded — never boxy, never sharp.
        </p>
        <p>
          Detailed specs for each atom follow below — these come from the live
          design system. Composed components (Card, Dialog, Tabs, Toast,
          Accordion, etc.) are documented separately under{" "}
          <a href="/patterns">Molecules</a>.
        </p>
      </FadeIn>

      {/* ── Button ───────────────────────────────────────────── */}
      <FadeIn>
        <h2>Button</h2>
        <p>
          The primary interactive element. Pill-shaped (radius-full), with an
          inner white glow on the primary variant and scale-down press feedback.
        </p>

        <h3>Variants</h3>
        <PageTable
          caption="Button variants"
          headers={["Variant", "Background", "Text", "Border"]}
          rows={[
            [
              "primary",
              "color-primary (purple-600)",
              "color-on-primary (#FFF)",
              "none",
            ],
            [
              "secondary",
              "color-btn-secondary-bg (purple-50)",
              "color-btn-secondary-text (purple-700)",
              "1px inset purple-300",
            ],
            [
              "inverted",
              "color-btn-inverted-bg (grey-100)",
              "color-btn-inverted-text (purple-700)",
              "none",
            ],
            [
              "ghost",
              "transparent",
              "color-btn-ghost-color (purple-600)",
              "none",
            ],
            [
              "link",
              "transparent",
              "color-btn-link-color (blue-600)",
              "none",
            ],
            [
              "danger",
              "color-btn-danger-bg (red-100)",
              "color-btn-danger-text (red-500)",
              "none",
            ],
          ]}
        />

        <h3>Sizes</h3>
        <PageTable
          caption="Button sizes"
          headers={[
            "Size",
            "Height",
            "Padding (h)",
            "Font size",
            "Icon size",
            "Icon-only width",
          ]}
          rows={[
            ["xs", "32px", "16px", "12px (label-md)", "12px", "32px"],
            ["sm", "40px", "16px", "14px (label-lg)", "16px", "40px"],
            ["md", "48px", "16px", "16px (body-md)", "16px", "48px"],
            ["lg", "56px", "24px", "18px (body-lg)", "24px", "56px"],
            ["xl", "64px", "32px", "20px (heading-md)", "32px", "64px"],
          ]}
        />

        <h3>States and motion</h3>
        <PageTable
          caption="Button states"
          headers={["State", "Behaviour"]}
          rows={[
            [
              "Hover",
              "Primary: +8% black overlay + shadow-btn-hover (0 4px 8px rgba(0,0,0,0.08)). Others: brightness 96%.",
            ],
            ["Active / pressed", "transform: scale(0.97), 100ms ease."],
            [
              "Focus",
              "3px solid color-primary-ring (purple-200). Outline removed.",
            ],
            [
              "Disabled",
              "bg grey-150, text grey-350, no shadows, cursor-not-allowed.",
            ],
            [
              "Loading",
              "3-dot wave animation (acko-dot-wave). Dots 6px, staggered 150ms apart, 1.2s loop.",
            ],
          ]}
        />

        <h3>Key details</h3>
        <ul>
          <li>
            <strong>Border radius:</strong> radius-full (9999px) — pill shape on
            all sizes.
          </li>
          <li>
            <strong>Inner shadow (primary):</strong>{" "}
            <code>inset 0 1px 2px 1px rgba(255,255,255,0.28)</code> — tactile
            depth.
          </li>
          <li>
            <strong>Transitions:</strong> background-color, color, border-color,
            box-shadow at 150ms ease; transform at 100ms ease.
          </li>
          <li>
            <strong>Icon gap:</strong> 8px between icon and label.
          </li>
        </ul>
      </FadeIn>

      {/* ── Card ─────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Card</h2>
        <p>
          Rounded containers with a 20px radius. Four variants for different
          elevation contexts.
        </p>

        <PageTable
          caption="Card variants"
          headers={["Variant", "Background", "Border", "Shadow"]}
          rows={[
            ["default", "grey-50", "1px solid grey-100", "none"],
            ["outline", "transparent", "1px solid grey-200", "none"],
            [
              "elevated",
              "#FFFFFF",
              "none",
              "shadow-lg (0 2px 16px 4px rgba(0,0,0,0.04))",
            ],
            ["demoted", "grey-150", "1px solid grey-200", "none"],
          ]}
        />

        <PageTable
          caption="Card padding options"
          headers={["Option", "Value"]}
          rows={[
            ["none", "0"],
            ["sm", "12px"],
            ["md", "20px"],
            ["lg", "24px"],
          ]}
        />

        <p>
          <strong>Sub-components:</strong> card-header (flex, gap-12px,
          border-bottom), card-content (py-20px), card-footer (flex,
          justify-end, gap-12px, border-top), card-inset (p-12px, demoted
          background, inner radius follows nested inset rule).
        </p>
      </FadeIn>

      {/* ── Text input ───────────────────────────────────────── */}
      <FadeIn>
        <h2>Text input</h2>
        <p>Pill-shaped inputs with gradient error states and animated feedback.</p>

        <PageTable
          caption="Input sizes"
          headers={["Size", "Height", "Padding (h)", "Font size"]}
          rows={[
            ["sm", "40px", "16px", "14px"],
            ["md", "48px", "20px", "16px"],
            ["lg", "56px", "24px", "18px"],
          ]}
        />

        <h3>States</h3>
        <PageTable
          caption="Input states"
          headers={["State", "Behaviour"]}
          rows={[
            [
              "Default",
              "Border: 1px solid grey-150. Background: white. Radius: full.",
            ],
            [
              "Focus",
              "Border: grey-200. Focus ring: 0 0 0 2px grey-150. Transition: 200ms ease.",
            ],
            [
              "Error",
              "Gradient border (transparent to red-100 → grey-150). Shake animation: acko-text-input-shake 300ms ease-out.",
            ],
            [
              "Success",
              "Green checkmark icon with pop animation: acko-text-input-check-pop 300ms ease-out (scale 0.5 → 1.15 → 1).",
            ],
            [
              "Disabled",
              "Background: grey-100. Border: grey-150. Text: grey-300. Cursor: not-allowed.",
            ],
          ]}
        />

        <p>
          <strong>Label:</strong> 14px (label-lg), Medium 500, grey-700. Required
          asterisk in red-600.
          <br />
          <strong>Helper / error text:</strong> 12px (caption), grey-450 for
          helpers, red-700 for errors.
        </p>
      </FadeIn>

      {/* ── Dialog ───────────────────────────────────────────── */}
      <FadeIn>
        <h2>Dialog</h2>
        <p>
          Modal panels with a backdrop overlay. Panel animates in with scale and
          translate.
        </p>

        <PageTable
          caption="Dialog sizes"
          headers={["Size", "Max width"]}
          rows={[
            ["sm", "360px"],
            ["md", "480px"],
            ["lg", "600px"],
            ["xl", "760px"],
            ["full", "100% (no border radius)"],
          ]}
        />

        <ul>
          <li>
            <strong>Border radius:</strong> 20px (radius-4xl). Full-screen
            variant has 0.
          </li>
          <li>
            <strong>Backdrop:</strong> rgba(10,10,10,0.5). Animation: 200ms
            ease-out-cubic fade.
          </li>
          <li>
            <strong>Panel entrance:</strong> scale(0.95) + translateY(0.5rem) →
            scale(1) + translateY(0). 250ms ease-out-quart.
          </li>
          <li>
            <strong>Shadow:</strong> shadow-xl (0 4px 24px rgba(0,0,0,0.10)).
          </li>
          <li>
            <strong>Z-index:</strong> 200 (z-modal).
          </li>
        </ul>
      </FadeIn>

      {/* ── Toast ────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Toast</h2>
        <p>
          Non-blocking notifications. Six position options, four semantic
          variants.
        </p>

        <PageTable
          caption="Toast variants"
          headers={["Variant", "Background", "Border", "Text"]}
          rows={[
            ["info", "purple-50", "purple-200", "purple-900"],
            ["success", "green-50", "green-200", "green-800"],
            ["warning", "orange-50", "orange-200", "orange-700"],
            ["error", "red-50", "red-100", "red-700"],
          ]}
        />

        <ul>
          <li>
            <strong>Radius:</strong> 20px. <strong>Shadow:</strong> shadow-lg.
          </li>
          <li>
            <strong>Entrance:</strong> translateY(0.5rem) → 0. 250ms
            ease-out-quart.
          </li>
          <li>
            <strong>Default duration:</strong> 4000ms (configurable).
          </li>
          <li>
            <strong>Z-index:</strong> 400 (z-toast) — highest in the stack.
          </li>
          <li>
            <strong>Width:</strong> 360px, max calc(100vw - 2rem).
          </li>
        </ul>
      </FadeIn>

      {/* ── Alert ────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Alert</h2>
        <p>
          Inline feedback banners. Same four variants as toast, but embedded in
          the page flow.
        </p>

        <PageTable
          caption="Alert variants"
          headers={["Variant", "Background", "Border", "Text"]}
          rows={[
            ["info", "purple-50", "purple-200", "purple-900"],
            ["success", "green-50", "green-200", "green-800"],
            ["warning", "orange-50", "orange-200", "orange-700"],
            ["error", "red-50", "red-100", "red-700"],
          ]}
        />

        <ul>
          <li>
            <strong>Radius:</strong> 16px (radius-3xl). <strong>Padding:</strong>{" "}
            12px.
          </li>
          <li>
            <strong>Entrance:</strong> slide-up 300ms ease-out-cubic.
          </li>
          <li>
            <strong>Icon:</strong> 20px, colour inherits from variant.
          </li>
        </ul>
      </FadeIn>

      {/* ── Badge ────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Badge</h2>
        <p>
          Compact labels for status, categories, and counts. Three rendering
          modes.
        </p>

        <PageTable
          caption="Badge modes"
          headers={["Mode", "Visual"]}
          rows={[
            [
              "Solid",
              "Gradient fill (e.g. purple-200 → purple-100). 1px border matching gradient start.",
            ],
            ["Outline", "Transparent background. 1px border + text in variant colour."],
            [
              "Dot",
              "Same as solid, plus a 6px dot indicator in currentColor.",
            ],
          ]}
        />

        <p>
          <strong>Colours:</strong> purple, green, blue, orange, pink, gray.
          <br />
          <strong>Size:</strong> py-6px, px-8px. Font: 12px mobile, 14px
          desktop. Radius: full.
          <br />
          <strong>Counter badge:</strong> min-width 20px, height 20px, 11px font,
          tabular-nums. Gradient fill in purple/pink/blue.
        </p>
      </FadeIn>

      {/* ── Tabs ─────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Tabs</h2>
        <p>Four variants for different navigation contexts.</p>

        <PageTable
          caption="Tab variants"
          headers={["Variant", "Active indicator", "Use case"]}
          rows={[
            [
              "Underline",
              "2px bottom bar, purple gradient (transparent → purple-600 → transparent)",
              "Page-level section switching",
            ],
            [
              "Pill",
              "Purple-50 background, purple-600 text, rounded-full",
              "Compact filter switching",
            ],
            [
              "Navigation",
              "Purple-50 background with 24px icon above label",
              "Bottom tab bar (mobile)",
            ],
            [
              "Enclosed",
              "Connected border tabs, active tab merges with content area",
              "Panel switching with visible boundary",
            ],
          ]}
        />

        <ul>
          <li>
            <strong>Sizes:</strong> sm (12px font, py-4px px-12px), md (14px
            font, py-8px px-16px).
          </li>
          <li>
            <strong>Transitions:</strong> colour 200ms ease-in-out-cubic.
          </li>
        </ul>
      </FadeIn>

      {/* ── Accordion ────────────────────────────────────────── */}
      <FadeIn>
        <h2>Accordion</h2>
        <p>Collapsible content sections with animated reveal.</p>
        <ul>
          <li>
            <strong>Trigger:</strong> 16px (body-md), Medium 500. Hover: text
            turns purple (color-primary).
          </li>
          <li>
            <strong>Chevron:</strong> rotates 180deg on open, 200ms ease-out-quad.
          </li>
          <li>
            <strong>Content:</strong> max-height animates from 0 to scrollHeight,
            200ms ease-out-quad.
          </li>
          <li>
            <strong>Item separator:</strong> 1px solid grey-200 (border-subtle).
          </li>
        </ul>
      </FadeIn>

      {/* ── Foundation tokens ─────────────────────────────────── */}
      <FadeIn>
        <h2>Foundation token summary</h2>
        <p>
          Compact reference for the tokens that components consume. Full details
          on each Foundation page.
        </p>

        <h3>Border radius</h3>
        <PageTable
          caption="Radius scale"
          headers={["Token", "Value", "Used by"]}
          rows={[
            ["radius-sm", "4px", "Nested insets, checkboxes"],
            ["radius-md", "6px", "Checkboxes"],
            ["radius-lg", "8px", "Options, table cells"],
            ["radius-xl", "10px", "Tooltips"],
            ["radius-2xl", "12px", "General"],
            ["radius-3xl", "16px", "Alerts"],
            ["radius-4xl", "20px", "Cards, dialogs, drawers, toasts"],
            ["radius-full", "9999px", "Buttons, inputs, pills, badges"],
          ]}
        />

        <h3>Shadows</h3>
        <PageTable
          caption="Shadow scale (light theme)"
          headers={["Tier", "Value", "Semantic alias"]}
          rows={[
            ["xs", "0 1px 2px rgba(0,0,0,0.04)", "shadow-subtle"],
            ["sm", "0 1px 4px rgba(0,0,0,0.06)", "—"],
            ["md", "0 2px 8px rgba(0,0,0,0.06)", "—"],
            ["lg", "0 2px 16px 4px rgba(0,0,0,0.04)", "shadow-card, shadow-dropdown"],
            ["xl", "0 4px 24px rgba(0,0,0,0.10)", "shadow-modal"],
            ["2xl", "0 8px 32px rgba(0,0,0,0.14)", "—"],
            ["border", "0 0 0 1px rgba(0,0,0,0.08)", "—"],
          ]}
        />

        <h3>Z-index</h3>
        <PageTable
          caption="Z-index scale"
          headers={["Token", "Value", "Use"]}
          rows={[
            ["z-dropdown", "100", "Dropdown menus, selects"],
            ["z-sticky", "150", "Sticky headers"],
            ["z-modal", "200", "Modal dialogs"],
            ["z-tooltip", "300", "Tooltips, popovers"],
            ["z-toast", "400", "Toast notifications"],
          ]}
        />

        <h3>Easing curves</h3>
        <PageTable
          caption="Named easing functions"
          headers={["Name", "Value", "Use"]}
          rows={[
            [
              "ease-out-quad",
              "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              "Standard exit, accordion",
            ],
            [
              "ease-out-cubic",
              "cubic-bezier(0.215, 0.61, 0.355, 1)",
              "Dropdown/modal enter, alerts",
            ],
            [
              "ease-out-quart",
              "cubic-bezier(0.165, 0.84, 0.44, 1)",
              "Dialog/toast enter",
            ],
            [
              "ease-in-out-cubic",
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              "Tab transitions, on-screen movement",
            ],
            [
              "ease-in-out-quart",
              "cubic-bezier(0.77, 0, 0.175, 1)",
              "Emphatic transitions",
            ],
          ]}
        />

        <h3>Named animations</h3>
        <PageTable
          caption="Keyframe animations"
          headers={["Name", "Duration", "Use"]}
          rows={[
            ["acko-dot-wave", "1.2s, infinite", "Button loading dots"],
            ["acko-dialog-in", "250ms, ease-out-quart", "Dialog panel entrance"],
            ["acko-toast-in", "250ms, ease-out-quart", "Toast entrance"],
            [
              "acko-alert-slide-up",
              "300ms, ease-out-cubic",
              "Alert entrance",
            ],
            [
              "acko-text-input-shake",
              "300ms, ease-out",
              "Input error feedback",
            ],
            [
              "acko-text-input-check-pop",
              "300ms, ease-out",
              "Input success checkmark",
            ],
          ]}
        />

        <h3>Other tokens</h3>
        <ul>
          <li>
            <strong>Hairline border:</strong> 1px on standard displays, 0.5px on
            retina (via <code>min-device-pixel-ratio: 2</code>).
          </li>
          <li>
            <strong>Focus ring:</strong>{" "}
            <code>0 0 0 3px color-primary-ring</code> (purple-200 light,
            purple-800 dark).
          </li>
          <li>
            <strong>Minimum touch target:</strong> 44px.
          </li>
          <li>
            <strong>Opacity scale:</strong> 24 steps from 0% to 100% (0, 2, 4,
            6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 64, 72,
            80, 88, 96, 100).
          </li>
        </ul>
      </FadeIn>

      {/* ── Theming ──────────────────────────────────────────── */}
      <FadeIn>
        <h2>Theming</h2>
        <p>
          Light theme by default. Dark theme via{" "}
          <code>[data-theme=&quot;dark&quot;]</code>.
        </p>
        <ul>
          <li>
            Semantic tokens remap across themes — components never reference
            primitives.
          </li>
          <li>
            Dark mode: primary shifts to purple-500, surfaces to grey-650–750,
            shadows are heavier.
          </li>
          <li>
            Feedback colours shift to 400–500 tier for dark contrast.
          </li>
          <li>
            Button hover in dark: goes lighter (purple-600 instead of darker).
          </li>
        </ul>
      </FadeIn>

      {/* ── Breakpoints ──────────────────────────────────────── */}
      <FadeIn>
        <h2>Responsive breakpoints</h2>
        <PageTable
          caption="Breakpoints"
          headers={["Name", "Range", "Gutter"]}
          rows={[
            ["Mobile", "0–767px (base styles)", "16px"],
            ["Tablet", "768–1023px", "32px"],
            ["Desktop", "≥1024px", "40px"],
          ]}
        />
        <p>
          Container max-width: 1280px. Mobile-first only — never use{" "}
          <code>max-width</code> media queries.
        </p>
      </FadeIn>

      {/* ── Links ────────────────────────────────────────────── */}
      <FadeIn>
        <h2>Component library</h2>
        <p>
          The production React component library consumes all tokens documented
          here.
        </p>
        <ResourceCards
          resources={[
            {
              title: "Storybook playground",
              href: "https://mo-fahiz.github.io/Acko-Design-system/",
              meta: "Live interactive component demos",
            },
            {
              title: "About ACKO",
              href: "/principles",
              meta: "Brand personality and four traits",
            },
            {
              title: "Foundations",
              href: "/foundations",
              meta: "Colour, type, spacing, motion, imagery",
            },
            {
              title: "Patterns",
              href: "/patterns",
              meta: "Recurring layouts and interactions",
            },
          ]}
        />
      </FadeIn>
    </article>
  );
}
