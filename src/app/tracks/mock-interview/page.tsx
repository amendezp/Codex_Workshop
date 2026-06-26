"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MockInterviewTrackPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/tracks/mock-interview/plan-mode");
  }, [router]);
  return null;
}
