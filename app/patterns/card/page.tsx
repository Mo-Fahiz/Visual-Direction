import type { Metadata } from "next";
import { MoleculePage } from "@/components/docs/MoleculeTemplate";

export const metadata: Metadata = {
  title: "Card",
};

export default function CardMoleculePage() {
  return (
    <MoleculePage
      title="Card"
      description="The most common container in the system. Cards group related content, hold a single decision, or surface a single object."
      anatomyLabel="Annotated card with numbered callouts: 1 surface, 2 optional media, 3 title, 4 supporting text, 5 metadata row, 6 action area, 7 outer radius (20px), 8 inner content padding (16–24px)."
      variants={[
        { name: "Default", use: "Generic content container.", notes: "20px radius, hairline border, no shadow." },
        { name: "Elevated", use: "Lifts a card above the page — featured content, primary objects.", notes: "20px radius, no border, soft shadow." },
        { name: "Interactive", use: "The whole card is clickable — list items, navigation cards.", notes: "Adds hover and focus states; cursor becomes pointer." },
        { name: "Selectable", use: "Plan comparison, choice cards, multi-select grids.", notes: "Adds a purple border and check indicator in the selected state." },
      ]}
      props={[
        { name: "variant", type: '"default" | "elevated" | "interactive" | "selectable"', defaultValue: '"default"', description: "Visual variant." },
        { name: "padding", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Inner padding. sm = 12px, md = 16px, lg = 24px." },
        { name: "selected", type: "boolean", defaultValue: "false", description: "For selectable cards — controlled selection state." },
        { name: "onSelect", type: "() => void", description: "Handler for selectable cards." },
        { name: "as", type: '"div" | "a" | "button"', defaultValue: '"div"', description: "Render element. Use a or button for interactive cards." },
      ]}
      behaviour={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Interactive cards have hover, focus, and active states. The whole card is the hit target — not just the title or button inside.</li>
          <li>Focus ring sits on the card border, never on a child element.</li>
          <li>Selectable cards toggle on click and on space/enter.</li>
          <li>Cards never expand or collapse — for that, use an Accordion.</li>
        </ul>
      }
      content={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Title: 1 line, ≤ 60 characters. Sentence case.</li>
          <li>Supporting text: ≤ 140 characters. One idea per card.</li>
          <li>One primary action per card maximum. Secondary actions go in an overflow menu.</li>
          <li>Don&apos;t nest cards inside cards. If you need a sub-group, use a divider.</li>
        </ul>
      }
      accessibility={
        <ul className="list-disc pl-5 text-[0.9375rem] leading-relaxed text-foreground">
          <li>Interactive cards render as <code className="font-mono text-[12px]">&lt;a&gt;</code> or <code className="font-mono text-[12px]">&lt;button&gt;</code> — never a plain div with onClick.</li>
          <li>Focus order follows visual order; tab moves between cards in a grid, not into them.</li>
          <li>If the card has an image, the image is decorative — alt text is empty unless the image carries unique information.</li>
          <li>Touch target: at least 44×44px regardless of card content size.</li>
        </ul>
      }
      doItems={[
        "Use cards for grouping related content or surfacing a single object.",
        "Keep the same padding within a card grid.",
        "Apply the nested-inset rule for inner elements (inner radius = outer − padding).",
        "Use an interactive card when the entire surface should be clickable.",
      ]}
      dontItems={[
        "Nest cards inside cards.",
        "Mix padding sizes within a single card grid.",
        "Add more than one primary action per card.",
        "Use a card just because content needs a border — sometimes a list is right.",
      ]}
      doDontLabel="Two-column comparison. Left: a clean card grid with consistent padding, one CTA per card, nested inner radius. Right: nested cards, two competing CTAs, mismatched inner radius — marked as incorrect."
      related={[
        { href: "/foundations/radii", label: "Border radii", meta: "Outer + nested inset rule" },
        { href: "/foundations/shadows", label: "Shadows", meta: "Elevated variant" },
        { href: "/foundations/spacing", label: "Spacing", meta: "Padding values" },
        { href: "/ui-kit", label: "Atoms", meta: "Buttons and badges used inside cards" },
      ]}
    />
  );
}
