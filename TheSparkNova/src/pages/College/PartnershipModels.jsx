import { useEffect, useRef } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const PartnershipModels = () => {
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
          const cards = cardsRef.current.querySelectorAll(".pricing-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
            }, index * 180);
          });
        }
      }, 250);
    };
    animateSection();
  }, []);

  const plans = [
    {
      name: "Basic Partnership",
      price: "₹50,000/year",
      features: [
        "Event hosting support",
        "Network access",
        "Basic infrastructure consultation",
        "Quarterly webinars",
        "Resource library access",
      ],
      buttonText: "Get Started",
      accent: "border-l-8 border-cyan-200",
      popular: false,
    },
    {
      name: "Growth Partnership",
      price: "₹2,50,000/year",
      features: [
        "Full incubation center setup",
        "Funding support & connections",
        "Quarterly on-campus events",
        "SaaS platform access",
        "Dedicated support manager",
        "All Basic features",
      ],
      buttonText: "Get Started",
      accent: "border-l-8 border-teal-300",
      popular: true,
    },
    {
      name: "Premium Partnership",
      price: "Custom pricing",
      features: [
        "White-label solutions",
        "Dedicated relationship manager",
        "Unlimited events",
        "Equity co-investment opportunities",
        "Custom technology solutions",
        "All Growth features",
      ],
      buttonText: "Get Started",
      accent: "border-l-8 border-blue-200",
      popular: false,
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4">
      {/* Accent background blob */}
      <div className="absolute -top-8 left-16 w-44 h-28 bg-gradient-to-br from-cyan-100 to-teal-100 opacity-15 rounded-2xl blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-16 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-[#0d2b2e] mb-4">
            Partnership Models
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that fits your college's needs
          </p>
        </div>
        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative flex-1 min-w-[260px] bg-white/90 backdrop-blur-2xl px-9 py-11 rounded-3xl shadow-xl transition-all duration-700 ${
                plan.accent
              } flex flex-col items-center ${
                plan.popular
                  ? "border-2 border-[#32808D] scale-[1.04] z-10 shadow-2xl"
                  : "shadow-lg"
              }`}
              style={{ opacity: 0, transform: "scale(0.94)" }}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#32808D] via-cyan-500 to-[#00b3b3] text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#0d2b2e] mb-2 text-center">
                {plan.name}
              </h3>
              <div className="text-3xl font-bold text-[#32808D] mb-6 text-center">
                {plan.price}
              </div>
              <ul className="space-y-4 mb-8 w-full">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <IoMdCheckmarkCircle className="w-5 h-5 text-[#00b3b3] flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#32808D] text-white py-3 rounded-xl font-semibold hover:bg-[#00b3b3] transition-colors mt-auto text-lg shadow">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-16 bg-gradient-to-br from-blue-100 to-teal-100 opacity-11 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default PartnershipModels;
