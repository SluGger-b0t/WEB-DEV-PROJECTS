import Vegie from "../component/vegie";
import Popular from "../component/popular";
import React from 'react'
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    
    >
      <Vegie></Vegie>
      <Popular></Popular>
    </motion.div>
  )
}

export default Home
