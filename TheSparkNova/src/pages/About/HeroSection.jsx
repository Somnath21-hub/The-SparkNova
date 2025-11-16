import { useEffect, useRef } from "react";
import { BiTargetLock } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import gsap from "gsap";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      storyRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
      .fromTo(
        missionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        visionRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-bl from-blue-50 via-[#C7E7F3] to-purple-100 py-16 px-4 min-h-[90vh] overflow-hidden"
    >
      {/* Animated Star Decoration */}
      <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-emerald-100 opacity-70 blur-lg" />
      <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-100 to-indigo-100 opacity-60 blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center pt-16 mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              TheSparknova
            </span>
          </h1>
          <p className="text-gray-600 text-lg font-medium">
            Democratizing entrepreneurship support for tier 2-3 educational
            institutions
          </p>
        </div>

        {/* Our Story Section */}
        <div
          ref={storyRef}
          className="mb-20 bg-white/80 shadow-md rounded-2xl p-8 border-l-4 border-blue-300"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              TheSparknova was born from a simple observation: while tier 1
              institutions had well-established startup ecosystems, talented
              students in tier 2-3 colleges struggled to access the same
              opportunities.
            </p>
            <p>
              Founded by entrepreneurs who experienced these challenges
              firsthand, we set out to bridge this gap. Our mission is to ensure
              that every college, regardless of its tier, has access to
              world-class incubation infrastructure, funding networks, and
              startup support.
            </p>
            <p>
              Today, we partner with 50+ colleges across India, supporting 200+
              startups and facilitating over ₹5 crores in funding. But our
              journey has just begun.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div
            ref={missionRef}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border-t-4 border-teal-200"
          >
            <div className="w-14 h-14 bg-[#E8F4F6] rounded-full flex items-center justify-center mb-6 shadow">
              <BiTargetLock className="w-7 h-7 text-[#32808D]" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To bridge the entrepreneurship gap in tier 2-3 educational
              institutions by providing comprehensive incubation support,
              funding access, and skill development opportunities that enable
              every student to build successful ventures.
            </p>
          </div>

          {/* Vision Card */}
          <div
            ref={visionRef}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 border-t-4 border-blue-200"
          >
            <div className="w-14 h-14 bg-[#E8F4F6] rounded-full flex items-center justify-center mb-6 shadow">
              <AiOutlineEye className="w-7 h-7 text-[#32808D]" />
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Creating India's largest college-startup ecosystem where every
              student has equal opportunity to innovate and build successful
              ventures, regardless of their institution's tier or location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
