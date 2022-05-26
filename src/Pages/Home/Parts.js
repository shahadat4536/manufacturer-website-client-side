import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import PartsData from "./PartsData";

const Parts = () => {
  // const {
  //   isLoading,
  //   error,
  //   data: partsData,
  //   refetch,
  // } = useQuery("partsData", () =>
  //   fetch("https://stark-cliffs-55109.herokuapp.com/parts", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => {
  //     console.log("55", res);
  //     return res.json();
  //   })
  // );

  // console.log(partsData);
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }

  const [partsData, setPartsData] = useState([]);
  useEffect(() => {
    fetch("https://stark-cliffs-55109.herokuapp.com/parts", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPartsData(data));
  }, []);
  return (
    <div className="my-20 ">
      <h2 className="uppercase pl-8 py-4 my-16 text-gray-100 bg-gradient-to-r from-cyan-500 to-blue-500">
        <span className="text-5xl ">Products</span>
      </h2>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {partsData.map((partData) => (
          <PartsData key={partData} partData={partData}></PartsData>
        ))}
      </div>
    </div>
  );
};

export default Parts;
<h2>Parts</h2>;
