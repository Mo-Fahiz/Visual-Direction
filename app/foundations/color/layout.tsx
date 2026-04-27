import type { ReactNode } from "react";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTabs } from "@/components/docs/PageTabs";

const tabs = [
  { label: "Overview", href: "/foundations/color" },
  { label: "Tokens", href: "/foundations/color/tokens" },
  { label: "Usage", href: "/foundations/color/usage" },
  { label: "Code", href: "/foundations/color/code" },
];

export default function ColorLayout({ children }: { children: ReactNode }) {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation"
        title="Color"
        description="ACKO's colour system is a layered token architecture: a primitive palette feeds semantic tokens, and components only ever consume the semantic layer. This page is the source of truth for what each colour means and where it shows up."
        lastUpdated="April 27, 2026"
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
