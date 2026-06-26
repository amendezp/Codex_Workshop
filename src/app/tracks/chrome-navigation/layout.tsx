"use client";

import { Globe } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { SectionProgress } from "@/components/tracks/section-progress";
import { CHROME_NAVIGATION_SECTIONS } from "@/lib/chrome-navigation-sections";

export default function ChromeNavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <div className="text-center">
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `color-mix(in oklch, var(--color-track-3) 15%, transparent)`,
            color: `var(--color-track-3)`,
          }}
        >
          <Globe className="h-7 w-7" />
        </div>
        <div className="mb-2 text-sm font-medium text-muted-foreground">
          Track 3
        </div>
        <h1 className="mb-3 font-serif text-3xl font-bold tracking-tight text-foreground">
          Browser, Docs & Skills
        </h1>
        <p className="mx-auto mb-4 max-w-lg text-muted-foreground">
          Set durable Codex context with AGENTS.md, then use Browser, Chrome,
          plugins, and skills to work across documents, research, and
          spreadsheets.
        </p>
        <div className="inline-flex items-center gap-3 text-xs text-muted-foreground">
          <span
            className="rounded-full px-2.5 py-1 font-medium"
            style={{
              backgroundColor: `color-mix(in oklch, var(--color-track-3) 12%, transparent)`,
              color: `var(--color-track-3)`,
            }}
          >
            Intermediate
          </span>
          <span>~10 min</span>
        </div>
      </div>

      <div className="mt-6">
        <SectionProgress
          sections={CHROME_NAVIGATION_SECTIONS}
          accentClass="track-3"
          sectionKeyPrefix="chrome-navigation-section"
        />
      </div>

      <div className="mt-8">{children}</div>
    </PageContainer>
  );
}
