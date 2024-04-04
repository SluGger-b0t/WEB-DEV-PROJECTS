import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Input,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddUsers } from '../service/api';
import {useNavigate} from 'react-router-dom'
const AddUser = () => {
  const navigate=useNavigate()
    const defaultUser={
        name:'',
        username:'',
        email:'',
        phone:''
    }
    const [user,setUser]=useState(defaultUser);
    const ChangeHandler=(e)=>{
        console.log(user)
        setUser({ ...user,[e.target.name]:e.target.value})
        
    }
    const addUserDetails=async(e)=>{
      e.preventDefault()
     await   AddUsers(user)
     setUser(defaultUser)
     console.log(user)
     navigate('/all')
    }
  return (
    <div className="w-5/6 md:w-1/3 mx-auto my-10 border rounded-xl p-6 border-t-sky-300">
      <VStack>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input
          
            name="name"
            w={{ base: "full", xl: "96" }}
            onChange={(e) => ChangeHandler(e)}
            placeholder="Name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>User Name</FormLabel>
          <Input
            name="username"
            w={{ base: "full", xl: "96" }}
            onChange={(e) => ChangeHandler(e)}
            placeholder="User Name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            w={{ base: "full", xl: "96" }}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => ChangeHandler(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            w={{ base: "full", xl: "96" }}
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={(e) => ChangeHandler(e)}
          />
        </FormControl>
        <Button type='submit' onClick={(e)=>addUserDetails(e)} colorScheme="blue">Button</Button>
      </VStack>
    </div>
  );
}

export default AddUser
