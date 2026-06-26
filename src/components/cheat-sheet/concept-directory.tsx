import { CONCEPTS } from "@/lib/constants";
import { ConceptCard } from "./concept-card";

export function ConceptDirectory() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {CONCEPTS.map((concept) => (
        <ConceptCard key={concept.term} concept={concept} />
      ))}
    </div>
  );
}
