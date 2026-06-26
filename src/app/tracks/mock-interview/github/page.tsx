"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { GitHubNewRepoIllustration } from "@/components/tracks/interview-illustrations";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { GitBranch, AlertTriangle, Link as LinkIcon } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function GitHubIntro() {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100">
          <GitBranch className="h-5 w-5 text-gray-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            Ship it to the cloud
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Your interview simulator is running locally — now let&apos;s put
            it on GitHub so it lives in the cloud and you can deploy it.
            GitHub is where developers store and share code, and it connects
            directly to deployment platforms like Vercel. Codex can help with
            the Git commands, but you still review what gets committed.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Create a new GitHub repository",
    description:
      'Go to github.com/new (or click the "+" in the top-right corner of GitHub) and create a new repository. Name it something like "interview-coach". Keep it Public and do NOT initialize with a README; Codex already created one for you.',
    illustration: <GitHubNewRepoIllustration />,
  },
  {
    title: "Send this prompt to Codex",
    prompt:
      "Initialize a git repository in this project if needed, inspect the diff, create a sensible first commit, and push everything to my new GitHub repo. My repository URL is: [PASTE YOUR GITHUB REPO URL HERE]",
    illustration: (
      <div className="mt-1 rounded-lg border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
          </div>
          <div className="text-sm leading-relaxed text-orange-900">
            <p className="font-semibold">
              Replace the URL with YOUR repository link!
            </p>
            <p className="mt-1 text-orange-800">
              Before sending this prompt, make sure to replace{" "}
              <code className="rounded bg-orange-100 px-1.5 py-0.5 font-mono text-xs font-bold">
                [PASTE YOUR GITHUB REPO URL HERE]
              </code>{" "}
              with the actual URL of the repository you just created. It should
              look something like:
            </p>
            <div className="mt-2 flex items-center gap-2 rounded-md bg-white/70 px-3 py-2 font-mono text-xs text-orange-900">
              <LinkIcon className="h-3.5 w-3.5 shrink-0 text-orange-500" />
              https://github.com/your-username/interview-coach.git
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Authenticate if needed",
    description:
      "Codex may ask you to authenticate with GitHub. Follow the prompts; this usually involves GitHub CLI auth, a browser-based OAuth flow, or a personal access token. If you've used Git on this machine before, it may work automatically.",
  },
  {
    title: "Verify on GitHub",
    description:
      "Open your repository URL in the browser and confirm all your project files are there. You should see the full project structure, README, and all the source code. Congrats — your code is in the cloud!",
  },
];

export default function GitHubPage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={2}
      accentClass="track-3"
      sectionTitle="Ship to GitHub"
      sectionDescription="Create a repository and push your project to GitHub."
      steps={steps}
      stepIndexOffset={getSectionOffset(2)}
      nextSectionHref="/tracks/mock-interview/deploy"
      nextSectionLabel="Continue to Deploy"
      introContent={<GitHubIntro />}
    />
  );
}
