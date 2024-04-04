import React from 'react'
import { Box, Button, background } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <Box className="bg-[#bbada1]   xl:w-4/5 rounded-3xl h-32 mx-auto flex justify-center py-10 ">
      <NavLink to={"/"}>
        <button className="lg:mx-14 xl:mx-16 md:mx-10 sm:mx-5 mx-3 hover:scale-110 hover:text-white hover:bg-[#D2C1B3]  duration-500 text-white text-[13px] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold rounded-lg p-2  ">
          Home
        </button>
      </NavLink>
      <NavLink to={"/about"}>
        <button className="xl:mx-16 lg:mx-14 md:mx-10 sm:mx-8 mx-3 hover:scale-110 hover:text-white hover:bg-[#D2C1B3] duration-500 text-white text-[13px] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold rounded-lg p-2  ">
          About
        </button>
      </NavLink>
      <NavLink to={"/contactus"}>
        <button className="xl:mx-16 lg:mx-14 md:mx-10 sm:mx-5 mx-3 hover:scale-110 hover:text-white hover:bg-[#D2C1B3]  duration-500 text-white text-[13px]  sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold rounded-lg p-2   ">
          Contact Us
        </button>
      </NavLink>
      <NavLink to={"/create"}>
        {" "}
        <button className="xl:mx-16 lg:mx-14 md:mx-10 sm:mx-5 mx-3 hover:scale-110 hover:text-white hover:bg-[#D2C1B3]  duration-500 text-white text-[13px] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold rounded-lg p-2  ">
          Create Blog
        </button>
      </NavLink>
      <NavLink to={"/login"}>
        <button className="xl:mx-16 lg:mx-14 md:mx-10 sm:mx-5 mx-3 hover:scale-110 hover:text-whiye hover:bg-[#D2C1B3]  duration-500 text-white text-[13px] sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold rounded-lg p-2  ">
          LogOut
        </button>
      </NavLink>
    </Box>
  );
}

export default Header
