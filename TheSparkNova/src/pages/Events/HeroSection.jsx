import { FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-teal-100 overflow-hidden">
      {/* Decorative blurred accent circles */}
      <div className="absolute -top-10 left-0 w-60 h-60 bg-gradient-to-br from-blue-200 to-teal-200 opacity-25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 right-0 w-44 h-44 bg-gradient-to-br from-purple-200 to-blue-300 opacity-25 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 drop-shadow-lg">
            Events
          </h1>
          <p className="text-gray-700 text-lg font-medium">
            Join our ecosystem of innovation through{" "}
            <span className="font-semibold underline decoration-blue-400">
              ideathons
            </span>
            ,{" "}
            <span className="font-semibold underline decoration-teal-400">
              workshops
            </span>
            , and{" "}
            <span className="font-semibold underline decoration-pink-400">
              networking events
            </span>
            .
          </p>
        </div>

        {/* Flagship Event & Competition Grid */}
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Flagship Event Card */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#3bc3c5] to-[#32808D] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden group transition-all duration-300 hover:scale-[1.03]">
            {/* Ribbon */}
            <span className="absolute top-7 left-8 bg-white/20 text-white px-5 py-1 rounded-full text-sm font-semibold tracking-wide shadow whitespace-nowrap animate-pulse z-20">
              FLAGSHIP EVENT
            </span>

            <h2 className="text-4xl font-extrabold mb-4">SparkTank Ideathon</h2>
            <p className="text-white/90 mb-8 text-xl">
              Pan-India innovation challenge for tier 2-3 college students
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <FaTrophy className="w-6 h-6 text-amber-300 drop-shadow" />
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
                <FaCalendarAlt className="w-6 h-6 text-blue-100" />
                <span className="text-lg">Multi-stage competition format</span>
              </div>
            </div>

            <button className="mt-1 bg-white group-hover:bg-blue-50 text-[#32808D] px-9 py-3 rounded-xl font-semibold text-lg shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ring-2 ring-transparent group-hover:ring-blue-500">
              Register Now
            </button>

            {/* Decorative spark */}
            <div className="absolute right-8 bottom-8 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-pink-200 opacity-30 blur-xl"></div>
          </div>

          {/* Competition Format Card */}
          <div className="lg:col-span-2 bg-white/70 rounded-3xl p-10 shadow-xl border-t-4 border-blue-100 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-10">
              Competition Format
            </h3>
            <div className="space-y-10">
              <div>
                <span className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 text-[#32808D] px-4 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
                  Stage 1
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Online Submissions
                </h4>
                <p className="text-gray-600 text-base">
                  Submit your innovative ideas online
                </p>
              </div>
              <div>
                <span className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 text-[#32808D] px-4 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
                  Stage 2
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Regional Rounds
                </h4>
                <p className="text-gray-600 text-base">
                  Present to regional judges and mentors
                </p>
              </div>
              <div>
                <span className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 text-[#32808D] px-4 py-1 rounded-full text-sm font-semibold mb-3 shadow-sm">
                  Stage 3
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
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
