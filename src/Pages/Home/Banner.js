import React from "react";
import Banner1 from "../../assets/banner-1.jpg";
import Banner2 from "../../assets/banner-2.jpg";
import Banner3 from "../../assets/banner-3.jpg";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{ backgroundImage: `url(${Banner3})` }}
    >
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Welcome to</h1>
          <h1 className="pt-6 mb-5 text-5xl font-bold">Crypto Computer</h1>
          {/* <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
