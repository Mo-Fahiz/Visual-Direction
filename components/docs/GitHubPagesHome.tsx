import Link from "next/link";

/**
 * Homepage for GitHub Pages static builds (no `/api/orchestrator`).
 * Full Node deployments can keep using DesignOrchestrator on `/`.
 */
export function GitHubPagesHome() {
  return (
    <article className="mx-auto max-w-[900px] px-4 py-14 md:py-16">
      <p className="ds-caption mb-3 font-medium uppercase tracking-[0.12em] text-muted">
        ACKO Design System
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[2.5rem] md:leading-tight">
        Documentation
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        Principles, visual direction, foundations, and implementation guidance —
        deployed as static HTML on GitHub Pages.
      </p>

      <ul className="not-prose mt-10 grid gap-4 sm:grid-cols-2">
        {[
          { href: "/get-started/", title: "Get started", meta: "Orientation" },
          { href: "/visual-direction/", title: "Visual direction", meta: "Brand system" },
          { href: "/principles/", title: "Principles", meta: "Decision rules" },
          { href: "/foundations/", title: "Foundations", meta: "Tokens & patterns" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted">
                {item.meta}
              </p>
              <p className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </p>
              <span className="mt-4 text-xs font-medium text-[var(--acko-muted)] group-hover:text-foreground">
                Open &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
