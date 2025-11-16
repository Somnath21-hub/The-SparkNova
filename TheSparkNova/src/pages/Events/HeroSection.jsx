import { FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-cyan-50 via-white to-teal-100 overflow-hidden">
      <div className="absolute -top-10 left-0 w-60 h-60 bg-gradient-to-br from-cyan-100 to-teal-200 opacity-25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-44 h-44 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-25 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 pt-16">
          <h1 className="text-5xl font-extrabold text-[#0d2b2e] mb-3 drop-shadow-lg">
            Events
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Join our ecosystem of innovation through{" "}
            <span className="font-semibold underline decoration-blue-400 text-blue-600">
              ideathons
            </span>
            ,{" "}
            <span className="font-semibold underline decoration-teal-400 text-teal-600">
              workshops
            </span>
            , and{" "}
            <span className="font-semibold underline decoration-cyan-400 text-cyan-700">
              networking events
            </span>
            .
          </p>
        </div>

        {/* Flagship Event & Competition Grid */}
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Flagship Event Card */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#00b3b3] to-[#32808D] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-300 hover:scale-[1.03]">
            <span className="absolute top-7 left-8 bg-white/20 text-white px-5 py-1 rounded-full text-sm font-semibold tracking-wide shadow whitespace-nowrap animate-pulse z-20">
              FLAGSHIP EVENT
            </span>

            <h2 className="text-4xl font-extrabold mb-4">SparkTank Ideathon</h2>
            <p className="text-white/90 mb-8 text-xl">
              Pan-India innovation challenge for tier 2-3 college students
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <FaTrophy className="w-6 h-6 text-yellow-200 drop-shadow" />
                <span className="text-lg">
                  Cash prizes + Incubation support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="w-6 h-6 text-white" />
                <span className="text-lg">
                  Individual and team registrations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="w-6 h-6 text-cyan-100" />
                <span className="text-lg">Multi-stage competition format</span>
              </div>
            </div>

            <button className="mt-1 bg-white group-hover:bg-cyan-50 text-[#00b3b3] px-9 py-3 rounded-xl font-semibold text-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ring-2 ring-transparent group-hover:ring-cyan-400">
              Register Now
            </button>

            <div className="absolute right-8 bottom-8 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-200 to-teal-200 opacity-20 blur-xl"></div>
          </div>

          <div className="lg:col-span-2 bg-white/80 rounded-3xl p-10 shadow-xl border-t-4 border-cyan-100 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-[#0d2b2e] mb-10">
              Competition Format
            </h3>
            <div className="space-y-10">
              <div>
                <span className="inline-block bg-gradient-to-r from-cyan-100 to-teal-100 text-[#00b3b3] px-4 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
                  Stage 1
                </span>
                <h4 className="text-lg font-bold text-[#0d2b2e] mb-1">
                  Online Submissions
                </h4>
                <p className="text-gray-600 text-base">
                  Submit your innovative ideas online
                </p>
              </div>
              <div>
                <span className="inline-block bg-gradient-to-r from-cyan-100 to-teal-100 text-[#00b3b3] px-4 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
                  Stage 2
                </span>
                <h4 className="text-lg font-bold text-[#0d2b2e] mb-1">
                  Regional Rounds
                </h4>
                <p className="text-gray-600 text-base">
                  Present to regional judges and mentors
                </p>
              </div>
              <div>
                <span className="inline-block bg-gradient-to-r from-cyan-100 to-teal-100 text-[#00b3b3] px-4 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
                  Stage 3
                </span>
                <h4 className="text-lg font-bold text-[#0d2b2e] mb-1">
                  Grand Finale
                </h4>
                <p className="text-gray-600 text-base">
                  Pitch to investors and win prizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
