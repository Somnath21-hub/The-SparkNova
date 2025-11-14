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
              card.style.transform = "translateY(0)";
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
            }, index * 100);
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
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Funding Network Access",
      description: "Connect to tier-1 VC, investors and financial ecosystem",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Ready-to-Deploy Programs",
      description: "Pre-built curriculum, events, and mentorship programs",
    },
    {
      icon: <FaStar className="w-8 h-8" />,
      title: "Enhanced Reputation",
      description: "Boost institutional ranking and create success stories",
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
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Why Partner with TheSparknova
          </h2>
          <p className="text-gray-600 text-lg">
            Build a thriving entrepreneurial ecosystem at your institution
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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

        {/* Additional Benefits */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Benefits
          </h3>
          <div
            ref={benefitsRef}
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-item flex items-start gap-3 transition-all duration-700"
                style={{ opacity: 0, transform: "translateX(-30px)" }}
              >
                <IoMdCheckmarkCircle className="w-5 h-5 text-[#32808D] mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerSection;
