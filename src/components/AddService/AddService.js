import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../Context/UserContext";

const AddService = () => {
  const { isAddService, setIsAddService } = useContext(AuthContext);
  useTitle("Add Service");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.serviceName.value;
    const picture = form.photoURL.value;
    const description = form.description.value;
    const price = form.price.value;
    const delivery = form.delivery.value;
    const rating = form.rating.value;
    console.log(name, picture, description, price, delivery, rating);
    const service = {
      name,
      picture,
      description,
      price,
      delivery,
      rating,
      publishedDate: new Date(),
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setIsAddService(!isAddService);
          toast.success("Successfully Added The Service");
          form.reset();
        } else {
          toast.error("Sorry!! Something Went Wrong!!");
        }
      });
  };
  return (
    <form
      onSubmit={handleAddService}
      className="card-body w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Service Name</span>
        </label>
        <input
          type="text"
          placeholder="Enter Service Name"
          name="serviceName"
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          placeholder="Enter Photo URL"
          name="photoURL"
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Enter Description"
          name="description"
          required
        ></textarea>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          required
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Delivery Charge</span>
        </label>
        <input
          type="text"
          placeholder="Enter Delivery Charge"
          name="delivery"
          required
          className="input input-bordered"
        />
      </div>
      <div>
        <p>
          Rating:
          <select name="rating" id="" defaultValue={4}>
            <option className=" " value="3">
              3
            </option>
            <option className=" " value="3.5">
              3.5
            </option>
            <option className=" " value="4">
              4
            </option>
            <option className=" " value="4.5">
              4.5
            </option>
            <option className=" " value="5">
              5
            </option>
          </select>
        </p>
      </div>
      <div className="mt-6">
        <button type="submit" className="btn btn-primary">
          Add Service
        </button>
      </div>
    </form>
  );
};

export default AddService;
