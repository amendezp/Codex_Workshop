"use client";

import { useEffect } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { WelcomeHero } from "@/components/landing/welcome-hero";
import { Checklist } from "@/components/landing/checklist";
import { RegistrationForm } from "@/components/landing/registration-form";
import { useWorkshopStore } from "@/store/workshop-store";

export default function LandingPage() {
  const setCurrentStep = useWorkshopStore((s) => s.setCurrentStep);

  useEffect(() => {
    setCurrentStep(0);
  }, [setCurrentStep]);

  return (
    <PageContainer>
      <WelcomeHero />
      <Checklist />
      <RegistrationForm />
    </PageContainer>
  );
}
