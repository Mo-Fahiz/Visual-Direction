"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { primaryNav, resourceNav } from "@/lib/nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-[#ECEDF0] bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image src="/acko-logo.svg" alt="ACKO" width={64} height={20} />
          <span className="text-[14px] font-semibold tracking-tight text-[#1F1F23]">
            Visual Standards
          </span>
        </Link>
        <button
          type="button"
          className="rounded-[10px] border border-[#E4E5E9] px-3 py-1.5 text-[12px] font-medium text-[#1F1F23]"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <div className="mt-4 max-h-[70vh] space-y-3 overflow-y-auto pb-4">
          {[...primaryNav, ...resourceNav].map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                className="block py-1 text-[14px] font-medium text-[#1F1F23]"
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
              {item.children?.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="block py-1 pl-4 text-[13px] text-[#5C616B]"
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
