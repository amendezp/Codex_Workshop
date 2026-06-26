"use client";

import { useEffect } from "react";
import { useWorkshopStore } from "@/store/workshop-store";

export function useSyncOnLeave() {
  const syncProgress = useWorkshopStore((s) => s.syncProgress);
  const email = useWorkshopStore((s) => s.email);

  useEffect(() => {
    if (!email) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        syncProgress();
      }
    };

    const handleBeforeUnload = () => {
      syncProgress();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [email, syncProgress]);
}
