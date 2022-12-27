import React from "react";

const ManageAllOrderData = ({ orderData, index, refetch }) => {
  const {
    _id,
    product,
    quantity,
    paymentAmount,
    email,
    billerName,
    billerPhone,
    billerAdders,
    status,
  } = orderData;
  const handleOrderShipped = (id) => {
    const url = `https://manufacturer-website-server-side-amb7.onrender.com/orders/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td className="text-xs">{product}</td>
      <td>{billerName}</td>
      <td>{billerPhone}</td>
      <td>{paymentAmount}</td>
      <td>{quantity}</td>
      <td>
        <div>
          <button
            onClick={() => handleOrderShipped(_id)}
            className="btn btn-ghost"
          >
            {status}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageAllOrderData;
