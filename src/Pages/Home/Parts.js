import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import PartsData from "./PartsData";

const Parts = () => {
  const {
    isLoading,
    error,
    data: partsData,
    isFetching,
  } = useQuery("partsData", () =>
    fetch("https://stark-cliffs-55109.herokuapp.com/parts", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      console.log("555555555555555555555555555555", res);
      return res.json();
    })
  );

  console.log(partsData);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-20 ">
      <h2 className="uppercase text-center py-7 text-blue-900">
        <span className="text-5xl ">Parts</span>
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 ">
        {partsData.map((partData) => (
          <PartsData key={partData} partData={partData}></PartsData>
        ))}
      </div>
    </div>
  );
};

export default Parts;
<h2>Parts</h2>;
