import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DoDont } from "@/components/docs/DoDont";
import { PageHeader } from "@/components/docs/PageHeader";
import { getPrinciple, principles } from "@/lib/principles";

type Props = { params: Promise<{ slug: string }> };

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

  return (
    <article className="doc-prose">
      <PageHeader title={p.title} lastUpdated="April 27, 2026" />

      <section>
        <h2>Definition</h2>
        <p className="text-base font-medium text-foreground">{p.definition}</p>
      </section>

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

      <DoDont doItems={p.doDont.do} dontItems={p.doDont.dont} />

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
        </ul>
      </section>
    </article>
  );
}
