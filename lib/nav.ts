export type NavItem = {
  title: string;
  /** Optional. Groups without an href render as toggle-only headers. */
  href?: string;
  /** Davies-style section index, e.g. "01". Optional; new IA drops indices. */
  index?: string;
  children?: NavItem[];
  /** If true, the section starts open by default. Otherwise collapsed. */
  defaultOpen?: boolean;
};

/**
 * Primary navigation — Scope Audit IA.
 *
 * Six top-level groups, none with their own landing page. Clicking the
 * group label only toggles expansion; only leaf items navigate.
 */
export const primaryNav: NavItem[] = [
  {
    title: "Brand identity",
    children: [
      { title: "About ACKO", href: "/principles" },
      { title: "Logo usage", href: "/foundations/logo" },
      { title: "Brand architecture", href: "/brand/architecture" },
      { title: "Naming conventions", href: "/brand/naming" },
      { title: "Co-branding", href: "/brand/co-branding" },
    ],
  },
  {
    title: "Design system foundations",
    defaultOpen: true,
    children: [
      { title: "Colour", href: "/foundations/color" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Border radii", href: "/foundations/radii" },
      { title: "Shadows", href: "/foundations/shadows" },
      { title: "Motion", href: "/foundations/motion" },
      { title: "Layout and grid", href: "/foundations/layout" },
      { title: "Dark mode", href: "/foundations/color/dark-mode" },
      { title: "Data visualisation", href: "/foundations/data-viz" },
    ],
  },
  {
    title: "Media, content & voice",
    children: [
      { title: "Imagery", href: "/foundations/imagery" },
      { title: "Photography direction", href: "/foundations/imagery/photography" },
      { title: "Iconography", href: "/foundations/iconography" },
      { title: "Illustration", href: "/foundations/illustration" },
      { title: "Asset creation", href: "/foundations/asset-creation" },
      { title: "Voice and tone", href: "/foundations/voice" },
    ],
  },
  {
    title: "Components & patterns",
    children: [
      { title: "Atoms", href: "/ui-kit" },
      { title: "Molecules", href: "/patterns" },
      { title: "CTA hierarchy", href: "/foundations/cta-hierarchy" },
      { title: "Forms", href: "/patterns/forms" },
      { title: "Onboarding", href: "/patterns/pages/onboarding" },
      { title: "Checkout", href: "/patterns/pages/checkout" },
      { title: "Policy detail", href: "/patterns/pages/policy-detail" },
      { title: "Empty state", href: "/patterns/pages/empty-state" },
      { title: "Error page", href: "/patterns/pages/error" },
      { title: "Settings", href: "/patterns/pages/settings" },
    ],
  },
  {
    title: "Brand application",
    children: [
      { title: "Overview", href: "/foundations/brand-application" },
      { title: "Social media", href: "/foundations/brand-application/social-media" },
      { title: "Email & notifications", href: "/foundations/brand-application/email" },
      { title: "Print & OOH", href: "/foundations/brand-application/print-ooh" },
      { title: "Presentations", href: "/foundations/brand-application/presentations" },
    ],
  },
  {
    title: "Governance & onboarding",
    children: [
      { title: "Getting started", href: "/getting-started" },
      { title: "Accessibility", href: "/foundations/accessibility" },
      { title: "Contributing", href: "/resources/contributing" },
      { title: "Resources", href: "/resources" },
      { title: "Changelog", href: "/resources/changelog" },
    ],
  },
];

/** Kept for backwards compatibility with older imports; intentionally empty. */
export const kitNav: NavItem[] = [];

/** Resource nav folded into Governance group; kept empty for legacy imports. */
export const resourceNav: NavItem[] = [];
