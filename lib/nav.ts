export type NavItem = {
  title: string;
  href: string;
  /** Davies-style section index, e.g. "01". Optional; new IA drops indices. */
  index?: string;
  children?: NavItem[];
  /** If true, the section starts open by default. Otherwise collapsed. */
  defaultOpen?: boolean;
};

/**
 * Primary navigation — matches the floating sidebar reference design.
 * About ACKO is the principles page. Design system groups the foundations
 * + atoms/molecules. Media collects imagery/iconography/motion/asset work.
 */
export const primaryNav: NavItem[] = [
  { title: "Getting started", href: "/getting-started" },
  { title: "About ACKO", href: "/principles" },
  {
    title: "Design system",
    href: "/foundations",
    defaultOpen: true,
    children: [
      { title: "Logo", href: "/foundations/logo" },
      { title: "Colour", href: "/foundations/color" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Layout and grid", href: "/foundations/layout" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Border radii", href: "/foundations/radii" },
      { title: "Shadows", href: "/foundations/shadows" },
      { title: "CTA hierarchy", href: "/foundations/cta-hierarchy" },
      { title: "Atoms", href: "/ui-kit" },
    ],
  },
  {
    title: "Patterns",
    href: "/patterns",
    defaultOpen: false,
    children: [
      { title: "Card", href: "/patterns/card" },
      { title: "Dialog", href: "/patterns/dialog" },
      { title: "Dropdown", href: "/patterns/dropdown" },
      { title: "Tabs", href: "/patterns/tabs" },
      { title: "Toast", href: "/patterns/toast" },
      { title: "Form field", href: "/patterns/form-field" },
      { title: "Onboarding", href: "/patterns/pages/onboarding" },
      { title: "Checkout", href: "/patterns/pages/checkout" },
      { title: "Policy detail", href: "/patterns/pages/policy-detail" },
      { title: "Empty state", href: "/patterns/pages/empty-state" },
      { title: "Error page", href: "/patterns/pages/error" },
      { title: "Settings", href: "/patterns/pages/settings" },
    ],
  },
  {
    title: "Media",
    href: "/foundations/imagery",
    defaultOpen: false,
    children: [
      { title: "Imagery", href: "/foundations/imagery" },
      { title: "Iconography", href: "/foundations/iconography" },
      { title: "Motion", href: "/foundations/motion" },
      { title: "Asset creation", href: "/foundations/asset-creation" },
    ],
  },
  { title: "Brand application", href: "/foundations/brand-application" },
  { title: "Voice and Tone", href: "/foundations/voice" },
  { title: "Accessibility", href: "/foundations/accessibility" },
  { title: "Resources", href: "/resources" },
];

/** Kept for backwards compatibility with older imports; intentionally empty. */
export const kitNav: NavItem[] = [];

export const resourceNav: NavItem[] = [
  { title: "Changelog", href: "/resources/changelog" },
];
