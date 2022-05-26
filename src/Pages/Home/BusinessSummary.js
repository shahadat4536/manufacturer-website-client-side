import React from "react";
import country from "../../assets/icon/coronavirus.png";
import feedback from "../../assets/icon/feedback.png";
import people from "../../assets/icon/people (1).png";
import background1 from "../../assets/background1.png";

const BusinessSummary = () => {
  return (
    <div
      className="my-6  "
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
      }}
    >
      <h3 className="uppercase text-4xl text-center my-5 py-12">
        MILLIONS BUSINESS TRUST US{" "}
      </h3>
      <div className="flex justify-around">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl lg:text-4xl mb-9 text-center text-blue-800">
            Countries
          </p>
          <img className="w-1/2 lg:w-28" src={country} alt="" srcset="" />
          <p className="text-xl lg:text-3xl text-orange-500 my-10 font-semibold">
            72+
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl lg:text-4xl mb-9 text-center text-blue-800">
            Feedback
          </p>
          <img className="w-1/2 lg:w-28" src={feedback} alt="" srcset="" />
          <p className="text-xl lg:text-3xl text-orange-500 my-10 font-semibold">
            273+
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl lg:text-4xl mb-9 text-center text-blue-800">
            Happy Clients
          </p>
          <img className="w-1/2 lg:w-28" src={people} alt="" srcset="" />
          <p className="text-xl lg:text-3xl text-orange-500 my-10 font-semibold">
            985+
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
