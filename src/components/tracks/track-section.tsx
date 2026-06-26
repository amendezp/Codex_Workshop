"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Circle,
  CircleCheck,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import { useWorkshopStore } from "@/store/workshop-store";
import type { TrackStep } from "@/components/tracks/track-steps";

interface TrackSectionProps {
  trackId: string;
  sectionIndex: number;
  accentClass: string;
  sectionTitle: string;
  sectionDescription?: string;
  steps: TrackStep[];
  stepIndexOffset: number;
  nextSectionHref?: string;
  nextSectionLabel?: string;
  isLastSection?: boolean;
  isStretchGoal?: boolean;
  introContent?: React.ReactNode;
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

export function TrackSection({
  trackId,
  sectionIndex,
  accentClass,
  sectionTitle,
  sectionDescription,
  steps,
  stepIndexOffset,
  nextSectionHref,
  nextSectionLabel,
  isLastSection,
  isStretchGoal,
  introContent,
}: TrackSectionProps) {
  const router = useRouter();
  const { completedSteps, toggleStep, completedTracks, completeTrack } =
    useWorkshopStore();

  const sectionKeyPrefix = `${trackId}-section`;
  const sectionKey = `${sectionKeyPrefix}-${sectionIndex}`;
  const sectionComplete = completedSteps.includes(sectionKey);
  const trackComplete = completedTracks.includes(trackId);

  const handleComplete = () => {
    // Mark section complete
    if (!sectionComplete) {
      toggleStep(sectionKeyPrefix, sectionIndex);
    }
    if (isLastSection) {
      completeTrack(trackId);
      router.push("/tracks");
    } else if (nextSectionHref) {
      router.push(nextSectionHref);
    }
  };

  return (
    <div className="space-y-6">
      {/* Section header */}
      <div>
        <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground">
          {sectionTitle}
        </h2>
        {sectionDescription && (
          <p className="mt-1 text-sm text-muted-foreground">
            {sectionDescription}
          </p>
        )}
      </div>

      {/* Stretch goal badge */}
      {isStretchGoal && (
        <div
          className="flex items-center gap-2 rounded-lg border px-4 py-3"
          style={{
            borderColor: `color-mix(in oklch, var(--color-${accentClass}) 30%, transparent)`,
            backgroundColor: `color-mix(in oklch, var(--color-${accentClass}) 5%, transparent)`,
          }}
        >
          <Sparkles
            className="h-4 w-4 shrink-0"
            style={{ color: `var(--color-${accentClass})` }}
          />
          <p className="text-sm text-muted-foreground">
            <strong>Bonus challenge!</strong> Try this if you have extra time after
            completing the previous sections.
          </p>
        </div>
      )}

      {/* Intro content */}
      {introContent && <div>{introContent}</div>}

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, i) => {
          const globalIndex = stepIndexOffset + i;
          const isComplete = completedSteps.includes(
            `${trackId}-${globalIndex}`
          );
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
              {/* Step checkbox */}
              <div className="mt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => toggleStep(trackId, globalIndex)}
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

      {/* Section CTA */}
      <div className="space-y-3 text-center pt-2">
        {trackComplete && isLastSection ? (
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
          <>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:opacity-90"
              style={{
                backgroundColor: `var(--color-${accentClass})`,
              }}
              onClick={handleComplete}
            >
              {isLastSection ? (
                <>
                  <CircleCheck className="h-5 w-5" />
                  Complete Track
                </>
              ) : (
                <>
                  {nextSectionLabel || "Continue"}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            <div>
              <Link href="/tracks">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-muted-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Track Selection
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
