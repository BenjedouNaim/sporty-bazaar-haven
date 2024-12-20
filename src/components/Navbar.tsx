import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors">
            SportShop
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
            <a href="/products" className="text-gray-600 hover:text-gray-800 transition-colors">Products</a>
            <a href="/categories" className="text-gray-600 hover:text-gray-800 transition-colors">Categories</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};