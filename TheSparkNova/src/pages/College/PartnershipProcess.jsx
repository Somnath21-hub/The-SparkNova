import { useEffect, useRef } from "react";

const PartnershipProcess = () => {
  const titleRef = useRef(null);
  const stepsRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (stepsRef.current) {
          const steps = stepsRef.current.querySelectorAll(".process-step");
          steps.forEach((step, index) => {
            setTimeout(() => {
              step.style.opacity = "1";
              step.style.transform = "translateX(0)";
            }, index * 150);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  const steps = [
    {
      number: "1",
      title: "Initial Consultation",
      description: "Understand your needs and objectives",
    },
    {
      number: "2",
      title: "Needs Assessment",
      description: "Evaluate current infrastructure and gaps",
    },
    {
      number: "3",
      title: "Proposal & Agreement",
      description: "Customized solution and partnership terms",
    },
    {
      number: "4",
      title: "Onboarding & Setup",
      description: "Infrastructure deployment and team training",
    },
    {
      number: "5",
      title: "Launch",
      description: "Official launch with inaugural event",
    },
    {
      number: "6",
      title: "Ongoing Support",
      description: "Continuous mentorship and ecosystem support",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Partnership Process
          </h2>
          <p className="text-gray-600 text-lg">
            Simple and transparent journey to building your incubation center
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step flex items-start gap-4 transition-all duration-700"
              style={{ opacity: 0, transform: "translateX(-30px)" }}
            >
              <div className="w-12 h-12 bg-[#32808D] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnershipProcess;
