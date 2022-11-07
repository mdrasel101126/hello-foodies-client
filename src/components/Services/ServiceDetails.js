import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { name, delivery, description, picture, price, rating } = service;
  return (
    <div>
      <div className="w-full md:w-3/5 lg:w-1/2 bg-base-100 shadow-xl mt-8 p-8 mx-auto">
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
        </figure>
        <div className="p-8">
          <h2 className="card-title">{name}</h2>
          <>
            <p>{description}</p>

            <p className="mt-6">Price: {price} Taka</p>
            <p>Delivery Charge: {delivery} Taka</p>
            <div className="flex flex-row">
              <p>Rating: </p>
              <FaStar className="text-warning"></FaStar>
              <p>{rating}</p>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
