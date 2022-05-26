import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const BuyParts = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [rQuantity, setRQuantity] = useState("");
  console.log(rQuantity);
  const {
    data: buyPartsData,
    isLoading,
    refetch,
  } = useQuery("buyParts", () =>
    fetch(`https://stark-cliffs-55109.herokuapp.com/parts/${id}`).then((res) =>
      res.json()
    )
  );

  const { name, img, description, minOrder, availableQuantity, price, _id } =
    buyPartsData || {};
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  const email = user.email;
  const onSubmit = async (data) => {
    console.log(data);
    const currentQuantity = data.quantity;

    const minOrder2 = minOrder - 1;
    if (currentQuantity < minOrder) {
      toast.error(`Your Order Quantity Minimum ${minOrder}`);
      return;
    } else if (currentQuantity > availableQuantity) {
      toast.error(`Your Order Quantity High to available Quantity `);
      return;
    } else {
      const paymentAmount = currentQuantity * price;
      fetch("https://stark-cliffs-55109.herokuapp.com/orders", {
        method: "POST",
        body: JSON.stringify({
          product: name,
          quantity: currentQuantity,
          paymentAmount: paymentAmount,
          email: user.email,
          billerName: user.displayName,
          billerPhone: data.phone,
          billerAdders: data.adders,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          const updateQuantityC = availableQuantity - currentQuantity;
          const updateQuantity = Number(updateQuantityC);

          console.log(updateQuantity, id);

          fetch(`https://stark-cliffs-55109.herokuapp.com/order/${id}`, {
            method: "PUT",
            body: JSON.stringify({
              availableQuantity: updateQuantity,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((rsc) => rsc.json())
            .then((data) => {
              refetch();
              navigate(`/dashboard/payment/${result.insertedId}`);

              console.log("update quantity", data);
            });
        });
    }
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div>
              <figure>
                <img
                  src={img}
                  class="w-1/2 rounded-lg shadow-2xl"
                  alt="Shoes"
                />
              </figure>

              <p class="py-6">
                {" "}
                <span className="font-bold text-justify">Description</span>
                {description}
              </p>

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
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* BILLING DETAILS START */}
                <div className=" flex flex-col">
                  <div className="">
                    {/* ---------------------------------------------- Name field Start ----------------------------------------------*/}
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        class="input input-bordered w-full max-w-xs"
                        value={user?.displayName}
                        {...register("name", {})}
                      />
                      <label class="label">
                        {errors.name?.type === "required" && (
                          <span class="label-text-alt text-red-600">
                            {errors?.name?.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* ---------------------------------------------- Name field end --------------------------------------------------*/}
                    {/* ---------------------------------------------- email field  start ----------------------------------------------*/}
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your email"
                        class="input input-bordered w-full max-w-xs"
                        value={user?.email}
                        {...register("email", {})}
                      />
                      <label class="label">
                        {errors.email?.type === "required" && (
                          <span class="label-text-alt text-red-600">
                            {errors?.email?.message}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span class="label-text-alt text-red-600">
                            {errors?.email?.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* ---------------------------------------------- email field  end ----------------------------------------------*/}
                    {/* ---------------------------------------------- Adders field Start ----------------------------------------------*/}
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Adders</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Adders"
                        class="input input-bordered w-full max-w-xs"
                        {...register("adders", {
                          required: {
                            value: true,
                            message: "Enter Your Adders",
                          },
                        })}
                      />
                      <label class="label">
                        {errors.adders?.type === "required" && (
                          <span class="label-text-alt text-red-600">
                            {errors?.adders?.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* ---------------------------------------------- Adders field end  ----------------------------------------------*/}
                    {/* ---------------------------------------------- Phone field  start ----------------------------------------------*/}
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Phone</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your phone"
                        class="input input-bordered w-full max-w-xs"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Enter Your phone",
                          },
                          pattern: {
                            value:
                              /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/,
                            message: "Please use Bangladeshi mobile number",
                          },
                        })}
                      />
                      <label class="label">
                        {errors.phone?.type === "required" && (
                          <span class="label-text-alt text-red-600">
                            {errors?.phone?.message}
                          </span>
                        )}
                        {errors.phone?.type === "pattern" && (
                          <span class="label-text-alt text-red-600">
                            {errors?.phone?.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* ---------------------------------------------- user input order field Start ----------------------------------------------*/}
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Order Quantity</span>
                      </label>
                      <input
                        type="number"
                        defaultValue={`${minOrder}`}
                        class="input input-bordered w-full max-w-xs"
                        {...register("quantity", {
                          valueAsNumber: true,
                        })}
                      />
                      <label class="label">
                        {errors.quantity?.type === "required" && (
                          <span class="label-text-alt text-red-600">
                            {errors?.quantity?.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* ---------------------------------------------- user input order field end ----------------------------------------------*/}
                    <input
                      type="submit"
                      value="Place Order"
                      class="btn btn-accent w-full max-w-xs"
                    />
                    {/* ---------------------------------------------- phone field end ----------------------------------------------*/}
                  </div>

                  {/* BILLING DETAILS END */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyParts;
