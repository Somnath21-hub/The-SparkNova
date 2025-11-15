import React, { useEffect, useRef } from "react";
import { FaFileAlt, FaDownload, FaBook, FaLayerGroup } from "react-icons/fa";

const KnowledgeHub = () => {
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
          const cards = cardsRef.current.querySelectorAll(".knowledge-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 200);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  const resources = [
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Startup Guides",
      items: [
        { name: "Idea to MVP Playbook", type: "PDF" },
        { name: "Fundraising Essentials", type: "PDF" },
        { name: "Business Model Canvas Template", type: "Template" },
      ],
    },
    {
      icon: <FaLayerGroup className="w-8 h-8" />,
      title: "Templates",
      items: [
        { name: "Pitch Deck Template", type: "PPT" },
        { name: "Financial Model", type: "Excel" },
        { name: "One-Pager Template", type: "DOC" },
      ],
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Case Studies",
      items: [
        { name: "From College to 1Cr ARR", type: "PDF" },
        { name: "Tier-3 College Success Stories", type: "PDF" },
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
            Knowledge Hub
          </h2>
          <p className="text-gray-600 text-lg">
            Guides, templates, and resources for entrepreneurs
          </p>
        </div>

        {/* Knowledge Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="knowledge-card bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="w-14 h-14 bg-[#E8F4F6] rounded-lg flex items-center justify-center mb-6 text-[#32808D]">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {resource.title}
              </h3>
              <div className="space-y-3">
                {resource.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FaDownload className="w-4 h-4 text-[#32808D] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
