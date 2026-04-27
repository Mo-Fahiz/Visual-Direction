import type { ReactNode } from "react";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTabs } from "@/components/docs/PageTabs";

const tabs = [
  { label: "Overview", href: "/foundations/typography" },
  { label: "Types", href: "/foundations/typography/types" },
  { label: "Usage", href: "/foundations/typography/usage" },
  { label: "Code", href: "/foundations/typography/code" },
];

export default function TypographyLayout({ children }: { children: ReactNode }) {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation"
        title="Typography"
        description="Euclid Circular B powers the product; a 15-step size ramp and semantic type styles keep hierarchy consistent. This section mirrors Carbon-style documentation: overview, typeset specimens, usage rules, and implementation."
        lastUpdated="April 27, 2026"
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
