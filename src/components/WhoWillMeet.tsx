import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function WhoWillYouMeet() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      title: 'CIOs, CTOs, Heads of Technology',
      hoverColor: 'hover:bg-blue-500',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Chief Digital Officers, of Digital Transformation',
      hoverColor: 'hover:bg-indigo-500',
      bgColor: 'bg-indigo-500'
    },
    {
      title: 'Chief Marketing Officers, Heads of Marketing',
      hoverColor: 'hover:bg-purple-500',
      bgColor: 'bg-purple-500'
    },
    {
      title: 'Heads of Retail Banking',
      hoverColor: 'hover:bg-cyan-500',
      bgColor: 'bg-cyan-500'
    },
    {
      title: 'Heads of Corporate Banking',
      hoverColor: 'hover:bg-teal-500',
      bgColor: 'bg-teal-500'
    },
    {
      title: 'Heads of Customer Experience',
      hoverColor: 'hover:bg-green-500',
      bgColor: 'bg-green-500'
    },
    {
      title: 'Heads of Cards & Payments',
      hoverColor: 'hover:bg-yellow-500',
      bgColor: 'bg-yellow-500'
    },
    {
      title: 'Head of Data & Analytics',
      hoverColor: 'hover:bg-orange-500',
      bgColor: 'bg-orange-500'
    },
    {
      title: 'Heads of Governance & Compliance',
      hoverColor: 'hover:bg-red-500',
      bgColor: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight font-mono">
            WHO WILL YOU MEET
          </h2>
          <div className="w-24 h-2 bg-black mt-4"></div>
        </div>

        {/* Cards List - Full Width */}
        <div className="space-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 ease-out cursor-pointer ${
                hoveredIndex === index ? 'shadow-2xl' : 'shadow-lg'
              }`}
            >
              {/* Background Color - Changes on Hover */}
              <div
                className={`absolute inset-0 ${card.bgColor} transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>

              {/* Content Container */}
              <div className={`relative p-6 flex items-center justify-between transition-all duration-300 ${
                hoveredIndex === index 
                  ? 'bg-opacity-100 text-white' 
                  : 'bg-gray-200 text-black'
              }`}>
                {/* Title */}
                <h3 className={`text-3xl font-black tracking-tight transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-white' : 'text-black'
                } font-mono`}>
                  {card.title}
                </h3>

                {/* Arrow */}
                <ArrowRight
                  size={32}
                  className={`transition-all duration-300 transform ${
                    hoveredIndex === index
                      ? 'translate-x-2 text-white'
                      : 'text-black translate-x-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}