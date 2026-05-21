type DoDontProps = {
  doItems: string[];
  dontItems: string[];
};

export function DoDont({ doItems, dontItems }: DoDontProps) {
  return (
    <div className="not-prose mt-8 grid min-w-0 gap-5 md:grid-cols-2">
      <div className="min-w-0 rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#16a34a]">
          Do
        </h3>
        <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-[#333]">
          {doItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="min-w-0 rounded-2xl border border-border/60 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#dc2626]">
          Don&apos;t
        </h3>
        <ul className="mt-4 list-disc space-y-2.5 pl-4 text-sm leading-relaxed text-[#333]">
          {dontItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
