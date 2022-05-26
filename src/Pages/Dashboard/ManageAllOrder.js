import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageAllOrderData from "./ManageAllOrderData";

const ManageAllOrder = () => {
  const {
    data: ordersData,
    isLoading,
    refetch,
  } = useQuery("ordersData", () =>
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2>ManageAllOrder</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Biller Name</th>
              <th>Biller Phone</th>
              <th>Payment Amount</th>
              <th>Order Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((orderData, index) => (
              <ManageAllOrderData
                key={orderData._id}
                orderData={orderData}
                index={index}
                refetch={refetch}
              ></ManageAllOrderData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;
