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
    fetch("http://localhost:5000/parts").then((res) => res.json())
  );

  console.log(partsData);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>Parts:{partsData.length}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {partsData.map((partData) => (
          <PartsData key={partData} partData={partData}></PartsData>
        ))}
      </div>
    </div>
  );
};

export default Parts;
<h2>Parts</h2>;
