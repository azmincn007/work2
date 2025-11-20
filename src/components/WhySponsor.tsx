import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail } from 'lucide-react';

export default function WhySponsor() {
  const reasons = [
    {
      title: "Demonstrate Thought Leadership",
      description: "Position your company as a thought leader by delivering a standalone presentation or moderating a panel discussion to a pre-qualified audience comprising decision-makers."
    },
    {
      title: "Network & Generate Leads",
      description: "Optimize your networking opportunities by getting right in front of key prequalified decision makers based on seniority, budget availability, and motivation to learn about the latest technologies."
    },
    {
      title: "Brand Positioning",
      description: "Establish, strengthen and re-position your brand in front of business owners & technology leaders who are looking to re-align and strengthen their digital transformation strategies."
    }
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight font-mono">
            Why <span className="text-cyan-600">Sponsor</span>
          </h1>
          <div className="w-24 h-2 bg-black mt-4"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
              MIDDLE EAST PROPTECH INNOVATION SUMMIT 2023 presents the perfect opportunity for solution providers to engage with key decision makers such as CEOs, CIOs, Heads of Property Management, Heads of Facility Management etc from leading Property Developers, Property Management Companies, Real Estate brokerage houses to differentiate their solution offerings and put forward their value proposition in this crowded marketplace.
            </p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-8">
              Some of the key reasons why you should sponsor:
            </p>

            {/* Reasons List */}
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              To find out more about the ROI-driven sponsorship and exhibition opportunities, contact us now:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-cyan-600" />
                <span className="text-gray-900 font-medium">+971 4 243 4677</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-cyan-600" />
                <span className="text-gray-900 font-medium">info@verve-management.com</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full px-6 text-base font-bold shadow-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                onClick={() => window.location.href = 'mailto:info@verve-management.com'}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}