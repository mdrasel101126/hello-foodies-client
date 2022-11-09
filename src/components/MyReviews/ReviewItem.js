import React from "react";

const ReviewItem = ({ review, handleReviewDelete, handleUpdateReview }) => {
  const { _id, service_name, comment } = review;
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleReviewDelete(_id)}
            className="btn btn-ghost btn-xs"
          >
            X
          </button>
        </label>
      </th>
      <td>{service_name}</td>
      <td>{comment}</td>
      <th>
        <button
          onClick={() => handleUpdateReview(_id)}
          className="btn btn-ghost btn-xs"
        >
          Update
        </button>
      </th>
    </tr>
  );
};

export default ReviewItem;
