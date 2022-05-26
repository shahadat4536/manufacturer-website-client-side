import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageKey = "735cf8286683a0dafb3ab63d527b6b9d";

  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();

    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.success) {
          const img = result.data.url;
          console.log(img);
          fetch("https://stark-cliffs-55109.herokuapp.com/parts", {
            method: "POST",
            body: JSON.stringify({
              img: img,
              name: data.name,
              description: data.description,
              minOrder: data.minOrder,
              availableQuantity: data.availableQuantity,
              price: data.price,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        }
      });

    // console.log(data);
  };
  return (
    <div className="px-6 py-6">
      <div class="card lg:w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Add Products</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
              {/* ---------------------------------------------- Name field Start ----------------------------------------------*/}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Enter Your Name",
                    },
                  })}
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
              {/* ---------------------------------------------- Description field Start ----------------------------------------------*/}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Description</span>
                </label>
                <textarea
                  type="text"
                  placeholder="description"
                  class="input input-bordered w-full max-w-xs"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Enter Your description",
                    },
                  })}
                />
                <label class="label">
                  {errors.description?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.description?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ---------------------------------------------- Description field end ----------------------------------------------*/}
              {/* ---------------------------------------------- Minimum Order field Start ----------------------------------------------*/}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Minimum Order</span>
                </label>
                <input
                  type="number"
                  placeholder="Minimum Order"
                  class="input input-bordered w-full max-w-xs"
                  {...register("minOrder", {
                    required: {
                      value: true,
                      message: "Enter Your Minimum Order",
                    },
                  })}
                />
                <label class="label">
                  {errors.minOrder?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.minOrder?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ---------------------------------------------- Minimum Order field end ----------------------------------------------*/}
              {/* ---------------------------------------------- Available Quantity field Start ----------------------------------------------*/}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Available Quantity</span>
                </label>
                <input
                  type="number"
                  placeholder="Available Quantity"
                  class="input input-bordered w-full max-w-xs"
                  {...register("availableQuantity", {
                    required: {
                      value: true,
                      message: "Enter Your Available Quantity",
                    },
                  })}
                />
                <label class="label">
                  {errors.availableQuantity?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.availableQuantity?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ---------------------------------------------- Available Quantity field end ----------------------------------------------*/}
              {/* ---------------------------------------------- Price field Start ----------------------------------------------*/}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  class="input input-bordered w-full max-w-xs"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Enter Your Price",
                    },
                  })}
                />
                <label class="label">
                  {errors?.price?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.price?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ---------------------------------------------- Price field end ----------------------------------------------*/}
              {/* ---------------------------------------------- Image field Start ----------------------------------------------*/}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Price</span>
                </label>
                <input
                  type="file"
                  placeholder="Image"
                  class="input input-bordered w-full max-w-xs"
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Enter Your Price",
                    },
                  })}
                />
                <label class="label">
                  {errors?.img?.type === "required" && (
                    <span class="label-text-alt text-red-600">
                      {errors?.img?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* ---------------------------------------------- Image field end ----------------------------------------------*/}
            </div>

            <input
              type="submit"
              value="Add Product"
              class="btn w-full my-7 text-center"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
