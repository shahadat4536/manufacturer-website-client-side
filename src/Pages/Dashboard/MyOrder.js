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

  return (
    // <div>
    //   <h2>MyOrder</h2>
    //   {myOrderDatas.map((myOrderData) => (
    //     <p>{myOrderData.product}</p>
    //   ))}
    // </div>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Order Quantity</th>
            <th>Payment Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {myOrderDatas.map((myOrderData, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{myOrderData.product}</td>
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
                    <p>
                      Transaction id:{" "}
                      <span className="test-success">
                        {myOrderData.transactionId}
                      </span>
                    </p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
