import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  //console.log(service);
  const { _id, name, picture, description, price } = service;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={picture}>
            <img
              className="w-full"
              style={{ height: "200px" }}
              src={picture}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        ;
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {description.length > 100 ? (
          <p>{description.slice(0, 100) + "..."}</p>
        ) : (
          <p>{description}</p>
        )}
        <p>Price: {price} Taka</p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
