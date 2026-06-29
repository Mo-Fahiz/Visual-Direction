import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTabs } from "@/components/docs/PageTabs";

const tabs = [
  { label: "Overview", href: "/foundations/motion" },
  { label: "Tokens", href: "/foundations/motion/tokens" },
  { label: "Usage", href: "/foundations/motion/usage" },
  { label: "Code", href: "/foundations/motion/code" },
];

export default function MotionLayout({ children }: { children: ReactNode }) {
  return (
    <article className="doc-prose">
      <Breadcrumbs
        trail={[{ label: "Media, content & voice" }, { label: "Motion" }]}
      />
      <PageHeader
        title="Motion"
        description="A unified motion system for consistent, smooth, and meaningful UI animations. Purposeful, consistent, premium, fluid — every animation in product resolves to a shared timing and curve."
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
