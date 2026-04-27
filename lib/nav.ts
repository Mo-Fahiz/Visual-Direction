export type NavItem = {
  title: string;
  href: string;
  /** Davies-style section index, e.g. "01" */
  index?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { title: "Get started", href: "/get-started", index: "01" },
  { title: "Visual direction", href: "/visual-direction", index: "02" },
  {
    title: "Principles",
    href: "/principles",
    index: "03",
    children: [
      { title: "Clear over clever", href: "/principles/clear-over-clever" },
      { title: "Effortless by default", href: "/principles/effortless-by-default" },
      { title: "Present when it matters", href: "/principles/present-when-it-matters" },
      {
        title: "Respectful of the user's time",
        href: "/principles/respectful-of-time",
      },
    ],
  },
  {
    title: "Foundations",
    href: "/foundations",
    index: "04",
    children: [
      { title: "Color", href: "/foundations/color" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Imagery", href: "/foundations/imagery" },
      { title: "Iconography", href: "/foundations/iconography" },
      { title: "Voice & tone", href: "/foundations/voice" },
    ],
  },
  { title: "Brand story", href: "/brand-story", index: "05" },
  { title: "Develop", href: "/develop", index: "06" },
];

/** Separate track — UI implementation, not the core principles journey */
export const kitNav: NavItem[] = [
  { title: "UI kit", href: "/ui-kit" },
  { title: "Patterns", href: "/patterns" },
];

export const resourceNav: NavItem[] = [
  { title: "Roadmap", href: "/resources/roadmap" },
  { title: "Changelog", href: "/resources/changelog" },
];
