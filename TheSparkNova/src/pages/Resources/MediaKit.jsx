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
            }, index * 110);
          });
        }
      }, 200);
    };
    animateSection();
  }, []);

  const downloads = [
    { name: "Brand Logos (PNG, SVG)" },
    { name: "Brand Guidelines PDF" },
    { name: "Press Release Kit" },
    { name: "Company Statistics" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 px-4 overflow-hidden">
      {/* Accent blob */}
      <div className="absolute -top-12 right-0 w-36 h-36 bg-gradient-to-br from-cyan-100 to-blue-100 opacity-18 rounded-full blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-center mb-14 transition-all duration-700 max-w-5xl mx-auto"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h2 className="text-4xl font-semibold text-[#0d2b2e] mb-4 tracking-wide">
            Media Kit
          </h2>
          <p className="text-gray-600 text-lg font-medium">
            Brand assets and press materials
          </p>
        </div>
        {/* Content Grid */}
        <div
          ref={contentRef}
          className="grid md:grid-cols-2 gap-13 max-w-5xl mx-auto items-start"
        >
          {/* Downloads */}
          <div className="flex flex-col gap-7 justify-center">
            <h3 className="text-2xl font-semibold text-[#0d2b2e] mb-7 tracking-wide">
              Downloads
            </h3>
            <div className="flex flex-col gap-4">
              {downloads.map((item, index) => (
                <div
                  key={index}
                  className="media-item flex items-center bg-white/95 backdrop-blur rounded-2xl shadow-sm border-l-4 border-cyan-200 px-4 py-4 hover:border-[#00b3b3] group cursor-pointer transition-all duration-600"
                  style={{ opacity: 0, transform: "translateX(-19px)" }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-50 to-teal-100 shadow group-hover:scale-105 transition-transform">
                    <FaDownload className="w-6 h-6 text-[#00b3b3]" />
                  </div>
                  <span className="ml-7 text-[#0d2b2e] font-semibold text-base tracking-wide">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Press Contact */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-2xl font-semibold text-[#0d2b2e] mb-7 tracking-wide">
              Press Contact
            </h3>
            <div className="bg-white/95 backdrop-blur rounded-2xl px-8 py-8 shadow-sm border-l-4 border-teal-200 flex flex-col gap-3">
              <p className="text-gray-600 font-medium leading-relaxed">
                For media inquiries:
              </p>
              <a
                href="mailto:press@thesparknova.com"
                className="text-[#00b3b3] font-bold text-base underline underline-offset-4 hover:text-[#32808D] transition-colors break-all tracking-wide"
              >
                press@thesparknova.com
              </a>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Lower accent blob */}
      <div className="absolute bottom-0 left-0 w-28 h-16 bg-gradient-to-br from-cyan-100 to-teal-100 opacity-13 rounded-2xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default MediaKit;
