import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            <span className="text-primary">WIDE VARIETY</span> OF BATTERY MAINTENANCE EQUIPMENT
          </h1>
          
          <p className="text-xl mb-8 text-muted-foreground">
            Leading provider of innovative battery maintenance solutions for industrial, railway, and home automation applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Products
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;