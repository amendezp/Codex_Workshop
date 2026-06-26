"use client";

import { TrackSection } from "@/components/tracks/track-section";
import {
  BrowserPluginIllustration,
  CodexSidebarIllustration,
} from "@/components/tracks/chrome-illustrations";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import type { TrackStep } from "@/components/tracks/track-steps";

const steps: TrackStep[] = [
  {
    title: "Open Codex settings",
    description:
      "In the Codex app, open Settings and find the Browser section. The in-app Browser is best for localhost previews and public pages that do not require sign-in.",
  },
  {
    title: "Enable the Browser plugin",
    description:
      "Install or enable the Browser plugin so Codex can open local pages, inspect UI state, click, type, take screenshots, and respond to browser comments.",
    illustration: <BrowserPluginIllustration />,
  },
  {
    title: "Optional: set up the Chrome plugin",
    description:
      "Use Chrome when the task needs your signed-in browser state, such as Google Docs, Gmail, LinkedIn, Salesforce, or internal tools. Codex will ask before it uses each website.",
  },
  {
    title: "Verify browser use is ready",
    description:
      "Start a small local preview or open a public page, then ask Codex to inspect the page with @Browser. For signed-in flows, ask it to use @Chrome.",
    illustration: <CodexSidebarIllustration />,
  },
];

export default function SetupPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={1}
      accentClass="track-2"
      sectionTitle="Browser Setup"
      sectionDescription="Enable Codex Browser for local visual QA and Chrome for signed-in web tasks."
      steps={steps}
      stepIndexOffset={getSectionOffset(1)}
      nextSectionHref="/tracks/chrome-navigation/cover-letter"
      nextSectionLabel="Continue to Google Doc"
    />
  );
}
