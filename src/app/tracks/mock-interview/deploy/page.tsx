"use client";

import { TrackSection } from "@/components/tracks/track-section";
import {
  OpenAIAPIKeyIllustration,
  VercelDeployIllustration,
} from "@/components/tracks/interview-illustrations";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { Globe, PartyPopper, AlertTriangle, ShieldAlert } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function DeployIntro() {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100">
          <Globe className="h-5 w-5 text-blue-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">The finish line!</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            You&apos;ll deploy your interview app to the web so anyone can use
            it. Vercel makes this incredibly easy, especially with Next.js
            projects. In a few clicks, your app will be live with its own URL.
          </p>
        </div>
      </div>
    </div>
  );
}

function APIKeyWarning() {
  return (
    <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
        <div className="text-sm leading-relaxed text-amber-900">
          <p className="font-medium">Keep your API key safe!</p>
          <p className="mt-1 text-amber-800">
            Never commit your API key to code or share it publicly. Vercel
            environment variables are encrypted and kept secure — that&apos;s
            why we add it there instead of putting it in the code.
          </p>
        </div>
      </div>
    </div>
  );
}

function CongratsBanner() {
  return (
    <div className="mt-2 rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100">
          <PartyPopper className="h-4 w-4 text-emerald-600" />
        </div>
        <div className="text-sm leading-relaxed text-emerald-900">
          <p className="font-semibold">You did it!</p>
          <p className="mt-1 text-emerald-800">
            You just built and deployed a full AI-powered web application.
            Share the link with friends, classmates, or use it for actual
            interview prep. Welcome to the future of building with AI.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Get your OpenAI API key",
    description:
      'Your app needs an API key to call OpenAI. Go to platform.openai.com/api-keys, click "Create new secret key", and copy the key. You will add it to Vercel in a moment.',
    illustration: (
      <>
        <OpenAIAPIKeyIllustration />
        <APIKeyWarning />
      </>
    ),
  },
  {
    title: "Go to Vercel and import your project",
    description:
      'Visit vercel.com/new, sign in with your GitHub account, and find the repository you just created. Click "Import" to start the deployment setup.',
    illustration: <VercelDeployIllustration />,
  },
  {
    title: "Add your API key as an environment variable",
    description:
      'Before deploying, expand the "Environment Variables" section. Add a new variable with the name OPENAI_API_KEY and paste your API key as the value. This keeps your key secure; it is stored encrypted on Vercel, not in your code.',
    illustration: (
      <div className="rounded-lg border-2 border-red-300 bg-gradient-to-r from-red-50 to-orange-50 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100">
            <ShieldAlert className="h-4 w-4 text-red-600" />
          </div>
          <div className="text-sm leading-relaxed text-red-900">
            <p className="font-semibold">Critical step — your app won&apos;t work without this!</p>
            <p className="mt-1 text-red-800">
              The variable name must be exactly <code className="rounded bg-red-100 px-1.5 py-0.5 font-mono text-xs font-bold">OPENAI_API_KEY</code>.
              Without it, the AI features won&apos;t be able to connect to OpenAI and your app will show errors.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Deploy!",
    description:
      'Click "Deploy" and watch Vercel build and deploy your app. This usually takes 1-2 minutes. Once it is done, you will get a live URL like interview-coach.vercel.app.',
  },
  {
    title: "Visit your live app",
    description:
      "Click the URL and try your interview coach in production. Generate a question, write an answer, and get AI feedback, all running on the live web.",
    illustration: <CongratsBanner />,
  },
];

export default function DeployPage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={3}
      accentClass="track-3"
      sectionTitle="Deploy on Vercel"
      sectionDescription="Deploy your interview app to the web with Vercel and set up your API key."
      steps={steps}
      stepIndexOffset={getSectionOffset(3)}
      introContent={<DeployIntro />}
      nextSectionHref="/tracks/mock-interview/branding"
      nextSectionLabel="Continue to Stretch Goal"
    />
  );
}
