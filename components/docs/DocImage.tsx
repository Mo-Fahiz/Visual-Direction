import Image from "next/image";

type Ratio = "2/1" | "3/4" | "1/1" | "4/3" | "16/9";

type DocImageProps = {
  /** Resolved src — pass through assetPath() for GitHub Pages support. */
  src: string;
  /** Short, human-meaningful alt text describing what the image shows. */
  alt: string;
  /** Aspect ratio of the container. Image is letterboxed via object-contain. */
  ratio?: Ratio;
  /** When true, image stretches to the container instead of being letterboxed. */
  fillBox?: boolean;
  /** Background of the container behind the letterboxed image. */
  background?: "soft" | "white" | "none";
};

const ratioClass: Record<Ratio, string> = {
  "2/1": "aspect-[2/1]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
};

const backgroundClass: Record<NonNullable<DocImageProps["background"]>, string> = {
  soft: "bg-[#F5F3FF]",
  white: "bg-white",
  none: "bg-transparent",
};

/**
 * Documentation-grade image wrapper.
 *
 * Locks an aspect ratio on the container so the page layout never jumps as
 * images load. Uses `object-contain` so images are never cropped — letterboxed
 * inside the container when their native ratio differs.
 */
export function DocImage({
  src,
  alt,
  ratio = "2/1",
  fillBox = false,
  background = "soft",
}: DocImageProps) {
  return (
    <div
      className={[
        "not-prose relative w-full overflow-hidden rounded-[14px] border border-[#E4E5E9]",
        ratioClass[ratio],
        backgroundClass[background],
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 800px"
        className={fillBox ? "object-cover" : "object-contain object-center"}
      />
    </div>
  );
}
