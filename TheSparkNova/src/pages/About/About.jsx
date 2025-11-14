import React from "react";
import HeroSection from "./HeroSection";
import Values from "./Values";
import Team from "./Team";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Values />
      <Team />
    </div>
  );
};

export default About;
