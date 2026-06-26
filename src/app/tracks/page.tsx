"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { TrackGrid } from "@/components/tracks/track-grid";
import { useWorkshopStore } from "@/store/workshop-store";
import { Button } from "@/components/ui/button";
import { Compass, MessageSquareHeart, FileDown } from "lucide-react";

export default function TracksPage() {
  const { setCurrentStep, isRegistered } = useWorkshopStore();

  useEffect(() => {
    setCurrentStep(2);
  }, [setCurrentStep]);

  if (!isRegistered) {
    return (
      <PageContainer>
        <div className="py-20 text-center">
          <p className="mb-4 text-muted-foreground">
            Please complete the setup checklist first.
          </p>
          <Link href="/">
            <Button variant="outline">Go to Setup</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
          <Compass className="h-4 w-4" />
          Choose Your Path
        </div>
        <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-foreground">
          Pick a Track
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Start with the warm-up to test your setup, then dive into the main
          track. If you finish early, try the bonus track!
        </p>
      </div>
      <TrackGrid />

      {/* Handout & Feedback */}
      <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        {/* Handout */}
        <div className="w-full max-w-xs rounded-xl border bg-gradient-to-r from-muted/50 to-muted/30 p-6 text-center">
          <FileDown className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Workshop Handout
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Cheat sheet, glossary, and key lessons — all on two printable pages.
          </p>
          <a href="/handout.html" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="mt-4 gap-2">
              <FileDown className="h-4 w-4" />
              Open Handout
            </Button>
          </a>
        </div>

        {/* Feedback */}
        <div className="w-full max-w-xs rounded-xl border bg-gradient-to-r from-primary/5 to-primary/10 p-6 text-center">
          <MessageSquareHeart className="mx-auto mb-3 h-8 w-8 text-primary" />
          <h3 className="font-serif text-lg font-semibold text-foreground">
            Feedback is a gift
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Help us make this workshop better.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScABedHVgsIitbv8aG2hJKYgV6XW30BZ9osIJa1aF9kb_wfTg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 gap-2">
              <MessageSquareHeart className="h-4 w-4" />
              Share Your Feedback
            </Button>
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
