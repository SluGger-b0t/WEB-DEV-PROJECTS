import React from 'react'
import single from '../Photos/single.png'
import double from "../Photos/double.png";
import triple from "../Photos/triple.png";
const Cards = () => {
  return (
    <div className="bg-white py-[10rem] px-4 ">
      <div className="mx-auto max-w-[1240px] grid md:grid-cols-3  gap-4 ">
        <div className=" shadow-xl flex my-8 md:my-0 flex-col rounded-lg hover:scale-105 duration-150 ">
          <img src={single} alt="" className="w-20 mx-auto mb-[-16px]" />
          <h1 className=" text-2xl font-bold text-center py-8">Single User</h1>
          <p className="text-center font-bold text-2xl">$149</p>
          <div>
            <p className="font-bold text-center ">500 GB Storage</p>
            <p className="font-bold text-center ">1 Granted User</p>
            <p className="font-bold text-center ">Send up to 2 GB</p>
          </div>
          <button className="font-bold text-center bg-[#00df9a]  rounded-lg  mx-4 py-1 my-3 text-black">
            Start Trail
          </button>
        </div>
        <div className=" shadow-xl my-8 md:my-0 flex flex-col rounded-lg hover:scale-105 duration-150 ">
          <img src={double} alt="" className="w-20 mx-auto mb-[-16px]" />
          <h1 className=" text-2xl font-bold text-center py-8">Double User</h1>
          <p className="text-center font-bold text-2xl">$149</p>
          <div>
            <p className="font-bold text-center ">500 GB Storage</p>
            <p className="font-bold text-center ">1 Granted User</p>
            <p className="font-bold text-center ">Send up to 2 GB</p>
          </div>
          <button className="font-bold text-center bg-[#00df9a]  rounded-lg  mx-4 py-1 my-3 text-black">
            Start Trail
          </button>
        </div>
        <div className=" shadow-xl flex flex-col rounded-lg hover:scale-105 duration-150 ">
          <img src={triple} alt="" className="w-20 mx-auto mb-[-16px]" />
          <h1 className=" text-2xl font-bold text-center py-8">Triple User</h1>
          <p className="text-center font-bold text-2xl">$149</p>
          <div>
            <p className="font-bold text-center ">500 GB Storage</p>
            <p className="font-bold text-center ">1 Granted User</p>
            <p className="font-bold text-center ">Send up to 2 GB</p>
          </div>
          <button className="font-bold text-center bg-[#00df9a]  rounded-lg  mx-4 py-1 my-3 text-black">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards
