import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [activeTab, setActiveTab] = useState("General Inquiry");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    collegeName: "",
    contactPerson: "",
    phone: "",
    requirements: "",
    college: "",
    startupIdea: "",
    stage: "Idea Stage",
  });

  useEffect(() => {
    if (formRef.current) {
      formRef.current.style.opacity = "1";
      formRef.current.style.transform = "translateY(0)";
    }
  }, []);

  const tabs = ["General Inquiry", "Partnership", "Student/Startup"];

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", { formData, type: activeTab });
    alert("Message sent successfully!");
  };

  const renderForm = () => {
    switch (activeTab) {
      case "General Inquiry":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter subject"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow resize-none"
                placeholder="Enter your message"
              />
            </div>
          </div>
        );

      case "Partnership":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                College Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.collegeName}
                onChange={(e) => handleChange("collegeName", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter college name"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Contact Person <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter contact person name"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Tell us about your requirements{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                value={formData.requirements}
                onChange={(e) => handleChange("requirements", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow resize-none"
                placeholder="What are you looking to achieve with an incubation center?"
              />
            </div>
          </div>
        );

      case "Student/Startup":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                College <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.college}
                onChange={(e) => handleChange("college", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
                placeholder="Enter your college name"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Startup Idea <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.startupIdea}
                onChange={(e) => handleChange("startupIdea", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow resize-none"
                placeholder="Brief description of your startup idea"
              />
            </div>
            <div>
              <label className="block text-[#0d2b2e] font-medium mb-2">
                Stage <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.stage}
                onChange={(e) => handleChange("stage", e.target.value)}
                className="w-full px-4 py-3 border border-cyan-200 rounded-xl bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#00b3b3] focus:border-transparent shadow"
              >
                <option value="Idea Stage">Idea Stage</option>
                <option value="MVP Stage">MVP Stage</option>
                <option value="Growth Stage">Growth Stage</option>
                <option value="Scale Stage">Scale Stage</option>
              </select>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-cyan-50 via-white to-teal-100 py-20 px-4 min-h-screen relative rounded-2xl overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-100 to-teal-200 opacity-30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="max-w-3xl mx-auto relative z-10">
        <div
          ref={formRef}
          className="transition-all duration-1000"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-9">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl font-semibold transition-all
                shadow-sm backdrop-blur 
                ${
                  activeTab === tab
                    ? "bg-[#00b3b3] text-white scale-105 drop-shadow-lg"
                    : "border-2 border-[#00b3b3] text-[#00b3b3] bg-white/70 hover:bg-cyan-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Form */}
          <div className="bg-white/90 backdrop-blur p-10 md:p-12 rounded-3xl shadow-xl border-t-4 border-cyan-200">
            {renderForm()}
            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#00b3b3] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#00978a] mt-8 transition-all"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 left-8 w-60 h-60 bg-gradient-to-br from-teal-100 to-cyan-200 opacity-30 rounded-full blur-2xl pointer-events-none z-0" />
    </div>
  );
};

export default ContactForm;
