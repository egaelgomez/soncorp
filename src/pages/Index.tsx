import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import WhySoncorp from "@/components/WhySoncorp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import SEO from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Soncorp | Consultoría empresarial en México"
        description="Consultoría empresarial en México: experiencia del cliente, consultoría de negocios, soluciones TI y marketing con automatización. Solicite una evaluación inicial sin compromiso."
        canonicalPath="/"
      />
      <CursorGlow />
      <Navigation />
      <main>
        <Hero />
        <SolutionsSection />
        <WhySoncorp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
