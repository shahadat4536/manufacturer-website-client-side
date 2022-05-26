import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";

const MyOrder = () => {
  const [user, loading] = useAuthState(auth);
  const [orderDelete, setOrderDelete] = useState(null);
  const {
    isLoading,
    error,
    data: myOrderDatas,
    refetch,
  } = useQuery(["myOrderDatas", user.email], () =>
    fetch(`https://stark-cliffs-55109.herokuapp.com/order/${user.email}`, {
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
                <label
                  onClick={() => setOrderDelete(myOrderData)}
                  for="delete-confirm-modal"
                  class="btn modal-button btn-xs btn-error"
                >
                  Cancel Order
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orderDelete && (
        <DeleteConfirmModal
          orderDelete={orderDelete}
          refetch={refetch}
          setOrderDelete={setOrderDelete}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default MyOrder;
