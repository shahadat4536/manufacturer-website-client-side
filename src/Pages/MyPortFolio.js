import React from "react";
import shahadat from "../assets/shahadat-12.jpg";

const MyPortFolio = () => {
  return (
    <div className="my-9">
      <div className="flex justify-center items-center">
        <div class="avatar">
          <div class="w-24 lg:w-60 rounded-full">
            <img src={shahadat} />
          </div>
        </div>
        <div className="ml-5">
          <h2 className="uppercase text-xl lg:text-5xl">Shahadat Hossain</h2>
          <h4 className="text-xs lg:text-xl">shahadathossain4536@gmail.com</h4>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-6">
        <h3 className="uppercase text-3xl">Education</h3>
        <p className="text-xl mt-4">
          I am studying Honors third year in Botany at Chandpur Government
          College
        </p>
      </div>
      <div className="flex flex-col justify-center items-center my-14">
        <h3 className="uppercase text-2xl">My Web Development Skill</h3>
        <ul>
          <li>Html5</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>Authentication</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center my-14">
        <h3 className="uppercase text-2xl mb-5">Live Site Link</h3>
        <a href="https://warehouse-management-bc46b.web.app/" target="_blank">
          Buraq Bike Warehouse
        </a>
        <a href="https://assignment-10-1507a.web.app/" target="_blank">
          The Financial 360
        </a>
        <a href="https://gentle-nasturtium-4fff11.netlify.app/" target="_blank">
          Man Watch Hub
        </a>
      </div>
    </div>
  );
};

export default MyPortFolio;
