"use client";

import {
  Check,
  Shield,
  ShieldOff,
  Pencil,
  Lightbulb,
  GitBranch,
  Lock,
  Globe,
  Plus,
  Key,
  Copy,
  EyeOff,
  Triangle,
} from "lucide-react";

/**
 * Illustration: Permissions dropdown with "Plan mode" highlighted.
 */
export function PlanModeDropdownIllustration() {
  return (
    <div className="inline-flex flex-col gap-2 rounded-xl bg-[#2a2a2a] p-3">
      {/* Bottom bar hint */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#383838] px-3 py-1.5 text-xs text-white/80">
          <Lightbulb className="h-3.5 w-3.5 text-white/50" />
          Plan mode
          <svg
            className="h-3 w-3 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      {/* Dropdown */}
      <div className="rounded-lg bg-[#333] py-1.5 shadow-lg">
        <div className="flex items-center gap-3 px-3 py-2 text-xs text-white/60">
          <Shield className="h-3.5 w-3.5" />
          <div>
            <p className="text-white/70">Read-only</p>
            <p className="text-[10px] text-white/40">
              Inspect before changing
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-xs text-white/60">
          <Pencil className="h-3.5 w-3.5" />
          <div>
            <p className="text-white/70">Auto</p>
            <p className="text-[10px] text-white/40">
              Edit safely in the workspace
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 bg-white/5 px-3 py-2 text-xs text-white">
          <span className="flex items-center gap-3">
            <Lightbulb className="h-3.5 w-3.5" />
            <div>
              <p>Plan mode</p>
              <p className="text-[10px] text-white/40">
                Create a plan before making changes
              </p>
            </div>
          </span>
          <Check className="h-3.5 w-3.5 text-blue-400" />
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-xs text-white/60">
          <ShieldOff className="h-3.5 w-3.5" />
          <div>
            <p className="text-white/70">Full Access</p>
            <p className="text-[10px] text-white/40">
              Trusted tasks only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Illustration: GitHub "Create a new repository" page.
 */
export function GitHubNewRepoIllustration() {
  return (
    <div className="inline-flex w-80 flex-col rounded-xl bg-[#0d1117] overflow-hidden border border-[#30363d]">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-[#30363d] px-4 py-3">
        <GitBranch className="h-5 w-5 text-white/70" />
        <span className="text-sm font-semibold text-white">
          Create a new repository
        </span>
      </div>

      {/* Form */}
      <div className="space-y-4 px-4 py-4">
        {/* Repo name */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/70">
            Repository name
          </label>
          <div className="rounded-md border border-[#30363d] bg-[#161b22] px-3 py-1.5">
            <span className="text-sm text-white">interview-coach</span>
          </div>
        </div>

        {/* Visibility */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-green-500">
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <Globe className="h-3.5 w-3.5 text-white/70" />
            <span className="text-xs text-white/90">Public</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full border-2 border-[#30363d]" />
            <Lock className="h-3.5 w-3.5 text-white/40" />
            <span className="text-xs text-white/50">Private</span>
          </div>
        </div>

        {/* Create button */}
        <button className="w-full rounded-md bg-[#238636] px-4 py-1.5 text-sm font-medium text-white">
          Create repository
        </button>
      </div>
    </div>
  );
}

/**
 * Illustration: Vercel import/deploy screen.
 */
export function VercelDeployIllustration() {
  return (
    <div className="inline-flex w-80 flex-col rounded-xl bg-[#0a0a0a] overflow-hidden border border-[#333]">
      {/* Header */}
      <div className="border-b border-[#333] px-4 py-3">
        <div className="flex items-center gap-2">
          <Triangle className="h-4 w-4 fill-white text-white" />
          <span className="text-sm font-semibold text-white">
            Import Git Repository
          </span>
        </div>
      </div>

      {/* Repo card */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between rounded-lg border border-[#333] bg-[#111] px-4 py-3">
          <div className="flex items-center gap-3">
            <GitBranch className="h-4 w-4 text-white/50" />
            <div>
              <p className="text-sm font-medium text-white">
                interview-coach
              </p>
              <p className="text-[10px] text-white/40">
                Updated just now
              </p>
            </div>
          </div>
          <button className="rounded-md bg-white px-3 py-1 text-xs font-medium text-black">
            Import
          </button>
        </div>
      </div>

      {/* Environment Variables section */}
      <div className="border-t border-[#333] px-4 py-3">
        <p className="mb-2 text-xs font-medium text-white/70">
          Environment Variables
        </p>
        <div className="flex gap-2">
          <div className="flex-1 rounded border border-[#333] bg-[#111] px-2 py-1">
            <span className="text-[10px] text-white/60">OPENAI_API_KEY</span>
          </div>
          <div className="flex-1 rounded border border-[#333] bg-[#111] px-2 py-1">
            <span className="text-[10px] text-white/40">sk-proj-...</span>
          </div>
          <button className="rounded bg-[#333] px-2 py-1">
            <Plus className="h-3 w-3 text-white/60" />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Illustration: OpenAI Platform API Keys section.
 */
export function OpenAIAPIKeyIllustration() {
  return (
    <div className="inline-flex w-80 flex-col rounded-xl bg-[#111827] overflow-hidden border border-[#263244]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#263244] px-4 py-3">
        <div className="flex items-center gap-2">
          <Key className="h-4 w-4 text-[#9ee7d7]" />
          <span className="text-sm font-semibold text-white">API Keys</span>
        </div>
        <button className="rounded-md bg-[#10a37f] px-3 py-1 text-xs font-medium text-white">
          + New key
        </button>
      </div>

      {/* Key list */}
      <div className="px-4 py-3 space-y-2">
        {/* Active key */}
        <div className="flex items-center justify-between rounded-lg border border-[#263244] bg-[#172033] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-green-900/30">
              <div className="h-2 w-2 rounded-full bg-green-500" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">My API Key</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <code className="text-[10px] text-white/40 font-mono">
                  sk-proj-...xR2k
                </code>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="rounded p-1 text-white/30 hover:bg-white/5">
              <Copy className="h-3 w-3" />
            </button>
            <button className="rounded p-1 text-white/30 hover:bg-white/5">
              <EyeOff className="h-3 w-3" />
            </button>
          </div>
        </div>

        <p className="text-[10px] text-white/30 text-center pt-1">
          Keep your API key private. Never share it publicly.
        </p>
      </div>
    </div>
  );
}
