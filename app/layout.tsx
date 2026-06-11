import type { Metadata } from "next";
import "./globals.css";
import { DocsShell } from "@/components/layout/DocsShell";
import { ConditionalSiteFooter } from "@/components/layout/ConditionalSiteFooter";

export const metadata: Metadata = {
  title: {
    default: "ACKO Design Standards",
    template: "%s · ACKO Design Standards",
  },
  description:
    "A shared reference for creating consistent and recognisable ACKO experiences — about ACKO, the design system, voice and tone, and implementation guidance.",
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
          <ConditionalSiteFooter />
        </DocsShell>
      </body>
    </html>
  );
}
