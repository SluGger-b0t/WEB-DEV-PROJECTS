import React, { useState } from 'react'
import { createContext } from 'react'
export const dataContext=createContext(null)
export const DataProvider = ({children}) => {
    const [account,setAccount]=useState({username:'',name:''})
    const [category, setCategory] = useState();
  return (
    <dataContext.Provider value={{account,setAccount,category,setCategory}}>
      {children}
    </dataContext.Provider>
  )
}


