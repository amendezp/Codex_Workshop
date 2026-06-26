export interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  helpUrl: string;
  expandableHelp?: {
    title: string;
    steps: string[];
    note?: string;
  };
}

export interface Concept {
  term: string;
  fullName?: string;
  definition: string;
  analogy: string;
  icon: string;
}

export interface Track {
  id: string;
  number: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  href: string;
  accentClass: string;
  icon: string;
  tag?: string;
  featured?: boolean;
}

export type WorkshopStep = 0 | 1 | 2;
