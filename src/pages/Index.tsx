import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";
import WhySoncorp from "@/components/WhySoncorp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
