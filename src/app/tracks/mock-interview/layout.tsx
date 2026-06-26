"use client";

import { Rocket } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { SectionProgress } from "@/components/tracks/section-progress";
import { MOCK_INTERVIEW_SECTIONS } from "@/lib/mock-interview-sections";

export default function MockInterviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      {/* Track header */}
      <div className="text-center">
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `color-mix(in oklch, var(--color-track-2) 15%, transparent)`,
            color: `var(--color-track-2)`,
          }}
        >
          <Rocket className="h-7 w-7" />
        </div>
        <div className="mb-2 text-sm font-medium text-muted-foreground">
          Track 2
        </div>
        <h1 className="mb-3 font-serif text-3xl font-bold tracking-tight text-foreground">
          AI Interview Coach
        </h1>
        <p className="mx-auto mb-4 max-w-lg text-muted-foreground">
          Build and deploy a full AI-powered interview prep tool using Codex,
          the OpenAI API, GitHub, and Vercel. Go from zero to a live web app.
        </p>
        <div className="inline-flex items-center gap-3 text-xs text-muted-foreground">
          <span
            className="rounded-full px-2.5 py-1 font-medium"
            style={{
              backgroundColor: `color-mix(in oklch, var(--color-track-2) 12%, transparent)`,
              color: `var(--color-track-2)`,
            }}
          >
            Advanced
          </span>
          <span>~20 min</span>
        </div>
      </div>

      {/* Section progress */}
      <div className="mt-6">
        <SectionProgress
          sections={MOCK_INTERVIEW_SECTIONS}
          accentClass="track-2"
          sectionKeyPrefix="mock-interview-section"
        />
      </div>

      {/* Section content */}
      <div className="mt-8">{children}</div>
    </PageContainer>
  );
}
