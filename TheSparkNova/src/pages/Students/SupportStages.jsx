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
              stage.style.transform = "translateY(0)";
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
      color: "text-[#32808D]",
      items: [
        "Validation workshops",
        "Market research support",
        "Ideation sessions",
        "Problem-solution fit guidance",
      ],
    },
    {
      stage: "MVP Stage",
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
      color: "text-[#32808D]",
      items: [
        "Funding support",
        "Go-to-market strategy",
        "Team building guidance",
        "Investor connections",
      ],
    },
    {
      stage: "Scale Stage",
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
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Support at Every Stage
          </h2>
          <p className="text-gray-600 text-lg">
            Tailored programs for your startup's growth phase
          </p>
        </div>

        {/* Stages Grid */}
        <div
          ref={stagesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stages.map((stage, index) => (
            <div
              key={index}
              className="stage-card bg-white rounded-xl p-6 transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <h3 className={`text-lg font-bold ${stage.color} mb-4`}>
                {stage.stage}
              </h3>
              <ul className="space-y-2">
                {stage.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 text-sm flex items-start gap-2"
                  >
                    <span className="text-[#32808D] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportStages;
