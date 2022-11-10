import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const { isAddService } = useContext(AuthContext);
  const [buffer, setBuffer] = useState(true);
  useTitle("Services");
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setBuffer(false);
      });
  }, [isAddService]);

  return (
    <div>
      {!buffer ? (
        <div className="w-4/5 mx-auto my-10">
          <h1 className="text-4xl font-semibold text-blue-900 text-center mb-8">
            Select Your Favourite Food Items
          </h1>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full mt-14">
          <div className="loader mx-auto"></div>
        </div>
      )}
    </div>
  );
};

export default Services;
