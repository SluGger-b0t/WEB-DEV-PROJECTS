import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  Input,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { getUser,deleteperson } from "../service/api";
const AllUser = () => {
  const [user,setUser]=useState()
  useEffect(()=>{
getAllUser()
  },[])
  const getAllUser=async()=>{
const response=await getUser()
setUser(response.data)
  }
  const deleteUser=async(id)=>{
await deleteperson(id)
getAllUser()

  }
  return (
    <div className="my-8">
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th textAlign={"center"}>Id</Th>
              <Th textAlign={"center"}>Name</Th>
              <Th textAlign={"center"}>User Name</Th>
              <Th textAlign={"center"}>Email</Th>
              <Th textAlign={"center"}>Phone</Th>
              
            </Tr>
          </Thead>
          <Tbody>
            
              {
                user?.map((person)=>{
                 return (
                   <Tr  key={person._id}>
                     <Td textAlign={"center"}>{person._id} </Td>
                     <Td textAlign={"center"}>{person.name} </Td>
                     <Td textAlign={"center"}>{person.username} </Td>
                     <Td textAlign={"center"}>{person.email} </Td>
                     <Td textAlign={"center"}>{person.phone} </Td>
                     <Td  textAlign={"center"}>
                       <NavLink to={`/edit/${person._id}`}><Button mx="4" colorScheme="blue">Edit</Button> </NavLink>
                       <Button colorScheme="blue" onClick={()=>deleteUser(person._id)}>Delete</Button>
                     </Td>
                    
                    
                   </Tr>
                 );
                 
                })
              }
              {/*     <Td textAlign={'center'} >inches</Td>
              <Td textAlign={'center'}>millimetres (mm)</Td>
              <Td textAlign={'center'} >25.4</Td>
              <Td textAlign={'center'} >25.4</Td>
              <Td textAlign={'center'} >25.4</Td> */}
            
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllUser;
