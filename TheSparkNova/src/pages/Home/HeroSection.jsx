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
        <h2
          ref={headlineRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#0d2b2e] mb-6 tracking-tight"
        >
          Empowering Tier 2-3 College Incubation Centers to Build Tomorrow's
          Startups
        </h2>

        <p
          ref={descRef}
          className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto mb-10"
        >
          Complete ecosystem support — from funding to mentorship, events to
          infrastructure
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
          className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mt-10 text-gray-700 font-medium bg-white/80 rounded-lg p-4 shadow-sm backdrop-blur"
        >
          <div className="mb-2 sm:mb-0">50+ Partner Colleges</div>
          <span className="hidden sm:inline">|</span>
          <div className="mb-2 sm:mb-0">200+ Startups Supported</div>
          <span className="hidden sm:inline">|</span>
          <div>₹5Cr+ Funding Facilitated</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
