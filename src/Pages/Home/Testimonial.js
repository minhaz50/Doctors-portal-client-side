import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      description:
        "Hey, I'm Winson and i'm ready to help you to get nice smile.",
      img: people1,
    },
    {
      _id: 2,
      name: "Jenifer lophez",
      location: "NewYork",
      description:
        "Hey, I'm Jenifer and i'm ready to help you to get nice smile.",
      img: people2,
    },
    {
      _id: 3,
      name: "Salina Gomez",
      location: "Los Angelas",
      description:
        "Hey, I'm Salina and i'm ready to help you to get nice smile.",
      img: people3,
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary text-3xl font-bold">Testiomials</h1>
          <h2 className="text-black text-3xl mt-3"> What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48 h-36" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
