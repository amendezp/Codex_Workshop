"use client";

import Link from "next/link";
import { STEPS } from "@/lib/constants";
import { useWorkshopStore } from "@/store/workshop-store";
import { Check } from "lucide-react";

export function Header() {
  const { isRegistered, currentStep } = useWorkshopStore();

  const getStepStatus = (index: number) => {
    if (index === 0 && isRegistered) return "completed";
    if (index < currentStep) return "completed";
    if (index === currentStep) return "current";
    return "upcoming";
  };

  // Determine if a step is clickable
  const isClickable = (index: number) => {
    if (index === 0) return true;
    if (index === 1) return isRegistered;
    if (index === 2) return isRegistered;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-baseline gap-0.5">
              <span className="font-serif text-xl font-bold tracking-tight text-primary">
                AI
              </span>
              <span className="font-serif text-xl font-light text-muted-foreground">
                @
              </span>
              <span className="font-serif text-xl font-bold tracking-tight text-primary">
                GSB
              </span>
            </div>
            <span className="hidden text-sm text-muted-foreground sm:inline">
              Codex Workshop
            </span>
          </Link>
          <span className="hidden text-muted-foreground/40 sm:inline">·</span>
          <a
            href="https://www.linkedin.com/in/amendezp/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[11px] text-muted-foreground/60 underline underline-offset-2 decoration-muted-foreground/30 hover:text-primary hover:decoration-primary transition-colors sm:inline"
          >
            by Alfredo Mendez
          </a>
        </div>

        {/* Progress Steps */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {STEPS.map((step, index) => {
            const status = getStepStatus(index);
            const clickable = isClickable(index);

            return (
              <div key={step.label} className="flex items-center">
                {index > 0 && (
                  <div
                    className={`mx-1 h-px w-4 sm:mx-2 sm:w-8 ${
                      status === "completed" || index <= currentStep
                        ? "bg-primary"
                        : "bg-border"
                    }`}
                  />
                )}
                {clickable ? (
                  <Link
                    href={step.href}
                    className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-colors sm:px-3 sm:text-sm ${
                      status === "current"
                        ? "bg-primary text-primary-foreground"
                        : status === "completed"
                          ? "bg-primary/10 text-primary hover:bg-primary/20"
                          : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {status === "completed" ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-current/10 text-[10px]">
                        {index + 1}
                      </span>
                    )}
                    <span className="hidden sm:inline">{step.label}</span>
                  </Link>
                ) : (
                  <span
                    className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium text-muted-foreground/50 sm:px-3 sm:text-sm"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-muted text-[10px] text-muted-foreground/50">
                      {index + 1}
                    </span>
                    <span className="hidden sm:inline">{step.label}</span>
                  </span>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
