import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaQuoteLeft } from "react-icons/fa";

const SuccessStories = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.22,
        delay: 0.2,
      }
    );
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
    <section className="relative py-24 px-6 bg-[#e8f8f8] overflow-hidden">

      {/* Animated Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,200,200,0.25),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION TITLE WITH NEON STROKE */}
        <div ref={titleRef} className="text-center mb-16">
          <h2
            className="
              text-5xl md:text-6xl font-extrabold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-[#0ca3b3] via-[#007f7a] to-[#0ca3b3]
              drop-shadow-[0_4px_15px_rgba(0,200,200,0.4)]
            "
          >
            Success Stories
          </h2>
          <p className="text-gray-700 text-lg mt-2">
            Real experiences that define our impact
          </p>
        </div>

        {/* STORIES GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="
                group relative p-8 rounded-3xl 
                bg-white/70 backdrop-blur-lg 
                border border-white/40 shadow-lg
                hover:-translate-y-4 transition-all duration-500 
                hover:shadow-[0_15px_50px_rgba(0,150,150,0.35)]
                hover:scale-[1.03]
              "
            >
              {/* GLOW BORDER ANIMATION */}
              <div
                className="
                  absolute inset-0 rounded-3xl 
                  bg-gradient-to-br from-[#00bfb3] to-[#006d68]
                  opacity-0 group-hover:opacity-20 blur-2xl 
                  transition-all duration-500
                "
              ></div>

              {/* Ambient spotlight */}
              <div className="absolute -top-10 right-0 w-28 h-28 bg-[#00c4bb]/20 rounded-full blur-3xl"></div>

              {/* Floating glowing quote icon */}
              <FaQuoteLeft
                className="
                  text-[#009d96] text-4xl mb-5 
                  drop-shadow-[0_4px_10px_rgba(0,170,170,0.5)]
                  transform group-hover:-translate-y-1 transition-all
                "
              />

              {/* Quote */}
              <p className="text-gray-800 italic leading-relaxed mb-8 text-[15px]">
                {story.quote}
              </p>

              {/* Author */}
              <div className="mt-auto">
                <p className="font-bold text-[#007f7a] text-lg">
                  {story.name}
                </p>
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
