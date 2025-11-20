export default function ShapingFutureGovernments() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-cyan-900 to-cyan-700 px-8 py-16 md:px-12 md:py-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left Column - Title */}
        <div className="md:w-1/3">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight font-mono">
            Why Attend?
          </h1>
        </div>

        {/* Right Column - Description */}
        <div className="md:w-2/3">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            This Summit will focus on the emerging trends in digital transformation of the Real Estate Industry. Delegates will learn from real-life case studies, business insights and lessons learned from leaders to discover the best strategies, tools & methods for tapping into the potential of tech-driven management, handling and monetization of real estate assets.
          </p>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
            If you are ready to innovate and join the ranks of the industry thought leaders while resonating with the following reasons compelling enough to attend, then register today:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-gray-300 font-bold text-lg mr-2">•</span>
              <span className="text-gray-300 text-base md:text-lg">Gain Knowledge and Insights from Top Industry Leaders and Experts from across the globe</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 font-bold text-lg mr-2">•</span>
              <span className="text-gray-300 text-base md:text-lg">Network with Industry Peers in a solution-oriented environment</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 font-bold text-lg mr-2">•</span>
              <span className="text-gray-300 text-base md:text-lg">Discuss Significant Partnerships and Collaborations with Industry leaders</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 font-bold text-lg mr-2">•</span>
              <span className="text-gray-300 text-base md:text-lg">Deep Dive into Insights derived from real-time case studies</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-300 font-bold text-lg mr-2">•</span>
              <span className="text-gray-300 text-base md:text-lg">Build Industry Ecosystem Collaboration to address latest challenges</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}