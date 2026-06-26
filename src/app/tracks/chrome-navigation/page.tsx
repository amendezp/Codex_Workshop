"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChromeNavigationTrackPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/tracks/chrome-navigation/memory");
  }, [router]);
  return null;
}
