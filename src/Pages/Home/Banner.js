import React from "react";
import Banner1 from "../../assets/fire-boltt-available-now-982x500.jpg";
import Banner2 from "../../assets/free-home-delivery-982x500.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel h-1/4 w-full ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
