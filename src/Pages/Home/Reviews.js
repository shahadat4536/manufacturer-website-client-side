import React from "react";
import people1 from "../../assets/people1.png";
import people2 from "../../assets/people2.png";
import people3 from "../../assets/people3.png";
const Reviews = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      _id: 2,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <div>
      {reviews.map((review) => (
        <Reviews key={review._id} review={review}></Reviews>
      ))}
    </div>
  );
};

export default Reviews;
