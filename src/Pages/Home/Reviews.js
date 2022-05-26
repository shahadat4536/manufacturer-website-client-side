import React, { useEffect, useState } from "react";
import Review from "../Home/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://stark-cliffs-55109.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-8">
      <h2 className="uppercase pl-8 py-4 my-16 text-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500">
        <span className="text-5xl ">Review</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
