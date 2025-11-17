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
        "Access seed funding, investor networks, and government grants with structured guidance.",
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
        "Connect with mentors, corporates, founders, and experts from across India.",
      features: ["150+ mentors", "Investor database", "Corporate partnerships"],
    },
    {
      icon: <FaLightbulb className="w-7 h-7" />,
      title: "Skill Development Events",
      description:
        "Launch ideathons, bootcamps, and startup workshops designed for young entrepreneurs.",
      features: ["SparkTank ideathon", "Founder bootcamps", "Domain workshops"],
    },
    {
      icon: <FaBuilding className="w-7 h-7" />,
      title: "Incubation Infrastructure",
      description:
        "End-to-end support to build and operate modern incubation centers.",
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
    <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d2b2e] tracking-tight mb-4">
            Comprehensive Support for Your Success
          </h2>
          <p className="text-gray-700 text-[18px] font-semibold tracking-wide">
            Our ecosystem is built on four powerful pillars
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {supports.map((support, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-2xl p-7 shadow-sm border border-cyan-100
                         hover:shadow-2xl hover:border-[#00b3b3] hover:-translate-y-2 
                         transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl 
                              flex items-center justify-center mb-5 text-[#00b3b3] 
                              group-hover:scale-110 transition-transform">
                {support.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0d2b2e] mb-3 tracking-tight group-hover:text-[#00b3b3] transition-colors">
                {support.title}
              </h3>

              {/* Improved Description Font */}
              <p className="text-gray-700 text-[15.5px] leading-relaxed mb-5 font-medium tracking-wide">
                {support.description}
              </p>

              <ul className="space-y-2">
                {support.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-[15px] leading-loose flex items-start gap-2 font-medium"
                  >
                    <span className="text-[#00b3b3] mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center bg-white rounded-xl p-6 shadow-sm border border-cyan-100
                         hover:shadow-xl transition-all"
            >
              <div className="text-3xl font-extrabold text-[#00b3b3] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-gray-700 font-semibold text-[14.5px] tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Support;
