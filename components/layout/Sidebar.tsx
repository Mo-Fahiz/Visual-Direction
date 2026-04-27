"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { kitNav, primaryNav, resourceNav, type NavItem } from "@/lib/nav";

function NavLink({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const pathname = usePathname();
  const active =
    pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
  const isExactChild = item.children?.some((c) => c.href === pathname);

  return (
    <div>
      <Link
        href={item.href}
        className={`flex items-start gap-1 rounded-[10px] px-2 py-2 text-[13px] font-medium leading-snug transition-colors ${
          depth ? "pl-3" : ""
        } ${
          active || isExactChild
            ? "bg-purple-soft text-accent"
            : "text-[#333] hover:bg-[#f5f5f5]"
        }`}
      >
        {item.index && depth === 0 ? (
          <span className="ds-nav-prefix pt-0.5">{item.index} /</span>
        ) : null}
        <span>{item.title}</span>
      </Link>
      {item.children ? (
        <div className="mt-0.5 ml-2 space-y-0.5 border-l border-border pl-3">
          {item.children.map((child) => (
            <NavLink key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function NavSection({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="mb-8">
      <p className="ds-caption mb-3 px-2 font-medium uppercase tracking-[0.12em] text-muted">
        {title}
      </p>
      <nav className="space-y-0.5">
        {items.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[17rem] overflow-y-auto border-r border-border bg-sidebar px-5 py-10 md:block">
      <Link href="/" className="mb-10 block px-2 transition-opacity hover:opacity-80">
        <span className="ds-caption block font-medium uppercase tracking-[0.14em] text-muted">
          ACKO
        </span>
        <span className="mt-1 block text-[17px] font-semibold tracking-tight text-foreground">
          Design System
        </span>
      </Link>
      <p className="ds-caption mb-3 px-2 font-medium uppercase tracking-[0.12em] text-muted">
        Documentation
      </p>
      <nav className="space-y-0.5">
        {primaryNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>
      <NavSection title="UI kit & patterns" items={kitNav} />
      <NavSection title="Resources" items={resourceNav} />
    </aside>
  );
}
