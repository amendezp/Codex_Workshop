"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Copy, CircleCheck, Circle, PartyPopper } from "lucide-react";
import { useWorkshopStore } from "@/store/workshop-store";

export interface TrackStep {
  title: string;
  description?: string;
  prompt?: string;
  illustration?: React.ReactNode;
}

interface TrackStepsProps {
  trackId: string;
  trackNumber: number;
  trackTitle: string;
  trackDescription: string;
  accentClass: string;
  difficulty: string;
  estimatedTime: string;
  steps: TrackStep[];
  icon: React.ReactNode;
}

function PromptBlock({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-2 group relative rounded-lg border bg-[#2a2a2a] px-4 py-3">
      <p className="pr-10 font-mono text-sm text-white/90">{prompt}</p>
      <p className="mt-2 text-xs italic text-white/40">
        (Feel free to adjust as needed. Play around and don&apos;t be shy!)
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-3 top-3 rounded-md p-1 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80"
        aria-label="Copy prompt"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export function TrackSteps({
  trackId,
  trackNumber,
  trackTitle,
  trackDescription,
  accentClass,
  difficulty,
  estimatedTime,
  steps,
  icon,
}: TrackStepsProps) {
  const router = useRouter();
  const { completedSteps, toggleStep, completedTracks, completeTrack } =
    useWorkshopStore();

  const completedCount = steps.filter((_, i) =>
    completedSteps.includes(`${trackId}-${i}`)
  ).length;
  const trackComplete = completedTracks.includes(trackId);

  const handleMarkTrackComplete = () => {
    completeTrack(trackId);
    router.push("/tracks");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div
          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: `color-mix(in oklch, var(--color-${accentClass}) 15%, transparent)`,
            color: `var(--color-${accentClass})`,
          }}
        >
          {icon}
        </div>
        <div className="mb-2 text-sm font-medium text-muted-foreground">
          Track {trackNumber}
        </div>
        <h1 className="mb-3 font-serif text-3xl font-bold tracking-tight text-foreground">
          {trackTitle}
        </h1>
        <p className="mx-auto mb-4 max-w-lg text-muted-foreground">
          {trackDescription}
        </p>
        <div className="inline-flex items-center gap-3 text-xs text-muted-foreground">
          <span
            className="rounded-full px-2.5 py-1 font-medium"
            style={{
              backgroundColor: `color-mix(in oklch, var(--color-${accentClass}) 12%, transparent)`,
              color: `var(--color-${accentClass})`,
            }}
          >
            {difficulty}
          </span>
          <span>{estimatedTime}</span>
          <span className="text-muted-foreground/60">·</span>
          <span>
            {completedCount}/{steps.length} steps done
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="mx-auto max-w-2xl space-y-3">
        {steps.map((step, i) => {
          const isComplete = completedSteps.includes(`${trackId}-${i}`);
          return (
            <div
              key={i}
              className={`rounded-lg border bg-card p-4 transition-colors ${
                isComplete ? "border-green-200 bg-green-50/50" : ""
              }`}
            >
              <div className="flex gap-4">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-colors ${
                    isComplete ? "bg-green-500" : ""
                  }`}
                  style={
                    !isComplete
                      ? { backgroundColor: `var(--color-${accentClass})` }
                      : undefined
                  }
                >
                  {isComplete ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <div className="flex-1">
                  <p
                    className={`font-medium ${
                      isComplete
                        ? "text-green-700 line-through decoration-green-300"
                        : "text-foreground"
                    }`}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  )}
                  {step.prompt && <PromptBlock prompt={step.prompt} />}
                  {step.illustration && (
                    <div className="mt-3">{step.illustration}</div>
                  )}
                </div>
              </div>
              {/* Completion checkbox */}
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => toggleStep(trackId, i)}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                    isComplete
                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {isComplete ? (
                    <>
                      <CircleCheck className="h-3.5 w-3.5" />
                      Done!
                    </>
                  ) : (
                    <>
                      <Circle className="h-3.5 w-3.5" />
                      Mark complete
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mark as Complete / Back */}
      <div className="mx-auto max-w-2xl space-y-4">
        {trackComplete ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
            <PartyPopper className="mx-auto mb-2 h-8 w-8 text-green-600" />
            <p className="text-lg font-semibold text-green-800">
              Track complete!
            </p>
            <p className="mt-1 text-sm text-green-700">
              Great job — head back and try the next track.
            </p>
            <Link href="/tracks">
              <Button variant="outline" className="mt-4 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Track Selection
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3 text-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-90"
              style={{
                backgroundColor: `var(--color-${accentClass})`,
              }}
              onClick={handleMarkTrackComplete}
            >
              <CircleCheck className="h-5 w-5" />
              Mark as Complete
            </button>
            <div>
              <Link href="/tracks">
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Track Selection
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
