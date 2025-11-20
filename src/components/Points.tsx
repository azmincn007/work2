import React from 'react';
import { ChevronRight } from 'lucide-react';

const CmaContent3 = () => {
  // Dummy data with event highlights
  const heading = "HIGHLIGHTS OF THE EVENT";
  
  const points = [
    "Big Data collection and analysis of property data",
    "AI and cloud-based software to streamline administration tasks",
    "Virtual Reality tools to enhance the property viewing experience",
    "Automated Property Management",
    "Blockchain powered Real Estate transactions",
    "IoT 'smart' network devices and sensors for efficient property maintenance",
    "Online platforms and chatbots to facilitate the customer experience",
    "A new era of Crowdfunding as an alternate source of property funding",
    "Innovation in mobile applications for tenants and landlords",
    "Impact of Cryptocurrency on Real Estate sector"
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Left Aligned Heading */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight font-mono">
            {heading}
            
          </h1>
          <div className="w-24 h-2 bg-black mt-4"></div>
        </div>
        
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-8">
          {/* Mobile Points Section */}
          <div className="w-full mx-auto border border-cyan-200 rounded-2xl p-6 bg-white shadow-lg">
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-gray-800 text-sm sm:text-base font-medium">
                    {point}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Full Width Content */}
        <div className="hidden lg:block">
          {/* Event Highlights */}
          <div className="border border-cyan-200 rounded-2xl p-8 bg-white shadow-lg">
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-gray-800 text-lg font-medium">
                    {point}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmaContent3;