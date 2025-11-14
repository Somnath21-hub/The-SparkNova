import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
const UpcomingEvents = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Ideathon", "Workshop", "Networking"];

  const events = [
    {
      type: "IDEATHON",
      title: "SparkTank 2025 - Register Now",
      description: "Submit your innovative ideas for our flagship competition",
      date: "15 March 2025",
      location: "Pan-India (Online + Regional)",
    },
    {
      type: "WORKSHOP",
      title: "Product Development Workshop",
      description: "Learn MVP development and validation techniques",
      date: "20 February 2025",
      location: "Online",
    },
    {
      type: "NETWORKING",
      title: "Investor Pitch Night",
      description: "Pitch to angel investors and early-stage VCs",
      date: "28 February 2025",
      location: "Bangalore",
    },
  ];

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.type === activeFilter.toUpperCase());

  const typeColors = {
    IDEATHON: "bg-[#32808D] text-white",
    WORKSHOP: "bg-[#32808D] text-white",
    NETWORKING: "bg-[#32808D] text-white",
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-lg">
            Join our events and accelerate your startup journey
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-[#32808D] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div
                className={`inline-block px-3 py-1 rounded text-xs font-bold mb-4 ${
                  typeColors[event.type]
                }`}
              >
                {event.type}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {event.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-sm">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              <button className="w-full bg-[#32808D] text-white py-3 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors">
                Register
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
