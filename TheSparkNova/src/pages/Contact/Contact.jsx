import React from "react";
import ContactInfo from "./ContactInfo";
import HeroSection from "./HeroSection";
import MapSocial from "./MapSocial";
import QuickLinks from "./QuickLinks";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContactInfo />
      <ContactForm />
      <MapSocial />
      <QuickLinks />
    </div>
  );
};

export default Contact;
