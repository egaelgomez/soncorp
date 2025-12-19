import { CheckCircle2 } from "lucide-react";

interface ServiceBenefitsProps {
  benefits: string[];
}

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/10">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Beneficios
            </h2>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
            {benefits.map((benefit, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-green-500/30 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
