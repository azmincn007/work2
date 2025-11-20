import React from 'react';
import { Building2, Home, Users, MapPin, Briefcase, TrendingUp } from 'lucide-react';

export default function ToolsShowcase() {
  const industries = [
    { name: 'Property Developers', icon: Building2 },
    { name: 'Property Management Companies', icon: Home },
    { name: 'Real-Estate Consultants', icon: Users },
    { name: 'Community Management Companies', icon: MapPin },
    { name: 'Real-Estate Brokers', icon: Briefcase },
    { name: 'Investors & VCs', icon: TrendingUp },
  ];

  return (
    <div className=" bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight font-mono">
            Industries <span className="">Covered</span>
          </h1>
          <div className="w-24 h-2 bg-black mt-4"></div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer bg-white hover:bg-white hover:border-cyan-300 hover:shadow-md"
              >
                <div className="bg-cyan-50 p-3 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-cyan-600" />
                </div>
                <span className="text-gray-900 text-center font-semibold text-base">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}