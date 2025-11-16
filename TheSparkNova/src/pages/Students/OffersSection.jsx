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
              card.style.transform = "translateY(0) rotate(0deg) scale(1)";
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
      bg: "from-yellow-200 to-pink-200",
      rotate: "-3deg",
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Skill Development",
      description: "Workshops and bootcamps on product, marketing, and finance",
      bg: "from-cyan-100 to-teal-200",
      rotate: "2deg",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Get guidance from successful founders and industry experts",
      bg: "from-blue-100 to-blue-300",
      rotate: "-1deg",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Funding Connections",
      description: "Pitch to investors and access funding opportunities",
      bg: "from-purple-100 to-cyan-200",
      rotate: "3deg",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Incubation Support",
      description: "Co-working space and resources at partner colleges",
      bg: "from-pink-100 to-teal-100",
      rotate: "-2deg",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Peer Community",
      description: "Connect with fellow student entrepreneurs across India",
      bg: "from-green-100 to-cyan-200",
      rotate: "1deg",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
      {/* Subtle accent blobs */}
      <div className="absolute -top-10 left-10 w-52 h-32 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-20 rounded-2xl blur-2xl" />
      <div className="absolute bottom-0 right-10 w-40 h-24 bg-gradient-to-br from-teal-100 to-blue-100 opacity-20 rounded-2xl blur-2xl" />

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-[#0d2b2e] mb-3">
            What We Offer Students
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive support for your entrepreneurial journey
          </p>
        </div>
        {/* Offers Mosaic Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9"
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`offer-card relative bg-white/90 backdrop-blur-2xl rounded-3xl px-7 py-9 shadow-lg border-b-4 border-cyan-100 hover:shadow-xl hover:scale-105 transition-all duration-700 flex flex-col items-center`}
              style={{
                opacity: 0,
                transform: `translateY(30px) rotate(${offer.rotate}) scale(0.96)`,
              }}
            >
              {/* Gradient icon bubble */}
              <div
                className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${offer.bg} flex items-center justify-center shadow-lg`}
              >
                {offer.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0d2b2e] mb-2 text-center">
                {offer.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed text-center">
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
