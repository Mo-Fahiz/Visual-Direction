import Link from "next/link";

export default function HomePage() {
  return (
    <div className="md:-mt-2">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-end">
        <div>
          <ul className="ds-hero-tags">
            <li>
              <Link href="/principles">Principles</Link>
            </li>
            <li>
              <Link href="/visual-direction">Visual direction</Link>
            </li>
            <li>
              <Link href="/foundations">Foundations</Link>
            </li>
          </ul>
          <h1 className="ds-display-hero">
            ACKO
            <span className="text-accent">_</span>
          </h1>
        </div>
        <div className="flex flex-col gap-8 pb-1">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
              <p className="ds-has-dot ds-caption font-medium uppercase tracking-[0.08em] text-foreground">
                <span className="ds-br-dot" aria-hidden />
                Source of truth
              </p>
              <span className="ds-caption text-muted">Docs</span>
            </div>
            <p className="ds-muted-block">
              Principles and visual direction first—how ACKO should feel before you open
              the UI kit. What you read here is authoritative; Figma and code follow.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/get-started" className="ds-btn-fill w-fit">
              Get started
            </Link>
            <Link href="/visual-direction" className="ds-btn-outline w-fit">
              Visual direction
            </Link>
          </div>
          <p className="ds-caption text-muted">
            <span className="font-medium text-foreground">
              Precise when choosing. Warm when you need us.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
