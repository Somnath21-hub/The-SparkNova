import React, { useRef, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import GetStarted from "../../components/GetStarted";
import gsap from "gsap";

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
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.17,
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 overflow-x-hidden">
      <div className="px-6 pt-16 md:px-20">
        {/* Section title */}
        <div ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0d2b2e]">
            Our Services
          </h2>
          <p className="text-center mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for building and scaling successful
            incubation ecosystems
          </p>
        </div>
        {/* Animated Cards */}
        <div className="mt-16 space-y-14">
          {serviceData.map((service, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div className="mt-20">
        <GetStarted
          heading={"Ready to Get Started? "}
          para={
            "Choose the services that fit your needs or contact us for a customized solution"
          }
          btn1={"Contact US"}
          btn2={"View Partnership Plans"}
        />
      </div>
    </section>
  );
};

export default Services;
