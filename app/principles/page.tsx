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

      <ul className="not-prose mt-6 space-y-4">
        {principles.map((p) => (
          <li
            key={p.slug}
            className="rounded-xl border border-border bg-white p-5 shadow-sm"
          >
            <Link
              href={`/principles/${p.slug}`}
              className="text-lg font-semibold text-accent hover:underline"
            >
              {p.title}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-[#333]">{p.definition}</p>
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
