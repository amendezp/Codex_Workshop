"use client";

import {
  Check,
  ChevronDown,
  Globe,
  MessageSquare,
  MoreVertical,
  Paperclip,
  PinOff,
  Plus,
  Puzzle,
  Send,
  Shield,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

/**
 * Illustration: Codex Browser plugin setup.
 */
export function BrowserPluginIllustration() {
  return (
    <div className="inline-flex flex-col gap-0 rounded-xl bg-[#2a2a2a] overflow-hidden">
      {/* Chrome toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[#333]">
        {/* Tab */}
        <div className="flex items-center gap-1.5 rounded-t-md bg-[#2a2a2a] px-3 py-1 text-[11px] text-white/70">
          <Globe className="h-3 w-3 text-white/40" />
          Google Chrome
        </div>
      </div>
      {/* Address bar + extensions */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div className="flex-1 rounded-full bg-[#383838] px-3 py-1.5 text-xs text-white/40">
          codex://settings/browser
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex h-7 w-7 items-center justify-center rounded text-white/40 hover:bg-white/10">
            <Puzzle className="h-4 w-4" />
          </div>
          {/* Codex browser plugin icon - highlighted */}
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#10a37f] text-white text-xs font-bold shadow-md ring-2 ring-[#10a37f]/30">
            C
          </div>
        </div>
      </div>
      {/* Extension popup */}
      <div className="mx-3 mb-3 rounded-lg bg-[#383838] p-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10a37f] text-[10px] font-bold text-white">
            C
          </div>
          <div>
            <p className="text-xs font-medium text-white">Browser</p>
            <p className="text-[10px] text-green-400">● Connected</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Illustration: Approval dropdown with "Approve for me" selected.
 */
export function PermissionsDropdownIllustration() {
  return (
    <div className="inline-flex w-80 flex-col gap-2 rounded-xl bg-[#2a2a2a] p-3">
      {/* Bottom bar hint */}
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[#383838] px-3 py-1.5 text-xs text-white/80">
          <Shield className="h-3.5 w-3.5 text-blue-300" />
          Approve for me
          <ChevronDown className="h-3 w-3 text-white/40" />
        </span>
      </div>
      {/* Dropdown */}
      <div className="rounded-lg bg-[#333] py-2 shadow-lg">
        <div className="px-3 pb-1 text-[10px] font-medium text-white/40">
          How should Codex actions be approved?
        </div>
        <div className="flex items-center gap-3 px-3 py-2 text-xs text-white/60">
          <Shield className="h-3.5 w-3.5" />
          <div>
            <p className="text-white/70">Ask for approval</p>
            <p className="text-[10px] text-white/40">
              Always ask to edit external files and use the internet
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 bg-white/5 px-3 py-2 text-xs text-white">
          <span className="flex items-center gap-3">
            <Shield className="h-3.5 w-3.5 text-blue-300" />
            <div>
              <p>Approve for me</p>
              <p className="text-[10px] text-white/40">
                Only ask for actions detected as potentially unsafe
              </p>
            </div>
          </span>
          <Check className="h-3.5 w-3.5 text-blue-400" />
        </div>
      </div>
    </div>
  );
}

/**
 * Illustration: Codex browser/chat sidebar panel.
 * Realistic recreation of a Codex browser workflow panel.
 */
export function CodexSidebarIllustration() {
  return (
    <div className="inline-flex w-72 flex-col rounded-xl bg-[#1a1a1a] overflow-hidden border border-white/10 shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-[#1a1a1a] border-b border-white/5">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#10a37f]" />
          <span className="text-sm font-semibold text-white">Codex</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="rounded p-1 text-white/40 hover:bg-white/10">
            <PinOff className="h-3.5 w-3.5" />
          </button>
          <button className="rounded p-1 text-white/40 hover:bg-white/10">
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Model selector */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
        <div className="flex items-center gap-1.5 text-xs text-white/70">
          gpt-5.5
          <ChevronDown className="h-3 w-3 text-white/40" />
        </div>
        <div className="flex items-center gap-1.5">
          <button className="rounded p-1 text-white/40 hover:bg-white/10">
            <Zap className="h-3.5 w-3.5" />
          </button>
          <button className="rounded p-1 text-white/40 hover:bg-white/10">
            <MessageSquare className="h-3.5 w-3.5" />
          </button>
          <button className="rounded p-1 text-white/40 hover:bg-white/10">
            <MoreVertical className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Empty chat area */}
      <div className="flex-1 min-h-[180px]" />

      {/* Input area */}
      <div className="px-3 pb-2">
        <div className="rounded-xl bg-[#2a2a2a] border border-white/10 px-3 py-2.5">
          <p className="text-xs text-white/30">How can I help you today?</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-white/5">
        <div className="flex items-center gap-1.5 text-[11px] text-white/50">
          <Shield className="h-3 w-3" />
          Ask before acting
          <ChevronDown className="h-2.5 w-2.5 text-white/30" />
        </div>
        <div className="flex items-center gap-1.5">
          <button className="rounded p-1 text-white/40 hover:bg-white/10">
            <Sparkles className="h-3.5 w-3.5" />
          </button>
          <button className="rounded p-1 text-white/40 hover:bg-white/10">
            <Plus className="h-3.5 w-3.5" />
          </button>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10a37f]">
            <Send className="h-3 w-3 text-white" />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-3 pb-2 text-center">
        <p className="text-[9px] text-white/25">
          Codex can make mistakes. Review actions and outputs.
        </p>
      </div>
    </div>
  );
}

/**
 * Illustration: Codex composer with a file attachment.
 */
export function CVAttachmentIllustration() {
  return (
    <div className="inline-flex flex-col gap-2 rounded-xl bg-[#2a2a2a] p-3">
      {/* Chat input area */}
      <div className="rounded-lg bg-[#383838] px-3 py-2.5">
        <p className="text-xs text-white/40 italic">Type your message...</p>
      </div>
      {/* Attachment bar */}
      <div className="flex items-center gap-2 rounded-md bg-[#333] px-3 py-2">
        <Paperclip className="h-3.5 w-3.5 text-white/50" />
        <span className="text-xs text-white/70">resume.pdf</span>
        <span className="text-[10px] text-white/40">124 KB</span>
      </div>
    </div>
  );
}
