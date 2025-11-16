import { useEffect, useRef } from "react";

const SupportStages = () => {
  const titleRef = useRef(null);
  const stagesRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      setTimeout(() => {
        if (stagesRef.current) {
          const stages = stagesRef.current.querySelectorAll(".stage-card");
          stages.forEach((stage, index) => {
            setTimeout(() => {
              stage.style.opacity = "1";
              stage.style.transform = "translateY(0) scale(1)";
            }, index * 200);
          });
        }
      }, 300);
    };
    animateSection();
  }, []);

  const stages = [
    {
      stage: "Idea Stage",
      accent: "bg-gradient-to-br from-cyan-400 to-teal-300 shadow-lg",
      color: "text-[#00b3b3]",
      items: [
        "Validation workshops",
        "Market research support",
        "Ideation sessions",
        "Problem-solution fit guidance",
      ],
    },
    {
      stage: "MVP Stage",
      accent: "bg-gradient-to-br from-blue-400 to-cyan-300 shadow-lg",
      color: "text-[#32808D]",
      items: [
        "Product development guidance",
        "Technical mentorship",
        "User testing support",
        "MVP launch strategy",
      ],
    },
    {
      stage: "Growth Stage",
      accent: "bg-gradient-to-br from-teal-400 to-blue-300 shadow-lg",
      color: "text-[#00b3b3]",
      items: [
        "Funding support",
        "Go-to-market strategy",
        "Team building guidance",
        "Investor connections",
      ],
    },
    {
      stage: "Scale Stage",
      accent: "bg-gradient-to-br from-cyan-300 to-teal-200 shadow-lg",
      color: "text-[#32808D]",
      items: [
        "Growth partnerships",
        "Advanced funding rounds",
        "Strategic advisory",
        "Exit strategy guidance",
      ],
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-[#0d2b2e] mb-4">
            Support at Every Stage
          </h2>
          <p className="text-gray-600 text-lg">
            Tailored programs for your startup's growth phase
          </p>
        </div>
        {/* Timeline */}
        <div className="relative w-full flex flex-col items-center">
          {/* Line connector */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-100 via-teal-200 to-blue-100 rounded-full z-0"
            style={{ transform: "translateY(-50%)" }}
          />
          {/* Stages */}
          <div
            ref={stagesRef}
            className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start z-10"
          >
            {stages.map((stage, index) => (
              <div
                key={index}
                className="stage-card flex flex-col items-center bg-white/90 backdrop-blur rounded-2xl px-6 pt-8 pb-7 shadow-xl transition-all duration-700 border-t-8 border-cyan-200 hover:border-[#00b3b3] mx-auto"
                style={{
                  opacity: 0,
                  transform: "translateY(30px) scale(0.96)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Timeline dot/accent */}
                <div
                  className={`w-14 h-14 -mt-12 mb-4 rounded-full flex items-center justify-center ${stage.accent} border-4 border-white`}
                >
                  {/* Step number */}
                  <span className="text-white font-extrabold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3
                  className={`text-lg font-bold mb-3 text-center ${stage.color}`}
                >
                  {stage.stage}
                </h3>
                <ul className="space-y-3">
                  {stage.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 text-sm flex items-start gap-2"
                    >
                      <span className={`${stage.color} mt-1 font-bold`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportStages;
