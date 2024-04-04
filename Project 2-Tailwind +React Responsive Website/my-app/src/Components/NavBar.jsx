import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav,setnav]=useState(true);
  const handlenav=()=>{
    setnav(!nav)
  }
  return (
    <div className="text-white  flex justify-between h-24 max-w-[1024px] p-4 mx-auto items-center  ">
      <h1 className=" w-full text-3xl text-[#00df9a] font-bold ">React.</h1>
      <ul className=" hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handlenav} className=' block md:hidden'>
       {!nav ?<AiOutlineClose/>:<AiOutlineMenu size={20}></AiOutlineMenu>} 
      </div>
      <div className={!nav?"fixed left-0 top-0  w-[60%] border-r border-r-gray-900 bg-[#000300] h-full ease-in-out duration-500 ":"fixed left-[-100%] "}>
        <h1 className=" w-full text-3xl text-[#00df9a] font-bold m-4">React.</h1>
        <ul className="pt-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resource</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar
