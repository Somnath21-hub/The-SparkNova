import { FaTrophy, FaUsers, FaCalendarAlt } from "react-icons/fa";

// Component 1: Hero Section with Flagship Event and Competition Format
const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-gray-600 text-lg">
            Join our ecosystem of innovation through ideathons, workshops, and
            networking events
          </p>
        </div>

        {/* Flagship Event and Competition Format Grid */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Flagship Event Card - Takes 3 columns */}
          <div className="lg:col-span-3 bg-[#32808D] rounded-2xl p-10 text-white shadow-xl">
            <div className="inline-block  bg-opacity-20 px-4 py-1 rounded text-sm font-medium mb-4 bg-[#5b99a4] text-white">
              FLAGSHIP EVENT
            </div>

            <h2 className="text-4xl font-bold mb-4">SparkTank Ideathon</h2>
            <p className="text-gray-100 mb-8 text-lg">
              Pan-India innovation challenge for tier 2-3 college students
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FaTrophy className="w-5 h-5" />
                <span className="text-base">
                  Cash prizes + Incubation support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="w-5 h-5" />
                <span className="text-base">
                  Individual and team registrations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="w-5 h-5" />
                <span className="text-base">
                  Multi-stage competition format
                </span>
              </div>
            </div>

            <button className="bg-white text-[#32808D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Register Now
            </button>
          </div>

          {/* Competition Format Card - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Competition Format
            </h3>

            <div className="space-y-8">
              <div>
                <div className="inline-block bg-[#E8F4F6] text-[#32808D] px-3 py-1 rounded text-sm font-semibold mb-3">
                  Stage 1
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Online Submissions
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Submit your innovative ideas online
                </p>
              </div>

              <div>
                <div className="inline-block bg-[#E8F4F6] text-[#32808D] px-3 py-1 rounded text-sm font-semibold mb-3">
                  Stage 2
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Regional Rounds
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Present to regional judges and mentors
                </p>
              </div>

              <div>
                <div className="inline-block bg-[#E8F4F6] text-[#32808D] px-3 py-1 rounded text-sm font-semibold mb-3">
                  Stage 3
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Grand Finale
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
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
