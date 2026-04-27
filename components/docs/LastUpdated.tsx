type LastUpdatedProps = {
  date: string;
  className?: string;
};

export function LastUpdated({ date, className = "" }: LastUpdatedProps) {
  return (
    <p className={`ds-caption font-medium uppercase tracking-[0.12em] text-muted ${className}`}>
      Last updated · {date}
    </p>
  );
}
