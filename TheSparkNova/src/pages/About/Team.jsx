import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Example with team images (fallback to initials if no image)
const team = [
  {
    initial: "R",
    name: "Rahul Singh",
    role: "Founder & CEO",
    description: "Serial entrepreneur with 10+ years in startup ecosystem",
    avatar: null, // "/path/to/rahul.jpg" or null
    color: "from-cyan-200 to-blue-100",
  },
  {
    initial: "A",
    name: "Anita Desai",
    role: "Head of Partnerships",
    description: "Former education sector consultant, IIM Bangalore alumni",
    avatar: null, // "/path/to/anita.jpg" or null
    color: "from-pink-200 to-purple-100",
  },
  {
    initial: "V",
    name: "Vikram Malhotra",
    role: "Head of Investments",
    description: "Ex-VC analyst with deep investor network",
    avatar: null, // "/path/to/vikram.jpg" or null
    color: "from-teal-200 to-emerald-100",
  },
];

const Team = () => {
  const teamRef = useRef(null);

  useEffect(() => {
    if (teamRef.current) {
      const cards = teamRef.current.querySelectorAll(".team-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.22,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-4 relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-300 opacity-20 rounded-full blur-2xl" />
      <div className="absolute bottom-8 right-16 w-28 h-28 bg-gradient-to-br from-pink-300 to-blue-200 opacity-20 rounded-full blur-2xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3 drop-shadow">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Experienced professionals dedicated to your success
          </p>
        </div>
        <div
          ref={teamRef}
          className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto"
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card group text-center bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-t-4 border-transparent transition-all duration-300 hover:border-blue-400 hover:-translate-y-2 hover:shadow-2xl transform"
              style={{ opacity: 0, transform: "translateY(40px)" }}
            >
              <div
                className={`w-24 h-24 mx-auto mb-6 rounded-full shadow-md border-4 border-white bg-gradient-to-br ${member.color} flex items-center justify-center
                  group-hover:scale-105 group-hover:ring-4 group-hover:ring-blue-200 transition-all duration-300`}
              >
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-4xl font-extrabold text-white drop-shadow">
                    {member.initial}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <p className="font-semibold text-sm mb-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {member.role}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* More blur decor if you like */}
    </div>
  );
};

export default Team;
