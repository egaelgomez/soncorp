import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/servicios/ServiceHero";
import ServiceProblems from "@/components/servicios/ServiceProblems";
import ServiceBenefits from "@/components/servicios/ServiceBenefits";
import ServiceScope from "@/components/servicios/ServiceScope";
import ServicePackages from "@/components/servicios/ServicePackages";
import ServiceFAQ from "@/components/servicios/ServiceFAQ";
import ServiceCTA from "@/components/servicios/ServiceCTA";
import { getSolutionBySlug } from "@/components/solutions/solutionsData";

const ServicioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getSolutionBySlug(slug) : undefined;

  if (!solution) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{solution.title} | Soncorp</title>
        <meta name="description" content={solution.headline} />
      </Helmet>

      <Navigation />
      
      <main>
        <ServiceHero solution={solution} />
        <ServiceProblems problems={solution.problems} />
        <ServiceBenefits benefits={solution.benefits} />
        <ServiceScope scope={solution.scope} />
        <ServicePackages packages={solution.packages} />
        <ServiceFAQ faq={solution.faq} />
        <ServiceCTA serviceName={solution.title} />
      </main>

      <Footer />
    </>
  );
};

export default ServicioDetalle;
