"use client";

import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────────────────────────
 * Live motion demos for the Motion page.
 *
 * Every demo loops on a slow cadence so the reader can observe the
 * curve & duration. Values come straight from the ACKO motion system
 * (Skills/motion.md, curves.md, transitions.md). Animations use only
 * transform + opacity per the implementation rules.
 * ─────────────────────────────────────────────────────────────── */

const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_IN = "cubic-bezier(0.50, 0, 0.75, 0)";
const EASE_IN_OUT = "cubic-bezier(0.65, 0, 0.35, 1)";

/* ── Tick hook: returns a counter that increments on each interval ── */
function useTick(intervalMs: number) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);
  return tick;
}

/* ────────────────────────────────────────────────────────────────
 * Page transitions — four canonical transition shapes from
 * transitions.md. Each demo runs continuously inside its own frame.
 * ─────────────────────────────────────────────────────────────── */

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-[260px] w-[160px] overflow-hidden rounded-[18px] border border-[#E4E5E9] bg-white shadow-[0_2px_16px_rgba(15,15,20,0.05)]">
        {/* Status bar */}
        <div className="absolute inset-x-0 top-0 z-10 flex h-6 items-center justify-center border-b border-[#F2F2F4] bg-white">
          <span className="h-1 w-10 rounded-full bg-[#E4E5E9]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 top-6 overflow-hidden bg-[#FAFAFB]">
          {children}
        </div>
      </div>
      <p className="text-center text-[11px] font-medium uppercase tracking-[0.08em] text-[#5C616B]">
        {label}
      </p>
    </div>
  );
}

/** Right-to-left — 90 % of transitions. New page slides in from right at 550 ms. */
function RtlTransition() {
  const t = useTick(2800);
  // Two pages crossfade-slide on each tick.
  const showB = t % 2 === 1;
  return (
    <PhoneFrame label="Right → left (default)">
      <div className="relative h-full w-full">
        <Page
          color="#F5F3FF"
          title="Home"
          subtitle="Your covers"
          isOut={showB}
          dirOut="left"
          dirIn={null}
        />
        <Page
          color="#EAEAFD"
          title="Policy"
          subtitle="Details"
          isOut={!showB}
          dirOut={null}
          dirIn="right"
        />
      </div>
    </PhoneFrame>
  );
}

/** Bottom sheet — slides up from below, 550 ms ease-out / 400 ms ease-in. */
function BottomSheetTransition() {
  const t = useTick(2800);
  const open = t % 2 === 1;
  return (
    <PhoneFrame label="Bottom sheet">
      <div className="relative h-full w-full bg-[#F5F3FF]">
        {/* Underlay */}
        <div className="px-3 pt-4">
          <div className="mb-2 h-3 w-20 rounded-full bg-[#D9D8FC]" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-[#E4E5E9]" />
            <div className="h-1.5 w-3/4 rounded-full bg-[#E4E5E9]" />
            <div className="h-1.5 w-2/3 rounded-full bg-[#E4E5E9]" />
          </div>
        </div>
        {/* Backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(10,10,10,0.35)",
            opacity: open ? 1 : 0,
            transition: `opacity ${open ? 320 : 220}ms ${
              open ? EASE_OUT : EASE_IN
            }`,
          }}
        />
        {/* Sheet */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "55%",
            borderRadius: "16px 16px 0 0",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 -4px 24px rgba(0,0,0,0.10)",
            transform: open ? "translateY(0)" : "translateY(100%)",
            transition: `transform ${open ? 550 : 400}ms ${
              open ? EASE_OUT : EASE_IN
            }`,
          }}
        >
          <div className="px-4 pt-4">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#E4E5E9]" />
            <div className="mb-2 h-3 w-24 rounded-full bg-[#6841E6]" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-[#E4E5E9]" />
              <div className="h-1.5 w-4/5 rounded-full bg-[#E4E5E9]" />
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

/** Crossfade — bottom nav tab switching. 220 ms opacity only. */
function CrossfadeTransition() {
  const t = useTick(2400);
  const i = t % 3;
  const tabs = ["Home", "Discover", "Support"];
  return (
    <PhoneFrame label="Crossfade (bottom nav)">
      <div className="relative h-full w-full">
        {tabs.map((tab, idx) => (
          <div
            key={tab}
            style={{
              position: "absolute",
              inset: 0,
              padding: "16px 12px",
              backgroundColor: ["#F5F3FF", "#EAEAFD", "#D9D8FC"][idx],
              opacity: idx === i ? 1 : 0,
              transition: `opacity 260ms ${EASE_IN_OUT}`,
            }}
          >
            <div className="mb-3 h-3 w-20 rounded-full bg-[#6841E6]/70" />
            <div className="space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/80" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/80" />
            </div>
          </div>
        ))}
        {/* Tab bar */}
        <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-around border-t border-[#ECEDF0] bg-white">
          {tabs.map((tab, idx) => (
            <span
              key={tab}
              className={`text-[10px] font-medium transition-colors ${
                idx === i ? "text-[#6841E6]" : "text-[#8F8E92]"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

/** Card expand — Discover-style: card grows to fill the screen. 600 ms. */
function CardExpandTransition() {
  const t = useTick(2800);
  const expanded = t % 2 === 1;
  return (
    <PhoneFrame label="Card expand">
      <div className="relative h-full w-full bg-[#F5F3FF] p-3">
        {/* Two background cards (always present) */}
        <div className="mb-2 h-10 rounded-[8px] bg-white opacity-60" />
        <div className="h-14 rounded-[8px] bg-white opacity-60" />
        {/* Hero card that expands */}
        <div
          style={{
            position: "absolute",
            top: expanded ? 0 : 60,
            left: expanded ? 0 : 12,
            right: expanded ? 0 : 12,
            bottom: expanded ? 0 : 110,
            borderRadius: expanded ? 0 : 12,
            backgroundColor: "#6841E6",
            transition: `top 600ms ${EASE_IN_OUT}, left 600ms ${EASE_IN_OUT}, right 600ms ${EASE_IN_OUT}, bottom 600ms ${EASE_IN_OUT}, border-radius 600ms ${EASE_IN_OUT}`,
            padding: 12,
          }}
        >
          <div className="mb-2 h-2 w-16 rounded-full bg-white/60" />
          <div className="h-1.5 w-24 rounded-full bg-white/40" />
        </div>
      </div>
    </PhoneFrame>
  );
}

function Page({
  color,
  title,
  subtitle,
  isOut,
  dirOut,
  dirIn,
}: {
  color: string;
  title: string;
  subtitle: string;
  isOut: boolean;
  dirOut: "left" | "right" | null;
  dirIn: "left" | "right" | null;
}) {
  const offsetByDir = (d: "left" | "right" | null) =>
    d === "left" ? "-100%" : d === "right" ? "100%" : "0%";

  // When the page is "out", it should be off-screen on dirOut side
  // unless it's mid-animation (the running transition is on the "in" page).
  const translate = isOut ? offsetByDir(dirOut) : offsetByDir(dirIn);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: color,
        transform: `translateX(${translate})`,
        transition: `transform 550ms ${EASE_OUT}`,
        padding: "12px",
      }}
    >
      <div className="mb-2 text-[11px] font-semibold text-[#1F1F23]">
        {title}
      </div>
      <div className="mb-3 text-[9px] text-[#5C616B]">{subtitle}</div>
      <div className="space-y-1.5">
        <div className="h-2 w-full rounded-full bg-white/80" />
        <div className="h-2 w-3/4 rounded-full bg-white/80" />
        <div className="h-2 w-1/2 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

export function PageTransitionDemos() {
  return (
    <div className="not-prose grid grid-cols-2 gap-6 rounded-[14px] border border-[#E4E5E9] bg-white p-8 md:grid-cols-4">
      <RtlTransition />
      <BottomSheetTransition />
      <CrossfadeTransition />
      <CardExpandTransition />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Microinteractions — six common moments from the pattern library.
 * Every demo is a small, self-contained loop.
 * ─────────────────────────────────────────────────────────────── */

function ButtonPressDemo() {
  const t = useTick(2200);
  const pressed = t % 2 === 1;
  return (
    <DemoBox label="Button press" timing="100 ms press · 140 ms release">
      <button
        type="button"
        tabIndex={-1}
        aria-hidden
        style={{
          height: 36,
          paddingInline: 20,
          borderRadius: 9999,
          backgroundColor: "#6841E6",
          color: "#FFFFFF",
          fontSize: 13,
          fontWeight: 500,
          transform: pressed ? "scale(0.97)" : "scale(1)",
          transition: `transform ${pressed ? 100 : 140}ms ${
            pressed ? EASE_IN : EASE_OUT
          }`,
          boxShadow: "inset 0 1px 2px 1px rgba(255,255,255,0.28)",
        }}
      >
        Continue
      </button>
    </DemoBox>
  );
}

function AccordionDemo() {
  const t = useTick(2400);
  const open = t % 2 === 1;
  return (
    <DemoBox label="Accordion" timing="280 ms ease-out">
      <div className="w-full max-w-[200px] overflow-hidden rounded-[10px] border border-[#E4E5E9] bg-white">
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-[11px] font-medium text-[#1F1F23]">Coverage</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: `transform 200ms ${EASE_OUT}`,
            }}
          >
            <path d="M2 3.5 5 6.5l3-3" stroke="#5C616B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div
          style={{
            maxHeight: open ? 60 : 0,
            overflow: "hidden",
            transition: `max-height 280ms ${EASE_OUT}`,
          }}
        >
          <div className="space-y-1 px-3 pb-2">
            <div className="h-1.5 w-full rounded-full bg-[#ECEDF0]" />
            <div className="h-1.5 w-3/4 rounded-full bg-[#ECEDF0]" />
          </div>
        </div>
      </div>
    </DemoBox>
  );
}

function ToastDemo() {
  const t = useTick(2800);
  const showing = t % 2 === 1;
  return (
    <DemoBox label="Toast" timing="260 ms in · 220 ms out">
      <div className="relative h-[60px] w-full">
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 8,
            transform: showing
              ? "translate(-50%, 0)"
              : "translate(-50%, -16px)",
            opacity: showing ? 1 : 0,
            transition: `transform ${showing ? 260 : 220}ms ${
              showing ? EASE_OUT : EASE_IN
            }, opacity ${showing ? 260 : 220}ms ${showing ? EASE_OUT : EASE_IN}`,
            backgroundColor: "#241362",
            color: "#FFFFFF",
            borderRadius: 10,
            padding: "8px 14px",
            fontSize: 11,
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          ✓ Policy renewed
        </div>
      </div>
    </DemoBox>
  );
}

function InputFocusDemo() {
  const t = useTick(2600);
  const focused = t % 2 === 1;
  return (
    <DemoBox label="Input focus" timing="180 ms · label floats">
      <div className="relative w-full max-w-[200px]">
        <div
          className="relative h-11 rounded-full border bg-white px-4"
          style={{
            borderColor: focused ? "#6841E6" : "#E4E5E9",
            transition: "border-color 180ms",
            boxShadow: focused ? "0 0 0 3px #D9D8FC" : "none",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 16,
              top: focused ? -8 : 14,
              fontSize: focused ? 10 : 13,
              color: focused ? "#6841E6" : "#8F8E92",
              backgroundColor: focused ? "#FFFFFF" : "transparent",
              padding: focused ? "0 4px" : 0,
              transition: `all 180ms ${EASE_OUT}`,
              fontWeight: 500,
            }}
          >
            Email
          </span>
        </div>
      </div>
    </DemoBox>
  );
}

function ShakeErrorDemo() {
  const t = useTick(2800);
  // Trigger shake only at the start of each cycle for ~240 ms.
  const shaking = t % 2 === 1;
  return (
    <DemoBox label="Error shake" timing="240 ms · 6 keyframes">
      <div
        key={t}
        style={{
          height: 36,
          width: 200,
          borderRadius: 9999,
          border: `1px solid ${shaking ? "#DC2626" : "#E4E5E9"}`,
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          paddingInline: 16,
          fontSize: 12,
          color: shaking ? "#DC2626" : "#5C616B",
          animation: shaking ? "ds-shake 240ms ease-in-out" : "none",
        }}
      >
        wrong-otp
      </div>
      <style jsx>{`
        @keyframes ds-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-4px); }
          40% { transform: translateX(4px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(2px); }
        }
      `}</style>
    </DemoBox>
  );
}

function SpinnerDemo() {
  return (
    <DemoBox label="Spinner" timing="800 ms · linear">
      <div
        style={{
          height: 28,
          width: 28,
          borderRadius: 9999,
          border: "2px solid #EAEAFD",
          borderTopColor: "#6841E6",
          animation: "ds-spin 800ms linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes ds-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </DemoBox>
  );
}

function DemoBox({
  label,
  timing,
  children,
}: {
  label: string;
  timing: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[14px] border border-[#E4E5E9] bg-white p-6">
      <div className="flex h-[80px] w-full items-center justify-center">
        {children}
      </div>
      <div className="text-center">
        <p className="text-[12px] font-semibold text-[#1F1F23]">{label}</p>
        <p className="mt-0.5 font-mono text-[10px] text-[#5C616B]">{timing}</p>
      </div>
    </div>
  );
}

export function MicroInteractionDemos() {
  return (
    <div className="not-prose grid grid-cols-2 gap-4 md:grid-cols-3">
      <ButtonPressDemo />
      <AccordionDemo />
      <ToastDemo />
      <InputFocusDemo />
      <ShakeErrorDemo />
      <SpinnerDemo />
    </div>
  );
}
