import React from "react";
import banner from "../../assets/Images/home-page-banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="relative ">
      <img className="w-full" src={banner} alt="" />
      <div className="absolute w-1/2 top-1/4 left-8">
        <h1 className="text-5xl font-semibold">Wellcome To My Kitchen</h1>
        <h1 className="text-5xl font-semibold">Hello Foodies</h1>
        <p className="font-semibold pt-60">
          You can buy delicious home made food here.These foods are totally
          hygienic for health
        </p>
      </div>
    </div>
  );
};

export default Home;
