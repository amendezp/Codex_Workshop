"use client";

import { TrackSection } from "@/components/tracks/track-section";
import { getSectionOffset } from "@/lib/mock-interview-sections";
import { Palette, Sparkles, MousePointer, Download, Paperclip } from "lucide-react";
import type { TrackStep } from "@/components/tracks/track-steps";

function BrandingIntro() {
  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-100">
          <Palette className="h-5 w-5 text-pink-700" />
        </div>
        <div>
          <h3 className="font-medium text-foreground">
            Design matters — more than ever
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Building a great product isn&apos;t just engineering and product
            strategy — <strong className="text-foreground">design is the
            third pillar</strong>. In the age of AI, where anyone can generate
            functional code in minutes, taste and good UI become your
            competitive edge. The bar for what looks &quot;professional&quot;
            has skyrocketed because AI makes it so easy to get there. If your
            prototype doesn&apos;t look polished, it won&apos;t get the
            attention it deserves — no matter how smart the logic behind it is.
          </p>
        </div>
      </div>
    </div>
  );
}

function VariantIllustration() {
  return (
    <div className="mt-2 rounded-lg border border-pink-200 bg-gradient-to-r from-pink-50 to-fuchsia-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100">
          <Sparkles className="h-4 w-4 text-pink-600" />
        </div>
        <div className="text-sm leading-relaxed text-pink-900">
          <p className="font-semibold">What is Variant?</p>
          <p className="mt-1 text-pink-800">
            Variant is a design tool where you enter an idea for an app or site
            and see endless design options just by scrolling. Think of it as an
            AI mood board — you browse until something catches your eye, then
            export it. No design skills required.
          </p>
        </div>
      </div>
    </div>
  );
}

function DownloadIllustration() {
  return (
    <div className="mt-2 rounded-lg border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-4">
      <div className="space-y-3 text-sm text-violet-900">
        <p className="font-semibold flex items-center gap-1.5">
          <MousePointer className="h-3.5 w-3.5 text-violet-500" />
          How to download the HTML
        </p>
        <ol className="ml-5 list-decimal space-y-1.5 text-violet-800">
          <li>Find a design you like on Variant</li>
          <li>
            Click the <strong>three dots</strong> (&hellip;) on the design card
          </li>
          <li>
            Select{" "}
            <strong className="inline-flex items-center gap-1">
              <Download className="h-3 w-3" /> Download HTML
            </strong>
          </li>
          <li>The file will save to your Downloads folder</li>
        </ol>
      </div>
    </div>
  );
}

function AttachFileIllustration() {
  return (
    <div className="mt-2 rounded-lg border border-amber-200 bg-gradient-to-r from-amber-50 to-yellow-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100">
          <Paperclip className="h-4 w-4 text-amber-600" />
        </div>
        <div className="text-sm leading-relaxed text-amber-900">
          <p className="font-semibold">How to attach a file in Codex</p>
          <p className="mt-1 text-amber-800">
            In the Codex composer, click the{" "}
            <strong>paperclip icon</strong> (or drag and drop the file) to
            attach the downloaded HTML file. Then type the prompt below and
            send it. Codex will read the design file and apply the branding
            to your app.
          </p>
        </div>
      </div>
    </div>
  );
}

const steps: TrackStep[] = [
  {
    title: "Visit variant.com",
    description:
      "Open variant.com in your browser. This is a design exploration tool — enter an idea for your interview simulator and scroll through endless design options. Browse until you find a branding identity that resonates with you: colors, typography, layout style, the whole vibe.",
    illustration: <VariantIllustration />,
  },
  {
    title: "Generate or browse a design identity",
    description:
      "You can type a description of your platform in Variant's search bar (e.g., \"professional interview prep platform with a modern, clean look\") or simply scroll and explore. Look for a design whose color palette, fonts, and overall feel match the brand you want for your simulator.",
  },
  {
    title: "Download the HTML file",
    description:
      "Once you've found a design you love, click the three dots (...) on the design card and select \"Download HTML\". This gives you a file that contains the full design identity: colors, typography, spacing, and component styles that Codex can use as a reference.",
    illustration: <DownloadIllustration />,
  },
  {
    title: "Attach the file and send this prompt to Codex",
    prompt:
      "I've attached an HTML file with a design identity I like from Variant. Please update my interview coach's branding to match this design: extract the color palette, typography, spacing, and overall visual style from the HTML file and apply it across my entire app. Update the global styles, component themes, buttons, cards, backgrounds, and typography to match. Use Codex image generation for any illustrations or visual assets needed to complete the look. Keep all functionality the same; only change the visual identity.",
    illustration: <AttachFileIllustration />,
  },
  {
    title: "Review your redesigned app",
    description:
      "Once Codex finishes, run your app and inspect the new look. Check that the branding feels consistent across all pages: landing page, question interface, and feedback view. Ask Codex to tweak anything that doesn't feel right.",
  },
];

export default function BrandingPage() {
  return (
    <TrackSection
      trackId="mock-interview"
      sectionIndex={4}
      accentClass="track-3"
      sectionTitle="Branding & Design Identity"
      sectionDescription="Give your prototype a polished, professional look using AI-generated design."
      steps={steps}
      stepIndexOffset={getSectionOffset(4)}
      isStretchGoal
      nextSectionHref="/tracks/mock-interview/voice"
      nextSectionLabel="Continue to Voice Input"
      introContent={<BrandingIntro />}
    />
  );
}
