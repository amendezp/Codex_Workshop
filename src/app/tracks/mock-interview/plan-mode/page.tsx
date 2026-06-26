"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { PlanModeDropdownIllustration } from "@/components/tracks/interview-illustrations";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function PlanModeIntro() {
  return (
    <div className="rounded-lg border bg-card p-5 space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-100">
          <Lightbulb className="h-5 w-5 text-teal-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            Why plan first?
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Codex is strongest when you give it a clear outcome and let it
            inspect the project before it writes. For multi-file work, ask
            Codex to <strong>think before it builds</strong>: explore the repo,
            design the approach, list risks, and wait for your approval.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <ArrowRight className="h-5 w-5 text-blue-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">The Plan Mode cycle</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            You send a prompt &rarr; Codex explores your codebase &rarr; Codex
            writes a plan &rarr; You review and suggest changes &rarr; You
            approve &rarr; Codex implements and verifies.
          </p>
        </div>
      </div>
    </div>
  );
}

function PlanModeCycleCallout() {
  return (
    <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
      <div className="flex items-start gap-3">
        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
        <div className="text-sm leading-relaxed text-teal-900">
          <p className="font-medium">How the cycle works</p>
          <ol className="mt-2 space-y-1 text-teal-800 list-decimal list-inside">
            <li>You describe what you want to build</li>
            <li>Codex reads your project and writes a detailed plan</li>
            <li>You review the plan — suggest edits, ask questions</li>
            <li>You approve the plan</li>
            <li>Codex switches to implementation and starts coding</li>
          </ol>
          <p className="mt-2 text-teal-700 italic">
            This is how professional software teams work — plan first, then
            build. You own the product judgment; Codex handles the execution.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Open Codex in your project folder",
    description:
      "Make sure you're in the same project folder from earlier, or create a new one. If you created an AGENTS.md context file, Codex will use it as durable guidance.",
  },
  {
    title: "Ask Codex to plan before coding",
    description:
      'In the Codex app or IDE, use Chat/Plan behavior for a broad task. In the CLI, prompt explicitly: "Inspect first, write a plan, and wait for approval before editing."',
    illustration: <PlanModeDropdownIllustration />,
  },
  {
    title: "Understand how Plan Mode works",
    illustration: <PlanModeCycleCallout />,
  },
];

export default function PlanModePage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={0}
      accentClass="track-3"
      sectionTitle="Plan First"
      sectionDescription="Learn how to make Codex design before it builds."
      steps={steps}
      stepIndexOffset={getSectionOffset(0)}
      nextSectionHref="/tracks/mock-interview/build"
      nextSectionLabel="Continue to Build"
      introContent={<PlanModeIntro />}
    />
  );
}
