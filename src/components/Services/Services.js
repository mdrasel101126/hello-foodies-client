import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className="w-4/5 mx-auto">
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
