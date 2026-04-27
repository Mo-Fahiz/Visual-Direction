type DoDontProps = {
  doItems: string[];
  dontItems: string[];
};

export function DoDont({ doItems, dontItems }: DoDontProps) {
  return (
    <div className="not-prose mt-8 grid gap-6 md:grid-cols-2">
      <div className="rounded-[10px] border border-border bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#16a34a]">
          Do
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-[#333]">
          {doItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-[10px] border border-border bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-[#dc2626]">
          Don&apos;t
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-[#333]">
          {dontItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
