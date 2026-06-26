"use client";

import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, FlaskConical, Shield } from "lucide-react";

const lessons = [
  {
    number: 1,
    icon: Brain,
    title: "Think Before You Build",
    accent: "from-blue-500 to-indigo-600",
    accentBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    description:
      "Do not outsource your thinking. AI can build fast, but speed without direction is just expensive chaos.",
    takeaway:
      "Before every prototype, ask yourself three questions: What am I building? Why does it matter? And who is it for? If you can't answer clearly, Codex can't help you either.",
  },
  {
    number: 2,
    icon: FlaskConical,
    title: "A Prototype Is NOT a Product",
    accent: "from-amber-500 to-orange-600",
    accentBg: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    description:
      "You cannot vibe code your way to product-market fit. Prototypes are meant to test and validate ideas.",
    takeaway:
      "Real products require scale, reliability, and very high levels of security — especially AI applications. What we build today is a starting point for learning, not a launchpad to production.",
  },
  {
    number: 3,
    icon: Shield,
    title: "Agency & Accountability",
    accent: "from-red-500 to-rose-600",
    accentBg: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
    description:
      "The most important lesson: don't forget what makes us human.",
    takeaway:
      "You are responsible for what your agents build. Every time you accept a recommendation or send a prompt, you are taking an action for which you are accountable. AI is a powerful tool, but the judgment, ethics, and decisions remain yours.",
  },
];

export default function LessonsPage() {
  return (
    <PageContainer>
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Before You Build
        </div>
        <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-foreground">
          3 Lessons to Walk Away With
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Before we start building, let&apos;s ground ourselves in what matters
          most. Keep these with you long after today.
        </p>
      </div>

      <div className="space-y-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.number}
            className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Gradient accent bar */}
            <div
              className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b ${lesson.accent}`}
            />

            <div className="flex gap-5 p-6 pl-8">
              {/* Icon */}
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border ${lesson.accentBg}`}
              >
                <lesson.icon className={`h-7 w-7 ${lesson.iconColor}`} />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Lesson {lesson.number}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  {lesson.title}
                </h2>
                <p className="text-[15px] font-medium leading-relaxed text-foreground/80">
                  {lesson.description}
                </p>
                <div className="rounded-lg bg-muted/50 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {lesson.takeaway}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          With these principles in mind, let&apos;s get building.
        </p>
        <Link href="/tracks">
          <Button size="lg" className="gap-2">
            Choose Your Builder Track
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
}
