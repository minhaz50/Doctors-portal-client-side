import React from "react";
import DetailCard from "./DetailCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Detail = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10 ">
      <DetailCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></DetailCard>
      <DetailCard
        cardTitle="Visit Our Location"
        bgClass="bg-accent"
        img={marker}
      ></DetailCard>
      <DetailCard
        cardTitle="Contact Us No"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></DetailCard>
    </div>
  );
};

export default Detail;
