import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

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
              step.style.transform = "translateY(0) scale(1)";
            }, index * 180);
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
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      number: "2",
      title: "Needs Assessment",
      description: "Evaluate current infrastructure and gaps",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "3",
      title: "Proposal & Agreement",
      description: "Customized solution and partnership terms",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      number: "4",
      title: "Onboarding & Setup",
      description: "Infrastructure deployment and team training",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      number: "5",
      title: "Launch",
      description: "Official launch with inaugural event",
      gradient: "from-blue-500 to-teal-600",
    },
    {
      number: "6",
      title: "Ongoing Support",
      description: "Continuous mentorship and ecosystem support",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-20 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partnership Process
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Simple and transparent journey to building your incubation center
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#32808D] via-[#45a1ad] to-[#32808D] opacity-30 -translate-x-1/2" />

          <div ref={stepsRef} className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="process-step relative transition-all duration-700"
                style={{
                  opacity: 0,
                  transform: "translateY(30px) scale(0.96)",
                }}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card - Takes half width on desktop */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      idx % 2 === 0
                        ? "lg:text-right lg:pr-8"
                        : "lg:text-left lg:pl-8"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-8 shadow-xl border-t-4 border-[#32808D] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                        idx % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                      }`}
                    >
                      <div
                        className={`flex items-center gap-4 mb-4 ${
                          idx % 2 === 0
                            ? "lg:flex-row-reverse lg:justify-start"
                            : "lg:flex-row"
                        }`}
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                        >
                          {step.number}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {/* Center Node - Desktop Only */}
                  <div className="hidden lg:flex items-center justify-center w-2/12">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#32808D] to-[#45a1ad] rounded-full flex items-center justify-center text-white border-4 border-white shadow-xl z-10 relative">
                        <FaCheckCircle className="w-6 h-6" />
                      </div>
                      {/* Connection line to correct card side */}
                      <div
                        className={`absolute top-1/2 ${
                          idx % 2 === 0 ? "right-full" : "left-full"
                        } w-16 h-0.5 bg-gradient-to-r ${
                          idx % 2 === 0
                            ? "from-[#32808D] to-transparent"
                            : "from-transparent to-[#32808D]"
                        } -translate-y-1/2`}
                      />
                    </div>
                  </div>
                  +
                  <div className="hidden lg:block w-5/12" />
                </div>

                {/* Mobile Timeline Node */}
                <div className="lg:hidden flex items-center justify-center mt-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#32808D] to-[#45a1ad] rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Success Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#32808D] to-[#45a1ad] text-white px-8 py-4 rounded-full shadow-xl">
            <FaCheckCircle className="w-6 h-6" />
            <span className="font-bold text-lg">Partnership Established</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipProcess;
