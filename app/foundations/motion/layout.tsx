import type { ReactNode } from "react";
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
      <PageHeader
        eyebrow="Foundation"
        title="Motion"
        description="A unified motion system for consistent, smooth, and meaningful UI animations. Purposeful, consistent, premium, fluid — every animation in product resolves to a shared timing and curve."
        lastUpdated="April 27, 2026"
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
