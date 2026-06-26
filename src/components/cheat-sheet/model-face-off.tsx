import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Brush,
  CalendarClock,
  FileSpreadsheet,
  GitPullRequest,
  Image,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const rows = [
  {
    area: "Build and debug",
    feature: "Agentic code editing",
    why: "Codex reads the repo, changes files, runs commands, checks failures, and iterates toward the goal.",
    tryThis: "Ask for a feature plus acceptance criteria, then review the diff before committing.",
  },
  {
    area: "Review",
    feature: "Local and GitHub code review",
    why: "Use /review locally or @codex review on GitHub to catch serious bugs, edge cases, and regressions.",
    tryThis: "Run a review before pushing, then ask Codex to fix only the high-priority findings.",
  },
  {
    area: "Work safely",
    feature: "Worktrees, sandboxing, approvals",
    why: "Keep experiments isolated and decide when Codex can edit, run networked commands, or work outside the repo.",
    tryThis: "Use a worktree for risky UI redesigns or broad refactors.",
  },
  {
    area: "Browser workflows",
    feature: "In-app Browser, Chrome, Computer Use",
    why: "Codex can preview localhost, inspect visual bugs, operate signed-in Chrome pages, or use desktop apps when needed.",
    tryThis: "Leave a browser comment on a layout bug and ask Codex to address it.",
  },
  {
    area: "Reusable expertise",
    feature: "Skills and plugins",
    why: "Skills package repeatable workflows; plugins distribute skills with app connectors, MCP servers, hooks, and assets.",
    tryThis: "Invoke $imagegen, $openai-docs, $spreadsheets, $presentations, or a team skill.",
  },
  {
    area: "Artifacts",
    feature: "Docs, sheets, decks, PDFs, images",
    why: "Codex can generate, inspect, render, and verify non-code artifacts alongside software work.",
    tryThis: "Ask for a source-backed slide deck or a formatted spreadsheet, then have Codex verify the output.",
  },
  {
    area: "Background work",
    feature: "Automations and thread wakeups",
    why: "Recurring checks can report findings, continue a thread, or run skill-driven workflows on a schedule.",
    tryThis: "Create a thread automation that checks a deploy until it finishes.",
  },
  {
    area: "Team control",
    feature: "AGENTS.md, MCP, hooks, rules",
    why: "Codex can follow repo instructions, connect to trusted data, and enforce lifecycle checks around tool use.",
    tryThis: "Add test commands and review guidelines to AGENTS.md before asking for a PR.",
  },
];

const skillCards = [
  {
    title: "OpenAI docs",
    icon: Sparkles,
    text: "Use current official docs when prompts mention Codex, models, Responses API, or OpenAI products.",
  },
  {
    title: "Image generation",
    icon: Image,
    text: "Create UI assets, banners, mockups, backgrounds, sprites, and reference-based edits in the same thread.",
  },
  {
    title: "Data analytics",
    icon: FileSpreadsheet,
    text: "Build reports, dashboards, KPI readouts, charts, and spreadsheet-backed analysis with validation.",
  },
  {
    title: "Presentations",
    icon: Brush,
    text: "Draft and verify decks, handouts, PDFs, and branded workshop materials from structured source notes.",
  },
  {
    title: "GitHub",
    icon: GitPullRequest,
    text: "Summarize PRs, fix CI, address review comments, publish branches, and create draft PRs.",
  },
  {
    title: "Automation",
    icon: CalendarClock,
    text: "Schedule reminders, recurring checks, deployment monitors, and thread follow-ups.",
  },
];

export function ModelFaceOff() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card p-5">
        <div className="mb-3 flex items-center gap-2">
          <Bot className="h-4 w-4 text-primary" />
          <p className="font-medium text-foreground">
            Codex is bigger than chat-with-code
          </p>
        </div>
        <p className="leading-relaxed text-muted-foreground">
          The current Codex stack spans local app work, terminal workflows,
          IDE context, cloud tasks, GitHub review, browser control, plugins,
          MCP, automations, and reusable skills. The practical move is to pick
          the smallest surface that matches the job, then let Codex use the
          right tools inside that boundary.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[150px] font-semibold">Area</TableHead>
              <TableHead>Top feature</TableHead>
              <TableHead>Why it matters</TableHead>
              <TableHead>Try this today</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.feature}>
                <TableCell className="align-top font-medium text-foreground">
                  {row.area}
                </TableCell>
                <TableCell className="align-top text-sm text-foreground">
                  {row.feature}
                </TableCell>
                <TableCell className="align-top text-sm text-muted-foreground">
                  {row.why}
                </TableCell>
                <TableCell className="align-top text-sm text-muted-foreground">
                  {row.tryThis}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {skillCards.map((skill) => (
          <div key={skill.title} className="rounded-lg border bg-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                <skill.icon className="h-4 w-4 text-primary" />
              </div>
              <p className="font-medium text-foreground">{skill.title}</p>
              <Badge variant="secondary" className="ml-auto text-[10px]">
                Skill
              </Badge>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {skill.text}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Keep sensitive workflows scoped. Use AGENTS.md for durable repo
            guidance, worktrees for experiments, approval prompts for risky
            actions, and plugins or MCP for trusted external systems.
          </p>
        </div>
      </div>
    </div>
  );
}
