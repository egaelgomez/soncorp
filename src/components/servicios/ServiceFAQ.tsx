import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/components/solutions/solutionsData";

interface ServiceFAQProps {
  faq: FAQItem[];
}

const ServiceFAQ = ({ faq }: ServiceFAQProps) => {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10">
              <HelpCircle className="h-5 w-5 text-secondary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Preguntas frecuentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border border-border rounded-lg bg-card px-6 data-[state=open]:border-secondary/40"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-secondary hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
