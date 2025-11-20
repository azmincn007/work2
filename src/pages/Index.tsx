import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SplitGrid from "@/components/SplitCard";
import CmaContent3 from "@/components/Points";
import WhoWillYouMeet from "@/components/WhoWillMeet";
import ShapingFutureGovernments from "@/components/WhyAttend";
import ToolsShowcase from "@/components/IndustriesCovered";
import WhySponsor from "@/components/WhySponsor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SplitGrid/>
      <ToolsShowcase/>
      <WhoWillYouMeet/>
      <CmaContent3/>
      <ShapingFutureGovernments/>
      <WhySponsor/>
    </div>
  );
};

export default Index;