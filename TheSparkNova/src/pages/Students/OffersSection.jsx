import { useEffect, useRef } from "react";
import {
  FaTrophy,
  FaBook,
  FaUsers,
  FaChartLine,
  FaRocket,
  FaHandshake,
} from "react-icons/fa";

const OffersSection = () => {
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
          const cards = cardsRef.current.querySelectorAll(".offer-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 150);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  const offers = [
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "Free Competition Access",
      description:
        "Participate in ideathons and innovation challenges with prizes",
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Skill Development",
      description: "Workshops and bootcamps on product, marketing, and finance",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Get guidance from successful founders and industry experts",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Funding Connections",
      description: "Pitch to investors and access funding opportunities",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Incubation Support",
      description: "Co-working space and resources at partner colleges",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Peer Community",
      description: "Connect with fellow student entrepreneurs across India",
    },
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
            What We Offer Students
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive support for your entrepreneurial journey
          </p>
        </div>

        {/* Offers Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className="offer-card bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="w-14 h-14 bg-[#E8F4F6] rounded-lg flex items-center justify-center mb-4 text-[#32808D]">
                {offer.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
