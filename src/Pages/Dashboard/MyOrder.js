import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: myOrderDatas,
    refetch,
  } = useQuery(["myOrderDatas", user.email], () =>
    fetch(`http://localhost:5000/order/${user.email}`, {
      method: "GET",
      headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  const handleDelete = (id) => {
    console.log(id);
    const url = `http://localhost:5000/order/${id}`;
    fetch(url, {
      method: "DELETE",

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
    // <div>
    //   <h2>MyOrder</h2>
    //   {myOrderDatas.map((myOrderData) => (
    //     <p>{myOrderData.product}</p>
    //   ))}
    // </div>
    <div class="overflow-x-auto">
      <table class="table table-compact w-1/2 ">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Order Quantity</th>
            <th>Payment Amount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myOrderDatas.map((myOrderData, index) => (
            <tr>
              <th>{index + 1}</th>
              <td className="text-xs">{myOrderData.product}</td>
              <td>{myOrderData.quantity}</td>
              <td>{myOrderData.paymentAmount}</td>
              <td>
                {!myOrderData.paid && (
                  <Link to={`/dashboard/payment/${myOrderData._id}`}>
                    <button className="btn btn-xs btn-success">pay</button>
                  </Link>
                )}
                {myOrderData.paid && (
                  <div>
                    <p>
                      <span className="text-success">paid</span>
                    </p>
                    <p className="text-xs">
                      TrxId:{" "}
                      <span className="test-success">
                        {myOrderData.transactionId}
                      </span>
                    </p>
                  </div>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(myOrderData._id)}
                  className="btn btn-xs"
                >
                  Cancel Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
