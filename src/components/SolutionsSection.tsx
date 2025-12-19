import { useState } from "react";
import { solutions } from "./solutions/solutionsData";
import SolutionTabs from "./solutions/SolutionTabs";
import SolutionPanel from "./solutions/SolutionPanel";

const SolutionsSection = () => {
  const [activeId, setActiveId] = useState(solutions[0].id);
  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section id="servicios" className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluciones Soncorp
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            De diagnósticos rápidos a transformaciones enterprise: entregables claros, métricas y ejecución.
          </p>
        </div>

        {/* Solutions Navigator */}
        <div className="flex flex-col lg:flex-row gap-8">
          <SolutionTabs
            solutions={solutions}
            activeId={activeId}
            onSelect={setActiveId}
          />
          
          <div className="flex-1 min-w-0" id={`panel-${activeId}`}>
            <SolutionPanel solution={activeSolution} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
