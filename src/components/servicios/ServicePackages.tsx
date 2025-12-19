import { Layers } from "lucide-react";
import { PackageCard } from "@/components/solutions/solutionsData";

interface ServicePackagesProps {
  packages: PackageCard[];
}

const ServicePackages = ({ packages }: ServicePackagesProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10">
              <Layers className="h-5 w-5 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Opciones para empezar
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Iniciamos con quick wins y escalamos a Enterprise conforme creces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {packages.map((pkg, idx) => (
              <article 
                key={idx}
                className={`relative p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  idx === 1 
                    ? "bg-secondary/5 border-secondary/40 hover:border-secondary/60" 
                    : "bg-card border-border hover:border-secondary/40"
                }`}
              >
                {idx === 1 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {pkg.description}
                </p>
                <ul className="space-y-2 mb-6" role="list">
                  {pkg.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t border-border pt-4">
                  <span className="font-medium text-foreground">Ideal para:</span> {pkg.idealFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
