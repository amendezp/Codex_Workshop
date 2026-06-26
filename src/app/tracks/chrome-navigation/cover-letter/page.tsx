"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { PermissionsDropdownIllustration } from "@/components/tracks/chrome-illustrations";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import { AlertTriangle, Eye, Sparkles } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function AutoAcceptCallout() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
        <div className="text-sm leading-relaxed text-amber-900">
          <p className="font-medium">Use scoped autonomy</p>
          <p className="mt-1 text-amber-800">
            Browser and Chrome workflows can affect real accounts. Let Codex
            move quickly only after you understand the target website and the
            action it will take. Stay present for account, privacy, payment, or
            credential-related steps.
          </p>
        </div>
      </div>
    </div>
  );
}

function WowMomentCallout() {
  return (
    <div className="mt-2 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-fuchsia-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100">
          <Eye className="h-4 w-4 text-purple-600" />
        </div>
        <div className="text-sm leading-relaxed text-purple-900">
          <p className="font-semibold flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-purple-500" />
            The browser loop
          </p>
          <p className="mt-1 text-purple-800">
            Codex can move from project context to a signed-in web app, draft a
            document, and then return to the thread with a summary. The magic is
            not just writing; it is coordinating tools while you keep oversight.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Choose the right browser tool",
    description:
      "Use @Browser for localhost and public pages. Use @Chrome only if you need a signed-in site such as Google Docs.",
    illustration: <PermissionsDropdownIllustration />,
  },
  {
    title: "Understand scoped autonomy",
    illustration: <AutoAcceptCallout />,
  },
  {
    title: "Send this prompt to Codex",
    prompt:
      "Using @Chrome if needed, create a new Google Doc that drafts a one-page personal AI deployment plan for me. Use the background and goals in AGENTS.md. Include: my AI leverage thesis, three workflows I should practice with Codex, one risk to manage, and a 7-day follow-up plan. Keep it concise and polished.",
  },
  {
    title: "Watch Codex operate the page",
    description:
      "Codex may open Chrome, navigate to Google Docs, create a document, and draft content from your AGENTS.md context. Review prompts before approving site access.",
    illustration: <WowMomentCallout />,
  },
  {
    title: "Review and revise",
    description:
      "Read the draft in Google Docs. Ask Codex to make one concrete revision, such as making it more executive, more tactical, or more personal.",
  },
];

export default function CoverLetterPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={2}
      accentClass="track-2"
      sectionTitle="Google Doc Draft"
      sectionDescription="Watch Codex use browser tooling to create a personalized document."
      steps={steps}
      stepIndexOffset={getSectionOffset(2)}
      nextSectionHref="/tracks/chrome-navigation/research"
      nextSectionLabel="Continue to Stretch Goal"
    />
  );
}
