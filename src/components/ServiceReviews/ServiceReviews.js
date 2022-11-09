import React from "react";
import { FaUserAlt } from "react-icons/fa";

const ServiceReviews = ({ review }) => {
  //console.log(id);
  const { name, photoURL, comment } = review;
  return (
    <div className="border-2 rounded-xl mt-6 w-11/12 sm:w-11/12 md:w-7/12 lg:w-1/2 mx-auto shadow-xl bg-white p-4">
      <div className="flex flex-row items-center">
        {photoURL ? (
          <img
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
            src={photoURL}
            alt=""
          />
        ) : (
          <FaUserAlt></FaUserAlt>
        )}
        <p className="ml-2">{name}</p>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default ServiceReviews;
