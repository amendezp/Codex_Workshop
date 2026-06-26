"use client";

import { useEffect } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { SectionBlock } from "@/components/cheat-sheet/section-block";
import { ComparisonTable } from "@/components/cheat-sheet/comparison-table";
import { ModelFaceOff } from "@/components/cheat-sheet/model-face-off";
import { ConceptDirectory } from "@/components/cheat-sheet/concept-directory";
import { InterfaceGuide } from "@/components/cheat-sheet/interface-guide";
import { useWorkshopStore } from "@/store/workshop-store";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Printer,
  Shield,
  Sparkles,
} from "lucide-react";

const topChanges = [
  {
    title: "One agent across app, CLI, IDE, and cloud",
    desc: "Use Codex visually in the desktop app, locally in a terminal, inside VS Code-compatible editors, or offload larger tasks to Codex cloud.",
  },
  {
    title: "Worktrees and review are first-class",
    desc: "Run experiments in isolated Git worktrees, inspect diffs, leave inline comments, stage changes, commit, push, and open pull requests.",
  },
  {
    title: "Skills and plugins turn know-how into infrastructure",
    desc: "Codex can load focused skills for docs, images, spreadsheets, presentations, GitHub, data analysis, and team-specific workflows.",
  },
  {
    title: "Browser, Chrome, and Computer Use close the verification loop",
    desc: "Preview localhost, annotate visual issues, operate signed-in Chrome pages, or test desktop apps when files and logs are not enough.",
  },
  {
    title: "Automations keep Codex working after the prompt",
    desc: "Schedule recurring checks, thread wakeups, deployment monitors, and skill-driven follow-up loops.",
  },
];

const permissionModes = [
  {
    name: "Read-only",
    badge: "Consult",
    desc: "Codex can inspect and explain but should not modify files or run side-effecting commands without a deliberate mode change.",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Auto",
    badge: "Default",
    desc: "Codex can edit and run commands inside the workspace, while still asking for riskier actions such as network or out-of-scope filesystem access.",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "Full Access",
    badge: "Trusted only",
    desc: "Codex can work across the machine and network with fewer interruptions. Use it sparingly, and only when you trust the repo and task.",
    color: "bg-amber-100 text-amber-800",
  },
];

const howToUse = [
  {
    step: "1",
    title: "Open a project",
    desc: "Use the Codex app for this workshop, or run codex from a repository in your terminal.",
  },
  {
    step: "2",
    title: "Give the goal and guardrails",
    desc: "State the outcome, audience, constraints, allowed side effects, and how you will verify success.",
  },
  {
    step: "3",
    title: "Let Codex plan when the task is broad",
    desc: "Ask for a plan before implementation when the work touches multiple files, user flows, or external systems.",
  },
  {
    step: "4",
    title: "Review the diff and rendered result",
    desc: "Use the review pane, terminal, tests, browser preview, and artifacts before accepting the work.",
  },
  {
    step: "5",
    title: "Ship intentionally",
    desc: "Commit with a clear message, push, open a PR, and ask Codex to help respond to review or CI feedback.",
  },
];

export default function CheatSheetPage() {
  const { setCurrentStep, isRegistered } = useWorkshopStore();

  useEffect(() => {
    setCurrentStep(1);
  }, [setCurrentStep]);

  if (!isRegistered) {
    return (
      <PageContainer>
        <div className="py-20 text-center">
          <p className="mb-4 text-muted-foreground">
            Please complete the setup checklist first.
          </p>
          <Link href="/">
            <Button variant="outline">Go to Setup</Button>
          </Link>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-10 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
          <BookOpen className="h-4 w-4" />
          Codex Cheat Sheet
        </div>
        <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-foreground">
          Codex in 5 Minutes
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          The current Codex map for knowledge workers: build, review, verify,
          automate, and ship with good judgment.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" />
            Print / Save as PDF
          </Button>
          <a href="/handout.html" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Printable Handout
            </Button>
          </a>
        </div>
      </div>

      <SectionBlock title="What is Codex?">
        <div className="rounded-lg border bg-card p-5">
          <p className="leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Codex</strong> is OpenAI&apos;s
            coding agent for software development. It can write code, explain
            unfamiliar codebases, review diffs, debug failures, run repeatable
            development tasks, and help you move from idea to shipped prototype.
            In this workshop, treat it as an agentic teammate: powerful,
            fast, and still accountable to your judgment.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Why It Matters Now"
        subtitle="The latest Codex workflow is much broader than a code chatbox"
      >
        <div className="space-y-3">
          {topChanges.map((item) => (
            <div key={item.title} className="rounded-lg border bg-card p-4">
              <div className="flex gap-3">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        title="Know Your Interface"
        subtitle="The app surface you will use today"
      >
        <InterfaceGuide />
      </SectionBlock>

      <SectionBlock
        title="Permission Modes"
        subtitle="Choose how much freedom Codex has"
      >
        <div className="space-y-3">
          {permissionModes.map((mode) => (
            <div
              key={mode.name}
              className="flex gap-4 rounded-lg border bg-card p-4"
            >
              <div className="shrink-0">
                <span
                  className={`inline-block rounded-md px-2 py-1 text-[10px] font-semibold ${mode.color}`}
                >
                  {mode.badge}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground">{mode.name}</p>
                <p className="text-sm text-muted-foreground">{mode.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Models" subtitle="Choose the right brain for the job">
        <div className="rounded-lg border bg-card p-5">
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            OpenAI&apos;s current guidance names{" "}
            <strong className="text-foreground">gpt-5.5</strong> as the
            recommended model for complex production workflows, coding,
            tool-heavy agents, grounded assistants, research, and knowledge
            work. Start with medium reasoning for balanced quality and cost,
            then tune effort only when the task truly needs more depth or more
            speed.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "gpt-5.5",
                desc: "Best default for serious coding, planning, tool use, and polished execution.",
                tag: "Recommended",
              },
              {
                label: "GPT-5.3-Codex-Spark",
                desc: "Fast Codex research-preview model for day-to-day coding on eligible Pro plans.",
                tag: "Fast",
              },
              {
                label: "gpt-5.4 mini",
                desc: "Useful for higher usage limits and routine local messages when available.",
                tag: "Routine",
              },
            ].map((model) => (
              <div key={model.label} className="rounded-lg border p-3">
                <div className="mb-1 flex items-center gap-2">
                  <p className="font-mono text-sm font-semibold text-foreground">
                    {model.label}
                  </p>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {model.tag}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        title="Top Features & Skills"
        subtitle="What to reach for after the warm-up"
      >
        <ModelFaceOff />
      </SectionBlock>

      <SectionBlock
        title="Environments & Worktrees"
        subtitle="Where your code runs and how to keep experiments contained"
      >
        <div className="space-y-3">
          <div className="rounded-lg border bg-card p-4">
            <p className="mb-1 font-medium text-foreground">Local</p>
            <p className="text-sm text-muted-foreground">
              Codex works on your current project directory. This is direct,
              fast, and great for workshop builds.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="mb-1 font-medium text-foreground">Worktree</p>
            <p className="text-sm text-muted-foreground">
              Codex creates an isolated Git checkout so a risky experiment or
              parallel task does not disturb your main work.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-4">
            <p className="mb-1 font-medium text-foreground">Cloud</p>
            <p className="text-sm text-muted-foreground">
              Codex can run remotely in a configured environment for larger
              tasks, background work, or offloaded implementation.
            </p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        title="How to Use It"
        subtitle="The workflow we will practice today"
      >
        <div className="rounded-lg border bg-card p-5">
          <div className="space-y-4">
            {howToUse.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {item.step}
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        title="App vs CLI"
        subtitle="Same agent, different working surface"
      >
        <ComparisonTable />
      </SectionBlock>

      <SectionBlock
        title="Key Concepts"
        subtitle="Your glossary for the rest of the workshop"
      >
        <ConceptDirectory />
      </SectionBlock>

      <SectionBlock
        title="Safety Checklist"
        subtitle="Codex is powerful; your judgment remains the control plane"
      >
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <ul className="space-y-2 text-sm leading-relaxed text-amber-900">
              <li>Keep secrets in environment variables, never in committed code.</li>
              <li>Use AGENTS.md for durable repo rules and review expectations.</li>
              <li>Review diffs, browser output, and generated artifacts before shipping.</li>
              <li>Use worktrees and narrow approvals when the task is risky.</li>
              <li>Remember: the user is accountable for what the agent does.</li>
            </ul>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="Want to Learn More?" subtitle="Official Codex links">
        <div className="rounded-lg border bg-card p-5">
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              {
                href: "https://developers.openai.com/codex/overview",
                label: "Codex overview",
                desc: "What Codex is and where it helps.",
              },
              {
                href: "https://developers.openai.com/codex/skills",
                label: "Agent skills",
                desc: "How reusable Codex skills work.",
              },
              {
                href: "https://developers.openai.com/codex/app/features",
                label: "Codex app features",
                desc: "Desktop app, worktrees, automations, Git, browser, and artifacts.",
              },
              {
                href: "https://developers.openai.com/api/docs/guides/latest-model",
                label: "Latest OpenAI model guidance",
                desc: "Current guidance for GPT-5.5 and the Responses API.",
              },
            ].map((link) => (
              <li key={link.href} className="flex items-start gap-2">
                <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    {link.label}
                  </a>{" "}
                  - {link.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionBlock>

      <div className="mt-12 text-center">
        <Link href="/lessons">
          <Button size="lg" className="gap-2">
            Continue
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </PageContainer>
  );
}
