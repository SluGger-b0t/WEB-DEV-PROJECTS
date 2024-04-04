import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className=" sm:w-full md:w-5/6 mx-auto rounded-md ">
      <Stack
        direction="row"
        className="text-white"
        justifyContent="space-evenly"
      >
        <NavLink to={'/'}><Box>CRUD APP</Box></NavLink> 
        <NavLink to={'/all'}><Box>View All Users</Box></NavLink> 
        <NavLink to={'add'}><Box>Add Users</Box></NavLink> 
      </Stack>
    </div>
  );
}

export default NavBar
