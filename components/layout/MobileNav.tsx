"use client";

import Link from "next/link";
import { useState } from "react";
import { kitNav, primaryNav, resourceNav } from "@/lib/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-sidebar/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          ACKO Design System
        </Link>
        <button
          type="button"
          className="ds-caption rounded-[10px] border border-border px-4 py-2 font-medium uppercase tracking-wide text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div className="mt-4 max-h-[70vh] space-y-4 overflow-y-auto pb-4">
          {[...primaryNav, ...kitNav, ...resourceNav].map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="flex items-start gap-2 py-1 font-medium text-accent"
                onClick={() => setOpen(false)}
              >
                {item.index ? (
                  <span className="ds-nav-prefix pt-0.5">{item.index} /</span>
                ) : null}
                <span>{item.title}</span>
              </Link>
              {item.children?.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="ds-caption block py-1.5 pl-7 text-[#333]"
                  onClick={() => setOpen(false)}
                >
                  {c.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
