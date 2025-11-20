import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <img 
                src="/f1.png" 
                alt="Future Banks Summit Logo" 
                className="w-60 h-50 object-contain"
              />
            </div>
            
          </div>

          {/* Register Button */}
          <div className="flex items-center">
            <Button variant="default" size="default" className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white w shadow-lg backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;