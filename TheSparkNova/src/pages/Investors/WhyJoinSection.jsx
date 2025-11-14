import React, { useEffect, useRef } from "react";
import {
  FaBullseye,
  FaChartLine,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

const WhyJoinSection = () => {
  const titleRef = useRef(null);
  const featuresRef = useRef(null);
  const reasonsTitleRef = useRef(null);
  const reasonsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (featuresRef.current) {
          const cards = featuresRef.current.querySelectorAll(".feature-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 150);
          });
        }
      }, 300);

      setTimeout(() => {
        if (reasonsTitleRef.current) {
          reasonsTitleRef.current.style.opacity = "1";
          reasonsTitleRef.current.style.transform = "translateY(0)";
        }
      }, 1000);

      setTimeout(() => {
        if (reasonsRef.current) {
          const reasons = reasonsRef.current.querySelectorAll(".reason-card");
          reasons.forEach((reason, index) => {
            setTimeout(() => {
              reason.style.opacity = "1";
              reason.style.transform = "translateX(0)";
            }, index * 150);
          });
        }
      }, 1300);

      setTimeout(() => {
        if (statsRef.current) {
          const stats = statsRef.current.querySelectorAll(".stat-item");
          stats.forEach((stat, index) => {
            setTimeout(() => {
              stat.style.opacity = "1";
              stat.style.transform = "scale(1)";
            }, index * 150);
          });
        }
      }, 2000);
    };

    animateSection();
  }, []);

  const features = [
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Curated Deal Flow",
      description:
        "Access to pre-vetted startups from tier 2-3 colleges with high potential",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Early Stage Opportunities",
      description:
        "Get in at the ground floor with favorable valuations and tax benefits",
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Underserved Markets",
      description:
        "Invest in startups solving real problems in emerging markets",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Impact Investing",
      description: "Create social impact while generating returns",
    },
  ];

  const reasons = [
    { number: "1", text: "Untapped talent pool with low competition" },
    { number: "2", text: "Cost-effective operations and lean teams" },
    { number: "3", text: "Solving real problems in underserved markets" },
    { number: "4", text: "Government incentives for tier 2-3 investments" },
    { number: "5", text: "High potential for impact and returns" },
    { number: "6", text: "Access to diverse sectors and geographies" },
  ];

  const stats = [
    { value: "200+", label: "Active Startups" },
    { value: "₹5Cr+", label: "Funding Facilitated" },
    { value: "150+", label: "Mentor Network" },
    { value: "50+", label: "Partner Colleges" },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Why Join Network */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Why Join TheSparknova Network
          </h2>
          <p className="text-gray-600 text-lg">
            Access opportunities that others are missing
          </p>
        </div>

        <div
          ref={featuresRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="w-16 h-16 bg-[#E8F4F6] rounded-full flex items-center justify-center mx-auto mb-4 text-[#32808D]">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Why Invest in Tier 2-3 */}
        <div
          ref={reasonsTitleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Why Invest in Tier 2-3 Startups?
          </h2>
        </div>

        <div
          ref={reasonsRef}
          className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-16"
        >
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card bg-gray-50 rounded-xl p-6 flex items-center gap-4 transition-all duration-700"
              style={{ opacity: 0, transform: "translateX(-30px)" }}
            >
              <div className="w-10 h-10 bg-[#32808D] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {reason.number}
              </div>
              <p className="text-gray-700">{reason.text}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center transition-all duration-700"
              style={{ opacity: 0, transform: "scale(0.8)" }}
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

export default WhyJoinSection;
