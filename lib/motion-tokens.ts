/**
 * Source of truth for ACKO motion tokens — mirrors Skills/motion.mdc.
 *
 * Components should reference these by token name in CSS or pass the
 * cubic-bezier value to a JS animation library. Never hard-code a curve.
 */

export type Easing = {
  token: string;
  /** As written in CSS — `cubic-bezier(...)`. */
  css: string;
  /** Four control points: [x1, y1, x2, y2]. */
  bezier: [number, number, number, number];
  use: string;
  defaultDuration: number;
};

export const easings: Easing[] = [
  {
    token: "--ease-out-quad",
    css: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    bezier: [0.25, 0.46, 0.45, 0.94],
    use: "Standard exit",
    defaultDuration: 150,
  },
  {
    token: "--ease-out-cubic",
    css: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    bezier: [0.215, 0.61, 0.355, 1],
    use: "Dropdown / modal enter",
    defaultDuration: 200,
  },
  {
    token: "--ease-out-quart",
    css: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    bezier: [0.165, 0.84, 0.44, 1],
    use: "Strong deceleration",
    defaultDuration: 300,
  },
  {
    token: "--ease-in-out-cubic",
    css: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    bezier: [0.645, 0.045, 0.355, 1],
    use: "On-screen movement",
    defaultDuration: 250,
  },
  {
    token: "--ease-in-out-quart",
    css: "cubic-bezier(0.77, 0, 0.175, 1)",
    bezier: [0.77, 0, 0.175, 1],
    use: "Emphatic transitions",
    defaultDuration: 300,
  },
];

/* -------------------------------------------------------------------------- */
/*  Duration                                                                   */
/* -------------------------------------------------------------------------- */

export type Duration = {
  ms: number;
  label: string;
  use: string;
};

export const durations: Duration[] = [
  { ms: 100, label: "100ms", use: "Hover / micro-feedback" },
  { ms: 150, label: "150ms", use: "Default exit (faster than enter)" },
  { ms: 200, label: "200ms", use: "Default enter — dropdown, popover, sheet" },
  { ms: 250, label: "250ms", use: "On-screen position changes" },
  { ms: 300, label: "300ms", use: "Strong reveal, page transition" },
  { ms: 500, label: "500ms", use: "Heroes, marketing only" },
];

/* -------------------------------------------------------------------------- */
/*  Decision matrix                                                            */
/* -------------------------------------------------------------------------- */

export const decisionMatrix = [
  { scenario: "Element entering / exiting", easing: "ease-out", duration: "150–200ms" },
  { scenario: "On-screen movement", easing: "ease-in-out", duration: "250–300ms" },
  { scenario: "Hover / colour transitions", easing: "ease (CSS default)", duration: "150ms" },
  { scenario: "Element seen 100+ times daily", easing: "—", duration: "Don't animate" },
];

/* -------------------------------------------------------------------------- */
/*  Keyframes                                                                  */
/* -------------------------------------------------------------------------- */

export type Keyframe = {
  /** Token-style name (CSS @keyframes identifier). */
  name: string;
  description: string;
  duration: number;
  easing: string;
  /** Components that consume this keyframe. */
  consumers: string[];
  /** Raw CSS body for the @keyframes block. */
  cssBody: string;
};

export const keyframes: Keyframe[] = [
  {
    name: "acko-spin",
    description: "Continuous rotation — loading spinners.",
    duration: 600,
    easing: "linear",
    consumers: ["Button (loading)", "Spinner", "Refresh icon"],
    cssBody: `0%   { transform: rotate(0deg); }
100% { transform: rotate(360deg); }`,
  },
  {
    name: "acko-shake",
    description: "Lateral wobble — communicates rejected input without colour.",
    duration: 300,
    easing: "ease-out",
    consumers: ["TextInput (error)", "Dropdown (error)", "OTP (error)"],
    cssBody: `0%, 100% { transform: translateX(0); }
20%      { transform: translateX(-4px); }
40%      { transform: translateX(4px); }
60%      { transform: translateX(-3px); }
80%      { transform: translateX(2px); }`,
  },
  {
    name: "acko-check-pop",
    description: "Soft overshoot when a value resolves successfully.",
    duration: 300,
    easing: "ease-out",
    consumers: ["TextInput (success)", "Stepper (complete)"],
    cssBody: `0%   { opacity: 0; transform: scale(0.5); }
60%  { opacity: 1; transform: scale(1.15); }
100% { opacity: 1; transform: scale(1); }`,
  },
  {
    name: "acko-menu-enter",
    description: "Floating layer slides in from above.",
    duration: 150,
    easing: "var(--ease-out-cubic)",
    consumers: ["Dropdown menu", "Popover", "Date picker"],
    cssBody: `from { opacity: 0; transform: translateY(-8px); }
to   { opacity: 1; transform: translateY(0); }`,
  },
  {
    name: "acko-tick-pop",
    description: "Soft pop for the selected-item tick mark.",
    duration: 250,
    easing: "ease-out",
    consumers: ["Dropdown (selected tick)", "Checkbox (checked)"],
    cssBody: `0%   { opacity: 0; transform: scale(0.3); }
60%  { opacity: 1; transform: scale(1.15); }
100% { opacity: 1; transform: scale(1); }`,
  },
];

/* -------------------------------------------------------------------------- */
/*  Performance rules                                                          */
/* -------------------------------------------------------------------------- */

export const performanceRules = [
  {
    do: "Animate transform and opacity",
    why: "Both are GPU-accelerated and never trigger layout or paint.",
  },
  {
    do: "Add will-change: transform",
    why: "Hints the compositor to lift the element to its own layer for high-frequency animations.",
  },
  {
    do: "Make exits 20–30% faster than entrances",
    why: "Exits feel 'snappier' if the user is moving on; entrances need a touch more time to register.",
  },
  {
    do: "Respect prefers-reduced-motion",
    why: "Some users have vestibular disorders. Provide a meaningful fallback (instant or fade-only).",
  },
];

export const antiPatterns = [
  {
    avoid: "Animate width / height / padding / margin",
    why: "Every frame triggers layout — guaranteed jank above 60fps targets.",
  },
  {
    avoid: "Animate background-color on a long list",
    why: "Forces paint on every row. Use a transformed overlay instead.",
  },
  {
    avoid: "Animate things the user sees 100× per day",
    why: "Repetition turns motion into noise. Reach for state, not animation.",
  },
];
