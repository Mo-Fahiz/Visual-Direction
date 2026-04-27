type Props = {
  description: string;
  brief: string;
  aspect?: string;
};

/** Video-placeholder counterpart to MockFrame (matches the showreel `VideoFrame`). */
export function MockVideo({ description, brief, aspect = "16/9" }: Props) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[20px] border border-border bg-[#0a0a0a]"
      style={{ aspectRatio: aspect }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, #241362 0%, #0a0a0a 70%)",
        }}
      />
      <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28a1 1 0 00-1.5.86z"
              fill="rgba(255,255,255,0.8)"
            />
          </svg>
        </div>
        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/30">
          Video placeholder
        </div>
        <div className="mb-1 text-sm font-semibold text-white">{description}</div>
        <div className="max-w-[420px] text-xs leading-relaxed text-white/50">
          {brief}
        </div>
      </div>
    </div>
  );
}
