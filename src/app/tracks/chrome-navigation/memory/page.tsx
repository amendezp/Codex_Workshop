"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { CVAttachmentIllustration } from "@/components/tracks/chrome-illustrations";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import { FileText, Brain } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

const steps: TrackStep[] = [
  {
    title: "Open Codex in a workshop folder",
    description:
      "Use the same folder from Track 1, or create a new one named codex-workshop-context.",
  },
  {
    title: "Attach your CV or resume to the thread",
    description:
      'Drag and drop your resume file (PDF, DOCX, or plain text) into the Codex composer. You can also click the "+" or paperclip button to attach a file.',
    illustration: <CVAttachmentIllustration />,
  },
  {
    title: "Send this prompt to Codex",
    prompt:
      "Read my attached CV and create an AGENTS.md file for this workshop folder. Include: my career background, key skills, work experience, education, goals for AI-assisted work, and review preferences. Add a short section named 'Workshop context' explaining that future tasks should personalize examples to my background. Do not include sensitive personal identifiers beyond what is needed for the exercise.",
  },
  {
    title: "Verify the AGENTS.md file",
    description:
      "Open AGENTS.md and review the summary. Edit anything too sensitive or inaccurate. Codex will read this file as durable project guidance in future threads.",
  },
];

function MemoryIntro() {
  return (
    <div className="rounded-lg border bg-card p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100">
          <Brain className="h-5 w-5 text-amber-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            How Codex keeps project context
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Codex reads instruction files named{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
              AGENTS.md
            </code>{" "}
            before doing work. Use them for project norms, test commands,
            review expectations, and durable context that should apply across
            threads.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <FileText className="h-5 w-5 text-blue-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">What belongs in AGENTS.md?</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Treat it like a briefing for a new teammate: what this project is,
            how to verify work, what to avoid, and what personal or team
            context helps Codex tailor the output.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MemoryPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={0}
      accentClass="track-2"
      sectionTitle="AGENTS.md Context"
      sectionDescription="Teach Codex durable workshop context it can reuse across tasks."
      steps={steps}
      stepIndexOffset={getSectionOffset(0)}
      nextSectionHref="/tracks/chrome-navigation/setup"
      nextSectionLabel="Continue to Browser Setup"
      introContent={<MemoryIntro />}
    />
  );
}
