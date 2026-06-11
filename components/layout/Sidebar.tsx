"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { primaryNav, resourceNav, type NavItem } from "@/lib/nav";

/* ──────────────────────────────────────────────────────────────────
 * Chevron icon (rotates when expanded)
 * ─────────────────────────────────────────────────────────────── */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className={`shrink-0 text-[#6B6F7B] transition-transform duration-200 ${
        open ? "rotate-90" : ""
      }`}
      aria-hidden
    >
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────
 * Leaf nav link
 * ─────────────────────────────────────────────────────────────── */
function LeafLink({
  item,
  active,
  depth = 0,
}: {
  item: NavItem;
  active: boolean;
  depth?: number;
}) {
  return (
    <Link
      href={item.href}
      className={[
        "block rounded-[8px] py-[7px] text-[14px] leading-[20px] transition-colors",
        depth > 0 ? "pl-7 pr-3" : "px-3",
        active
          ? "font-medium text-[#1F1F23]"
          : "text-[#5C616B] hover:bg-[#F4F4F6] hover:text-[#1F1F23]",
      ].join(" ")}
    >
      {item.title}
    </Link>
  );
}

/* ──────────────────────────────────────────────────────────────────
 * Group item (top-level with children — collapsible)
 * ─────────────────────────────────────────────────────────────── */
function GroupItem({ item }: { item: NavItem }) {
  const pathname = usePathname();

  // open by default if defaultOpen flag set OR pathname starts with one of the children
  const childActive = item.children?.some(
    (c) => pathname === c.href || pathname.startsWith(c.href + "/")
  );
  const [open, setOpen] = useState<boolean>(
    Boolean(item.defaultOpen) || Boolean(childActive)
  );

  // sync to active child after navigation
  useEffect(() => {
    if (childActive) setOpen(true);
  }, [childActive]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 rounded-[8px] px-3 py-[7px] text-left text-[14px] font-medium leading-[20px] text-[#1F1F23] transition-colors hover:bg-[#F4F4F6]"
        aria-expanded={open}
      >
        <span>{item.title}</span>
        <Chevron open={open} />
      </button>
      {open && item.children ? (
        <div className="mt-0.5 space-y-px">
          {item.children.map((child) => {
            const active =
              pathname === child.href ||
              pathname.startsWith(child.href + "/");
            return (
              <LeafLink
                key={child.href}
                item={child}
                active={active}
                depth={1}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
 * Top-level entry (leaf or group)
 * ─────────────────────────────────────────────────────────────── */
function TopLevelEntry({ item }: { item: NavItem }) {
  const pathname = usePathname();

  if (item.children && item.children.length > 0) {
    return <GroupItem item={item} />;
  }

  const active =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href + "/"));

  return (
    <Link
      href={item.href}
      className={[
        "block rounded-[8px] px-3 py-[7px] text-[14px] leading-[20px] transition-colors",
        active
          ? "font-medium text-[#1F1F23]"
          : "font-medium text-[#1F1F23] hover:bg-[#F4F4F6]",
      ].join(" ")}
    >
      {item.title}
    </Link>
  );
}

/* ──────────────────────────────────────────────────────────────────
 * Sidebar
 *
 * Floating panel — fixed positioning with margin from edges, soft
 * card aesthetic with hairline border, rounded corners, subtle shadow.
 * Matches Atlassian's left-rail pattern.
 * ─────────────────────────────────────────────────────────────── */
export function Sidebar() {
  return (
    <aside
      className="fixed inset-y-4 left-4 z-40 hidden w-[248px] flex-col overflow-hidden rounded-[14px] border border-[#E4E5E9] bg-white shadow-[0_1px_2px_rgba(15,15,20,0.04),0_4px_12px_rgba(15,15,20,0.04)] md:flex"
      aria-label="Primary navigation"
    >
      {/* ── Logo header ─────────────────────────────────────── */}
      <Link
        href="/"
        className="block px-5 pt-5 pb-3 transition-opacity hover:opacity-80"
      >
        <Image
          src="/acko-logo.svg"
          alt="ACKO"
          width={92}
          height={28}
          priority
        />
        <span className="mt-3 block text-[17px] font-semibold tracking-tight text-[#1F1F23]">
          Design Standards
        </span>
      </Link>

      <div className="mx-5 my-3 h-px bg-[#ECEDF0]" aria-hidden />

      {/* ── Primary nav ─────────────────────────────────────── */}
      <nav className="flex-1 overflow-y-auto px-3 pb-3">
        <div className="space-y-px">
          {primaryNav.map((item) => (
            <TopLevelEntry key={item.href} item={item} />
          ))}
        </div>

        {resourceNav.length > 0 ? (
          <>
            <div className="mx-2 my-4 h-px bg-[#ECEDF0]" aria-hidden />
            <div className="space-y-px">
              {resourceNav.map((item) => (
                <TopLevelEntry key={item.href} item={item} />
              ))}
            </div>
          </>
        ) : null}
      </nav>
    </aside>
  );
}
