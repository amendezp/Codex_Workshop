"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check } from "lucide-react";
import { useWorkshopStore } from "@/store/workshop-store";
import type { Section } from "@/lib/chrome-navigation-sections";

interface SectionProgressProps {
  sections: Section[];
  accentClass: string;
  sectionKeyPrefix?: string;
}

export function SectionProgress({ sections, accentClass, sectionKeyPrefix = "chrome-nav-section" }: SectionProgressProps) {
  const pathname = usePathname();
  const { completedSteps } = useWorkshopStore();

  const getStatus = (section: Section, index: number) => {
    const key = `${sectionKeyPrefix}-${index}`;
    if (completedSteps.includes(key)) return "completed";
    if (pathname === section.href) return "current";
    return "upcoming";
  };

  return (
    <nav className="mx-auto flex max-w-2xl items-center justify-center gap-0 py-2">
      {sections.map((section, index) => {
        const status = getStatus(section, index);
        return (
          <div key={section.id} className="flex items-center">
            {index > 0 && (
              <div
                className={`mx-1 h-px w-4 sm:mx-1.5 sm:w-6 md:w-10 ${
                  status === "completed" || status === "current"
                    ? ""
                    : "bg-border"
                }`}
                style={
                  status === "completed" || status === "current"
                    ? { backgroundColor: `var(--color-${accentClass})` }
                    : undefined
                }
              />
            )}
            <Link
              href={section.href}
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium transition-colors sm:px-2.5 sm:text-xs ${
                status === "current"
                  ? "text-white"
                  : status === "completed"
                    ? "hover:opacity-80"
                    : "text-muted-foreground/50 hover:text-muted-foreground"
              }`}
              style={
                status === "current"
                  ? { backgroundColor: `var(--color-${accentClass})` }
                  : status === "completed"
                    ? { color: `var(--color-${accentClass})` }
                    : undefined
              }
            >
              {status === "completed" ? (
                <Check className="h-3 w-3" />
              ) : (
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] ${
                    status === "current"
                      ? "bg-white/20 text-white"
                      : "bg-muted text-muted-foreground/50"
                  }`}
                >
                  {section.number}
                </span>
              )}
              <span className="hidden sm:inline">{section.shortTitle}</span>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
