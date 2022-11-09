import React from "react";
import { FaUserAlt } from "react-icons/fa";

const ServiceReviews = ({ review }) => {
  //console.log(id);
  const { name, photoURL, comment, comment_date, email, service_name } = review;
  return (
    <div className="border-2 rounded-xl mt-6 w-full sm:w-11/12 md:w-7/12 lg:w-1/2 mx-auto">
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
        <p>{name}</p>
      </div>
      <p>{comment}</p>
      <p>{service_name}</p>
      <p>Comment Date: {comment_date}</p>
    </div>
  );
};

export default ServiceReviews;
