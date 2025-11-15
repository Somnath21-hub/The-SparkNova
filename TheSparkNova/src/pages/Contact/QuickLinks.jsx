import { useEffect, useRef } from "react";

const QuickLinks = () => {
  const linksRef = useRef(null);

  useEffect(() => {
    if (linksRef.current) {
      const items = linksRef.current.querySelectorAll(".quick-link-item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        }, index * 150);
      });
    }
  }, []);

  const quickLinks = [
    {
      label: "Partnership Inquiries:",
      email: "partnerships@thesparknova.com",
    },
    {
      label: "Student Support:",
      email: "students@thesparknova.com",
    },
    {
      label: "Press & Media:",
      email: "press@thesparknova.com",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Quick Links
        </h3>

        <div ref={linksRef} className="space-y-4">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="quick-link-item flex flex-col sm:flex-row sm:items-center gap-2 transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(20px)" }}
            >
              <span className="text-gray-700 font-medium">{link.label}</span>
              <a
                href={`mailto:${link.email}`}
                className="text-[#32808D] font-semibold hover:underline"
              >
                {link.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
