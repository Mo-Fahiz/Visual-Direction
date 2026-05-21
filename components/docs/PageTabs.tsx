"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type PageTab = {
  label: string;
  href: string;
};

type Props = {
  tabs: PageTab[];
};

/**
 * shadcn/Radix Tabs with route sync — active highlight is a **bottom** border
 * (line tabs), not a top accent. `onValueChange` + `router.push` keeps URLs
 * bookmarkable without fighting Radix + `<Link>`.
 */
function getActiveValue(pathname: string, tabs: PageTab[]): string {
  if (!tabs.length) return "";
  if (!pathname) return tabs[0]!.href;

  const matches = tabs.filter(
    (tab) =>
      pathname === tab.href ||
      (tab.href !== tabs[0]!.href && pathname.startsWith(tab.href))
  );
  if (matches.length === 0) return tabs[0]!.href;
  const exact = matches.find((t) => t.href === pathname);
  if (exact) return exact.href;
  return matches.sort((a, b) => b.href.length - a.href.length)[0]!.href;
}

const tabsListClass = cn(
  "h-auto w-full min-w-0 flex flex-wrap items-stretch justify-start gap-0",
  "rounded-none border-0 border-b border-border bg-transparent p-0",
  "text-[var(--acko-muted)]"
);

const tabsTriggerClass = cn(
  "relative -mb-px min-h-10",
  "rounded-none border-0 border-b-2 border-transparent",
  "bg-transparent px-4 py-2.5 text-sm font-medium tracking-tight shadow-none",
  "text-[var(--acko-muted)] hover:text-foreground",
  "focus-visible:ring-2 focus-visible:ring-offset-0",
  "data-[state=active]:border-b-[var(--acko-purple)]",
  "data-[state=active]:bg-transparent data-[state=active]:text-foreground",
  "data-[state=active]:shadow-none"
);

export function PageTabs({ tabs }: Props) {
  const pathname = usePathname() ?? "";
  const router = useRouter();

  const value = useMemo(
    () => getActiveValue(pathname, tabs),
    [pathname, tabs]
  );

  const onValueChange = useCallback(
    (next: string) => {
      if (next !== value) {
        router.push(next);
      }
    },
    [router, value]
  );

  return (
    <nav
      aria-label="Page sections"
      className="not-prose mb-10 w-full min-w-0 max-w-full"
    >
      <Tabs
        value={value}
        onValueChange={onValueChange}
        className="w-full"
        activationMode="manual"
      >
        <TabsList className={tabsListClass}>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.href}
              value={tab.href}
              className={tabsTriggerClass}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
}
