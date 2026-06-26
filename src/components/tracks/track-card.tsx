"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Globe,
  Rocket,
  Clock,
  CircleCheck,
  Star,
  Zap,
  Gift,
} from "lucide-react";
import { useWorkshopStore } from "@/store/workshop-store";
import type { Track } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Globe,
  Rocket,
};

const tagConfig: Record<string, { icon: React.ElementType; className: string }> =
  {
    "Warm-up": {
      icon: Zap,
      className: "bg-blue-100 text-blue-800",
    },
    "Core Workshop": {
      icon: Star,
      className: "bg-red-100 text-red-800",
    },
    Bonus: {
      icon: Gift,
      className: "bg-amber-100 text-amber-800",
    },
  };

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  const Icon = iconMap[track.icon] || BarChart3;
  const { completedTracks } = useWorkshopStore();
  const isComplete = completedTracks.includes(track.id);
  const tag = track.tag ? tagConfig[track.tag] : null;
  const TagIcon = tag?.icon || Zap;

  return (
    <Card
      className={`group flex flex-col transition-all hover:shadow-lg ${
        isComplete
          ? "border-green-200 bg-green-50/30"
          : track.featured
            ? "border-2 bg-gradient-to-br from-white to-red-50/40"
            : ""
      }`}
      style={
        track.featured && !isComplete
          ? {
              borderColor: `color-mix(in oklch, var(--color-${track.accentClass}) 40%, transparent)`,
              boxShadow: `0 0 24px color-mix(in oklch, var(--color-${track.accentClass}) 10%, transparent)`,
            }
          : undefined
      }
    >
      <CardContent
        className={`flex flex-1 flex-col ${track.featured ? "p-8" : "p-6"}`}
      >
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`flex items-center justify-center rounded-xl ${
              track.featured ? "h-14 w-14" : "h-12 w-12"
            } ${isComplete ? "bg-green-100" : ""}`}
            style={
              !isComplete
                ? {
                    backgroundColor: `color-mix(in oklch, var(--color-${track.accentClass}) 15%, transparent)`,
                  }
                : undefined
            }
          >
            {isComplete ? (
              <CircleCheck className="h-6 w-6 text-green-600" />
            ) : (
              <Icon
                className={track.featured ? "h-7 w-7" : "h-6 w-6"}
                style={{ color: `var(--color-${track.accentClass})` }}
              />
            )}
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold text-muted-foreground">
            {track.number}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mb-2 font-serif font-semibold text-foreground ${
            track.featured ? "text-2xl" : "text-xl"
          }`}
        >
          {track.title}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {track.description}
        </p>

        {/* Badges */}
        <div className="mb-4 flex items-center gap-2">
          {tag ? (
            <Badge variant="secondary" className={`gap-1 ${tag.className}`}>
              <TagIcon className="h-3 w-3" />
              {track.tag}
            </Badge>
          ) : (
            <Badge
              variant="secondary"
              className={
                {
                  Beginner: "bg-green-100 text-green-800",
                  Intermediate: "bg-amber-100 text-amber-800",
                  Advanced: "bg-red-100 text-red-800",
                }[track.difficulty]
              }
            >
              {track.difficulty}
            </Badge>
          )}
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            {track.estimatedTime}
          </Badge>
        </div>

        {/* CTA */}
        <Link href={track.href} className="block">
          {isComplete ? (
            <Button
              variant="outline"
              className="w-full gap-2 border-green-200 text-green-700 hover:bg-green-50"
            >
              <CircleCheck className="h-4 w-4" />
              Completed
            </Button>
          ) : track.featured ? (
            <button
              type="button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white shadow-sm transition-all group-hover:gap-3"
              style={{
                backgroundColor: `var(--color-${track.accentClass})`,
              }}
            >
              Start Main Track
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <Button className="w-full gap-2 transition-all group-hover:gap-3">
              {track.tag === "Warm-up"
                ? "Start Warm-up"
                : track.tag === "Bonus"
                  ? "Start Bonus"
                  : "Start Track"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </Link>
      </CardContent>
    </Card>
  );
}
