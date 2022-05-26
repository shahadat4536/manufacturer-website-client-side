import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1LUkCdaLiCtPNZgNYqZ9z0GEVKqa9SHtw8G3xMMBtJAPrlR9jJQpUh3HMQKSGZjWAuK35HlMzN76QbcrnBuF5w00qUa6eAMj"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/orders/${id}`;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
      <div class="card w-50 max-w-md bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 className="text-xl">
            Pay for <span className="text-blue-600">{orders.product}</span>
          </h2>
          <p>Please pay:${orders.paymentAmount}</p>
        </div>
      </div>
      <div class="card w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body ">
          <Elements stripe={stripePromise}>
            <CheckoutForm orders={orders} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
