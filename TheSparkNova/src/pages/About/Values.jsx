import { useEffect, useRef } from "react";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineBulb } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Values = () => {
  const valuesRef = useRef(null);

  useEffect(() => {
    if (valuesRef.current) {
      const cards = valuesRef.current.querySelectorAll(".value-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 150);
      });
    }
  }, []);

  const values = [
    {
      icon: <IoMdPeople className="w-6 h-6" />,
      title: "Inclusivity",
      description: "Equal opportunities for all colleges regardless of tier",
    },
    {
      icon: <BiTargetLock className="w-6 h-6" />,
      title: "Excellence",
      description: "Best-in-class incubation support and resources",
    },
    {
      icon: <AiOutlineBulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly evolving to meet startup ecosystem needs",
    },
    {
      icon: <MdOutlineWorkspacePremium className="w-6 h-6" />,
      title: "Collaboration",
      description:
        "Building strong networks between colleges, startups, and investors",
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Values</h2>
          <p className="text-gray-600 text-lg">
            The principles that guide everything we do
          </p>
        </div>

        <div
          ref={valuesRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card text-center transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div className="w-16 h-16 bg-[#E8F4F6] rounded-full flex items-center justify-center mx-auto mb-4 text-[#32808D]">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
