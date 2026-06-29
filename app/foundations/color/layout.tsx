import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTabs } from "@/components/docs/PageTabs";

const tabs = [
  { label: "Overview", href: "/foundations/color" },
  { label: "Tokens", href: "/foundations/color/tokens" },
  { label: "Usage", href: "/foundations/color/usage" },
  { label: "Dark mode", href: "/foundations/color/dark-mode" },
  { label: "Code", href: "/foundations/color/code" },
];

export default function ColorLayout({ children }: { children: ReactNode }) {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[{ label: "Design system foundations" }, { label: "Colour" }]}
      />
      <PageHeader
        title="Colour"
        description="The ACKO primitive palette and how it flows through themes into product UI. This page is the source of truth for what each colour means and where it shows up."
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
