import type { Metadata } from "next";
import "./globals.css";
import { DocsShell } from "@/components/layout/DocsShell";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "ACKO Design System",
    template: "%s · ACKO Design System",
  },
  description:
    "Source of truth for ACKO principles, visual direction, foundations, and product implementation guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <DocsShell>
          {children}
          <SiteFooter />
        </DocsShell>
      </body>
    </html>
  );
}
