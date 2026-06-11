"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Home uses full width and no side padding; other doc routes use a
 * comfortable reading column with generous Atlassian-style whitespace.
 */
export function MainColumn({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAboutAcko = pathname === "/principles";

  return (
    <main
      className={cn(
        isHome || isAboutAcko
          ? "w-full max-w-none min-h-0 flex-1 px-0 py-0"
          : "mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-20"
      )}
    >
      {children}
    </main>
  );
}
