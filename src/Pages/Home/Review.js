import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex my-12">
      <div className="card-body">
        <h2 className=" my-2">{review.description}</h2>
        <div className="flex">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ">
              <img className="" src={review.img} alt="" />
            </div>
          </div>
          <div className="ml-7 mt-3">
            <h1 className="font-bold">{review.name}</h1>
            <h3 className="text-xl">{review.location}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
