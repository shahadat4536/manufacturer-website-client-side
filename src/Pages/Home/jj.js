import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const BuyParts = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const { data: buyPartsData, isLoading } = useQuery("buyParts", () =>
    fetch(`http://localhost:5000/parts/${id}`).then((res) => res.json())
  );

  const { name, img, description, minOrder, availableQuantity, price } =
    buyPartsData || {};
  console.log(minOrder);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  const handleBuyData = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const adders = event.target.adders.value;
    const number = event.target.number.value;
    const orderQuantity = event.target.orderQuantity.value;

    const minOrder2 = minOrder - 1;
    if (orderQuantity < minOrder || orderQuantity > availableQuantity) {
      toast.error("plause submit minimun");
      return;
    } else {
      const paymentAmount = orderQuantity * price;
      fetch("http://localhost:5000/orders", {
        method: "POST",
        body: JSON.stringify({
          product: name,
          quantity: orderQuantity,
          paymentAmount: paymentAmount,
          email: user.email,
          billerName: user.displayName,
          billerPhone: number,
          billerAdders: adders,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    console.log(email, name, adders, number, orderQuantity);
  };
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            <div className="card-body w-full lg:w-96  flex flex-col justify-center items-center">
              <img src={img} class="w-1/2 rounded-lg shadow-2xl" />
              <p class="py-6">
                {" "}
                <span className="font-bold text-justify">Description</span>
                {description}
              </p>
            </div>
          </div>

          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div>
                <table class="table-normal table-zebra">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <td>Available Quantity</td>
                      <td>{availableQuantity}</td>
                    </tr>
                    <tr>
                      <td>Minimum Order</td>
                      <td>{minOrder}</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>{price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div>
                <h2 className="text-center bg-slate-500 text-white my-2">
                  Biller Info and Order Quantity{" "}
                </h2>
              </div>
              <div>
                <form onSubmit={handleBuyData}>
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    class="input input-bordered w-full max-w-xs"
                  />
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.displayName}
                    class="input input-bordered w-full max-w-xs"
                  />
                  <label class="label">
                    <span class="label-text">Adders</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Adders"
                    name="adders"
                    class="input input-bordered w-full max-w-xs"
                  />
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Number"
                    name="number"
                    class="input input-bordered w-full max-w-xs"
                  />
                  <label class="label">
                    <span class="label-text">Order Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Order Quantity"
                    name="orderQuantity"
                    class="input input-bordered w-full max-w-xs"
                  />
                  <input
                    type="submit"
                    value="Place Order"
                    className="btn  w-full max-w-xs mt-3"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyParts))))))))))))))))));
