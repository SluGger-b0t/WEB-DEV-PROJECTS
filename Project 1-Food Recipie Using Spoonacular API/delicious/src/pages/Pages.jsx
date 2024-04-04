import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import {Route,Routes} from "react-router-dom"
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'
function Pages() {
  return (
    
      <AnimatePresence>
      <Routes>
       
      <Route exact path='/' element={<Home></Home>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine></Cuisine>}></Route>
      <Route path='/searched/:search' element={<Searched></Searched>}></Route>
      <Route path='/recipe/:name' element={<Recipe></Recipe>}></Route>
      </Routes> </AnimatePresence>
    
  )
}

export default Pages
