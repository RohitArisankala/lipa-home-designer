import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Factory, Train } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Home Automation",
    description: "Smart battery solutions for residential applications",
    color: "text-primary"
  },
  {
    icon: Factory,
    title: "Industrial Battery Maintenance",
    description: "Comprehensive maintenance systems for industrial facilities",
    color: "text-primary"
  },
  {
    icon: Train,
    title: "Railway Battery Maintenance",
    description: "Specialized equipment for railway battery systems",
    color: "text-primary"
  }
];

const ProductCategoriesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Explore Our Collections
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    View Products
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;