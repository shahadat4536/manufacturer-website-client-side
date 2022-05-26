import React from "react";
import androidApp from "../../assets/AndroidApp.webp";
import google from "../../assets/google.png";
import appStore from "../../assets/appStore.png";

const AndroidApp = () => {
  return (
    <div class="hero min-h-screen  ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={androidApp} class="max-w-lg w-9/12 rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Download Our App</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class=" mr-6">
            <a href="" target="_blank">
              <img className="w-36" src={google} alt="" />
            </a>
          </button>
          <button class=" mr-6">
            <a href="" target="_blank">
              <img className="w-36" src={appStore} alt="" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AndroidApp;
