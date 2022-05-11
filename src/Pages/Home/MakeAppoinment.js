import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center my-12"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 ">
        <h2 className="text-white text-3xl">Appoinment</h2>
        <h1 className="text-white text-4xl font-bold">
          Make An Appoinment Today
        </h1>
        <p className="text-white mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex
          dicta praesentium repellat consectetur dignissimos suscipit corrupti
          dolorum vero expedita quae, quis alias rem, consequatur nam! Illum
          alias animi voluptates.
        </p>
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary mt-6">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default MakeAppoinment;
