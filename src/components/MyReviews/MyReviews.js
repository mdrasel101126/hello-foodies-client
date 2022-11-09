import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import ReviewItem from "./ReviewItem";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleReviewDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleReviewUpdate = (id, newComment) => {
    console.log(id);
    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newComment }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("helloFoodies-jwt")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut]);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Food Name</th>
            <th>My Reviw</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewItem
              key={review._id}
              review={review}
              handleReviewDelete={handleReviewDelete}
              handleReviewUpdate={handleReviewUpdate}
            ></ReviewItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
