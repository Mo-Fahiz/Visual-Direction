import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/PageHeader";
import { Section } from "@/components/docs/Section";
import { sceneLibrary } from "@/lib/asset-tokens";

export const metadata: Metadata = {
  title: "Scene library",
};

const categories = [
  { id: "auto" as const, label: "Auto", color: "#F4A024" },
  { id: "health" as const, label: "Health", color: "#EC5FAB" },
  { id: "life" as const, label: "Life", color: "#1EB7E7" },
  { id: "travel" as const, label: "Travel", color: "#55B94D" },
  { id: "general" as const, label: "General", color: "#6841E6" },
];

export default function ScenesPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow="Foundation · Asset creation"
        title="Scene library"
        description="16 pre-written scenes covering common insurance moments across Auto, Health, Life, Travel, and General. Each scene includes a recommended imagery mode and a ready-to-use prompt."
        lastUpdated="May 12, 2026"
      />

      {categories.map((cat) => {
        const scenes = sceneLibrary.filter((s) => s.category === cat.id);
        if (scenes.length === 0) return null;
        return (
          <Section key={cat.id} id={cat.id} title={cat.label}>
            <div className="not-prose mt-4 space-y-4">
              {scenes.map((scene) => (
                <div
                  key={scene.id}
                  className="rounded-[10px] border border-border bg-white shadow-sm overflow-hidden"
                >
                  <div className="flex items-center gap-2 border-b border-border bg-[#fafaf8] px-5 py-3">
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {scene.scenario}
                    </span>
                    <span className="ml-auto rounded-full bg-[#f0f0f0] px-2.5 py-0.5 text-[10px] font-medium text-muted">
                      {scene.recommendedMode}
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <p className="text-sm text-muted">{scene.description}</p>
                    <div className="rounded-lg border border-border bg-[#1a1a1a] p-4">
                      <code className="text-sm leading-relaxed text-[#e0e0e0] whitespace-pre-wrap">
                        {scene.prompt}
                      </code>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        );
      })}
    </article>
  );
}
