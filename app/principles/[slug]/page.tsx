import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { DoDontVisual } from "@/components/showcase/DoDontVisual";
import { MockFrame } from "@/components/showcase/MockFrame";
import {
  ClearNot,
  ClearYes,
  EffortNot,
  EffortYes,
  PresentNot,
  PresentYes,
  RespNot,
  RespYes,
} from "@/components/showcase/mocks/principle-mocks";
import { getPrinciple, principles, type Principle } from "@/lib/principles";
import { principleAccent } from "@/lib/showcase-tokens";

type Props = { params: Promise<{ slug: string }> };

const mocks: Record<Principle["slug"], { not: ReactNode; yes: ReactNode }> = {
  "clear-over-clever": { not: <ClearNot />, yes: <ClearYes /> },
  "effortless-by-default": { not: <EffortNot />, yes: <EffortYes /> },
  "present-when-it-matters": { not: <PresentNot />, yes: <PresentYes /> },
  "respectful-of-time": { not: <RespNot />, yes: <RespYes /> },
};

export function generateStaticParams() {
  return principles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPrinciple(slug);
  if (!p) return { title: "Principle" };
  return { title: p.shortTitle };
}

export default async function PrincipleDetailPage({ params }: Props) {
  const { slug } = await params;
  const p = getPrinciple(slug);
  if (!p) notFound();

  const accent = principleAccent[p.slug as keyof typeof principleAccent];
  const visual = mocks[p.slug as keyof typeof mocks];

  return (
    <article className="doc-prose">
      <PageHeader
        eyebrow={p.tagline}
        title={p.title}
        description={p.definition}
        lastUpdated="April 27, 2026"
      />

      <div className="not-prose mt-2">
        <MockFrame
          aspect="21/9"
          description={p.hero.description}
          brief={p.hero.brief}
          mood={p.hero.mood}
          color={p.hero.color}
        />
      </div>

      <section>
        <h2>Signals in the work</h2>
        <ul>
          {p.signals.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Precision vs warmth</h2>
        <p>
          <strong>Precision:</strong> {p.precisionVsWarmth.precision}
        </p>
        <p>
          <strong>Warmth:</strong> {p.precisionVsWarmth.warmth}
        </p>
      </section>

      <section>
        <h2>In the product</h2>
        <p className="text-muted">
          A real comparison of two product moments — the anti-pattern on the left,
          the principle applied on the right.
        </p>
        {visual && (
          <DoDontVisual
            not={visual.not}
            yes={visual.yes}
            accent={accent.color}
            accentSoft={accent.soft}
            accentBg={accent.bg}
            notCaption={p.visualCaptions.not}
            yesCaption={p.visualCaptions.yes}
          />
        )}
      </section>

      <section>
        <h2>Rules of thumb</h2>
        <DoDont doItems={p.doDont.do} dontItems={p.doDont.dont} />
      </section>

      <section>
        <h2>QA / review prompts</h2>
        <ul>
          {p.reviewPrompts.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Related</h2>
        <ul>
          <li>
            <Link href="/principles">All principles</Link>
          </li>
          <li>
            <Link href="/visual-direction">Visual direction</Link>
          </li>
          <li>
            <Link href="/foundations">Foundations</Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
