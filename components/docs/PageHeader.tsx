import { LastUpdated } from "./LastUpdated";

type PageHeaderProps = {
  title: string;
  description?: string;
  lastUpdated?: string;
  /** Davies-style label with purple dot, e.g. "Page" */
  eyebrow?: string;
};

export function PageHeader({
  title,
  description,
  lastUpdated,
  eyebrow,
}: PageHeaderProps) {
  return (
    <header className="mb-10 border-b border-border pb-8">
      {eyebrow ? (
        <p className="ds-has-dot ds-caption mb-4 font-medium uppercase tracking-[0.1em] text-muted">
          <span className="ds-br-dot" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[2.5rem] md:leading-tight">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {lastUpdated ? <LastUpdated date={lastUpdated} className="mt-4" /> : null}
    </header>
  );
}
