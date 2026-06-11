import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type Props = {
  id: string;
  title: string;
  /** Visual scale: h2 (level 2) | h3 (level 3) */
  level?: 2 | 3;
  description?: string;
  children?: ReactNode;
};

/**
 * Section header with id anchor for in-page linking + spacing rhythm.
 * Level-2 sections get a subtle scroll-triggered fade-in.
 * No visible hover affordance — the id is there for bookmark/anchor use only.
 */
export function Section({ id, title, level = 2, description, children }: Props) {
  const Heading = level === 2 ? "h2" : "h3";
  const sizeClasses =
    level === 2
      ? "text-[1.5rem] font-semibold tracking-[-0.02em] mt-16 mb-3"
      : "text-[1.125rem] font-semibold tracking-[-0.01em] mt-10 mb-2.5";

  const content = (
    <section className="not-prose">
      <Heading id={id} className={`scroll-mt-24 text-foreground ${sizeClasses}`}>
        {title}
      </Heading>
      {description ? (
        <p className="mb-5 max-w-3xl text-[0.9375rem] leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
      {children}
    </section>
  );

  // Only animate top-level sections
  if (level === 2) {
    return <FadeIn>{content}</FadeIn>;
  }
  return content;
}
