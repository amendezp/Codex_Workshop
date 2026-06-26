import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SyncProvider } from "@/components/sync-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI@GSB Workshop — Codex",
  description:
    "Hands-on workshop guide for learning OpenAI Codex at Stanford GSB's AI@GSB initiative.",
  openGraph: {
    title: "AI@GSB Workshop — Codex",
    description:
      "Hands-on workshop guide for learning OpenAI Codex at Stanford GSB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <TooltipProvider>
          <SyncProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </SyncProvider>
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
