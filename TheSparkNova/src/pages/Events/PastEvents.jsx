const PastEvents = () => {
  const stats = [
    { value: "100+", label: "Events Conducted" },
    { value: "5000+", label: "Participants" },
    { value: "50+", label: "Partner Colleges" },
    { value: "₹5Cr+", label: "Funding Facilitated" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Past Events Highlights
          </h2>
          <p className="text-gray-600 text-lg">
            See the impact we've created together
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-md border border-gray-100"
            >
              <div className="text-4xl font-bold text-[#32808D] mb-3">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
