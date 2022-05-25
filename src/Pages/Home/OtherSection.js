import React from "react";
import img1 from "../../assets/icon/1.webp";
import img2 from "../../assets/icon/2.webp";
import img3 from "../../assets/icon/3.webp";
import img4 from "../../assets/icon/4.webp";

const OtherSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 my-8">
      <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl py-10  bg-gradient-to-r from-teal-100 via-teal-200 to-green-300">
          <div class=" flex  justify-evenly">
            <div>
              <img className="" src={img1} alt="" />
            </div>
            <div>
              <p>FREE DELIVERY</p>
              <p>
                <small>Free shipping on all order</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl py-10 bg-gradient-to-r from-teal-100 via-teal-200 to-green-300">
          <div class=" flex  justify-evenly">
            <div>
              <img className="" src={img2} alt="" />
            </div>
            <div>
              <p>ONLINE SUPPORT 24/7</p>
              <p>
                <small>Support online 24 hours</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl py-10 bg-gradient-to-r from-teal-100 via-teal-200 to-green-300">
          <div class=" flex  justify-evenly">
            <div>
              <img className="" src={img3} alt="" />
            </div>
            <div>
              <p>MONEY RETURN</p>
              <p>
                <small>Back guarantee under 7 days</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl py-10 bg-gradient-to-r from-teal-100 via-teal-200 to-green-300">
          <div class=" flex  justify-evenly">
            <div>
              <img className="" src={img4} alt="" />
            </div>
            <div>
              <p>MEMBER DISCOUNT</p>
              <p>
                <small>Onevery order over $30.00</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSection;
