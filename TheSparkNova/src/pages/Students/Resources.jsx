import { useEffect, useRef } from "react";

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
              category.style.transform = "translateY(0)";
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
      items: [
        "Business Plan Template",
        "Pitch Deck Template",
        "Financial Model",
      ],
    },
    {
      category: "Guides",
      items: [
        "Idea Validation Playbook",
        "Fundraising Essentials",
        "Marketing 101",
      ],
    },
    {
      category: "Courses",
      items: [
        "Lean Startup Methodology",
        "Customer Discovery",
        "MVP Development",
      ],
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
            Free Resources for Students
          </h2>
          <p className="text-gray-600 text-lg">
            Download templates, guides, and learning materials
          </p>
        </div>

        {/* Resources Grid */}
        <div
          ref={resourcesRef}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8"
        >
          {resources.map((resource, index) => (
            <div
              key={index}
              className="resource-category transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {resource.category}
              </h3>
              <ul className="space-y-3">
                {resource.items.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-[#32808D] hover:underline text-sm"
                    >
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
          <button className="border-2 border-[#32808D] text-[#32808D] px-8 py-3 rounded-lg font-semibold hover:bg-[#32808D] hover:text-white transition-colors">
            Explore All Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
