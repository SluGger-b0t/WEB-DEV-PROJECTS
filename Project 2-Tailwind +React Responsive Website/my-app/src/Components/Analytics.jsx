import React from "react";
import Laptop from "../Photos/laptop.jpg";
const Analytics = () => {
  return (
    <div className="bg-white py-16 px-4 w-full ">
      <div className=" max-w-[1240px] grid md:grid-cols-2 mx-auto">
        <img src={Laptop} alt="/" className="my-4 w-[500px] mx-auto" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className=" md:text-4xl sm:text-3xl text-xl font-bold py-2 ">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa deleniti tenetur quos nesciunt quidem velit, provident itaque
            earum. Quisquam natus facilis ad iusto veritatis corporis adipisci
            aliquid. Impedit, pariatur!
          </p>
          <button className=" bg-[#000000] w-[200px] rounded-lg font-bold mx-auto py-2 my-6 text-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
