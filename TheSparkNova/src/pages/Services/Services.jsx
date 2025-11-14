import React from "react";
import ServiceCard from "./ServiceCard";
import GetStarted from "../../components/GetStarted";

const serviceData = [
  {
    icon: "🏢",
    title: "Incubation Center Setup",
    desc: "Complete infrastructure and operational framework for successful incubation centers",
    tag: "B2B Service Fee / Annual Partnership",
    pointsLeft: [
      "Infrastructure design and planning",
      "Governance and operational models",
      "Compliance and regulatory guidance",
    ],
    pointsRight: [
      "Pre-incubation and incubation frameworks",
      "Technology platform setup",
      "Staff training and capacity building",
    ],
  },
  {
    icon: "📈",
    title: "Funding & Investment Support",
    desc: "Connect with investors and secure funding for your startup journey",
    tag: "Success fee on funding secured / Subscription",
    pointsLeft: [
      "Investor network access (Angels, VCs, Corporate VCs)",
      "Grant application assistance (Government schemes)",
      "Term sheet negotiation guidance",
    ],
    pointsRight: [
      "Pitch deck development and refinement",
      "Due diligence support",
      "Crowdfunding campaign management",
    ],
  },
  {
    icon: "🎯",
    title: "Skill Development & Events",
    desc: "Build entrepreneurial capabilities through workshops and competitions",
    tag: "Event-based revenue / College partnership package",
    pointsLeft: [
      "SparkTank Ideathon - Pan-India innovation challenge",
      "Founder bootcamps and accelerator programs",
      "Domain-specific workshops (Product, Marketing, Finance)",
    ],
    pointsRight: [
      "Mentor matching and mentorship sessions",
      "Industry exposure visits and networking events",
      "Pitch competition organization",
    ],
  },
  {
    icon: "🌐",
    title: "Ecosystem & Network Access",
    desc: "Join a thriving community of founders, mentors, and investors",
    tag: "Subscription-based access / Included in partnership",
    pointsLeft: [
      "Access to 150+ mentors across industries",
      "Investor database and warm introductions",
      "Collaboration opportunities with other centers",
    ],
    pointsRight: [
      "Corporate partnership facilitation",
      "Alumni entrepreneur network",
      "Resource library (templates, guides, case studies)",
    ],
  },
  {
    icon: "🛠️",
    title: "Technology & Tools",
    desc: "Modern SaaS platform to manage your incubation ecosystem",
    tag: "SaaS subscription per college",
    pointsLeft: [
      "Startup management dashboard",
      "Application tracking system",
      "Event management platform",
    ],
    pointsRight: [
      "Learning management system",
      "Analytics and reporting tools",
      "Communication and collaboration tools",
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full bg-white py-16">
      {/* CENTERED CONTENT — WITH SIDE MARGINS */}
      <div className="px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0d2b2e]">
          Our Services
        </h2>

        <p className="text-center mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive solutions for building and scaling successful incubation
          ecosystems
        </p>

        <div className="mt-16 space-y-14">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* FULL WIDTH CTA — NO MARGIN */}
      <div className="mt-20">
        <GetStarted
          heading={"Ready to Get Started? "}
          para={
            " Choose the services that fit your needs or contact us for a customized solution"
          }
          btn1={"Contact US"}
          btn2={"View Partnership Plans"}
        />
      </div>
    </div>
  );
};

export default Services;
