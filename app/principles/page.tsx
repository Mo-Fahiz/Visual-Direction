import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { principles } from "@/lib/principles";

export const metadata: Metadata = {
  title: "Principles",
};

export default function PrinciplesOverviewPage() {
  return (
    <article className="doc-prose">
      <PageHeader
        title="Principles"
        description='We asked: "If ACKO is doing everything right, what should it feel like to the customer?" Responses clustered into four working principles—documented here as the source of truth.'
        lastUpdated="April 27, 2026"
      />

      <blockquote className="not-prose my-8 border-l-4 border-accent bg-white py-4 pl-6 pr-4 text-base italic leading-relaxed text-[#333] shadow-sm">
        If ACKO is doing everything right, what should it feel like to the customer?
      </blockquote>

      <h2>The four principles</h2>
      <p>
        Workshop notes mentioned five clusters; the numbered set below is{" "}
        <strong>four</strong> named principles. Add a fifth when leadership names it;
        until then, treat these four as complete.
      </p>

      <ul className="not-prose mt-6 grid gap-4 md:grid-cols-2">
        {principles.map((p, i) => (
          <li
            key={p.slug}
            className="flex flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-[1px] hover:shadow"
          >
            <span className="ds-caption font-mono text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="ds-caption mt-1 font-medium uppercase tracking-[0.1em] text-accent">
              {p.tagline}
            </p>
            <Link
              href={`/principles/${p.slug}`}
              className="mt-2 text-xl font-semibold leading-snug tracking-tight text-foreground hover:text-accent"
            >
              {p.title}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#333]">
              {p.definition}
            </p>
            <Link
              href={`/principles/${p.slug}`}
              className="ds-caption mt-4 font-medium text-accent hover:underline"
            >
              See it in product →
            </Link>
          </li>
        ))}
      </ul>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/visual-direction">Visual direction</Link> — precision vs warmth.
        </li>
        <li>
          <Link href="/foundations">Foundations</Link> — how principles show up in
          color, type, imagery, and voice.
        </li>
      </ul>
    </article>
  );
}
