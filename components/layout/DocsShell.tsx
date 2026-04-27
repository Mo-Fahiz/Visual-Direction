import { MobileNav } from "./MobileNav";
import { MainColumn } from "./MainColumn";
import { Sidebar } from "./Sidebar";

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <Sidebar />
      <MobileNav />
      <div className="md:pl-[17rem]">
        <MainColumn>{children}</MainColumn>
      </div>
    </div>
  );
}
