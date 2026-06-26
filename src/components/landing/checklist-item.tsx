"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink, ChevronDown } from "lucide-react";
import type { ChecklistItem as ChecklistItemType } from "@/types";

interface ChecklistItemProps {
  item: ChecklistItemType;
  checked: boolean;
  onToggle: () => void;
}

export function ChecklistItem({ item, checked, onToggle }: ChecklistItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`rounded-lg border transition-all ${
        checked
          ? "border-primary/20 bg-primary/5"
          : "border-border bg-card hover:border-border/80"
      }`}
    >
      <div className="flex items-start gap-4 p-4">
        <Checkbox
          id={item.id}
          checked={checked}
          onCheckedChange={onToggle}
          className="mt-0.5"
        />
        <div className="flex-1 space-y-1">
          <label
            htmlFor={item.id}
            className={`cursor-pointer text-sm font-medium leading-none ${
              checked ? "text-primary" : "text-foreground"
            }`}
          >
            {item.label}
          </label>
          <p className="text-xs text-muted-foreground">{item.description}</p>
          {item.expandableHelp && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-1 flex items-center gap-1 text-xs font-medium text-primary/70 transition-colors hover:text-primary"
            >
              <ChevronDown
                className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
              />
              {item.expandableHelp.title}
            </button>
          )}
        </div>
        <a
          href={item.helpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Setup guide
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* Expandable help section */}
      {item.expandableHelp && expanded && (
        <div className="border-t border-border/50 bg-muted/30 px-4 py-3 pl-12">
          <ol className="space-y-1.5 text-xs text-muted-foreground">
            {item.expandableHelp.steps.map((step, i) => (
              <li key={i} className="flex gap-2">
                <span className="shrink-0 font-semibold text-foreground/60">
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          {item.expandableHelp.note && (
            <div className="mt-3 flex items-start gap-2 rounded-md bg-accent/5 px-3 py-2 text-xs text-accent">
              <span className="mt-px shrink-0">&#9432;</span>
              <span>{item.expandableHelp.note}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
