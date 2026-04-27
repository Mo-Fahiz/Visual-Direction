"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Home uses full width and no side padding; other doc routes use the
 * max-w-4xl reading column.
 */
export function MainColumn({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={cn(
        isHome
          ? "w-full max-w-none min-h-0 flex-1 px-0 py-0"
          : "mx-auto max-w-4xl px-4 py-10 md:px-10 md:py-16"
      )}
    >
      {children}
    </main>
  );
}
