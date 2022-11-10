import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import ReviewItem from "./ReviewItem";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [isModified, setIsModified] = useState(false);
  useTitle("My Reviews");
  const handleReviewDelete = (id) => {
    console.log(id);
    fetch(`https://hello-foodies-server.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setIsModified(!isModified);
          toast.success("Deleted Successfully");
        }
        //console.log(data);
      });
  };
  const handleReviewUpdate = (id, newComment) => {
    console.log(id);
    fetch(`https://hello-foodies-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newComment }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setIsModified(!isModified);
          toast.success("Updated Successfully");
        }
        //console.log(data);
      });
  };
  useEffect(() => {
    fetch(
      `https://hello-foodies-server.vercel.app/myreviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("helloFoodies-jwt")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut, isModified]);
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
