import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground">GOLIPA</span>
            <span className="text-xs text-muted-foreground">POWER ACCUMULATORS</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Solutions</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;