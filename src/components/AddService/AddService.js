import React from "react";

const AddService = () => {
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
      });
  };
  return (
    <form onSubmit={handleAddService} className="card-body">
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
      {/*  <div className="form-control">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <input
          type="text"
          placeholder="Enter Rating"
          name="rating"
          required
          className="input input-bordered"
        />
      </div> */}
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
