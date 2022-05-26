import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import DeleteConfirmModalAdmin from "./DeleteConfirmModalAdmin";

const ManageProducts = () => {
  const [orderDelete, setOrderDelete] = useState(null);
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
  const handleDelete = (id) => {
    console.log(id);
    const url = `https://stark-cliffs-55109.herokuapp.com/parts/${id}`;
    fetch(url, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderDelete(null);
        refetch();
        toast.success("Delete Successfully");
        console.log("admin", data);
      });
  };
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
                      <div class="font-xs">{partData.name}</div>
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
                  {/* <label
                    onClick={() => setOrderDelete(partData)}
                    for="delete-confirm-modal"
                    class="btn modal-button btn-xs btn-error"
                  >
                    Cancel Order
                  </label> */}
                  <button
                    onClick={() => handleDelete(partData._id)}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <DeleteConfirmModalAdmin
          orderDelete={orderDelete}
          refetch={refetch}
          setOrderDelete={setOrderDelete}
        ></DeleteConfirmModalAdmin> */}
      </div>
    </div>
  );
};

export default ManageProducts;
