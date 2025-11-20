import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6 md:mb-8">
            <img 
              src="/f1.png" 
              alt="Future Banks Summit" 
              className="mx-auto w-48 sm:w-64 md:w-96 lg:w-[40rem] xl:w-[48rem] mb-8 md:mb-16 scale-100 sm:scale-100 md:scale-100" 
            />
          </div>
          
          {/* Tagline */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl font-black text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Embracing Proptech to drive Innovation in Real Estate
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto px-8 md:px-10 text-base font-bold shadow-xl bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 md:px-10 text-base font-bold border-2"
            >
              Check Website
            </Button>
          </div>
        </div>
      </div>
      
      {/* Attendees Statistics Section */}
      <div className="bg-orange-600 w-full mt-8 md:mt-12 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header Section */}
        <div className="px-4 sm:px-8 py-8 md:py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter">
            500+
            <span className="text-black ml-2 sm:ml-4">ATTENDEES</span>
          </h1>
        </div>

        {/* Category Labels - Responsive stacking on mobile */}
        <div className="flex flex-col sm:flex-row bg-orange-600 px-4 sm:px-8 py-4 md:py-6">
          <div className="flex-1 text-blue-900 font-bold text-base sm:text-lg py-2 sm:py-0">60% BANKING PROFESSIONALS</div>
          <div className="flex-1 text-blue-900 font-bold text-base sm:text-lg py-2 sm:py-0">25% TECHNOLOGY LEADERS</div>
          <div className="flex-1 text-blue-900 font-bold text-base sm:text-lg py-2 sm:py-0">15% REGULATORS & CONSULTANTS</div>
        </div>

        {/* Segmented Bar - Responsive heights */}
        <div className="flex h-16 sm:h-20 md:h-24">
          <div className="flex-1 bg-blue-500"></div>
          <div className="flex-1 bg-indigo-600"></div>
          <div className="flex-1 bg-cyan-500"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;