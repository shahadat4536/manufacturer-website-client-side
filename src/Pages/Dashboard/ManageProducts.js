import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const {
    isLoading,
    error,
    data: partsData,
    refetch,
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

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>Manage Products</h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {partsData.map((partData) => (
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={partData.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{partData.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {partData.availableQuantity}
                  <br />
                  <span class="badge badge-ghost badge-sm">
                    Minimum Order : {partData.minOrder}
                  </span>
                </td>
                <td>{partData.price}</td>
                <th>
                  <button class="btn btn-ghost btn-xs">Update</button>
                </th>
                <th>
                  <button class="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
