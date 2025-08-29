import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductCategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
