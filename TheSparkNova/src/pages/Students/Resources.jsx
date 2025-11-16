import { useEffect, useRef } from "react";
import { FaBook, FaRegListAlt, FaChalkboardTeacher } from "react-icons/fa";

const Resources = () => {
  const titleRef = useRef(null);
  const resourcesRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      setTimeout(() => {
        if (resourcesRef.current) {
          const categories =
            resourcesRef.current.querySelectorAll(".resource-category");
          categories.forEach((category, index) => {
            setTimeout(() => {
              category.style.opacity = "1";
              category.style.transform = "translateY(0) scale(1)";
            }, index * 200);
          });
        }
      }, 300);
    };
    animateSection();
  }, []);

  const resources = [
    {
      category: "Templates",
      icon: <FaRegListAlt className="w-7 h-7 text-[#00b3b3]" />,
      accent: "border-l-8 border-cyan-200",
      items: [
        "Business Plan Template",
        "Pitch Deck Template",
        "Financial Model",
      ],
    },
    {
      category: "Guides",
      icon: <FaBook className="w-7 h-7 text-[#32808D]" />,
      accent: "border-l-8 border-blue-200",
      items: [
        "Idea Validation Playbook",
        "Fundraising Essentials",
        "Marketing 101",
      ],
    },
    {
      category: "Courses",
      icon: <FaChalkboardTeacher className="w-7 h-7 text-[#0d2b2e]" />,
      accent: "border-l-8 border-teal-200",
      items: [
        "Lean Startup Methodology",
        "Customer Discovery",
        "MVP Development",
      ],
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4 overflow-hidden">
      <div className="absolute -top-10 left-28 w-36 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-15 rounded-2xl blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-bold text-[#0d2b2e] mb-3">
            Free Resources for Students
          </h2>
          <p className="text-gray-600 text-lg">
            Download templates, guides, and learning materials
          </p>
        </div>
        {/* Resources Grid */}
        <div
          ref={resourcesRef}
          className="grid md:grid-cols-3 gap-11 max-w-5xl mx-auto mb-8"
        >
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`resource-category bg-white/95 backdrop-blur rounded-2xl shadow-lg px-9 py-10 transition-all duration-700 flex flex-col items-start hover:scale-105 hover:shadow-2xl group ${resource.accent}`}
              style={{ opacity: 0, transform: "translateY(30px) scale(0.95)" }}
            >
              <div className="flex gap-3 items-center mb-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-cyan-100 to-blue-200 shadow-lg">
                  {resource.icon}
                </span>
                <h3 className="text-xl font-bold text-[#0d2b2e] text-left ml-2">
                  {resource.category}
                </h3>
              </div>
              <ul className="flex flex-col gap-4 w-full mt-2">
                {resource.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-3 py-2 text-[#32808D] font-semibold rounded-lg hover:bg-cyan-50 transition-colors text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00b3b3]" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Explore Button */}
        <div className="text-center">
          <button className="bg-[#32808D] text-white px-9 py-3 rounded-xl font-semibold text-lg shadow hover:bg-[#00b3b3] transition-colors">
            Explore All Resources
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-10 w-44 h-26 bg-gradient-to-br from-teal-100 to-cyan-100 opacity-12 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default Resources;
