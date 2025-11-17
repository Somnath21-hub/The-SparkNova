import React, { useEffect, useRef } from "react";
import { FaFileAlt, FaDownload, FaBook, FaLayerGroup } from "react-icons/fa";

const KnowledgeHub = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
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
  }, []);

  const resources = [
    {
      icon: <FaBook className="w-9 h-9" />,
      title: "Startup Guides",
      bubble: "from-cyan-100 to-teal-200",
      items: [
        { name: "Idea to MVP Playbook", type: "PDF" },
        { name: "Fundraising Essentials", type: "PDF" },
        { name: "Business Model Canvas Template", type: "Template" },
      ],
    },
    {
      icon: <FaLayerGroup className="w-9 h-9" />,
      title: "Templates",
      bubble: "from-blue-500 to-blue-200",
      items: [
        { name: "Pitch Deck Template", type: "PPT" },
        { name: "Financial Model", type: "Excel" },
        { name: "One-Pager Template", type: "DOC" },
      ],
    },
    {
      icon: <FaFileAlt className="w-9 h-9" />,
      title: "Case Studies",
      bubble: "from-teal-500 to-cyan-300",
      items: [
        { name: "From College to 1Cr ARR", type: "PDF" },
        { name: "Tier-3 College Success Stories", type: "PDF" },
      ],
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4 overflow-hidden">
      <div className="absolute -top-16 left-1/2 w-56 h-36 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-20 rounded-3xl blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-extrabold text-[#0d2b2e] mb-4 tracking-tight">
            Knowledge Hub
          </h2>
          <p className="text-gray-600 text-lg">
            Guides, templates, and resources for entrepreneurs
          </p>
        </div>
        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-10">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="knowledge-card group relative glassy-card bg-white/90 backdrop-blur-lg rounded-3xl pt-12 pb-7 px-8 shadow-xl hover:shadow-2xl border-t-8 border-cyan-100 hover:border-[#00b3b3] transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              {/* Main icon bubble */}
              <div
                className={`absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br ${resource.bubble} flex items-center justify-center shadow-lg border-4 border-white/80`}
              >
                {resource.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-[#0d2b2e] mb-9 text-center pt-6">
                {resource.title}
              </h3>
              {/* Resource Items */}
              <div className="space-y-4 pt-1">
                {resource.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#00b3b3]/20 text-[#00b3b3] font-bold shadow group-hover:scale-110 transition-transform duration-300">
                      <FaDownload className="w-4 h-4" />
                    </span>
                    <span className="flex-1 text-gray-700 font-medium">
                      {item.name}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-teal-100 text-[#32808D] text-xs font-bold ml-1 shadow">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-44 h-32 bg-gradient-to-br from-cyan-100 to-teal-100 opacity-20 rounded-3xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default KnowledgeHub;
