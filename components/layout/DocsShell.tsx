import { MobileNav } from "./MobileNav";
import { Sidebar } from "./Sidebar";

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <MobileNav />
      <div className="md:pl-[17rem]">
        <main className="mx-auto max-w-4xl px-4 py-10 md:px-10 md:py-16">
          {children}
        </main>
      </div>
    </div>
  );
}
