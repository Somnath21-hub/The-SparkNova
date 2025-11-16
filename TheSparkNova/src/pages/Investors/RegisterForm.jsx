import { useEffect, useRef, useState } from "react";
import { FaUserPlus } from "react-icons/fa";

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
    <div className="relative bg-gradient-to-br from-cyan-50 to-teal-50 py-20 px-4 overflow-hidden">
      {/* Decorative accent blob */}
      <div className="absolute top-10 left-10 w-28 h-24 bg-gradient-to-br from-cyan-100 to-blue-200 opacity-10 rounded-3xl blur-2xl pointer-events-none" />
      <div className="max-w-2xl mx-auto">
        <div
          ref={formRef}
          className="transition-all duration-1000"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-3 bg-gradient-to-r from-[#32808D] to-[#00B3B3] text-white px-6 py-3 rounded-full font-bold shadow-md text-2xl">
              <FaUserPlus className="w-7 h-7" />
              Register Your Interest
            </span>
            <p className="text-gray-600 text-lg mt-4">
              Join our network of investors and mentors
            </p>
          </div>
          <form
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl px-7 py-10 flex flex-col gap-7 border-l-8 border-[#32808D]"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {/* Full Name */}
            <div>
              <label className="block text-[#32808D] text-base font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-[#B3E7F9] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent text-[#152F38] font-medium transition-all"
                placeholder="Enter your full name"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-[#32808D] text-base font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-[#B3E7F9] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent text-[#152F38] font-medium transition-all"
                placeholder="Enter your email"
              />
            </div>
            {/* I am a */}
            <div>
              <label className="block text-[#32808D] text-base font-semibold mb-2">
                I am a <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-[#B3E7F9] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent text-[#152F38] font-medium transition-all"
              >
                <option value="Investor">Investor</option>
                <option value="Mentor">Mentor</option>
                <option value="Both">Both</option>
              </select>
            </div>
            {/* Organization */}
            <div>
              <label className="block text-[#32808D] text-base font-semibold mb-2">
                Organization
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleChange("organization", e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-[#B3E7F9] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent text-[#152F38] font-medium transition-all"
                placeholder="Enter your organization"
              />
            </div>
            {/* Area of Expertise */}
            <div>
              <label className="block text-[#32808D] text-base font-semibold mb-2">
                Area of Expertise / Investment Focus
              </label>
              <input
                type="text"
                value={formData.expertise}
                onChange={(e) => handleChange("expertise", e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-[#B3E7F9] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent text-[#152F38] font-medium transition-all"
                placeholder="e.g., EdTech, SaaS, HealthTech"
              />
            </div>
            {/* Message */}
            <div>
              <label className="block text-[#32808D] text-base font-semibold mb-2">
                Message
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full px-5 py-3 rounded-2xl border border-[#B3E7F9] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent text-[#152F38] font-medium transition-all resize-none"
                placeholder="Tell us about your investment thesis or mentorship interests"
              />
            </div>
            {/* Divider */}
            <div className="border-t border-[#CDEEF4] opacity-70" />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#32808D] to-[#00B3B3] text-white py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all mt-2"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
      <div className="absolute bottom-2 right-10 w-24 h-12 bg-gradient-to-br from-blue-100 to-teal-100 opacity-13 rounded-xl blur-2xl pointer-events-none" />
    </div>
  );
};

export default RegisterForm;
