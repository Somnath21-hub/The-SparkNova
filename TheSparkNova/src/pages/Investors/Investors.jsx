import React from "react";
import HeroSection from "./HeroSection";
import WhyJoinSection from "./WhyJoinSection";
import Mentor from "./Mentor";
import RegisterForm from "./RegisterForm";

const Investors = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyJoinSection />
      <Mentor />
      <RegisterForm />
    </div>
  );
};

export default Investors;
