import React from "react";
import ServiceLeft from "./ServiceLeft";
import ServiceRight from "./ServiceRight";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg ml-1 mr-1">
      <ServiceLeft
        icon={service.icon}
        title={service.title}
        desc={service.desc}
        tag={service.tag}
      />

      <ServiceRight
        pointsLeft={service.pointsLeft}
        pointsRight={service.pointsRight}
      />
    </div>
  );
};

export default ServiceCard;
