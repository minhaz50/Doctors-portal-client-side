import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride treatments",
      description:
        "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "If you have symptoms , you might have pain in your teeth or.Cavity pain depends on the extent of your cavity . Regardless if your cavity symptoms are mild or severe, you ought to visit our dentist as you are likely to need a filling.",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile.That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-5xl font-bold uppercase">
          Our Services
        </h3>
        <h1 className="mt-12 text-lg font-bold mb-5">Services We Provide</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-28 mx-35">
        <figure>
          <img src={treatment} alt="Album" className="w-10/12 ml-28 mb-12" />
        </figure>
        <div className="card-body">
          <h2 className="card-title pl-32">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="px-32">
            Exceptional Dental Care is a cheerful dental practice, offering
            high-quality dental care in the heart of Spearwood. We are
            wheelchair-accessible, caring and affordable. We use new
            technologies for the comfort of our patients. We have a Digital
            x-ray and OPG machine and an Intraoral camera is used for patient's
            understanding of their oral condition.
          </p>

          <div className="card-actions justify-start ml-32 ">
            <button className="btn btn-primary uppercase">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
