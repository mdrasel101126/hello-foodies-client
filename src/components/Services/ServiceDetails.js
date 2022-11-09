import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaStar } from "react-icons/fa";
import ServiceReviews from "../ServiceReviews/ServiceReviews";
import { AuthContext } from "../Context/UserContext";

const ServiceDetails = () => {
  const service = useLoaderData();
  //console.log(service);
  const { _id, name, delivery, description, picture, price, rating } = service;
  const [reviews, setReviews] = useState([]);
  const [toogleReview, setToogleReview] = useState(false);
  const { user } = useContext(AuthContext);
  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.review.value;
    //console.log(comment);
    const serviceReview = {
      comment: comment,
      name: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      service_id: _id,
      service_name: name,
      comment_date: new Date(),
    };
    console.log(serviceReview);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setToogleReview(!toogleReview);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id, toogleReview]);
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
      <div>
        <form onSubmit={handleReviewSubmit} className="text-center">
          <textarea
            className="textarea textarea-bordered border-2 w-full sm:w-11/12 md:w-9/12 lg:w-1/2"
            placeholder="Add Your Review"
            name="review"
            required
          ></textarea>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        {reviews.map((review) => (
          <ServiceReviews key={review._id} review={review}></ServiceReviews>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
