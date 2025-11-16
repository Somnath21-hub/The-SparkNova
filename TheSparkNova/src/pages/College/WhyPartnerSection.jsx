import { useEffect, useRef } from "react";
import { FaAward, FaChartLine, FaRocket, FaStar } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";

const WhyPartnerSection = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll(".feature-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0) scale(1)";
            }, index * 150);
          });
        }
      }, 300);

      setTimeout(() => {
        if (benefitsRef.current) {
          const items = benefitsRef.current.querySelectorAll(".benefit-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateX(0)";
            }, index * 80);
          });
        }
      }, 800);
    };

    animateSection();
  }, []);

  const features = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "World-Class Infrastructure",
      description:
        "Establish a premier incubation center with minimal investment",
      accent: "border-l-8 border-cyan-300",
      shadow: "shadow-cyan-100",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Funding Network Access",
      description: "Connect to tier-1 VC, investors and financial ecosystem",
      accent: "border-l-8 border-blue-300",
      shadow: "shadow-blue-100",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Ready-to-Deploy Programs",
      description: "Pre-built curriculum, events, and mentorship programs",
      accent: "border-l-8 border-teal-400",
      shadow: "shadow-teal-100",
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Enhanced Reputation",
      description: "Boost institutional ranking and create success stories",
      accent: "border-l-8 border-blue-300",
      shadow: "shadow-blue-100",
    },
  ];

  const benefits = [
    "Government compliance and recognition support",
    "Enhance institutional ranking and reputation",
    "Access to 150+ industry mentors",
    "Regular skill development events",
    "Create successful student entrepreneur stories",
    "Ongoing operational support and mentorship",
    "Technology platform and SaaS tools",
    "Corporate partnership opportunities",
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-16 px-4 overflow-hidden">
      <div className="absolute -top-10 left-14 w-44 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-15 rounded-2xl blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-[#0d2b2e] mb-4">
            Why Partner with TheSparknova
          </h2>
          <p className="text-gray-600 text-lg">
            Build a thriving entrepreneurial ecosystem at your institution
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card relative bg-white/90 backdrop-blur-2xl px-8 pt-10 pb-7 rounded-2xl ${feature.accent} transition-all duration-700 shadow-xl hover:scale-105 hover:shadow-2xl group flex flex-col items-start`}
              style={{ opacity: 0, transform: "translateY(30px) scale(0.96)" }}
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-200 shadow-lg mb-3">
                {feature.icon}
              </span>
              <h3 className="text-lg font-bold text-[#0d2b2e] mb-1 mt-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mb-12">
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-200 via-teal-300 to-blue-200 rounded-full opacity-40" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#0d2b2e] mb-8 text-center">
            Additional Benefits
          </h3>
          <div
            ref={benefitsRef}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item flex items-start gap-3 p-3 bg-white/85 rounded-xl shadow transition-all duration-700"
                style={{ opacity: 0, transform: "translateX(-30px)" }}
              >
                <IoMdCheckmarkCircle className="w-5 h-5 text-[#00b3b3] mt-1 flex-shrink-0" />
                <span className="text-[#0d2b2e] font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-44 h-24 bg-gradient-to-br from-blue-100 to-teal-100 opacity-12 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default WhyPartnerSection;
