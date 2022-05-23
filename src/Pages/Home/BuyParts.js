import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const BuyParts = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const { data: buyPartsData } = useQuery("buyParts", () =>
    fetch(`http://localhost:5000/parts/${id}`).then((res) => res.json())
  );

  // const { name, image, description, minOrder, availableQuantity, price } =
  //   buyPartsData;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="bg-slate-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            {/*  ORDER  START*/}
            <div className="bg-stone-200 w-96 border-2 border-black border-solid flex-1">
              <img src={buyPartsData?.image} alt="" srcset="" />
              <h2 class="text-3xl font-semibold">{buyPartsData?.name}</h2>
              <p className="text-justify">
                {" "}
                <small>{buyPartsData?.description}</small>
              </p>
              <p class="text-xl">Minimum Order: {buyPartsData?.minOrder}</p>
              <p class="text-xl">
                Available Quantity: {buyPartsData?.availableQuantity}
              </p>
              <p class="text-xl">
                Price:{" "}
                <span className="text-orange-500">{buyPartsData?.price}$</span>
              </p>
            </div>
            {/*  ORDER  START*/}
            <div>
              {/* BILLING DETAILS START */}
              <div className="flex-1">
                <h2 className="text-3xl">BILLING DETAILS</h2>
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
                {/* ---------------------------------------------- Name field end ----------------------------------------------*/}
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
                    <span class="label-text">Password</span>
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
                        value: /(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/,
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
                <input
                  type="submit"
                  value="Place Order"
                  class="btn w-full max-w-xs"
                />
                {/* ---------------------------------------------- phone field end ----------------------------------------------*/}
              </div>

              {/* BILLING DETAILS END */}
            </div>
          </div>
        </div>
        <div className="flex  justify-evenly items-start"></div>
      </form>
    </div>
  );
};

export default BuyParts;
