"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CHECKLIST_ITEMS } from "@/lib/constants";
import type { WorkshopStep } from "@/types";

// Module-level debounce timer for progress sync
let syncTimer: ReturnType<typeof setTimeout> | null = null;

function debouncedSync(syncFn: () => void, delay = 5000) {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(syncFn, delay);
}

interface WorkshopState {
  // Checklist
  completedItems: string[];
  toggleItem: (id: string) => void;
  isAllComplete: () => boolean;

  // Registration
  email: string | null;
  isRegistered: boolean;
  setRegistration: (email: string) => void;

  // Navigation / Progress
  currentStep: WorkshopStep;
  setCurrentStep: (step: WorkshopStep) => void;
  selectedTrack: string | null;
  setSelectedTrack: (id: string) => void;

  // Track step completion (keyed by "trackId-stepIndex")
  completedSteps: string[];
  toggleStep: (trackId: string, stepIndex: number) => void;
  isStepComplete: (trackId: string, stepIndex: number) => boolean;

  // Track-level completion
  completedTracks: string[];
  completeTrack: (trackId: string) => void;
  isTrackComplete: (trackId: string) => boolean;

  // Server sync
  syncProgress: () => void;
  hydrateFromServer: (progress: {
    completedItems: string[];
    completedSteps: string[];
    completedTracks: string[];
  }) => void;

  // Reset
  reset: () => void;
}

export const useWorkshopStore = create<WorkshopState>()(
  persist(
    (set, get) => ({
      completedItems: [],
      toggleItem: (id: string) => {
        set((state) => ({
          completedItems: state.completedItems.includes(id)
            ? state.completedItems.filter((item) => item !== id)
            : [...state.completedItems, id],
        }));
        debouncedSync(() => get().syncProgress());
      },
      isAllComplete: () => {
        const { completedItems } = get();
        return completedItems.length >= CHECKLIST_ITEMS.length;
      },

      email: null,
      isRegistered: false,
      setRegistration: (email: string) => set({ email, isRegistered: true }),

      currentStep: 0 as WorkshopStep,
      setCurrentStep: (step: WorkshopStep) => set({ currentStep: step }),
      selectedTrack: null,
      setSelectedTrack: (id: string) => set({ selectedTrack: id }),

      completedSteps: [],
      toggleStep: (trackId: string, stepIndex: number) => {
        set((state) => {
          const key = `${trackId}-${stepIndex}`;
          return {
            completedSteps: state.completedSteps.includes(key)
              ? state.completedSteps.filter((s) => s !== key)
              : [...state.completedSteps, key],
          };
        });
        // Debounced sync on step toggles
        debouncedSync(() => get().syncProgress());
      },
      isStepComplete: (trackId: string, stepIndex: number) => {
        const key = `${trackId}-${stepIndex}`;
        return get().completedSteps.includes(key);
      },

      completedTracks: [],
      completeTrack: (trackId: string) => {
        set((state) => ({
          completedTracks: state.completedTracks.includes(trackId)
            ? state.completedTracks
            : [...state.completedTracks, trackId],
        }));
        // Immediate sync on track completion (milestone)
        setTimeout(() => get().syncProgress(), 0);
      },
      isTrackComplete: (trackId: string) => {
        return get().completedTracks.includes(trackId);
      },

      // Sync current progress to server (fire-and-forget)
      syncProgress: () => {
        const { email, completedItems, completedSteps, completedTracks } =
          get();
        if (!email) return; // Not registered, nothing to sync

        fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            completedItems,
            completedSteps,
            completedTracks,
          }),
        }).catch(() => {
          // Silent failure — localStorage is the primary store
        });
      },

      // Merge server progress into local state (union of arrays)
      hydrateFromServer: (progress) => {
        const current = get();
        set({
          completedItems: [
            ...new Set([
              ...current.completedItems,
              ...progress.completedItems,
            ]),
          ],
          completedSteps: [
            ...new Set([
              ...current.completedSteps,
              ...progress.completedSteps,
            ]),
          ],
          completedTracks: [
            ...new Set([
              ...current.completedTracks,
              ...progress.completedTracks,
            ]),
          ],
        });
      },

      reset: () =>
        set({
          completedItems: [],
          email: null,
          isRegistered: false,
          currentStep: 0 as WorkshopStep,
          selectedTrack: null,
          completedSteps: [],
          completedTracks: [],
        }),
    }),
    {
      name: "ai-gsb-codex-workshop",
    }
  )
);
