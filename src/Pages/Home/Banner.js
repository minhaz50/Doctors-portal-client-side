import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm " alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>

          <p className="py-6 pr-10 ">
            Dental treatment can give you the smile you want, but to achieve
            results that are beautiful and natural you need the right doctors
            and solutions for your unique concerns.
          </p>
          <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
