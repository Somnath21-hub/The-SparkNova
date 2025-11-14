import { useEffect, useRef } from "react";

import { BiTargetLock } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

// Component 1: Hero Section with Our Story, Mission & Vision
const HeroSection = () => {
  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    // Simple fade-in animation without GSAP
    const elements = [storyRef.current, missionRef.current, visionRef.current];
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About TheSparknova
          </h1>
          <p className="text-gray-600 text-lg">
            Democratizing entrepreneurship support for tier 2-3 educational
            institutions
          </p>
        </div>

        {/* Our Story Section */}
        <div
          ref={storyRef}
          className="mb-20 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              TheSparknova was born from a simple observation: while tier 1
              institutions had well-established startup ecosystems, talented
              students in tier 2-3 colleges struggled to access the same
              opportunities.
            </p>
            <p>
              Founded by entrepreneurs who experienced these challenges
              firsthand, we set out to bridge this gap. Our mission is to ensure
              that every college, regardless of its tier, has access to
              world-class incubation infrastructure, funding networks, and
              startup support.
            </p>
            <p>
              Today, we partner with 50+ colleges across India, supporting 200+
              startups and facilitating over ₹5 crores in funding. But our
              journey has just begun.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div
            ref={missionRef}
            className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <div className="w-12 h-12 bg-[#E8F4F6] rounded-full flex items-center justify-center mb-6">
              <BiTargetLock className="w-6 h-6 text-[#32808D]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To bridge the entrepreneurship gap in tier 2-3 educational
              institutions by providing comprehensive incubation support,
              funding access, and skill development opportunities that enable
              every student to build successful ventures.
            </p>
          </div>

          {/* Vision Card */}
          <div
            ref={visionRef}
            className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <div className="w-12 h-12 bg-[#E8F4F6] rounded-full flex items-center justify-center mb-6">
              <AiOutlineEye className="w-6 h-6 text-[#32808D]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creating India's largest college-startup ecosystem where every
              student has equal opportunity to innovate and build successful
              ventures, regardless of their institution's tier or location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
