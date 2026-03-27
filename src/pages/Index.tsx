import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import WhySoncorp from "@/components/WhySoncorp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

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
