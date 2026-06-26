"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { Zap, Sparkles, Rocket } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function BuildIntro() {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100">
          <Zap className="h-5 w-5 text-purple-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            Time to build something real
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            You&apos;re about to co-create a full AI-powered interview prep
            platform. Codex will build a Next.js app with OpenAI-powered
            feedback, personalized to your career profile. This is the main
            event - let&apos;s go.
          </p>
        </div>
      </div>
    </div>
  );
}

function BuildWowCallout() {
  return (
    <div className="mt-2 rounded-lg border border-purple-200 bg-gradient-to-r from-purple-50 to-fuchsia-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100">
          <Sparkles className="h-4 w-4 text-purple-600" />
        </div>
        <div className="text-sm leading-relaxed text-purple-900">
          <p className="font-semibold">This is the big build moment</p>
          <p className="mt-1 text-purple-800">
            Codex is now writing an entire web application from scratch -
            components, API routes, styling, and AI integration. A few minutes
            of waiting, and you&apos;ll have a fully functional interview
            simulator. Grab a coffee and enjoy the show!
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Send this prompt to Codex",
    prompt:
      'Build me a behavioral interview coach web app using Next.js and the OpenAI Responses API. The app should read the API key from an environment variable named exactly OPENAI_API_KEY; I will set this in Vercel. Use the official OpenAI SDK, centralize the model name in one constant, and default to gpt-5.5 when available.\n\nHere is what I need:\n\n1. Question Generation: Generate interview questions across behavioral (STAR method), open-ended case questions, and situational judgment. Let the user select question type and difficulty level.\n\n2. Job Description Mode: Include an input where users can paste a job description URL or text. Generate interview questions tailored to that role.\n\n3. Answer Options: Let users answer by free-form text or choose from multiple-choice options.\n\n4. AI Feedback: After submitting an answer, use the OpenAI API to provide structured feedback: strengths, missed points, next revision, and a concise score. For behavioral questions, evaluate against STAR.\n\n5. Personalization: If an AGENTS.md file exists with my background, use it to tailor questions and feedback to my industry, experience level, and goals.\n\nMake it clean, modern, responsive, and production-minded. Include a landing page, question interface, and results/feedback view. Before editing, inspect the project and give me a concise implementation plan; wait for my approval.',
  },
  {
    title: "Review Codex's plan",
    description:
      "Codex will analyze the requirements and write a detailed implementation plan. Read through it: does the architecture make sense, and are the API, UX, and deployment choices clear? Suggest changes before approving.",
  },
  {
    title: "Approve the plan and let Codex build",
    description:
      "Once you're happy with the plan, approve it. Codex will switch to implementation mode and start writing code. This may take a few minutes; it is building an entire web app.",
    illustration: <BuildWowCallout />,
  },
  {
    title: "We're not done yet!",
    description:
      "Your app works locally — amazing! But right now it only lives on your machine. In the next steps, we'll push your code to a GitHub repository and then deploy it to production on Vercel so anyone in the world can use it. Let's keep going!",
    illustration: (
      <div className="mt-2 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">
            <Rocket className="h-4 w-4 text-blue-600" />
          </div>
          <div className="text-sm leading-relaxed text-blue-900">
            <p className="font-semibold">From localhost to the world</p>
            <p className="mt-1 text-blue-800">
              Building the app was the hard part — now we need to get your code
              into a repository and deploy it into production. Two more sections
              and your app will be live on the internet!
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function BuildPage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={1}
      accentClass="track-3"
      sectionTitle="Build the Interview Coach"
      sectionDescription="Co-create a full AI-powered interview prep platform with Codex."
      steps={steps}
      stepIndexOffset={getSectionOffset(1)}
      nextSectionHref="/tracks/mock-interview/github"
      nextSectionLabel="Continue to GitHub"
      introContent={<BuildIntro />}
    />
  );
}
