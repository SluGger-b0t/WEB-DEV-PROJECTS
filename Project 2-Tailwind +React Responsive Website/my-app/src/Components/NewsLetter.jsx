import React from 'react'

const NewsLetter = () => {
  return (
    <div className="bg-black py-16 px-4 ">
      <div className="grid  lg:grid-cols-3">
        <div className="md:4xl sm:text-3xl text-2xl lg:col-span-2 font-bold pt-3 py-4 text-white">
          <h1>Want Tips & Tricks to Optimise your flow?</h1>
          <p>Sign Up To Our NewsLetter and Stay Up To Date</p>
        </div>
        <div>
          <div className="my-4 flex flex-col sm:flex-row items-center justify-between">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full mx-4 px-4 rounded-lg"
            />
            <button className=" bg-[#00df9a] w-[200px] rounded-lg font-bold mx-4 py-1 my-3 text-black">
              Notify Me
            </button>
          </div>
          <p className="text-white px-5">
            We Care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter
