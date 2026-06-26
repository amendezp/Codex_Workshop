import { ChecklistItem, Concept, Track } from "@/types";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "chatgpt-account",
    label: "ChatGPT account with Codex access",
    description: "Every ChatGPT plan includes Codex; Plus or Pro gives more room for workshop builds",
    helpUrl: "https://chatgpt.com/codex",
  },
  {
    id: "codex-app",
    label: "Codex app, CLI, or IDE extension ready",
    description: "The desktop app is the easiest workshop surface; CLI and IDE work too",
    helpUrl: "https://developers.openai.com/codex/quickstart",
  },
  {
    id: "openai-api-key",
    label: "OpenAI API key created",
    description: "Needed for the interview coach app you will deploy",
    helpUrl: "https://platform.openai.com/api-keys",
  },
  {
    id: "git",
    label: "Git installed on your computer",
    description: "Windows users only — Git comes pre-installed on Mac",
    helpUrl: "https://git-scm.com/install/windows",
    expandableHelp: {
      title: "How to install Git on Windows",
      steps: [
        "Go to git-scm.com/install/windows and download the installer.",
        "Run the installer. Click Next on each screen to accept the defaults — the installer has many screens, but you don't need to change anything.",
        "If it asks you to choose an editor, keep the default and click Next.",
        'When you see "Adjusting your PATH environment," keep the recommended option selected.',
      ],
      note: "Already have Git? You can skip this step. If you're not sure, install it anyway — reinstalling won't cause problems.",
    },
  },
  {
    id: "github-account",
    label: "GitHub account created",
    description: "Free account for code hosting",
    helpUrl: "https://github.com/signup",
  },
  {
    id: "vercel-account",
    label: "Vercel account created",
    description: "Free account for deploying your project to the web",
    helpUrl: "https://vercel.com/signup",
  },
  {
    id: "browser-plugin",
    label: "Optional: Browser or Chrome plugin enabled",
    description: "Unlocks Codex browser use, signed-in Chrome tasks, and visual QA",
    helpUrl: "https://developers.openai.com/codex/app/browser",
  },
];

export const CONCEPTS: Concept[] = [
  {
    term: "Codex",
    definition:
      "OpenAI's AI teammate for turning plain-English ideas into working prototypes, websites, dashboards, internal tools, automations, and polished business artifacts.",
    analogy:
      "Like having a builder beside you who can translate a clear business idea into something people can actually try.",
    icon: "Terminal",
  },
  {
    term: "MCP",
    fullName: "Model Context Protocol",
    definition:
      "A standard for connecting Codex to external tools and data sources such as GitHub, docs, databases, Figma, Sentry, and internal APIs.",
    analogy:
      "Think of it as a tool port: plug in a trusted service and Codex can use it when the task calls for it.",
    icon: "Plug",
  },
  {
    term: "Agent",
    definition:
      "When Codex works through a goal by planning, taking tool actions, checking results, and iterating instead of only answering a question.",
    analogy:
      "Like a capable intern who can research, draft, revise, and deliver — not just answer questions.",
    icon: "Bot",
  },
  {
    term: "Tools",
    definition:
      "Specific capabilities Codex can use during a thread: reading files, applying patches, running shell commands, using browser automation, searching docs, or calling plugins.",
    analogy: "If Codex is the operator, tools are the controls it can reach for.",
    icon: "Wrench",
  },
  {
    term: "Skills",
    definition:
      "Reusable workflows packaged as instructions, references, and optional scripts. Codex loads a skill only when your task matches it or you invoke it with $skill-name.",
    analogy: "Like a playbook that appears right when the job needs it.",
    icon: "Zap",
  },
  {
    term: "AGENTS.md",
    definition:
      "The instruction file Codex reads before doing work. Put repo conventions, test commands, review expectations, and team norms here.",
    analogy:
      "Like a briefing document you'd give a new team member on their first day.",
    icon: "FileText",
  },
  {
    term: "Worktree",
    definition:
      "An isolated Git checkout where Codex can experiment, run tasks, and make changes without disturbing your main working directory.",
    analogy:
      "Like a side studio for messy drafts while your main desk stays clean.",
    icon: "GitBranch",
  },
  {
    term: "Automations",
    definition:
      "Scheduled Codex runs that check on recurring work, report findings, or continue a thread on a cadence. They can combine with skills and plugins.",
    analogy:
      "Like a recurring teammate reminder that can also do the follow-up work.",
    icon: "Clock",
  },
  {
    term: "Plugins",
    definition:
      "Installable bundles that can include skills, app connectors, MCP servers, hooks, assets, and other reusable Codex capabilities.",
    analogy:
      "Like adding a new department of specialized coworkers to Codex.",
    icon: "Puzzle",
  },
];

export const TRACKS: Track[] = [
  {
    id: "visualization",
    number: 1,
    title: "First Codex Build",
    description:
      "A quick warm-up to confirm Codex can create files, run a local preview, and iterate from a plain-English prompt.",
    difficulty: "Beginner",
    estimatedTime: "~1 min",
    href: "/tracks/visualization",
    accentClass: "track-1",
    icon: "BarChart3",
    tag: "Warm-up",
  },
  {
    id: "mock-interview",
    number: 2,
    title: "AI Interview Coach",
    description:
      "The main event: build and deploy a full AI-powered interview prep app with Codex, the OpenAI API, GitHub, and Vercel.",
    difficulty: "Advanced",
    estimatedTime: "~20 min",
    href: "/tracks/mock-interview",
    accentClass: "track-2",
    icon: "Rocket",
    tag: "Core Workshop",
    featured: true,
  },
  {
    id: "chrome-navigation",
    number: 3,
    title: "Browser, Docs & Skills",
    description:
      "Extra credit: use AGENTS.md, Browser or Chrome, plugins, and skills to create documents, research opportunities, and work across real apps.",
    difficulty: "Intermediate",
    estimatedTime: "~10 min",
    href: "/tracks/chrome-navigation",
    accentClass: "track-3",
    icon: "Globe",
    tag: "Bonus",
  },
];

export const STEPS = [
  { label: "Setup", href: "/" },
  { label: "Learn", href: "/cheat-sheet" },
  { label: "Build", href: "/tracks" },
] as const;
