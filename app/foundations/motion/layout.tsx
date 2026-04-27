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
        description="Motion at ACKO is functional, never decorative. Five curves, six durations, and a small library of named keyframes — every animation in product code resolves to one of these tokens."
        lastUpdated="April 27, 2026"
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
