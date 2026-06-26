"use client";

import { Check, ChevronDown, Folder, FolderGit2, Monitor, Plus, Search, Settings, Sparkles } from "lucide-react";

/**
 * Illustration: A desktop folder labeled "AI@GSB"
 * Matches the user's screenshot of a macOS folder on the desktop.
 */
export function FolderIllustration() {
  return (
    <div className="inline-flex flex-col items-center gap-1.5 rounded-xl bg-[#2a2a2a] p-4">
      <div className="flex h-16 w-20 items-center justify-center rounded-lg bg-[#5ab4f5] shadow-md">
        <Folder className="h-9 w-9 fill-[#3a9ae0] text-[#3a9ae0]" />
      </div>
      <span className="rounded bg-[#2563eb] px-2 py-0.5 text-[11px] font-medium text-white">
        AI@GSB
      </span>
    </div>
  );
}

/**
 * Illustration: Codex surface selector.
 */
export function CodeTabIllustration() {
  return (
    <div className="inline-flex items-center gap-0 rounded-full bg-[#2a2a2a] p-1">
      <span className="rounded-full px-4 py-1.5 text-sm text-white/50">
        Local
      </span>
      <span className="rounded-full px-4 py-1.5 text-sm text-white/50">
        Worktree
      </span>
      <span className="rounded-full bg-[#444] px-4 py-1.5 text-sm font-medium text-white">
        Cloud
      </span>
    </div>
  );
}

/**
 * Illustration: The "New session / Search / Customize" menu.
 * Matches the Codex thread menu pattern.
 */
export function NewSessionIllustration() {
  return (
    <div className="inline-flex flex-col gap-0 rounded-lg bg-[#2a2a2a] py-2 shadow-lg">
      <button className="flex items-center gap-3 px-4 py-2 text-left text-sm text-white hover:bg-white/10">
        <Plus className="h-4 w-4 text-white/60" />
        New session
      </button>
      <button className="flex items-center gap-3 px-4 py-2 text-left text-sm text-white/70 hover:bg-white/10">
        <Search className="h-4 w-4 text-white/50" />
        Search
      </button>
      <button className="flex items-center gap-3 px-4 py-2 text-left text-sm text-white/70 hover:bg-white/10">
        <Settings className="h-4 w-4 text-white/50" />
        Customize
      </button>
    </div>
  );
}

/**
 * Illustration: The folder picker + Local environment selector.
 * Shows the bottom bar with a selected folder and "Local" environment,
 * plus the recent folders dropdown.
 */
/**
 * Illustration: Example result — a fireworks/particle visualization.
 * CSS-only animated recreation of the expected output.
 */
export function VisualizationResultIllustration() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="relative flex h-48 w-full items-center justify-center bg-black">
        {/* Glow center */}
        <div className="absolute h-20 w-20 rounded-full bg-purple-500/30 blur-2xl" />
        <div className="absolute h-12 w-12 rounded-full bg-fuchsia-400/40 blur-xl" />

        {/* Particles — radial burst */}
        {[
          { x: -60, y: -50, color: "bg-cyan-400", size: "h-1.5 w-1.5", delay: "0s" },
          { x: 50, y: -60, color: "bg-purple-400", size: "h-2 w-2", delay: "0.2s" },
          { x: -40, y: 30, color: "bg-blue-400", size: "h-1 w-1", delay: "0.4s" },
          { x: 70, y: 20, color: "bg-fuchsia-300", size: "h-1.5 w-1.5", delay: "0.1s" },
          { x: -20, y: -70, color: "bg-violet-400", size: "h-2 w-2", delay: "0.3s" },
          { x: 30, y: 50, color: "bg-cyan-300", size: "h-1 w-1", delay: "0.5s" },
          { x: -80, y: -10, color: "bg-blue-300", size: "h-1.5 w-1.5", delay: "0.15s" },
          { x: 60, y: -30, color: "bg-purple-300", size: "h-1 w-1", delay: "0.35s" },
          { x: -10, y: 60, color: "bg-fuchsia-400", size: "h-1.5 w-1.5", delay: "0.25s" },
          { x: 40, y: -80, color: "bg-cyan-400", size: "h-2 w-2", delay: "0.45s" },
          { x: -70, y: -40, color: "bg-violet-300", size: "h-1 w-1", delay: "0.6s" },
          { x: 80, y: -50, color: "bg-blue-400", size: "h-1.5 w-1.5", delay: "0.05s" },
          { x: -50, y: -80, color: "bg-purple-500", size: "h-2 w-2", delay: "0.55s" },
          { x: 20, y: -40, color: "bg-fuchsia-300", size: "h-1 w-1", delay: "0.7s" },
          { x: -30, y: -20, color: "bg-cyan-300", size: "h-1.5 w-1.5", delay: "0.65s" },
          { x: 90, y: 10, color: "bg-violet-400", size: "h-1 w-1", delay: "0.8s" },
        ].map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${p.color} ${p.size} animate-pulse`}
            style={{
              left: `calc(50% + ${p.x}px)`,
              top: `calc(50% + ${p.y}px)`,
              animationDelay: p.delay,
              animationDuration: "1.5s",
            }}
          />
        ))}

        {/* Sparkle icon at center */}
        <Sparkles className="relative z-10 h-6 w-6 text-white/80" />
      </div>
      <div className="bg-[#1a1a1a] px-4 py-2 text-center text-xs text-white/50">
        Example output — yours will look different!
      </div>
    </div>
  );
}

export function FolderPickerIllustration() {
  return (
    <div className="inline-flex flex-col gap-2 rounded-xl bg-[#2a2a2a] p-4">
      {/* Bottom bar: selected folder + Local env */}
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#383838] px-3 py-1.5 text-xs text-white/80">
          <Folder className="h-3.5 w-3.5 text-white/50" />
          your folder
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#383838] px-3 py-1.5 text-xs font-medium text-white/80">
          <Monitor className="h-3.5 w-3.5 text-white/50" />
          Local
          <ChevronDown className="h-3 w-3 text-white/40" />
        </span>
      </div>

      {/* Folder dropdown */}
      <div className="rounded-lg bg-[#333] py-2 shadow-lg">
        <div className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/40">
          Recent
        </div>
        <div className="flex items-center gap-2.5 px-3 py-1.5 text-xs text-white/70">
          <FolderGit2 className="h-3.5 w-3.5 text-white/40" />
          <span>my-project</span>
        </div>
        <div className="flex items-center justify-between gap-2.5 bg-white/5 px-3 py-1.5 text-xs text-white">
          <span className="flex items-center gap-2.5">
            <Folder className="h-3.5 w-3.5 text-white/50" />
            your folder
          </span>
          <Check className="h-3.5 w-3.5 text-blue-400" />
        </div>
        <div className="mt-1 border-t border-white/10 px-3 pt-2 pb-1 text-xs text-white/60">
          Choose a different folder
        </div>
      </div>
    </div>
  );
}
