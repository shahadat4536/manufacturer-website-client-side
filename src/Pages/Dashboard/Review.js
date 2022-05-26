import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Review = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const reviews = {
      name: user.displayName,
      review: data.review,
      ratting: data.ratting,
    };
    fetch("https://stark-cliffs-55109.herokuapp.com/reviews", {
      method: "POST",
      body: JSON.stringify(reviews),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className=" flex justify-center items-center my-10">
      <div>
        <h2 className="text-4xl text-center my-4">Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Write a Review</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Type here Review"
                  class="input input-bordered w-full max-w-xs h-40"
                  {...register("review", {
                    required: {
                      value: true,
                      message: "Enter Your Review",
                    },
                  })}
                />
                <label class="label">
                  {errors.review?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.review?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ratting */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Ratting</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here Ratting"
                  class="input input-bordered w-full max-w-xs"
                  {...register("ratting", {
                    required: {
                      value: true,
                      message: "Enter Your Ratting",
                    },
                    pattern: {
                      value: /[1-5]/,
                      message: "Your Ratting 1-5 only",
                    },
                  })}
                />
                <label class="label">
                  {errors.ratting?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.ratting?.message}
                    </span>
                  )}
                  {errors.ratting?.type === "pattern" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.ratting?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ratting */}
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Add Review</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
