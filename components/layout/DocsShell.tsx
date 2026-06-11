import { MobileNav } from "./MobileNav";
import { MainColumn } from "./MainColumn";
import { Sidebar } from "./Sidebar";

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#FAFAFB]">
      <Sidebar />
      <MobileNav />
      {/* Floating sidebar = 248px wide + 16px left margin + 16px gap */}
      <div className="md:pl-[280px]">
        <MainColumn>{children}</MainColumn>
      </div>
    </div>
  );
}
