import React from "react";
import StarRatings from "react-star-ratings";

const Review = ({ review }) => {
  const { name, ratting } = review;

  return (
    <div>
      <div class="card max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <div className="flex justify-center">
            <div class="avatar placeholder">
              <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                <span class="text-3xl">{name.substring(0, 1)}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-4xl flex-1">{name}</p>
            <div className="">
              <p>
                <StarRatings
                  starRatedColor="blue"
                  numberOfStars={5}
                  name="rating"
                  rating={parseInt(ratting)}
                  starDimension="20px"
                  starSpacing="5px"
                />
              </p>
            </div>
          </div>
          <div>
            <p>{review.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
