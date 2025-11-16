import React, { useEffect, useRef } from "react";
import { FaChartLine, FaUsers, FaLightbulb, FaBuilding } from "react-icons/fa";
import gsap from "gsap";

const Support = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }

    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.15,
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.5,
        }
      );
    }
  }, []);

  const supports = [
    {
      icon: <FaChartLine className="w-7 h-7" />,
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
      icon: <FaUsers className="w-7 h-7" />,
      title: "Network Access",
      description:
        "Join a thriving community of founders, industry mentors, experts, and investors across India.",
      features: ["150+ mentors", "Investor database", "Corporate partnerships"],
    },
    {
      icon: <FaLightbulb className="w-7 h-7" />,
      title: "Skill Development Events",
      description:
        "Regular ideathons, workshops, bootcamps, and masterclasses to build entrepreneurial capabilities.",
      features: ["SparkTank ideathon", "Founder bootcamps", "Domain workshops"],
    },
    {
      icon: <FaBuilding className="w-7 h-7" />,
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
    <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#0d2b2e] mb-3 tracking-tight">
            Comprehensive Support for Your Success
          </h2>
          <p className="text-gray-600 text-lg">
            Four pillars of our ecosystem support
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-16">
          {supports.map((support, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl p-7 border-t-4 border-cyan-100 hover:border-[#00b3b3] hover:shadow-lg hover:-translate-y-2 transition-transform duration-200 flex flex-col group"
            >
              <div className="w-14 h-14 bg-gradient-to-tr from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center mb-4 text-[#00b3b3] group-hover:scale-105 transition-transform">
                {support.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0d2b2e] mb-3 tracking-tight group-hover:text-[#00b3b3] transition-colors">
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
                    <span className="text-[#00b3b3] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center bg-white rounded-xl p-4 shadow border border-cyan-100"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#00b3b3] mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
