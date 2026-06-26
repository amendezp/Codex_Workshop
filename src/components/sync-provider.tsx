"use client";

import { useSyncOnLeave } from "@/hooks/use-sync-on-leave";

export function SyncProvider({ children }: { children: React.ReactNode }) {
  useSyncOnLeave();
  return <>{children}</>;
}
