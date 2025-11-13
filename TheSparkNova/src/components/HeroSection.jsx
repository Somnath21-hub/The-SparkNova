import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-20 px-4 bg-[#f9faf9]">
      <h2 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight text-[#0d2b2e]">
        Empowering Tier 2-3 College Incubation Centers to Build Tomorrow's Startups
      </h2>
      <p className="text-gray-600 mt-6 text-lg max-w-2xl">
        Complete ecosystem support — from funding to mentorship, events to infrastructure
      </p>

      <div className="flex space-x-4 mt-8">
        <button className="bg-[#00b3b3] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#008080]">
          Partner With Us
        </button>
        <button className="border-2 border-[#00b3b3] text-[#00b3b3] px-6 py-3 rounded-md font-semibold hover:bg-[#00b3b3] hover:text-white">
          Explore Our Services
        </button>
      </div>

      <div className="flex space-x-4 mt-12 text-gray-700 font-medium">
        <p>50+ Partner Colleges</p>
        <span>|</span>
        <p>200+ Startups Supported</p>
        <span>|</span>
        <p>₹5Cr+ Funding Facilitated</p>
      </div>
    </section>
  );
};

export default HeroSection;
