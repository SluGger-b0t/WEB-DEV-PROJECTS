import React, { useEffect, useState,useContext } from 'react'
import Header from '../Header';
import { dataContext } from '../../context/DataProvider';
import './createPost.css'
import { IoMdAdd } from "react-icons/io";
import { getaccessToken } from '../../utils/common-utils';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from 'axios'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
  const navigate=useNavigate()
    const initialPost={
        title:'',
        description:'',
        picture:'',
        username:'',
        category:'music',
        createdDate:new Date()
    }
    const [post,setPost]=useState(initialPost)
    const [file,setFile]=useState()
   const newPost=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
        console.log(post)
    }
 const {account}= useContext(dataContext)

    useEffect(()=>{
      
        const getImage=()=>{
            if(file){
                  const data=new FormData()
                  data.append("file",file)
                  data.append('upload_preset','blog_app')
                  data.append("cloud_name","dsxjdxxe4");
                  try{
                  fetch("https://api.cloudinary.com/v1_1/dsxjdxxe4/image/upload",{method:'POST',body:data}).then((res)=>res.json()).then((data)=>setPost({...post,picture:data.url})).catch((error)=>{
                    console.log(error)
                  });
                  }
                  catch(error){
                    console.log("no data")
                  }
               
                   
            }
         
        

        }
        setPost({...post,username:account.username})
        getImage()
    },[file])
   const publishHandler=async(e)=>{
      try{
        const token= getaccessToken()
        const config = {
  headers: { authorization: `${token}}` },
};
        const response = await axios.post("http://localhost:8000/create",post,config);
        console.log(response)
        navigate('/')
      }
      catch(error){
          console.log(error.message)
      }
   }
  return (
    <div>
      <Header></Header>
      <div className="lg:w-[1000px] mx-auto">
        <img
          className="imag  w-[100%] my-4 lg:px-24"
          src={
            post.picture
              ? post.picture
              : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          }
          alt=""
        />
      </div>
      <div className="flex justify-around">
        <div>
          <FormControl>
            <FormLabel className="w-min ">
              <IoMdAdd className="text-white h-7 w-8 my-2 mx-2 md:my-0 md:h-10 font-bold md:w-10 rounded-3xl bg-[#D2C1B3]"></IoMdAdd>
            </FormLabel>
            <Input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              display={"none"}
            />
          </FormControl>
        </div>
        <div className="w-2/5 lg:w-3/5  -my-2 font-bold text-2xl text-[#BBADA1] h-12 ">
          <FormControl width={"full"} height={"full"}>
            <FormLabel></FormLabel>
            <input
              name="title"
              onChange={(e) => newPost(e)}
              className="text-xl md:text-3xl placeholder:text-[#BBADA1]  border-[#E7D5C7] rounded-lg focus:outline-none border-4 px-4 w-full h-full"
              type="text"
              placeholder="Title..."
              fontSize={"2xl"}
              height={"full"}
            />
          </FormControl>
        </div>
        <div>
          <button
            onClick={(e) => publishHandler(e)}
            className="w-[100%] md:w-48 lg:w-52 mr-8 h-12 border rounded-3xl font-bold text-sm md:text-2xl bg-[#E7D5C7] text-white"
          >
            Publish
          </button>
        </div>
      </div>
      <div className="w-full mt-5 h-14 ">
        <Box mx={"auto"} height={"full"} width={"fit-content"}>
          <Menu>
            <MenuButton
              mx={"auto"}
              height={"full"}
              backgroundColor={"#E7D5C7"}
              as={Button}
            >
              <p className="font-bold text-base sm:text-lg text-[white] uppercase">
                {post.category}
              </p>
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  setPost({ ...post, category: "music" });
                }}
                rounded={"2xl"}
                backgroundColor={"#E7D5C7"}
              >
                <p className="font-bold text-lg text-[white]">Music</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPost({ ...post, category: "movies" });
                }}
                rounded={"2xl"}
                my={"1"}
                backgroundColor={"#E7D5C7"}
              >
                <p className="font-bold text-lg text-[white]">Movies</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPost({ ...post, category: "sport" });
                }}
                rounded={"2xl"}
                my={"1"}
                backgroundColor={"#E7D5C7"}
              >
                <p className="font-bold text-lg  text-[white]">Sports</p>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPost({ ...post, category: "tech" });
                }}
                rounded={"2xl"}
                my={"1"}
                backgroundColor={"#E7D5C7"}
              >
                <p className="font-bold text-lg text-[white] ">Tech</p>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </div>
      <textarea
        onChange={(e) => newPost(e)}
        name="description"
        placeholder="Tell Your Story... "
        className="w-[98%] sm:w-[92%] p-4  sm:mx-10 lg:mx-24 my-6  border-[#E7D5C7] rounded-xl border-2 focus:outline-none font-bold text-3xl placeholder:text-[#BBADA1] placeholder:text-base sm:placeholder:text-2xl  md:placeholder:text-4xl text-[#BBADA1] h-[40vh] "
      ></textarea>
    </div>
  );
}

export default CreatePost
