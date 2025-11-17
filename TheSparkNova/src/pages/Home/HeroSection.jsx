import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const BgIllustration = () => (
  <svg
    viewBox="0 0 800 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-0 bottom-0 w-full h-full pointer-events-none"
    style={{ zIndex: 0, opacity: 0.15 }}
  >
    <path
      d="M0,300 C150,400 650,0 800,300 L800,400 L0,400 Z"
      fill="url(#waveGradient)"
    />
    <defs>
      <linearGradient
        id="waveGradient"
        x1="0"
        y1="0"
        x2="800"
        y2="400"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8FCEF" />
        <stop offset="0.6" stopColor="#00b3b3" />
        <stop offset="1" stopColor="#99dbf5" />
      </linearGradient>
    </defs>
    <ellipse cx="700" cy="80" rx="38" ry="38" fill="#dbfbfa" opacity="0.35" />
    <ellipse cx="190" cy="130" rx="20" ry="20" fill="#00b3b3" opacity="0.08" />
  </svg>
);

const HeroSection = () => {
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const buttons = btnRef.current
        ? Array.from(btnRef.current.querySelectorAll("button"))
        : [];

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, { opacity: 0, y: 40, duration: 0.8 })
        .from(descRef.current, { opacity: 0, y: 30, duration: 0.7 }, "-=0.5")
        .from(
          buttons,
          { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 },
          "-=0.4"
        )
        .from(statsRef.current, { opacity: 0, y: 20, duration: 0.7 }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex flex-col justify-center items-center text-center py-20 px-4 bg-gradient-to-br from-cyan-50 via-white to-teal-50 overflow-hidden">
      <BgIllustration />

      <div className="relative z-10 max-w-4xl w-full mx-auto">

        {/* 🟡 Animated Highlight Headline */}
        <h2
          ref={headlineRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0d2b2e] mb-6 pt-16 tracking-tight relative inline-block"
        >
          <span className="relative z-10">
            Empowering Tier 2-3 College Incubation Centers to Build Tomorrow's
            Startups
          </span>

          {/* Highlight behind text */}
          <span className="absolute left-0 bottom-1 w-full h-4 bg-[#00e0da4b] blur-sm rounded-md animate-pulse"></span>
        </h2>

        {/* 🟦 Smooth Underline Highlight */}
        <p
          ref={descRef}
          className="text-gray-700 mt-3 text-xl max-w-3xl mx-auto mb-12 leading-relaxed tracking-wide font-medium relative inline-block"
        >
          <span className="relative z-10">
            Complete ecosystem support from funding to mentorship, events to
            infrastructure.
          </span>

          {/* Underline effect */}
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#00b3b3] rounded-full animate-[highlight_2s_ease-out_infinite]"></span>
        </p>

        <div
          ref={btnRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-10"
        >
          <button className="bg-[#00b3b3] text-white px-6 py-3 rounded-md font-semibold shadow-sm hover:bg-[#008080] transition-colors">
            Partner With Us
          </button>
          <button className="border-2 border-[#00b3b3] text-[#00b3b3] px-6 py-3 rounded-md font-semibold hover:bg-[#00b3b3] hover:text-white hover:shadow transition-colors">
            Explore Our Services
          </button>
        </div>

        <div
          ref={statsRef}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-10
                     text-gray-800 font-semibold bg-white/90 rounded-xl p-6 
                     shadow-md backdrop-blur-lg tracking-wide text-lg"
        >
          <div className="text-center">50+ Partner Colleges</div>

          <span className="hidden sm:inline text-gray-400">|</span>

          <div className="text-center">200+ Startups Supported</div>

          <span className="hidden sm:inline text-gray-400">|</span>

          <div className="text-center">₹5Cr+ Funding Facilitated</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
