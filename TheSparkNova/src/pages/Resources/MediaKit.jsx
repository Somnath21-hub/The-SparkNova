import React, { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

const MediaKit = () => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (contentRef.current) {
          const items = contentRef.current.querySelectorAll(".media-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateX(0)";
            }, index * 150);
          });
        }
      }, 300);
    };

    animateSection();
  }, []);

  const downloads = [
    { name: "Brand Logos (PNG, SVG)", icon: <FaDownload /> },
    { name: "Brand Guidelines PDF", icon: <FaDownload /> },
    { name: "Press Release Kit", icon: <FaDownload /> },
    { name: "Company Statistics", icon: <FaDownload /> },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Media Kit</h2>
          <p className="text-gray-600 text-lg">
            Brand assets and press materials
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Downloads */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Downloads</h3>
            <div className="space-y-4">
              {downloads.map((item, index) => (
                <div
                  key={index}
                  className="media-item flex items-center gap-3 text-[#32808D] hover:underline cursor-pointer transition-all duration-700"
                  style={{ opacity: 0, transform: "translateX(-30px)" }}
                >
                  <FaDownload className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Press Contact */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Press Contact
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">For media inquiries:</p>
              <a
                href="mailto:press@thesparknova.com"
                className="text-[#32808D] font-semibold hover:underline block"
              >
                press@thesparknova.com
              </a>
              <p className="text-gray-500 text-sm">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;
