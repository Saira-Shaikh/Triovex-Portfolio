import { ArrowRight } from "lucide-react";
import type { Diagram as DiagramType, Stage } from "../data/projects";

// ponytail: flex + divs instead of mermaid/svg. Responsive for free, zero deps.
const Node = ({ label }: { label: string }) => (
  <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-xs sm:text-sm text-blue-100 text-center">
    {label}
  </div>
);

const StageCell = ({ stage }: { stage: Stage }) =>
  Array.isArray(stage) ? (
    <div className="flex flex-col gap-2">
      {stage.map((s) => (
        <Node key={s} label={s} />
      ))}
    </div>
  ) : (
    <Node label={stage} />
  );

const Diagram = ({ diagram }: { diagram: DiagramType }) => (
  <div className="space-y-6">
    {diagram.groups.map((group, gi) => (
      <div key={gi}>
        {group.title && (
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            {group.title}
          </p>
        )}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2">
          {group.stages.map((stage, si) => (
            <div
              key={si}
              className="flex flex-col sm:flex-row items-center gap-2"
            >
              {si > 0 && (
                <ArrowRight className="h-4 w-4 shrink-0 text-cyan-400 rotate-90 sm:rotate-0" />
              )}
              <StageCell stage={stage} />
            </div>
          ))}
        </div>
      </div>
    ))}
    {diagram.footnote && (
      <p className="text-sm text-gray-400 border-l-2 border-cyan-500/40 pl-4">
        {diagram.footnote}
      </p>
    )}
  </div>
);

export default Diagram;
