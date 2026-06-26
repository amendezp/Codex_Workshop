import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Monitor, Terminal } from "lucide-react";

const rows = [
  {
    feature: "Interface",
    desktop: "Focused desktop workspace with threads, review pane, terminal, browser, and artifacts",
    cli: "Terminal-based text interface",
  },
  {
    feature: "Setup",
    desktop: "Install the app, sign in, and add projects",
    cli: "Run codex from a repo or use codex exec for scripted work",
  },
  {
    feature: "Best for",
    desktop: "Teaching, multi-thread work, visual QA, artifacts, automations, and Git review",
    cli: "Developers who want fast local terminal control or automation hooks",
  },
  {
    feature: "File editing",
    desktop: "Review, comment, stage, commit, push, and create PRs in the app",
    cli: "Review patches and run commands directly in your shell",
  },
  {
    feature: "Parallel work",
    desktop: "Local, worktree, and cloud threads can run side by side",
    cli: "Use sessions, resume, codex cloud, and subagents for advanced workflows",
  },
  {
    feature: "Skills & plugins",
    desktop: "Browse skills and plugins visually, connect apps, and use Browser or Computer Use",
    cli: "Uses the same skills, plugins, MCP servers, AGENTS.md, and config.toml",
  },
];

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[140px] font-semibold">Feature</TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-primary" />
                Codex App
                <Badge variant="default" className="ml-1 text-[10px]">
                  We use this today
                </Badge>
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-muted-foreground" />
                CLI
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.feature}>
              <TableCell className="font-medium text-foreground">
                {row.feature}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {row.desktop}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {row.cli}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
