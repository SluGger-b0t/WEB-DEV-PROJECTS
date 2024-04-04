import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="text-white grid lg:grid-cols-3 gap-8 mx-auto px-4 py-16">
      <div>
        <h1 className=" w-full text-3xl text-[#00df9a] font-bold ">React</h1>
        <p className='py-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nemo
          reiciendis itaque dolore illo magni quaerat labore, maiores neque,
          fuga adipisci! Perferendis assumenda consequatur enim voluptatem
          reiciendis iure nihil hic?
        </p>
        <div className='flex justify-between mx-auto md:max-w-[75%] '>
          <FaFacebookSquare  size={30}/>
          <FaInstagram  size={30}></FaInstagram>
          <FaTwitterSquare size={30}></FaTwitterSquare>
          <FaGithubSquare size={30}></FaGithubSquare>
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='  flex justify-between  lg:col-span-2 mt-12 px-10 '>
        <div>
          <h6>Solutions</h6>
          <ul>
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div>
          <h6>Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div>
          <h6>Company</h6>
          <ul>
            <li>Claims</li>
            <li>Policy</li>
            <li>Terms</li>       
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer
