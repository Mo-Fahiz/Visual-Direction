import type { ReactNode } from "react";
import { PageHeader } from "@/components/docs/PageHeader";
import { PageTabs } from "@/components/docs/PageTabs";

const tabs = [
  { label: "Overview", href: "/foundations/voice" },
  { label: "Vocabulary", href: "/foundations/voice/vocabulary" },
  { label: "Patterns", href: "/foundations/voice/patterns" },
  { label: "Examples", href: "/foundations/voice/examples" },
];

export default function VoiceLayout({ children }: { children: ReactNode }) {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation"
        title="Voice & tone"
        description="How ACKO sounds across UI, email, and support — grounded in the four principles with tone that shifts naturally by context."
        lastUpdated="May 12, 2026"
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
