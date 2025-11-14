import React from "react";
import HeroSection from "./HeroSection";
import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";
import GetStarted from "../../components/GetStarted";

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <UpcomingEvents />
      <PastEvents />
      <GetStarted
        heading={"Want to Organize an Event at Your College?"}
        para={
          "We offer white-label event solutions and custom program design for partner colleges"
        }
        btn1={"Get in Touch"}
        btn2={"Book a Call"}
      />
    </div>
  );
};

export default Events;
