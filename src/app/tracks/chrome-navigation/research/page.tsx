"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { getSectionOffset } from "@/lib/chrome-navigation-sections";
import type { TrackStep } from "@/components/tracks/track-steps";

const steps: TrackStep[] = [
  {
    title: "Pick your source and tool",
    description:
      "Use @Browser for public research, @Chrome for signed-in pages, or a Google Sheets/Drive plugin if available in your Codex setup.",
  },
  {
    title: "Send this prompt to Codex",
    prompt:
      "Research 10 current AI deployment manager or AI transformation roles that match my AGENTS.md background. Create a Google Sheet or local CSV with columns: Company, Role Title, Estimated Salary Range, Why It Matches Me, Skills To Highlight, Link, and Relevance Score 1-10. Sort by relevance score descending and include source links.",
  },
  {
    title: "Let Codex research and structure",
    description:
      "This task is more complex. Codex will gather sources, compare them against your AGENTS.md context, and create a structured spreadsheet. Ask it to cite where each row came from.",
  },
  {
    title: "Review your spreadsheet",
    description:
      "Open the sheet or CSV and check the relevance scores, salary assumptions, and links. Ask Codex to revise weak rows or add a column for outreach strategy.",
  },
];

export default function ResearchPage() {
  return (
    <TrackSection
      trackId="chrome-navigation"
      sectionIndex={3}
      accentClass="track-2"
      sectionTitle="Research Spreadsheet"
      steps={steps}
      stepIndexOffset={getSectionOffset(3)}
      isLastSection
      isStretchGoal
    />
  );
}
