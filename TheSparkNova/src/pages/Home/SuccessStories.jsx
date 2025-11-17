import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SuccessStories = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.18,
          delay: 0.15,
        }
      );
    }
  }, []);

  const stories = [
    {
      quote:
        '"TheSparknova transformed our incubation center from a vision to reality. Their end-to-end support has been invaluable."',
      name: "Dr. Rajesh Kumar",
      role: "Incubation Center Head, NIT Patna",
    },
    {
      quote:
        '"Got seed funding of ₹25L through TheSparknova\'s investor network. Their mentorship was crucial to our success."',
      name: "Priya Sharma",
      role: "Founder, EduTech Startup",
    },
    {
      quote:
        '"The quality of startups from tier 2-3 colleges is impressive. TheSparknova is bridging a critical gap in the ecosystem."',
      name: "Amit Verma",
      role: "Angel Investor",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#0d2b2e] mb-3 tracking-tight">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg">Hear from our community</p>
        </div>
        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="story-card bg-white/90 backdrop-blur rounded-2xl p-8 border-t-4 border-cyan-100 hover:border-teal-400 shadow transition duration-300 flex flex-col items-start"
            >
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                {story.quote}
              </p>
              <div className="mt-auto">
                <p className="font-bold text-[#00b3b3]">{story.name}</p>
                <p className="text-sm text-gray-600">{story.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
