import React, { useEffect, useState } from "react";
import Review from "../Home/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-center text-4xl">Review</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
