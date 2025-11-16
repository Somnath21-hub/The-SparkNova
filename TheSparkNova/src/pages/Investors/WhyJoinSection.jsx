import React, { useEffect, useRef } from "react";
import {
  FaBullseye,
  FaChartLine,
  FaMapMarkerAlt,
  FaAward,
  FaCheckCircle,
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
          const reasons = reasonsRef.current.querySelectorAll(
            ".reason-timeline-step"
          );
          reasons.forEach((reason, index) => {
            setTimeout(() => {
              reason.style.opacity = "1";
              reason.style.transform = "translateY(0)";
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
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Early Stage Opportunities",
      description:
        "Get in at the ground floor with favorable valuations and tax benefits",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Underserved Markets",
      description:
        "Invest in startups solving real problems in emerging markets",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Impact Investing",
      description: "Create social impact while generating returns",
      gradient: "from-cyan-500 to-blue-600",
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
    {
      value: "200+",
      label: "Active Startups",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      value: "₹5Cr+",
      label: "Funding Facilitated",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      value: "150+",
      label: "Mentor Network",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      value: "50+",
      label: "Partner Colleges",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Why Join Network */}
        <div
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#152F38] mb-4">
            Why Join TheSparknova Network
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Access opportunities that others are missing
          </p>
        </div>

        {/* Features Cards */}
        <div
          ref={featuresRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card text-center transition-all duration-700 group"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-[#32808D] hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] h-full">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#152F38] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Invest in Tier 2-3 */}
        <div
          ref={reasonsTitleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#152F38] mb-4">
            Why Invest in Tier 2-3 Startups?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the untapped potential in emerging markets
          </p>
        </div>

        {/* Reasons Timeline - Center, Alternating */}
        <div
          ref={reasonsRef}
          className="relative py-10 mb-16 max-w-4xl mx-auto"
        >
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-200 via-teal-200 to-blue-200 opacity-40 -translate-x-1/2 z-0" />

          <div className="space-y-12 md:space-y-16">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="reason-timeline-step relative transition-all duration-700"
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      idx % 2 === 0
                        ? "md:text-right md:pr-8"
                        : "md:text-left md:pl-8"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#32808D] hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
                        idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 ${
                          idx % 2 === 0
                            ? "md:flex-row-reverse md:justify-start"
                            : "md:flex-row"
                        }`}
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-[#32808D] to-[#45a1ad] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0">
                          {reason.number}
                        </div>
                        <p className="text-gray-700 text-base md:text-lg font-medium">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Node - Desktop Only */}
                  <div className="hidden md:flex items-center justify-center w-2/12">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#32808D] to-[#45a1ad] rounded-full flex items-center justify-center text-white border-4 border-white shadow-xl z-10 relative">
                        <FaCheckCircle className="w-5 h-5" />
                      </div>

                      <div
                        className={`absolute top-1/2 ${
                          idx % 2 === 0 ? "right-full" : "left-full"
                        } w-16 h-0.5 bg-gradient-to-r ${
                          idx % 2 === 0
                            ? "from-[#32808D] to-transparent"
                            : "from-transparent to-[#32808D]"
                        } -translate-y-1/2`}
                      />
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12" />
                </div>

                {/* Mobile Timeline Node */}
                <div className="md:hidden flex items-center justify-center mt-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#32808D] to-[#45a1ad] rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-transparent rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#152F38] mb-4">
              Our Impact
            </h3>
            <p className="text-gray-600 text-lg">
              Building India's largest college startup ecosystem
            </p>
          </div>
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item text-center transition-all duration-700 group"
                style={{ opacity: 0, transform: "scale(0.8)" }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] border-2 border-transparent hover:border-[#32808D]">
                  <div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#152F38] font-semibold text-sm md:text-base">
                    {stat.label}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <FaCheckCircle className="w-6 h-6 text-[#32808D]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating CTA */}
        <div className="text-center mt-6">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#32808D] to-[#45a1ad] text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer font-bold text-lg">
            <FaCheckCircle className="w-6 h-6" />
            Join Our Network Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinSection;
