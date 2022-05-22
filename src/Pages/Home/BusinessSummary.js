import React from "react";
import country from "../../assets/icon/coronavirus.png";
import feedback from "../../assets/icon/feedback.png";
import people from "../../assets/icon/people (1).png";
import background1 from "../../assets/background1.png";

const BusinessSummary = () => {
  return (
    <div
      className="my-6 bg-slate-50"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
      }}
    >
      <h3 className="uppercase text-4xl text-center my-5 py-12">
        MILLIONS BUSINESS TRUST US{" "}
      </h3>
      <div className="flex justify-around">
        <div className="text-center">
          <p>Countries</p>
          <img className="w-28" src={country} alt="" srcset="" />
          <p>72+</p>
        </div>
        <div className="text-center">
          <p>Feedback</p>
          <img className="w-28" src={feedback} alt="" srcset="" />
          <p>273+</p>
        </div>
        <div className="text-center">
          <p>Happy Clients</p>
          <img className="w-28" src={people} alt="" srcset="" />
          <p>985+</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
