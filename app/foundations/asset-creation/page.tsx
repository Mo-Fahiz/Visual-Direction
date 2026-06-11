import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { ResourceCards } from "@/components/docs/ResourceCards";
import { imageryModes } from "@/lib/asset-tokens";

export const metadata: Metadata = {
  title: "Asset creation",
};

export default function AssetCreationPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation"
        title="Asset creation"
        description="An AI-first framework for producing brand-consistent images, videos, and collateral. Three imagery modes, a scene library of 16 ready-to-use prompts, and template specs for every touchpoint — all grounded in the ACKO visual direction."
        lastUpdated="May 12, 2026"
      />

      <Section
        id="modes"
        title="Three modes, one system"
        description="Every visual asset starts by choosing a mode. The mode sets colour grading, composition, and prompt architecture."
      >
        <div className="not-prose mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {imageryModes.map((m) => (
            <div
              key={m.id}
              className="rounded-[10px] border border-border bg-white p-5 shadow-sm"
            >
              <div
                className="mb-3 h-3 w-12 rounded-full"
                style={{ backgroundColor: m.accentColor }}
              />
              <p className="text-sm font-medium text-foreground">{m.title}</p>
              <p className="mt-1 text-sm text-muted">{m.when}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="whats-inside"
        title="What's inside"
        description="Each sub-page covers a specific dimension of asset creation."
      >
        <ResourceCards
          resources={[
            {
              title: "Image generation",
              href: "/foundations/asset-creation/image-generation",
              meta: "Modes, colour grading, prompt templates",
            },
            {
              title: "Scene library",
              href: "/foundations/asset-creation/scenes",
              meta: "16 pre-written scenes across 5 categories",
            },
            {
              title: "Video direction",
              href: "/foundations/asset-creation/video",
              meta: "Pacing, transitions, music mood",
            },
            {
              title: "Templates",
              href: "/foundations/asset-creation/templates",
              meta: "Email, banner, print, social specs",
            },
            {
              title: "AI integration",
              href: "/foundations/asset-creation/ai-integration",
              meta: "Model adapters, negative anchors",
            },
          ]}
        />
      </Section>
    </article>
  );
}
