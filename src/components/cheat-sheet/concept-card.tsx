import { Card, CardContent } from "@/components/ui/card";
import type { Concept } from "@/types";
import {
  Terminal,
  Plug,
  Bot,
  Wrench,
  Zap,
  FileText,
  Layers,
  Brain,
  GitBranch,
  Clock,
  Puzzle,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Terminal,
  Plug,
  Bot,
  Wrench,
  Zap,
  FileText,
  Layers,
  Brain,
  GitBranch,
  Clock,
  Puzzle,
};

interface ConceptCardProps {
  concept: Concept;
}

export function ConceptCard({ concept }: ConceptCardProps) {
  const Icon = iconMap[concept.icon] || Terminal;

  return (
    <Card className="transition-all hover:shadow-md">
      <CardContent className="p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{concept.term}</h3>
            {concept.fullName && (
              <p className="text-xs text-muted-foreground">
                {concept.fullName}
              </p>
            )}
          </div>
        </div>
        <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
          {concept.definition}
        </p>
        <p className="text-xs italic text-primary/70">{concept.analogy}</p>
      </CardContent>
    </Card>
  );
}
