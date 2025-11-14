import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (heroRef.current) {
        heroRef.current.style.opacity = "1";
        heroRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (statsRef.current) {
          const stats = statsRef.current.querySelectorAll(".stat-card");
          stats.forEach((stat, index) => {
            setTimeout(() => {
              stat.style.opacity = "1";
              stat.style.transform = "translateY(0)";
            }, index * 200);
          });
        }
      }, 400);
    };

    animateSection();
  }, []);

  const stats = [
    { value: "200+", label: "Student Startups Supported" },
    { value: "₹5Cr+", label: "Funding Secured" },
    { value: "1000+", label: "Student Entrepreneurs" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Content */}
        <div
          ref={heroRef}
          className="text-center mb-16 transition-all duration-1000"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Startup Journey
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            From idea to funded startup - we support you at every stage
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#32808D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors">
              Register Your Idea
            </button>
            <button className="border-2 border-[#32808D] text-[#32808D] px-8 py-3 rounded-lg font-semibold hover:bg-[#32808D] hover:text-white transition-colors">
              Join Events
            </button>
          </div>
        </div>

        {/* Background Message */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Background Doesn't Define Your Future
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe that innovation isn't limited to tier 1 institutions.
            Some of India's most impactful startups have come from tier 2-3
            colleges. With the right support, mentorship, and funding access,
            you can build the next big thing.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-white rounded-xl p-8 text-center shadow-md transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="text-4xl font-bold text-[#32808D] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
