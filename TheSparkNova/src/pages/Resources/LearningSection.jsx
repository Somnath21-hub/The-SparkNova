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
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4 overflow-hidden">
      <div className="absolute -top-10 right-20 w-52 h-24 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-20 rounded-3xl blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-extrabold text-[#0d2b2e] mb-3">
            Learning & Development
          </h2>
          <p className="text-gray-600 text-lg">
            Courses, webinars, and workshops to build your skills
          </p>
        </div>
        {/* Learning Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {/* Video Courses */}
          <div
            className="learning-card flex flex-col bg-white/90 backdrop-blur-lg rounded-3xl px-9 pt-9 pb-10 shadow-xl border-l-8 border-cyan-100 hover:border-[#00b3b3] transition-all duration-700"
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-200 rounded-full flex items-center justify-center mb-7 shadow">
              <FaVideo className="w-8 h-8 text-[#00b3b3]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0d2b2e] mb-4">
              Video Courses
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              On-demand video courses on startup fundamentals, product
              development, and fundraising
            </p>
            <button className="mt-auto bg-[#00b3b3] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#32808D] transition-colors shadow">
              Browse Courses
            </button>
          </div>

          <div
            className="learning-card flex flex-col bg-white/90 backdrop-blur-lg rounded-3xl px-9 pt-9 pb-10 shadow-xl border-l-8 border-teal-100 hover:border-[#32808D] transition-all duration-700"
            style={{ opacity: 0, transform: "scale(0.9)" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-200 rounded-full flex items-center justify-center mb-7 shadow">
              <FaCalendarAlt className="w-8 h-8 text-[#32808D]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0d2b2e] mb-4">
              Webinars & Workshops
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Live sessions with industry experts and successful founders
            </p>
            <button className="mt-auto bg-[#32808D] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#00b3b3] transition-colors shadow">
              View Schedule
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-44 h-24 bg-gradient-to-br from-cyan-100 to-teal-100 opacity-20 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default LearningSection;
