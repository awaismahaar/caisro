import EngagementTimeline from "@/modules/Home/EngagementTimeline";
import EngagementTypes from "@/modules/Home/EngagementTypes";
import Footer from "@/modules/Home/Footer";
import Hero from "@/modules/Home/Hero";
import OurPositionOnCertainty from "@/modules/Home/OurPositionOnCertainty";
import WhatWeActuallyDo from "@/modules/Home/WhatWeActuallyDo";
import WhenCAISROIsEngaged from "@/modules/Home/WhenCAISROIsEngaged";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="main-container">
        <WhenCAISROIsEngaged />
      </div>

      <WhatWeActuallyDo />
      <div className="main-container">
        <EngagementTimeline />
      </div>
      <OurPositionOnCertainty />
      <div className="main-container">
        <EngagementTypes />
      </div>
      <Footer />
    </>
  );
}
