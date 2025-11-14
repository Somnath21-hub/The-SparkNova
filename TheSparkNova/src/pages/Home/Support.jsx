import React, { useEffect, useRef } from "react";
import { FaChartLine, FaUsers, FaLightbulb, FaBuilding } from "react-icons/fa";

const Support = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll(".support-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 150);
          });
        }
      }, 300);

      setTimeout(() => {
        if (statsRef.current) {
          const stats = statsRef.current.querySelectorAll(".stat-item");
          stats.forEach((stat, index) => {
            setTimeout(() => {
              stat.style.opacity = "1";
              stat.style.transform = "translateY(0)";
            }, index * 100);
          });
        }
      }, 800);
    };

    animateSection();
  }, []);

  const supports = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Funding Support",
      description:
        "Connect with angel investors, VCs, and government schemes. Facilitate seed funding and grant applications.",
      features: [
        "Investor network access",
        "Pitch deck development",
        "Grant application assistance",
      ],
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Network Access",
      description:
        "Join a thriving community of founders, industry mentors, experts, and investors across India.",
      features: ["150+ mentors", "Investor database", "Corporate partnerships"],
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Skill Development Events",
      description:
        "Regular ideathons, workshops, bootcamps, and masterclasses to build entrepreneurial capabilities.",
      features: ["SparkTank ideathon", "Founder bootcamps", "Domain workshops"],
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Incubation Infrastructure",
      description:
        "Complete setup support for incubation centers - from framework design to operational excellence.",
      features: [
        "Infrastructure design",
        "Governance models",
        "Technology platform",
      ],
    },
  ];

  const stats = [
    { value: "50+", label: "Partner Colleges" },
    { value: "200+", label: "Startups Incubated" },
    { value: "₹5Cr+", label: "Funding Facilitated" },
    { value: "100+", label: "Events Conducted" },
    { value: "1000+", label: "Student Entrepreneurs" },
    { value: "150+", label: "Mentor Network" },
  ];

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
            Comprehensive Support for Your Success
          </h2>
          <p className="text-gray-600 text-lg">
            Four pillars of our ecosystem support
          </p>
        </div>

        {/* Support Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supports.map((support, index) => (
            <div
              key={index}
              className="support-card bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="w-14 h-14 bg-[#E8F4F6] rounded-lg flex items-center justify-center mb-4 text-[#32808D]">
                {support.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {support.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {support.description}
              </p>
              <ul className="space-y-2">
                {support.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-sm flex items-start gap-2"
                  >
                    <span className="text-[#32808D] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#32808D] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
