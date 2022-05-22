import React from "react";

const PartsData = ({ partData }) => {
  console.log(partData);
  const { name, image, description, minOrder, availableQuantity, price } =
    partData;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={image} alt="Shoes" class="rounded-xl " />
      </figure>
      <div class="card-body">
        <h2 class="text-3xl font-semibold">{name}</h2>
        <p className="text-justify">
          {" "}
          <small>{description}</small>
        </p>
        <p class="text-xl">Minimum Order: {minOrder}</p>
        <p class="text-xl">Available Quantity: {availableQuantity}</p>
        <p class="text-xl">
          Price: <span className="text-orange-500">{price}$</span>
        </p>
        <div class="card-actions flex justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PartsData;
