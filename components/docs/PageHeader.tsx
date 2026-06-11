type PageHeaderProps = {
  title: string;
  description?: string;
  /**
   * Deprecated. The eyebrow chip (FOUNDATION / ABOUT ACKO / DESIGN SYSTEM)
   * was removed across all pages. The prop is still accepted so existing
   * call sites compile, but it is intentionally not rendered.
   */
  eyebrow?: string;
  /** Deprecated: kept for API compatibility but no longer rendered. */
  lastUpdated?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 pb-8">
      <h1 className="text-[32px] font-semibold leading-[40px] tracking-[-0.02em] text-[#1F1F23] md:text-[44px] md:leading-[52px]">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#5C616B] md:text-[17px] md:leading-[28px]">
          {description}
        </p>
      ) : null}
    </header>
  );
}
