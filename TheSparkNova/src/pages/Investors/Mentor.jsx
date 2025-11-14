import { useEffect, useRef } from "react";
import { FaAward, FaCalendarAlt, FaGlobe } from "react-icons/fa";

const Mentor = () => {
  const sectionRef = useRef(null);
  const benefitsRef = useRef(null);
  const expertiseRef = useRef(null);

  useEffect(() => {
    const animateSection = () => {
      if (sectionRef.current) {
        sectionRef.current.style.opacity = "1";
        sectionRef.current.style.transform = "translateY(0)";
      }

      setTimeout(() => {
        if (benefitsRef.current) {
          const items = benefitsRef.current.querySelectorAll(".benefit-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateX(0)";
            }, index * 150);
          });
        }
      }, 300);

      setTimeout(() => {
        if (expertiseRef.current) {
          const items =
            expertiseRef.current.querySelectorAll(".expertise-item");
          items.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateX(0)";
            }, index * 100);
          });
        }
      }, 800);
    };

    animateSection();
  }, []);

  const benefits = [
    {
      icon: <FaCalendarAlt className="w-5 h-5" />,
      title: "Flexible Commitment",
      description: "Choose your availability and engagement level",
    },
    {
      icon: <FaAward className="w-5 h-5" />,
      title: "Meaningful Impact",
      description:
        "Help students from tier 2-3 colleges build successful ventures",
    },
    {
      icon: <FaGlobe className="w-5 h-5" />,
      title: "Matched to Your Expertise",
      description: "We connect you with startups in your domain",
    },
  ];

  const expertiseAreas = [
    "Product Development",
    "Go-to-Market Strategy",
    "Fundraising",
    "Operations & Finance",
    "Technology & Engineering",
    "Sales & Marketing",
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Become a Mentor */}
          <div
            ref={sectionRef}
            className="transition-all duration-700"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Become a Mentor
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Share your expertise and shape the next generation of
              entrepreneurs. Our mentors dedicate 2-4 hours per month to guide
              student founders.
            </p>

            <div ref={benefitsRef} className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item transition-all duration-700"
                  style={{ opacity: 0, transform: "translateX(-30px)" }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="text-[#32808D] mt-1">{benefit.icon}</div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm ml-8">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Areas of Expertise */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h3>
            <div ref={expertiseRef} className="space-y-3">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="expertise-item flex items-center gap-3 transition-all duration-700"
                  style={{ opacity: 0, transform: "translateX(30px)" }}
                >
                  <div className="w-2 h-2 bg-[#32808D] rounded-full"></div>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
