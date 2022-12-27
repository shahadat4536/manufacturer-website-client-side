import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Parts = () => {
  const [partsData, setPartsData] = useState([]);
  useEffect(() => {
    fetch("https://manufacturer-website-server-side-amb7.onrender.com/parts", {
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
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
        {partsData.map((partData) => (
          <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[228px] h-[228px]"
                src={partData.img}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{partData.name}</h2>
              <p>
                <span className="font-semibold">Description:</span>
                {partData.description}
              </p>
              <div>
                <table class="w-full">
                  <tbody>
                    <tr>
                      <td class="text-2xl py-2 ">Minimum Order</td>
                      <td class="text-2xl py-2 text-right">
                        {partData.minOrder}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-2xl py-2 ">Available Quantity</td>
                      <td class="text-2xl py-2 text-right">
                        {" "}
                        {partData.availableQuantity}
                      </td>
                    </tr>
                    <tr>
                      <td class="text-2xl py-2 ">Price</td>
                      <td class="text-2xl py-2 text-right">
                        ${partData.price}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="card-actions flex justify-end">
                <Link to={`/parts/${partData._id}`}>
                  <button class="btn btn-primary">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parts;
