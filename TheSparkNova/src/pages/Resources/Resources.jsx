import React from "react";
import HeroSection from "./HeroSection";
import GetStarted from "../../components/GetStarted";
import KnowledgeHub from "./KnowledgeHub";
import Blog from "./Blog";
import LearningSection from "./LearningSection";
import MediaKit from "./MediaKit";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <KnowledgeHub />
      <Blog />
      <LearningSection />
      <MediaKit />

      <GetStarted
        heading={"Can't Find What You're Looking For?"}
        para={
          " Reach out to our team and we'll help you find the right resources"
        }
        btn1={"Contact Us"}
        btn2={"Query"}
      />
    </div>
  );
};

export default Resources;
