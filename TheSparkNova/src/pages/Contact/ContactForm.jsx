import React, { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [activeTab, setActiveTab] = useState("General Inquiry");
  const [formData, setFormData] = useState({
    // General Inquiry
    name: "",
    email: "",
    subject: "",
    message: "",
    // Partnership
    collegeName: "",
    contactPerson: "",
    phone: "",
    requirements: "",
    // Student/Startup
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
              <label className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

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

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent resize-none"
                placeholder="Enter your message"
              />
            </div>
          </div>
        );

      case "Partnership":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                College Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.collegeName}
                onChange={(e) => handleChange("collegeName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter college name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Contact Person <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter contact person name"
              />
            </div>

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

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Tell us about your requirements{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={5}
                value={formData.requirements}
                onChange={(e) => handleChange("requirements", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent resize-none"
                placeholder="What are you looking to achieve with an incubation center?"
              />
            </div>
          </div>
        );

      case "Student/Startup":
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

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

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                College <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.college}
                onChange={(e) => handleChange("college", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent"
                placeholder="Enter your college name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Startup Idea <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                value={formData.startupIdea}
                onChange={(e) => handleChange("startupIdea", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent resize-none"
                placeholder="Brief description of your startup idea"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Stage <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.stage}
                onChange={(e) => handleChange("stage", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32808D] focus:border-transparent bg-white"
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
    <div className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div
          ref={formRef}
          className="transition-all duration-1000"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-[#32808D] text-white"
                    : "border-2 border-[#32808D] text-[#32808D] hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {renderForm()}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-[#32808D] text-white py-4 rounded-lg font-semibold hover:bg-[#2a6d7a] transition-colors mt-6"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
