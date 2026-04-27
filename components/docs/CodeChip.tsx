type Props = {
  children: string;
  /** Visual tone — neutral (light) or dark (Carbon-style $token chip). */
  tone?: "neutral" | "dark";
  className?: string;
};

/**
 * Inline code chip used in tables and prose for token names like `$layer`
 * or CSS custom properties like `--color-primary`.
 */
export function CodeChip({ children, tone = "dark", className = "" }: Props) {
  if (tone === "dark") {
    return (
      <code
        className={[
          "inline-flex items-center rounded-md bg-[#161616] px-2 py-[3px]",
          "font-mono text-[12px] leading-tight text-white",
          className,
        ].join(" ")}
      >
        {children}
      </code>
    );
  }
  return (
    <code
      className={[
        "inline-flex items-center rounded-md border border-border bg-white px-2 py-[3px]",
        "font-mono text-[12px] leading-tight text-foreground",
        className,
      ].join(" ")}
    >
      {children}
    </code>
  );
}
