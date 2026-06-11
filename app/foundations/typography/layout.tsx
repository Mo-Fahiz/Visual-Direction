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
        title="Typography"
        description="Euclid Circular B powers the product. A 15-step size ramp and a set of semantic type styles keep hierarchy consistent across every screen."
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
