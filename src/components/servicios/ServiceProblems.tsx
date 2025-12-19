import { AlertCircle } from "lucide-react";

interface ServiceProblemsProps {
  problems: string[];
}

const ServiceProblems = ({ problems }: ServiceProblemsProps) => {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-destructive/10">
              <AlertCircle className="h-5 w-5 text-destructive" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Problemas que resolvemos
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
            {problems.map((problem, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-destructive/30 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceProblems;
