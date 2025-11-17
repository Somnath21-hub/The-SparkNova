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
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — THE CHALLENGE */}
          <div
            ref={challengeRef}
            className="transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(-60px)" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              The Challenge
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
              Tier 2-3 colleges lack robust incubation infrastructure, funding
              networks, and startup support systems. Students with innovative
              ideas often lack the resources and guidance to scale their
              ventures.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-6 h-6 text-[#32808D] mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-lg font-semibold">
                  80% of tier 2-3 colleges lack fully functional incubation centers
                </span>
              </div>

              <div className="flex items-start gap-3">
                <IoMdCheckmarkCircle className="w-6 h-6 text-[#32808D] mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-lg font-semibold">
                  65% of students never receive entrepreneurship exposure
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — OUR SOLUTION */}
          <div
            ref={solutionRef}
            className="transition-all duration-700"
            style={{ opacity: 0, transform: "translateX(60px)" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#32808D] mb-6 tracking-tight">
              Our Solution
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
              TheSparknova delivers end-to-end incubation infrastructure,
              mentorship pipelines, startup programs, and ecosystem partnerships —
              enabling colleges to build powerful entrepreneurial environments.
            </p>

            <button
              className="bg-[#32808D] text-white px-7 py-3.5 rounded-xl 
                         font-semibold text-lg shadow-md hover:shadow-lg
                         hover:bg-[#286c7a] transition-all flex items-center gap-3
                         active:scale-95"
            >
              Learn More
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
