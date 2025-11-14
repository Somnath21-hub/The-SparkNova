import React from "react";
import HeroSection from "./HeroSection";
import WhyPartnerSection from "./WhyPartnerSection";
import PartnershipModels from "./PartnershipModels";
import PartnershipProcess from "./PartnershipProcess";
import SuccessStories from "./SuccessStories";
import GetStarted from "../../components/GetStarted";

const Colleges = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyPartnerSection />
      <PartnershipModels />
      <PartnershipProcess />
      <SuccessStories />
      <GetStarted
        heading={"Ready to Transform Your College?"}
        para={
          "Schedule a free consultation to discuss your incubation center vision"
        }
        btn1={"Schedule Partnership Call"}
        btn2={"Download Partnership Brochure"}
      />
    </div>
  );
};

export default Colleges;
