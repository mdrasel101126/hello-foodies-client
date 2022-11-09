import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import banner from "../../assets/Images/home-page-banner.jpg";
import Service from "../Services/Service";
import cook from "../../assets/Images/cook-person.jpg";

const Home = () => {
  const services = useLoaderData();
  if (!services) {
    return <h1>No Data Found</h1>;
  }
  return (
    <div>
      <div className="relative ">
        <img
          style={{ height: "600px" }}
          className="w-full"
          src={banner}
          alt=""
        />
        <div className="absolute transform -translate-y-1/2 w-1/2 top-1/2 left-8">
          <h1 className="text-5xl font-bold text-blue-900">
            Wellcome To My Kitchen
          </h1>
          <h1 className="text-5xl font-bold text-blue-900">Hello Foodies</h1>
          <p className="font-semibold pt-6 text-blue-900">
            You can buy delicious home made food here.These foods are totally
            hygienic for health
          </p>
        </div>
      </div>
      <div className="w-4/5 mx-auto mt-8">
        <h1 className="text-4xl font-semibold text-blue-900 text-center">
          Latest Items
        </h1>
        <p className="text-center font-semibold text-gray-600  mb-6">
          Eat Healthy ,Keep Healthy
        </p>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
      <div className="text-center my-8">
        <Link to="/services" className="btn btn-primary  w-32 font-semibold">
          See All
        </Link>
      </div>
      <div className="hero mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img
            src={cook}
            className=" rounded-lg shadow-2xl w-4/5 h-4/5 mx-auto"
            alt=""
          />
          <div className="w-4/5 mx-auto lg:mt-60 mb-8">
            <h1 className="text-5xl font-bold">I am Mr Nobody</h1>
            <p className="py-6">
              I provide delicious home made food in the town with very low cost
              delivery.You can by any food very easily . Please give your
              feedback by commenting .
            </p>
            <button className="btn btn-primary btn-sm">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
