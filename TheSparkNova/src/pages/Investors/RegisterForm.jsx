import { useEffect, useRef, useState } from "react";

const RegisterForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "Investor",
    organization: "",
    expertise: "",
    message: "",
  });

  useEffect(() => {
    if (formRef.current) {
      formRef.current.style.opacity = "1";
      formRef.current.style.transform = "translateY(0)";
    }
  }, []);

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Application submitted successfully!");
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div
          ref={formRef}
          className="transition-all duration-1000"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Register Your Interest
            </h2>
            <p className="text-gray-600 text-lg">
              Join our network of investors and mentors
            </p>
          </div>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* I am a */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                I am a <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
              >
                <option value="Investor">Investor</option>
                <option value="Mentor">Mentor</option>
                <option value="Both">Both</option>
              </select>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange("organization", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter your organization"
              />
            </div>

            {/* Area of Expertise */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Area of Expertise / Investment Focus
              </label>
              <input
                type="text"
                value={formData.expertise}
                onChange={(e) => handleChange("expertise", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="e.g., EdTech, SaaS, HealthTech"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent resize-none"
                placeholder="Tell us about your investment thesis or mentorship interests"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#32808D] text-white py-4 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors"
            >
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
