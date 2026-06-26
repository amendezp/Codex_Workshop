import type { Section } from "@/lib/chrome-navigation-sections";

export const MOCK_INTERVIEW_SECTIONS: Section[] = [
  {
    id: "plan-mode",
    number: 1,
    title: "Plan First",
    shortTitle: "Plan",
    href: "/tracks/mock-interview/plan-mode",
    estimatedTime: "~2 min",
    stepCount: 3,
  },
  {
    id: "build",
    number: 2,
    title: "Build the Coach",
    shortTitle: "Build",
    href: "/tracks/mock-interview/build",
    estimatedTime: "~10 min",
    stepCount: 4,
  },
  {
    id: "github",
    number: 3,
    title: "Ship to GitHub",
    shortTitle: "GitHub",
    href: "/tracks/mock-interview/github",
    estimatedTime: "~3 min",
    stepCount: 4,
  },
  {
    id: "deploy",
    number: 4,
    title: "Deploy on Vercel",
    shortTitle: "Deploy",
    href: "/tracks/mock-interview/deploy",
    estimatedTime: "~5 min",
    stepCount: 5,
  },
  {
    id: "branding",
    number: 5,
    title: "Branding & Assets",
    shortTitle: "Branding",
    href: "/tracks/mock-interview/branding",
    estimatedTime: "Stretch",
    stepCount: 5,
  },
  {
    id: "voice",
    number: 6,
    title: "Voice & Vision",
    shortTitle: "Voice",
    href: "/tracks/mock-interview/voice",
    estimatedTime: "Stretch",
    stepCount: 5,
  },
];

/** Compute the global step index offset for a given section */
export function getSectionOffset(sectionIndex: number): number {
  return MOCK_INTERVIEW_SECTIONS.slice(0, sectionIndex).reduce(
    (sum, s) => sum + s.stepCount,
    0
  );
}
