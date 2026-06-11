import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { FadeIn } from "@/components/docs/FadeIn";

export const metadata: Metadata = {
  title: "Shadows",
};

const TIERS = [
  { name: "xs",  shadow: "0 1px 2px rgba(0,0,0,0.04)",          use: "Subtle depth" },
  { name: "sm",  shadow: "0 1px 4px rgba(0,0,0,0.06)",          use: "Light elevation" },
  { name: "md",  shadow: "0 2px 8px rgba(0,0,0,0.06)",          use: "Medium elevation" },
  { name: "lg",  shadow: "0 2px 16px 4px rgba(0,0,0,0.04)",     use: "Cards, dropdowns" },
  { name: "xl",  shadow: "0 4px 24px rgba(0,0,0,0.10)",         use: "Modals, dialogs" },
  { name: "2xl", shadow: "0 8px 32px rgba(0,0,0,0.14)",         use: "Maximum elevation" },
];

const ALIASES = [
  { token: "shadowCard",     maps: "shadowLg", use: "Elevated cards" },
  { token: "shadowDropdown", maps: "shadowLg", use: "Dropdown menus, popovers" },
  { token: "shadowModal",    maps: "shadowXl", use: "Modals, dialogs" },
  { token: "shadowSubtle",   maps: "shadowXs", use: "Small element depth" },
];

const COMPONENT = [
  { token: "shadowBtnInner",          value: "inset 0 1px 2px rgba(255,255,255,0.28)",                                use: "Primary / secondary buttons" },
  { token: "shadowBtnHover",          value: "0 4px 8px rgba(0,0,0,0.08)",                                            use: "Button hover" },
  { token: "shadowBtnSecondaryHover", value: "inset 0 2px 4px rgba(255,255,255,0.48)",                                use: "Secondary hover" },
  { token: "shadowFocusRing",         value: "0 0 0 3px var(--colorPrimaryRing)",                                     use: "All focusable elements" },
  { token: "shadowNav",               value: "0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",          use: "Navbar — floating container" },
];

export default function ShadowsPage() {
  return (
    <article>
      <PageHeader
        title="Shadows"
        description="Six elevation tiers, four semantic aliases. Always diffused, never harsh — depth that supports without shouting."
      />

      {/* ── Tier specimens ────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Elevation tiers
          </h2>
          <div className="rounded-[14px] bg-[#FAFAFB] p-8">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {TIERS.map((t) => (
                <div key={t.name} className="group">
                  <div
                    className="flex h-32 items-center justify-center rounded-[14px] bg-white transition-transform duration-200 group-hover:-translate-y-1"
                    style={{ boxShadow: t.shadow }}
                  >
                    <code className="font-mono text-[13px] font-medium text-[#1F1F23]">
                      shadow-{t.name}
                    </code>
                  </div>
                  <p className="mt-3 text-center text-[12px] text-[#5C616B]">
                    {t.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Semantic aliases ──────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-2 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Semantic aliases
          </h2>
          <p className="mb-6 max-w-[620px] text-[14px] leading-relaxed text-[#5C616B]">
            Use these in component CSS — never reach for raw tiers. The alias
            tells the next reader what the shadow is *for*.
          </p>
          <div className="overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white">
            <table className="w-full">
              <thead className="bg-[#FAFAFB]">
                <tr>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Token
                  </th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Maps to
                  </th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Use
                  </th>
                </tr>
              </thead>
              <tbody>
                {ALIASES.map((row) => (
                  <tr
                    key={row.token}
                    className="border-t border-[#ECEDF0] transition-colors duration-150 hover:bg-[#FAFAFB]"
                  >
                    <td className="px-6 py-3.5 font-mono text-[13px] text-[#1F1F23]">
                      {row.token}
                    </td>
                    <td className="px-6 py-3.5 font-mono text-[12px] text-[#5C616B]">
                      {row.maps}
                    </td>
                    <td className="px-6 py-3.5 text-[13px] text-[#5C616B]">
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeIn>

      {/* ── Component shadows ─────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16">
          <h2 className="mb-6 text-[20px] font-semibold tracking-tight text-[#1F1F23]">
            Component shadows
          </h2>
          <div className="overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white">
            <table className="w-full">
              <thead className="bg-[#FAFAFB]">
                <tr>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Token
                  </th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Value
                  </th>
                  <th className="px-6 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-[#5C616B]">
                    Used by
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPONENT.map((row) => (
                  <tr
                    key={row.token}
                    className="border-t border-[#ECEDF0] transition-colors duration-150 hover:bg-[#FAFAFB]"
                  >
                    <td className="px-6 py-3.5 font-mono text-[13px] text-[#1F1F23]">
                      {row.token}
                    </td>
                    <td className="px-6 py-3.5 font-mono text-[11px] text-[#5C616B]">
                      {row.value}
                    </td>
                    <td className="px-6 py-3.5 text-[13px] text-[#5C616B]">
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </FadeIn>

      {/* ── Rules ─────────────────────────────────────────────── */}
      <FadeIn>
        <section className="not-prose mt-16 rounded-[14px] border border-[#E4E5E9] bg-[#F5F3FF] p-8">
          <h2 className="text-[18px] font-semibold tracking-tight text-[#1F1F23]">
            Rules
          </h2>
          <ul className="mt-3 space-y-2 text-[14px] leading-relaxed text-[#1F1F23]">
            <li>— Never use harsh drop shadows. Keep them diffused.</li>
            <li>— Prefer box-shadow over border for hairline edges.</li>
            <li>— Reach for semantic aliases first; raw tiers only when there&apos;s no fit.</li>
            <li>— Dark mode shadows are heavier — the tokens swap, the role stays.</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/foundations/radii"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Border radii
            </Link>
            <Link
              href="/ui-kit"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#6841E6] px-5 py-2 text-[13px] font-medium text-[#6841E6] transition-colors hover:bg-[#6841E6] hover:text-white"
            >
              Atoms
            </Link>
          </div>
        </section>
      </FadeIn>
    </article>
  );
}
