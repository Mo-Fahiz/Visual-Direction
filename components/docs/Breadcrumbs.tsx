import Link from "next/link";

export type Crumb = {
  /** Display label. */
  label: string;
  /** If omitted, the crumb renders as the current page (non-link). */
  href?: string;
};

type Props = {
  trail: Crumb[];
};

/**
 * Inner-page breadcrumbs. Renders above PageHeader on nested routes.
 * Last crumb has no href and is styled as the current page.
 *
 * Example:
 *   <Breadcrumbs trail={[
 *     { label: "Brand", href: "/brand/architecture" },
 *     { label: "Co-branding" },
 *   ]} />
 */
export function Breadcrumbs({ trail }: Props) {
  if (!trail.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="not-prose -mt-2 mb-6 flex flex-wrap items-center gap-1.5 text-[13px] leading-5 text-[#5C616B]"
    >
      {trail.map((crumb, i) => {
        const isLast = i === trail.length - 1;
        return (
          <span key={`${crumb.label}-${i}`} className="flex items-center gap-1.5">
            {crumb.href && !isLast ? (
              <Link
                href={crumb.href}
                className="rounded-sm transition-colors hover:text-[#6841E6] focus-visible:text-[#6841E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6841E6]/30"
              >
                {crumb.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-[#1F1F23]">
                {crumb.label}
              </span>
            )}
            {!isLast ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden
                className="text-[#9CA0AB]"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </span>
        );
      })}
    </nav>
  );
}
