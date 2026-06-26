"use client";

import { CHECKLIST_ITEMS } from "@/lib/constants";
import { useWorkshopStore } from "@/store/workshop-store";
import { ChecklistItem } from "./checklist-item";
import { CheckCircle2 } from "lucide-react";

export function Checklist() {
  const { completedItems, toggleItem } = useWorkshopStore();
  const completedCount = completedItems.length;
  const totalCount = CHECKLIST_ITEMS.length;
  const allComplete = completedCount >= totalCount;

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-xl font-semibold text-foreground">
          Prerequisites
        </h2>
        <div className="flex items-center gap-2">
          {allComplete && <CheckCircle2 className="h-4 w-4 text-accent" />}
          <span
            className={`text-sm font-medium ${
              allComplete ? "text-accent" : "text-muted-foreground"
            }`}
          >
            {completedCount} of {totalCount} completed
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {CHECKLIST_ITEMS.map((item) => (
          <ChecklistItem
            key={item.id}
            item={item}
            checked={completedItems.includes(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
