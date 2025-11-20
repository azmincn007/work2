import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function WhoWillYouMeet() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      title: 'CEOs/Managing Directors',
      hoverColor: 'hover:bg-blue-500',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'CTOs/CIOs/Heads of Technology Innovation',
      hoverColor: 'hover:bg-indigo-500',
      bgColor: 'bg-indigo-500'
    },
    {
      title: 'Heads of Property Management',
      hoverColor: 'hover:bg-purple-500',
      bgColor: 'bg-purple-500'
    },
    {
      title: 'Heads of Sales & Marketing',
      hoverColor: 'hover:bg-cyan-500',
      bgColor: 'bg-cyan-500'
    },
    {
      title: 'Heads of Investments',
      hoverColor: 'hover:bg-teal-500',
      bgColor: 'bg-teal-500'
    }
  ];

}