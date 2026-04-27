"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";

/** Home is full-viewport chat only — no footer below the composer. */
export function ConditionalSiteFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <SiteFooter />;
}
