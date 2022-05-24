import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div class="card max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="flex justify-around">
            <h2 class="card-title">{review.name}</h2>
            <h2 class="card-title">Ratting:{review.ratting}/5</h2>
          </div>
          <p>{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
