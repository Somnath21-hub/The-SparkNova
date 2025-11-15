import React, { useEffect, useRef } from "react";
import { FaVideo, FaCalendarAlt } from "react-icons/fa";

const LearningSection = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll(".learning-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
            }, index * 300);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Learning & Development
          </h2>
          <p className="text-gray-600 text-lg">
            Courses, webinars, and workshops to build your skills
          </p>
        </div>

        {/* Learning Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <div
            className="learning-card bg-gray-50 rounded-2xl p-8 transition-all duration-700"
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            <div className="w-16 h-16 bg-[#E8F4F6] rounded-full flex items-center justify-center mb-6 text-[#32808D]">
              <FaVideo className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Video Courses
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              On-demand video courses on startup fundamentals, product
              development, and fundraising
            </p>
            <button className="bg-[#32808D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors">
              Browse Courses
            </button>
          </div>

          <div
            className="learning-card bg-gray-50 rounded-2xl p-8 transition-all duration-700"
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            <div className="w-16 h-16 bg-[#E8F4F6] rounded-full flex items-center justify-center mb-6 text-[#32808D]">
              <FaCalendarAlt className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Webinars & Workshops
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Live sessions with industry experts and successful founders
            </p>
            <button className="bg-[#32808D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSection;
