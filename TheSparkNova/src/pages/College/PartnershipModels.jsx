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
            }, index * 200);
          });
        }
      }, 300);
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
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Partnership Models
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that fits your college's needs
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card bg-white rounded-2xl p-8 shadow-lg transition-all duration-700 ${
                plan.popular ? "border-2 border-[#32808D] relative" : ""
              }`}
              style={{ opacity: 0, transform: "scale(0.9)" }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#32808D] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="text-3xl font-bold text-[#32808D] mb-6">
                {plan.price}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <IoMdCheckmarkCircle className="w-5 h-5 text-[#32808D] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#32808D] text-white py-3 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors">
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PartnershipModels;
