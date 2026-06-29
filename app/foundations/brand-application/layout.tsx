import type { ReactNode } from "react";
import { PageTabs } from "@/components/docs/PageTabs";

const tabs = [
  { label: "Overview", href: "/foundations/brand-application" },
  { label: "Social media", href: "/foundations/brand-application/social-media" },
  { label: "Email & notifications", href: "/foundations/brand-application/email" },
  { label: "Print & OOH", href: "/foundations/brand-application/print-ooh" },
  { label: "Presentations", href: "/foundations/brand-application/presentations" },
];

export default function BrandApplicationLayout({ children }: { children: ReactNode }) {
  return (
    <article className="doc-prose">
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
