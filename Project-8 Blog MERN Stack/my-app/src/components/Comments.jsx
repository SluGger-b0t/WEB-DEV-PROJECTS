import React, { useState } from 'react'
import {BsPersonFill} from 'react-icons/bs'
import { dataContext } from '../context/DataProvider'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getaccessToken } from '../utils/common-utils'
const Comments = ({setToggle,toggle}) => {
  
    const params=useParams();

    const initialValue={
        name:'',
        postid:'',
        comments:'',
        date:new Date()
    }
    const [value,setValue]=useState(initialValue);
    const {account}=useContext(dataContext)
    const commentHandler=(e)=>{
setValue({...value,[e.target.name]:e.target.value,name:account.username,postid:params.id})
console.log(value)
    }
    const publishHandler=async()=>{
        try{
             const token = getaccessToken();
    const config = {
      headers: { authorization: `${token}}` },}



            const response = await axios.post(
              "http://localhost:8000/comment",value,config
            );
                console.log('response')
                setToggle(!toggle)
        }
        catch(error){
                 console.log(error);

        }



    }
  return (
    <div className="h-[20vh] w-[100%] flex justify-between  mb-4">
      <div className="flex flex-col border-4 rounded-xl border-[#E7D5C7] mx-5 sm:mx-24 w-[100%] sm:w-[20%]">
        <BsPersonFill className=" mx-auto  h-[80%] scale-[2] sm:scale-[4] md:scale-[6] "></BsPersonFill>
        <button
          onClick={() => publishHandler()}
          className="sm:text-base text-sm md:text-xl lg:text-3xl sm:mx-8 mb-4 text-[#BBADA1] hover:scale-110 duration-150 rounded-xl border-[#E7D5C7] border-4 p-2 font-bold"
        >
          Post
        </button>
      </div>
      <textarea
        onChange={(e) => commentHandler(e)}
        placeholder="Comment..."
        name="comments"
        className=" px-5 py-4  h-[20vh] w-[100%] sm:w-[80%] md:mr-32  placeholder:text-[#BBADA1] placeholder:text-base sm:placeholder:text-lg md:placeholder:text-2xl lg:placeholder:text-4xl   border-[#E7D5C7] rounded-xl text-[#BBADA1]  border-2 focus:outline-none  font-bold text-base sm:text-lg md:text-xl lg:text-3xl"
      ></textarea>
    </div>
  );
}

export default Comments
