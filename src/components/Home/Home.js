import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/Images/home-page-banner.jpg";
import Service from "../Services/Service";
import cook from "../../assets/Images/cook-person.jpg";
import organic from "../../assets/Images/organic.png";
import natural from "../../assets/Images/natural.png";
import safety from "../../assets/Images/safety.png";
import { AuthContext } from "../Context/UserContext";

const Home = () => {
  const [services, setServices] = useState([]);
  const [buffer, setBuffer] = useState(true);
  const { isAddService } = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:5000/services?amount=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setBuffer(false);
      });
  }, [isAddService]);

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
        {!buffer ? (
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        ) : (
          <div className="w-full mt-14">
            <div className="loader mx-auto"></div>
          </div>
        )}
      </div>
      <div className="text-center my-8">
        <Link to="/services" className="btn btn-primary  w-32 font-semibold">
          See All
        </Link>
      </div>
      {/* hero section */}
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
      {/*another section */}
      <div>
        <h1 className="my-8 text-center text-blue-900 text-4xl font-semibold">
          Ensuring To Provie
        </h1>
        <div className="flex flex-row justify-center flex-wrap">
          <div className="shadow-xl m-8">
            <div>
              <img className="w-40 h-40 p-8" src={organic} alt="" />
            </div>
            <h1 className="text-center text-blue-900 font-semibold pb-6">
              Organic Food
            </h1>
          </div>
          <div className="shadow-xl m-8">
            <div>
              <img className="w-40 h-40 p-8" src={natural} alt="" />
            </div>
            <h1 className="text-center text-blue-900 font-semibold pb-6">
              Natural Food
            </h1>
          </div>
          <div className="shadow-xl m-8">
            <div>
              <img className="w-40 h-40 p-8" src={safety} alt="" />
            </div>
            <h1 className="text-center text-blue-900 font-semibold pb-6">
              Safety
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
