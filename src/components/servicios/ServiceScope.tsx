import { Target } from "lucide-react";
import { ScopeCard } from "@/components/solutions/solutionsData";

interface ServiceScopeProps {
  scope: ScopeCard[];
}

const ServiceScope = ({ scope }: ServiceScopeProps) => {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10">
              <Target className="h-5 w-5 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Qué puedes esperar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {scope.map((card, idx) => (
              <article 
                key={idx}
                className="p-6 rounded-xl bg-card border border-border hover:border-secondary/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary/10 text-secondary font-semibold text-sm">
                    {idx + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {card.description}
                </p>
                <ul className="space-y-2" role="list">
                  {card.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScope;
