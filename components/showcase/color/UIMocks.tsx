/**
 * Small UI mocks used inside InteractionStateExample frames.
 * Each mock renders both a "default" and a "stated" appearance — the parent
 * frame supplies left/right visuals for the two themes.
 */

type Variant = "default" | "hover" | "active" | "focus" | "selected" | "disabled";

const purple = {
  base: "#6841E6",
  hover: "#582FD2",
  active: "#4E29BB",
  ring: "#D9D8FC",
};

export function PrimaryButtonMock({
  variant = "default",
  pin,
  dark = false,
}: {
  variant?: Variant;
  pin?: number;
  dark?: boolean;
}) {
  const fill =
    variant === "active"
      ? purple.active
      : variant === "hover"
      ? purple.hover
      : purple.base;

  const showFocusRing = variant === "focus";
  const isDisabled = variant === "disabled";

  return (
    <div className="relative">
      {pin ? (
        <span
          className={[
            "absolute -top-7 left-4 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold",
            dark ? "bg-white text-black" : "bg-foreground text-white",
          ].join(" ")}
        >
          {pin}
        </span>
      ) : null}
      <button
        type="button"
        disabled={isDisabled}
        className="inline-flex items-center gap-3 rounded-md px-5 py-3 text-sm font-medium tracking-tight text-white transition-shadow"
        style={{
          backgroundColor: isDisabled ? "#B7B7B8" : fill,
          color: isDisabled ? "#605F63" : "#FFFFFF",
          boxShadow: showFocusRing ? `0 0 0 3px ${purple.ring}` : undefined,
        }}
      >
        Primary button
        <span aria-hidden>+</span>
      </button>
    </div>
  );
}

export function InputMock({
  variant = "default",
  pin,
  dark = false,
}: {
  variant?: Variant;
  pin?: number;
  dark?: boolean;
}) {
  const showFocus = variant === "focus";
  const ring = purple.ring;

  return (
    <div className="relative w-full max-w-sm">
      {pin ? (
        <span
          className={[
            "absolute -top-7 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold",
            dark ? "bg-white text-black" : "bg-foreground text-white",
          ].join(" ")}
        >
          {pin}
        </span>
      ) : null}
      <p
        className="mb-1.5 text-xs"
        style={{ color: dark ? "#8F8E92" : "#605F63" }}
      >
        Label
      </p>
      <div
        className="flex items-center justify-between rounded-md px-4 py-3 text-sm"
        style={{
          backgroundColor: dark ? "#141414" : "#FFFFFF",
          color: dark ? "#FBFBFB" : "#0A0A0A",
          border: showFocus
            ? `2px solid ${purple.base}`
            : `1px solid ${dark ? "#242324" : "#E0E0E1"}`,
          boxShadow: showFocus ? `0 0 0 3px ${ring}` : undefined,
        }}
      >
        <span>1000</span>
        <span className="flex gap-2 text-lg">
          <span aria-hidden>−</span>
          <span aria-hidden>+</span>
        </span>
      </div>
    </div>
  );
}

export function DropdownMock({
  variant = "hover",
  pin,
  dark = false,
}: {
  variant?: Variant;
  pin?: number;
  dark?: boolean;
}) {
  return (
    <div className="relative w-full max-w-xs">
      {pin ? (
        <span
          className={[
            "absolute -top-7 right-4 inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold",
            dark ? "bg-white text-black" : "bg-foreground text-white",
          ].join(" ")}
        >
          {pin}
        </span>
      ) : null}
      <ul
        className="overflow-hidden rounded-md border text-sm"
        style={{
          borderColor: dark ? "#242324" : "#E0E0E1",
          backgroundColor: dark ? "#141414" : "#FFFFFF",
          color: dark ? "#FBFBFB" : "#0A0A0A",
        }}
      >
        {["Option", "Option", "Option", "Option"].map((label, i) => {
          const isActive =
            (variant === "hover" && i === 1) ||
            (variant === "selected" && i === 1);
          return (
            <li
              key={i}
              className="px-4 py-2.5"
              style={{
                backgroundColor: isActive
                  ? dark
                    ? "#3E2290"
                    : "#EAEAFD"
                  : "transparent",
                color: isActive
                  ? dark
                    ? "#FBFBFB"
                    : "#582FD2"
                  : undefined,
              }}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
