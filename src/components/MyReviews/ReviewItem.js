import React from "react";

const ReviewItem = ({ review, handleReviewDelete, handleReviewUpdate }) => {
  const { _id, service_name, comment } = review;
  const handdeUpdateModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const newReview = form.comment.value;
    handleReviewUpdate(_id, newReview);
    form.reset();
  };

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
        <label htmlFor={_id} className="btn btn-ghost btn-xs">
          Update
        </label>
        <input type="checkbox" id={_id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor={_id}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Update Your Comment</h3>
            <form onSubmit={handdeUpdateModal}>
              <textarea
                className="textarea textarea-bordered w-full"
                name="comment"
                placeholder="Enter comment"
                required
              ></textarea>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-xs">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default ReviewItem;
