import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";

interface TrackPlaceholderProps {
  trackNumber: number;
  trackTitle: string;
  accentClass: string;
}

export function TrackPlaceholder({
  trackNumber,
  trackTitle,
  accentClass,
}: TrackPlaceholderProps) {
  return (
    <div className="py-20 text-center">
      <div
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{
          backgroundColor: `color-mix(in oklch, var(--color-${accentClass}) 15%, transparent)`,
        }}
      >
        <Construction
          className="h-8 w-8"
          style={{ color: `var(--color-${accentClass})` }}
        />
      </div>
      <div className="mb-2 text-sm font-medium text-muted-foreground">
        Track {trackNumber}
      </div>
      <h1 className="mb-3 font-serif text-3xl font-bold text-foreground">
        {trackTitle}
      </h1>
      <p className="mx-auto mb-8 max-w-md text-muted-foreground">
        Content for this track will be added during the workshop. Stay tuned!
      </p>
      <Link href="/tracks">
        <Button variant="outline" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Track Selection
        </Button>
      </Link>
    </div>
  );
}
