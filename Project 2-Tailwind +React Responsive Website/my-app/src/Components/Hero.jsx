import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
  return (
    <div className="text-white">
      <div className=" max-w-[800px] h-screen mx-auto text-center  flex flex-col justify-center my-[-60px]">
        {" "}
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className=' md:text-7xl sm:text-6xl text-4xl '>Grow with data</h1>
        <div>
          <p className=' md:5xl sm:text-4xl text-xl font-bold pt-3 py-4'> Fast ,flexible financing for  <Typed className=' md:5xl sm:text-4xl text-xl font-bold pt-3' strings={['BTB','SASS','BTC'] } typeSpeed={120} backSpeed={130} loop ></Typed></p>
    
        </div>
        <p className=' md:text-2x text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB BTC SASS PLATFORMS</p>
          <button className=' bg-[#00df9a] w-[200px] rounded-lg font-bold mx-auto py-2 my-3 text-black'>Get Started</button> 
           </div>
    </div>
  );
}

export default Hero
