import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">GOLIPA</span>
                <span className="text-xs text-muted-foreground">POWER ACCUMULATORS</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Leading provider of battery maintenance equipment and power accumulator solutions for industrial and residential applications.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Industrial Battery Maintenance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Railway Battery Systems</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home Automation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Installation Guides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Warranty</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@golipa.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 xxx xxx xxxx</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Golipa Power Accumulators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;