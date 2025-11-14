import React, { useEffect, useRef } from "react";

const Team = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    if (teamRef.current) {
      const cards = teamRef.current.querySelectorAll(".team-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, index * 200);
      });
    }
  }, []);

  const team = [
    {
      initial: "R",
      name: "Rahul Singh",
      role: "Founder & CEO",
      description: "Serial entrepreneur with 10+ years in startup ecosystem",
      color: "bg-[#E8F4F6] text-[#32808D]",
    },
    {
      initial: "A",
      name: "Anita Desai",
      role: "Head of Partnerships",
      description: "Former education sector consultant, IIM Bangalore alumni",
      color: "bg-[#E8F4F6] text-[#32808D]",
    },
    {
      initial: "V",
      name: "Vikram Malhotra",
      role: "Head of Investments",
      description: "Ex-VC analyst with deep investor network",
      color: "bg-[#E8F4F6] text-[#32808D]",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Experienced professionals dedicated to your success
          </p>
        </div>

        <div
          ref={teamRef}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card text-center transition-all duration-700"
              style={{ opacity: 0, transform: "translateY(30px)" }}
            >
              <div
                className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-4xl font-bold`}
              >
                {member.initial}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-[#32808D] font-semibold text-sm mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
