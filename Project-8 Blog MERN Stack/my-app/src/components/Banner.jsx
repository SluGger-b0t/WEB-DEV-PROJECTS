import React from 'react'
import './Banner.css'
import coffe from './coffe.jpg'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Posts from './posts/Posts';
import { dataContext } from '../context/DataProvider';
import { useContext } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
const Banner = () => {
  const {setCategory,category}=useContext(dataContext)
  return (
    <div className="flex  ">
      <div className="hidden lg:block md:w-2/12  ">
        {/*    <img className='h-96 w-[1000px] mx-auto my-5' 
        src="https://img.freepik.com/free-photo/coffee-drink-laptop-copy-space_23-2148475409.jpg?w=1380&t=st=1689509186~exp=1689509786~hmac=c24063d175318618db00e8639483369eb926da0d79445906912d690106344c19"
        alt="sd"
      />dfgdfg */}

        <ul className="flex flex-col  text-white mx-2 bg-[#aa9d94] text-3xl my-4 rounded-lg h-[70vh] border ">
          <button>
            <li className="my-8  mx-auto" onClick={() => setCategory(null)}>
              All Categories
            </li>
          </button>
          <hr />
          <button>
          <li className="my-8 mx-auto" onClick={() =>{ setCategory("music")
        console.log(category)
        }}>
            Music
          </li></button>
          <hr />
          <button>
          <li className="my-8 mx-auto" onClick={() => setCategory("movies")}>
            Movies
          </li></button>
          <hr />
          <button>
          <li className="my-8 mx-auto" onClick={() => setCategory("sport")}>
            Sports
          </li></button>
          <hr />
          <button>
          <li className="my-8 mx-auto" onClick={() => setCategory("tech")}>
            Tech
          </li></button>
          <hr />
        </ul>
      </div>
      <div className="w-12/12  lg:w-10/12">
        <Posts></Posts>
      </div>
    </div>
  );
}

export default Banner
