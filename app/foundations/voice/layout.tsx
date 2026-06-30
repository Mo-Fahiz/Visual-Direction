import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
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
    <article>
      <Breadcrumbs
        trail={[
          { label: "Media, content & voice" },
          { label: "Voice and tone" },
        ]}
      />
      <PageHeader
        title="Voice and Tone"
        description="How ACKO sounds across UI, email, and support — grounded in the four ACKO traits with tone that shifts naturally by context."
      />
      <PageTabs tabs={tabs} />
      {children}
    </article>
  );
}
