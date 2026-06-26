"use client";

import {
  MessageSquare,
  Shield,
  Cpu,
  GitBranch,
  Monitor,
  FolderGit2,
} from "lucide-react";

const elements = [
  {
    id: "prompt",
    label: "Prompt input",
    desc: "Where you type your instructions in plain English. Be as detailed or brief as you like.",
    icon: MessageSquare,
    position: "top",
  },
  {
    id: "permissions",
    label: "Approval mode",
    desc: 'Controls when Codex pauses before taking actions. Use "Approve for me" for most workshop tasks, or "Ask for approval" when you want more checkpoints.',
    icon: Shield,
    position: "bottom-left",
  },
  {
    id: "model",
    label: "Model selector",
    desc: "Choose the model and reasoning effort. The current Codex docs recommend gpt-5.5 for most serious coding work.",
    icon: Cpu,
    position: "bottom-right",
  },
  {
    id: "repo",
    label: "Project & branch",
    desc: "Shows which project folder and git branch Codex is working on. Use Git to review, stage, commit, push, and open PRs.",
    icon: FolderGit2,
    position: "bottom-left-2",
  },
  {
    id: "worktree",
    label: "Worktree toggle",
    desc: "Creates an isolated copy of your project so Codex can experiment safely. Your original checkout stays untouched.",
    icon: GitBranch,
    position: "bottom-right-2",
  },
  {
    id: "environment",
    label: "Environment",
    desc: 'Where your code runs. "Local" means your computer. You\'ll also see options for remote servers.',
    icon: Monitor,
    position: "bottom-right-3",
  },
];

export function InterfaceGuide() {
  return (
    <div className="space-y-4">
      {/* Visual mockup of the chatbox */}
      <div className="overflow-hidden rounded-xl border-2 border-border/80 bg-[#2a2a2a] shadow-lg">
        {/* Prompt area */}
        <div className="border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-orange-400/80" />
            <div className="flex-1 rounded-md bg-white/5 px-3 py-2">
              <span className="text-sm text-white/50">
                Find a small todo in the codebase and do it
              </span>
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-orange-400/80">
              <span className="text-xs text-white">&#x2191;</span>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40">+</span>
            <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">
              <Shield className="h-3 w-3" />
              Approve for me
              <span className="text-white/30">&#x25BE;</span>
            </span>
          </div>
          <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">
            gpt-5.5
            <span className="text-white/30">&#x25BE;</span>
          </span>
        </div>
        {/* Repo bar */}
        <div className="flex items-center justify-between border-t border-white/10 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">
              <FolderGit2 className="h-3 w-3" />
              amendezp/Codex_Workshop
            </span>
            <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/40">
              Select branch
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">
              <span className="h-2.5 w-2.5 rounded-sm bg-blue-400/80" />
              worktree
            </span>
            <span className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">
              <Monitor className="h-3 w-3" />
              Local
              <span className="text-white/30">&#x25BE;</span>
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid gap-3 sm:grid-cols-2">
        {elements.map((el) => (
          <div key={el.id} className="flex gap-3 rounded-lg border bg-card p-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <el.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">{el.label}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {el.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
