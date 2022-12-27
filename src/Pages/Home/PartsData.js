import React from "react";
import { Link } from "react-router-dom";

const PartsData = ({ partData }) => {
  console.log(partData);
  // const { name, image, description, minOrder, availableQuantity, price, _id } =
  //   partData;
  return (
    // <div class="card lg:max-w-lg bg-base-100 shadow-xl">
    //   <figure class="px-10 pt-10">
    //     <img src={partData.img} alt="Shoes" class="rounded-xl " />
    //   </figure>
    //   <div class="card-body">
    //     <h2 class="text-xl  text-ellipsis uppercase text-blue-900">
    //       {partData.name}
    //     </h2>
    //     <p className="text-justify">
    //       {" "}
    //       <small>{partData.description}</small>
    //     </p>
    //     <p class="text-xl">Minimum Order: {partData.minOrder}</p>
    //     <p class="text-xl">Available Quantity: {partData.availableQuantity}</p>
    //     <p class="text-xl">
    //       Price: <span className="text-orange-500">{partData.price}$</span>
    //     </p>
    //     <div class="card-actions flex justify-end">
    //       <Link to={`/parts/${partData._id}`}>
    //         <button class="btn btn-primary">Buy Now</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img className="w-[228px] h-[228px]" src={partData.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{partData.name}</h2>
        <p>
          <span className="font-semibold">Description:</span>
          {partData.description}
        </p>
        <div>
          <table class="w-full">
            <tbody>
              <tr>
                <td class="text-2xl py-2 ">Minimum Order</td>
                <td class="text-2xl py-2 text-right">{partData.minOrder}</td>
              </tr>
              <tr>
                <td class="text-2xl py-2 ">Available Quantity</td>
                <td class="text-2xl py-2 text-right">
                  {" "}
                  {partData.availableQuantity}
                </td>
              </tr>
              <tr>
                <td class="text-2xl py-2 ">Price</td>
                <td class="text-2xl py-2 text-right">${partData.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-actions flex justify-end">
          <Link to={`/parts/${partData._id}`}>
            <button class="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartsData;
