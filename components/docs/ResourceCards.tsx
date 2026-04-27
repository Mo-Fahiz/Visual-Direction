import Link from "next/link";

export type Resource = {
  title: string;
  href: string;
  /** "GitHub", "Figma", "Tokens (.json)", etc. */
  meta?: string;
  /** Set true when the link points outside the docs site */
  external?: boolean;
};

type Props = {
  resources: Resource[];
};

/**
 * Card grid for related links — full card is one hit target, no list bullets
 * or prose underlines (see .ds-resource-card in globals.css).
 */
export function ResourceCards({ resources }: Props) {
  return (
    <ul
      className="ds-resource-grid not-prose mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {resources.map((r) => {
        const isExternal = r.external ?? r.href.startsWith("http");
        const Tag: typeof Link | "a" = isExternal ? "a" : Link;
        return (
          <li key={r.href} className="h-full">
            <Tag
              href={r.href}
              {...(isExternal
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className="ds-resource-card group flex h-full min-h-[7.5rem] flex-col rounded-xl border border-border bg-white p-5 no-underline shadow-sm transition-[border-color,box-shadow,transform] duration-150 outline-none hover:-translate-y-0.5 hover:border-[var(--acko-purple)] hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--acko-purple)] focus-visible:ring-offset-2"
            >
              <div className="flex grow flex-col gap-1">
                <p className="text-base font-semibold tracking-tight text-foreground">
                  {r.title}
                </p>
                {r.meta ? (
                  <p className="text-xs font-medium uppercase leading-snug tracking-[0.1em] text-[var(--acko-muted)]">
                    {r.meta}
                  </p>
                ) : null}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  aria-hidden
                  className="text-xs font-medium text-[var(--acko-muted)] transition-colors group-hover:text-foreground"
                >
                  {isExternal ? "Open" : "Go"}
                </span>
                <span
                  aria-hidden
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-[var(--acko-cream)] text-foreground transition-[background,border-color,transform] group-hover:border-[var(--acko-purple)] group-hover:bg-white group-focus-visible:translate-x-0.5"
                >
                  {isExternal ? "↗" : "→"}
                </span>
              </div>
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}
