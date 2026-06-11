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
  { title: "About ACKO", href: "/principles" },
  {
    title: "Design system",
    href: "/foundations",
    defaultOpen: true,
    children: [
      { title: "Colour", href: "/foundations/color" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Border radii", href: "/foundations/radii" },
      { title: "Shadows", href: "/foundations/shadows" },
      { title: "Atoms", href: "/ui-kit" },
      { title: "Molecules", href: "/patterns" },
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
  { title: "Voice and Tone", href: "/foundations/voice" },
  { title: "Accessibility", href: "/foundations/accessibility" },
];

/** Kept for backwards compatibility with older imports; intentionally empty. */
export const kitNav: NavItem[] = [];

export const resourceNav: NavItem[] = [
  { title: "Changelog", href: "/resources/changelog" },
];
