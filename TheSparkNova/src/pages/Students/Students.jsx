import React from "react";
import HeroSection from "./HeroSection";
import OffersSection from "./OffersSection";
import SupportStages from "./SupportStages";
import Resources from "./Resources";
import GetStarted from "../../components/GetStarted";

const Students = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OffersSection />
      <SupportStages />
      <Resources />
      <GetStarted
        heading={"Ready to Turn Your Idea into Reality?"}
        para={
          "Join our community of student entrepreneurs and start building today"
        }
        btn1={"Register Your Startup"}
        btn2={"Join Events"}
      />
    </div>
  );
};

export default Students;
