"use client";

import { BarChart3 } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { TrackSteps, TrackStep } from "@/components/tracks/track-steps";
import {
  FolderIllustration,
  CodeTabIllustration,
  NewSessionIllustration,
  FolderPickerIllustration,
  VisualizationResultIllustration,
} from "@/components/tracks/illustrations";

const steps: TrackStep[] = [
  {
    title: "Create a new folder on your desktop",
    description:
      "Or wherever works best for you. This will be the project folder Codex works in.",
    illustration: <FolderIllustration />,
  },
  {
    title: "Open Codex",
    description:
      "Launch the Codex app, open the IDE extension, or run codex from your terminal.",
  },
  {
    title: "Start a local Codex thread",
    description:
      "Select your folder as the project and choose Local mode for this warm-up.",
    illustration: <CodeTabIllustration />,
  },
  {
    title: "Start a new thread",
    description: "Click the new session button to begin a fresh conversation.",
    illustration: <NewSessionIllustration />,
  },
  {
    title: "Select the folder you created",
    description:
      'Point Codex at your new folder so it knows where to create files. Make sure the environment is set to "Local."',
    illustration: <FolderPickerIllustration />,
  },
  {
    title: "Type this prompt and hit send",
    prompt:
      "Create a tiny interactive HTML visualization that shows how an AI agent moves from prompt to plan to code to review. Keep it in one file, open it locally, and make it visually polished.",
  },
  {
    title: "Approve the permissions Codex asks for",
    description:
      "Codex may request permission to create files, run commands, or open a local preview. Approve the scoped actions you understand.",
  },
  {
    title: "Review, then ask for one improvement",
    description:
      "Use the preview to inspect the result, then ask Codex to improve one thing: color, motion, layout, copy, or mobile responsiveness.",
    illustration: <VisualizationResultIllustration />,
  },
];

export default function VisualizationTrackPage() {
  return (
    <PageContainer>
      <TrackSteps
        trackId="visualization"
        trackNumber={1}
        trackTitle="First Codex Build"
        trackDescription="Use Codex to create a polished interactive visualization from scratch, preview it locally, and iterate once."
        accentClass="track-1"
        difficulty="Beginner"
        estimatedTime="~1 min"
        steps={steps}
        icon={<BarChart3 className="h-7 w-7" />}
      />
    </PageContainer>
  );
}
