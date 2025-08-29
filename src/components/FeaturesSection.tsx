import innovationIcon from "@/assets/icon-innovation.jpg";
import customIcon from "@/assets/icon-custom.jpg";
import safetyIcon from "@/assets/icon-safety.jpg";

const features = [
  {
    icon: innovationIcon,
    title: "Innovative products",
    description: "Choose from class leading products for battery maintenance."
  },
  {
    icon: customIcon,
    title: "Customized solutions",
    description: "Sometimes one solution won't fit all. We are happy to provide project specific customization."
  },
  {
    icon: safetyIcon,
    title: "Safety & Reliability",
    description: "We are hardwired to provide products that are safe and reliable."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;