import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

const ChallengeSection = () => {
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const animateElements = () => {
      if (challengeRef.current) {
        challengeRef.current.style.opacity = "1";
        challengeRef.current.style.transform = "translateX(0)";
      }
      setTimeout(() => {
        if (solutionRef.current) {
          solutionRef.current.style.opacity = "1";
          solutionRef.current.style.transform = "translateX(0)";
        }
      }, 300);
    };

    animateElements();
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* The Challenge */}
          <div
            ref={challengeRef}
            className="transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(-50px)" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Challenge
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tier 2-3 colleges lack robust incubation infrastructure, funding
              networks, and startup support systems. Students with innovative
              ideas often lack the resources and guidance to turn them into
              successful ventures.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-5 h-5 text-[#32808D] mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  80% of tier 2-3 colleges lack incubation centers
                </span>
              </div>
              <div className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-5 h-5 text-[#32808D] mt-1 flex-shrink-0" />
                <span className="text-gray-700">
                  65% students never exposed to entrepreneurship
                </span>
              </div>
            </div>
          </div>

          {/* Our Solution */}
          <div
            ref={solutionRef}
            className="transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(50px)" }}
          >
            <h2 className="text-4xl font-bold text-[#32808D] mb-6">
              Our Solution
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              TheSparknova provides end-to-end incubation support, bridging the
              gap between colleges and the startup ecosystem. We empower
              institutions to create world-class entrepreneurial environments.
            </p>

            <button className="bg-[#32808D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors flex items-center gap-2">
              Learn More
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
