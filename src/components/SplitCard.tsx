export default function SplitGrid() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900 to-cyan-700 p-4 sm:p-6">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[60vh]">
        {/* Left Side: Conference Video - 65% width */}
        <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-gray-800 shadow-2xl border border-gray-700">
          <div className="w-full h-full aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <video 
                src="/f3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Right Side: Event Image - 35% width */}
        <div className="lg:col-span-4 rounded-3xl overflow-hidden bg-gray-800 shadow-2xl border border-gray-700">
          <div className="w-full h-full aspect-square sm:aspect-video flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img 
                src="/f2.png" 
                alt="Future Banks Summit Event" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Overview Text Content */}
      <div className="max-w-8xl mx-auto mt-6 sm:mt-8 p-4 sm:p-6 rounded-3xl">
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
          Despite global headwinds, the real estate market in Dubai continues to leap over other metropolises amid global economic challenges. The influx of HNWIs and overseas buyers investing in Dubai's high-end developments with residents eyeing for stability and benefits from the new freehold and visa-related reforms, a rush of first-time home buyers has proven the resiliency of the Emirate that holds an abundance of safe and unmatched opportunities as a global hub for business, tourism and innovation
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
          Dubai Real Estate had over 84,196‭ ‬real estate transactions in 2021‭ ‬worth almost AED 300‭ ‬billion‭. ‬The value of these transactions‭ ‬is the highest it's ever been in the recorded history of Dubai Real Estate‭. Q2 2022 when compared to Q2 2021 showed an increase of 45.86 percent for volume and an increase of 61.56 percent for value.‬‬‬‬‬‬‬‬‬‬‬‬
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Proptech, a combination of property and technology cites to the management, handling, and monetization of real estate assets using technologies such as AI, blockchain and automation. The rising digital transformation throughout the property sector such as predictive analytics, asset digitization, IoT in workplace management, data analytics on market performance, and predictive analytics in asset performance is revolutionizing the industry and cannot be ignored.
        </p>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4">
          Taking a view of this euphoria that looks at modifying the paradigm of the industry, we bring to you The Middle East Proptech Innovation Summit 2023. This forum aims at providing a platform for the regional Real Estate fraternity to gather and discuss the new era of Proptech with topics such as including transparency of Information, virtual viewings, valuations powered by AI, data-driven online listings and blockchain transactions, among others. This is an invaluable two-day opportunity to network with industry leaders and discuss all of the latest technological advances in Proptech imperative in driving your business forward.
        </p>
      </div>
    </div>
  );
}