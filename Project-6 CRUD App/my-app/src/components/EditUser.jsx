import React, { useEffect, useState } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Input,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddUsers, editUser,editingUser } from "../service/api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditUser = () => {
    const {id}=useParams()
    console.log(id)
   

 
  const navigate = useNavigate();
  const defaultUser = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  const [user, setUser] = useState(defaultUser);
  const [edit,setEdit]=useState()
   const loadUserDetails = async () => {
    const response = await editUser(id);
     setUser(response.data[0]);
     console.log(response.data[0].name);
   };
  const ChangeHandler = (e) => {
    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const editUserDetails = async (e) => {
    e.preventDefault();
    await editingUser(user,id);
    setUser(defaultUser);
    console.log(user);
    navigate("/all");
  }; useEffect(()=>{
loadUserDetails();
    },[])
  return (
    <div className="w-5/6 md:w-1/3 mx-auto my-10 border rounded-xl p-6 border-t-sky-300">
      <VStack>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            value={user.name}
            name="name"
            w={{ base: "full", xl: "96" }}
            onChange={(e) => ChangeHandler(e)}
            placeholder="Name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>User Name</FormLabel>
          <Input
            value={user.username}
            name="username"
            w={{ base: "full", xl: "96" }}
            onChange={(e) => ChangeHandler(e)}
            placeholder="User Name"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            value={user.email}
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
            value={user.phone}
            w={{ base: "full", xl: "96" }}
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={(e) => ChangeHandler(e)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={(e) => editUserDetails(e)}
          colorScheme="blue"
        >
          Button
        </Button>
      </VStack>
    </div>
  );
};

export default EditUser;
