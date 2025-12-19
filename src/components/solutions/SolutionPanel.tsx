import { Solution } from "./solutionsData";
import Chip from "./Chip";
import PackageChip from "./PackageChip";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Clock, ExternalLink } from "lucide-react";

interface SolutionPanelProps {
  solution: Solution;
}

const SolutionPanel = ({ solution }: SolutionPanelProps) => {
  return (
    <div 
      role="tabpanel"
      aria-label={solution.title}
      className="animate-fade-in"
    >
      {/* Outcome Header */}
      <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-card to-muted/50 border border-border">
        <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
          {solution.outcome}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {solution.targetAudience.map((audience) => (
            <Chip key={audience} variant="audience">
              {audience}
            </Chip>
          ))}
          <div className="flex items-center gap-1.5 ml-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{solution.timeframe}</span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Entregables - Large card */}
        <div className="md:row-span-2 p-5 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors">
          <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            Entregables
          </h4>
          <ul className="space-y-3">
            {solution.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Proceso */}
        <div className="p-5 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors">
          <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            Proceso
          </h4>
          <ol className="space-y-2">
            {solution.process.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-secondary/20 text-secondary text-xs font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Indicadores */}
        <div className="p-5 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors">
          <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Indicadores
          </h4>
          <div className="flex flex-wrap gap-2">
            {solution.metrics.map((metric) => (
              <Chip key={metric} variant="metric">
                {metric}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Categories */}
      <div className="p-5 rounded-xl bg-muted/30 border border-border mb-6">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Herramientas & Métodos
        </h4>
        <div className="flex flex-wrap gap-2">
          {solution.tools.map((tool) => (
            <Chip key={tool} variant="tool">
              {tool}
            </Chip>
          ))}
          {solution.categories?.map((cat) => (
            <Chip key={cat} variant="default">
              {cat}
            </Chip>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Paquetes
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {solution.packages.map((pkg) => (
            <PackageChip key={pkg.name} name={pkg.name} description={pkg.desc} />
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
        <Button 
          className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90"
          asChild
        >
          <a href="#contacto">
            Agendar diagnóstico
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 border-border text-foreground hover:bg-muted"
        >
          Ver entregables
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SolutionPanel;
