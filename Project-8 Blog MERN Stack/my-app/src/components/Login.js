import React, { useState } from 'react'
import { Box, Container, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import "./Login.css"
import { Button, ButtonGroup } from '@chakra-ui/react'
import {BsFillPersonFill} from "react-icons/bs"
import { Stack, HStack, VStack } from "@chakra-ui/react";
import {AiTwotoneLock} from 'react-icons/ai'
import { API } from '../services/api';
import axios from 'axios';
import { useToast } from "@chakra-ui/react";
import { useContext } from 'react';
import { dataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';
import "../App.css";
const Login = ({ setAuthenticated }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setAccount } = useContext(dataContext);
  const userDefaultInfo = {
    name: "",
    username: "",
    password: "",
  };
  const Handler = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    console.log(loginUser);
  };
  const submitHandler = async () => {
    try {
      if (
        signup.name === "" ||
        signup.password === "" ||
        signup.username === ""
      ) {
        console.log("enter values ");
        return;
      }
      let response = await axios.post("http://localhost:8000/signup", signup);
      if (response?.status === 200) {
        setSignup(userDefaultInfo);

        setLogin("login");
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeHandler = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };
  const logged = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginUser
      );
      if (response) {
        console.log(response);
        sessionStorage.setItem(
          "accessToken",
          `Bearer ${response.data.accessToken}`
        );
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${response.data.refreshToken}`
        );
        setAccount({
          username: response.data.username,
          name: response.data.name,
        });
      
        setAuthenticated(true) 
         navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const [login, setLogin] = useState("login");
  const [signup, setSignup] = useState(userDefaultInfo);
  const [error, setError] = useState(false);
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  return (
    <Container className="h-[100vh] w-[100%] text-2xl App">
      {login === "login" ? (
        <Box className="w-[90%] text-center p-20 bg-white max-w-[550px] rounded-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3
            id="abc"
            className="mx-auto border-b-4 border-blue-600 pb-3 w-1/4 text-5xl mb-16 text-blue-600 font-bold"
          >
            Blog
          </h3>
          <FormControl className=" ">
            {" "}
            <HStack>
              <BsFillPersonFill className="ml-4 scale-[1.5] mb-2"></BsFillPersonFill>
              <Input
                onChange={(e) => Handler(e)}
                className="border  my-3 mb-5 h-12 px-3"
                placeholder="User Name"
                name="username"
                type="text"
              />
            </HStack>
          </FormControl>
          <FormControl className=" ">
            {" "}
            <HStack>
              <AiTwotoneLock className="ml-4 scale-[1.5] mb-2"></AiTwotoneLock>
              <Input
                onChange={(e) => Handler(e)}
                className="border  my-3 mb-5 h-12 px-3"
                placeholder="Password"
                name="password"
                type="password"
              />
            </HStack>
          </FormControl>{" "}
          <VStack>
            <Button
              onClick={() => {
                logged();
              }}
              className="text-blue-500 h-12 w-32 border-4 border-blue-500   rounded-lg "
            >
              LogIn
            </Button>
            <h2 className="text-blue-400">OR</h2>
            <Button
              onClick={() => setLogin("signup")}
              className="text-blue-500 p-4 h-12 border-4 border-blue-500   rounded-lg "
            >
              Create Account
            </Button>
          </VStack>
        </Box>
      ) : (
        <Box className="w-[90%] text-center p-20 bg-white max-w-[550px] rounded-3xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3
            id="abc"
            className="mx-auto border-b-4 border-blue-600 pb-3 w-1/4 text-5xl mb-16 text-blue-600 font-bold"
          >
            Blog
          </h3>
          <FormControl className=" ">
            <HStack>
              <BsFillPersonFill className="ml-4 scale-[1.5] mb-2"></BsFillPersonFill>
              <Input
                className="border  my-3 mb-5 h-12 px-3"
                placeholder="Name"
                name="name"
                type="email"
                onChange={(e) => changeHandler(e)}
              />
            </HStack>
          </FormControl>
          <FormControl className=" ">
            {" "}
            <HStack>
              <BsFillPersonFill className="ml-4 scale-[1.5] mb-2"></BsFillPersonFill>
              <Input
                onChange={(e) => changeHandler(e)}
                className="border  my-3 mb-5 h-12 px-3"
                placeholder="User Name"
                name="username"
                type="text"
              />
            </HStack>
          </FormControl>
          <FormControl className=" ">
            <HStack>
              <AiTwotoneLock className="ml-4 scale-[1.5] mb-2"></AiTwotoneLock>
              <Input
                onChange={(e) => changeHandler(e)}
                className="border  my-3 mb-5 h-12 px-3"
                placeholder="Password"
                name="password"
                type="password"
              />
            </HStack>
          </FormControl>

          <VStack>
            <Button
              onClick={() => submitHandler()}
              className="text-blue-500 h-12 w-32 border-4 border-blue-500   rounded-lg "
            >
              SignUp
            </Button>
            <h2 className="text-blue-400">OR</h2>
            <Button
              onClick={() => setLogin("login")}
              className="text-blue-500 p-4 h-12 border-4 border-blue-500   rounded-lg "
            >
              Already have an account
            </Button>
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default Login
