import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getaccessToken } from '../utils/common-utils'
import { ReturnFocus } from './editModal'
import { useNavigate } from 'react-router-dom'
import Comments from './Comments'
import Allcomments from './Allcomments'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext } from 'react'

import { dataContext } from '../context/DataProvider'
import { IoMdAdd } from "react-icons/io";
const Postdetail = () => {
   const navigate=useNavigate()
    const [edit,setEdit]=useState(true)
    const {account,setAccont}=useContext(dataContext)
    const [detail,setDetail]=useState()
 const [toggle, setToggle] = useState(true);
   const [postt, setPost] = useState(); 
   const params=useParams()
    useEffect(()=>{
            const fetchDetails=async()=>{
                const token = getaccessToken();
                const config = {
                  headers: { authorization: `${token}}` },
                };
                try{
 const data = await axios.get(`http://localhost:8000/detail/${params.id}`,config);
 setDetail(data.data)
 console.log(data.data)  
  const initialPost = {
    title: data.data?.title,
    description: data.data?.description,
    picture: data.data?.picture,
    username: data.data?.username,
    category: data.data?.category,
    createdDate: new Date(),
  };
   setPost(initialPost)
                }
                catch(error){
                    console.log(error.msg)
                }
                   
            }
            console.log(account)
            fetchDetails()
    },[toggle])
    const editHandler=()=>{
        if(edit){
            setEdit(false);
        }
        else
        setEdit(true)
    }
  const updatePost=(e)=>{
      setPost({ ...postt, [e.target.name]: e.target.value });
      console.log(postt);
  }
 const updateHandler=async(e)=>{
try{
    const token = getaccessToken();
    const config = {
      headers: { authorization: `${token}}` },
    };
 const response = await axios.put(`http://localhost:8000/updatepost/${params.id}`,postt,config);
 console.log(response)
navigate(`/`);
}
catch(error){
console.log(error)
}
   
 }
 const deletePost=async()=>{
try{
const token = getaccessToken();
const config = {
  headers: { authorization: `${token}}` },
};
const response = await axios.delete(
  `http://localhost:8000/delete/${params.id}`,
  config
);
console.log(response);
navigate(`/`);

}
catch(error){
console.log(error)
}

 }
  return (
    <div>
      <Header></Header>
      <div className="lg:w-[1000px] mx-auto  border-4 my-4 border-[#E7D5C7]">
        <img
          className="imag  w-[100%] my-4 lg:px-24"
          src={detail?.picture}
          alt=""
        />
      </div>
      <div className="flex-wrap flex my-4">
        <div className="w-[90%] xl:w-3/5 mx-auto my-2 font-bold text-2xl text-[#BBADA1] h-12 ">
          <FormControl width={"full"} height={"full"}>
            <FormLabel></FormLabel>
            <input
              onChange={(e) => updatePost(e)}
              name="title"
              disabled={edit}
              value={edit ? detail?.title : postt.title}
              className="text-sm sm:text-base md:text-xl lg:text-3xl text-center placeholder:text-[#BBADA1] w-full border-[#E7D5C7] rounded-lg focus:outline-none border-4 px-4  md:w-full h-full"
              type="text"
              placeholder="Title..."
              fontSize={"2xl"}
              height={"full"}
            />
          </FormControl>
        </div>
      </div>
      <div className="md:mr-32 ">
        {
          <button
            onClick={() => editHandler()}
            className={
              account.username === detail?.username
                ? "text-base sm:text-lg md:text-xl lg:text-3xl border-4 hover:scale-110 duration-150 p-1 sm:p-2 rounded-xl border-[#E7D5C7] font-bold ml-28 md:ml-24 mr-2 md:mr-10 text-[#BBADA1]"
                : "hidden"
            }
          >
            Edit
          </button>
        }

        <button
          onClick={() => deletePost()}
          className={
            account.username === detail?.username
              ? "text-base  sm:text-lg md:text-xl lg:text-3xl hover:scale-110 duration-150 rounded-xl  border-[#E7D5C7] border-4 p-1 sm:p-2 font-bold  "
              : "hidden"
          }
        >
          Delete
        </button>
        <button
          onClick={() => updateHandler()}
          className={
            account.username === detail?.username
              ? "text-base sm:text-lg md:text-xl lg:text-3xl mx-2 md:mx-8 hover:scale-110 duration-150 rounded-xl border-[#E7D5C7] border-4 p-1 sm:p-2 font-bold  text-[#BBADA1]"
              : "hidden"
          }
        >
          Update
        </button>

        <div className="text-base sm:text-lg text-center md:text-xl lg:text-3xl text-[#BBADA1] font-bold mx-auto  sm:float-right ">
          Created On:{new Date(detail?.createdDate).toDateString()}
        </div>
      </div>
      <div>
        <textarea
          onChange={(e) => updatePost(e)}
          disabled={edit}
          value={edit ? detail?.description : postt.description}
          name="description"
          placeholder="Tell Your Story... "
          className="w-[98%] sm:w-[92%] p-4 sm:mx-10  lg:mx-24 my-6  border-[#E7D5C7] rounded-xl border-2 focus:outline-none font-bold text-base sm:text-lg md:text-xl lg:text-3xl placeholder:text-[#BBADA1] placeholder:text-base sm:placeholder:text-2xl md:placeholder:text-4xl text-[#BBADA1] h-[40vh] "
        ></textarea>
      </div>
      <div>
        <Comments setToggle={setToggle} toggle={toggle}></Comments>
      </div>
      <div>
        <Allcomments setToggle={setToggle} toggle={toggle}></Allcomments>
      </div>
    </div>
  );
}

export default Postdetail;
