import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/Images/home-page-banner.jpg";
import Service from "../Services/Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homeservices")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setServices(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
          <h1 className="text-5xl font-semibold">Wellcome To My Kitchen</h1>
          <h1 className="text-5xl font-semibold">Hello Foodies</h1>
          <p className="font-semibold pt-6">
            You can buy delicious home made food here.These foods are totally
            hygienic for health
          </p>
        </div>
      </div>
      <div className="w-4/5 mx-auto">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link to="/allservices" className="btn btn-primary">
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;
