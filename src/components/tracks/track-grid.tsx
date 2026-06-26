import { TRACKS } from "@/lib/constants";
import { TrackCard } from "./track-card";

export function TrackGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TRACKS.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </div>
  );
}
