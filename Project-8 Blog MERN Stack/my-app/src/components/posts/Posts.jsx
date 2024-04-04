import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { getaccessToken } from '../../utils/common-utils'
import Singlepost from './Singlepost'
import { dataContext } from '../../context/DataProvider'
import { useContext } from 'react'
const Posts = () => {
    const {category,setCategory}=useContext(dataContext)
    const [posts,setPost]=useState([])
    useEffect(()=>{
     console.log(category)
            const fetchData=async()=>{
               
                try{
                    const token=getaccessToken()
                    const config = {
                      headers: { authorization: `${token}}` },
                    };
 let response = await axios.get("http://localhost:8000/posts",config);

                if(response){  
                     if(category){
        const data= response.data
        const data1=data?.filter(val=>val.category==category)
        console.log('hii')
     setPost(data1)
    }
    else{
      
        setPost(response.data)
    }
}
                    
                
                }
                catch(error){
                    console.log('error in getting post ',error.message);
                }
               

            }
        
        
        fetchData()
       
    },[category])
  return (
    <>
    {
        posts && posts.length>0 ?<div className='flex flex-wrap  lg:mx-0 my-4'> {posts.map(postt=>(<Singlepost postt={postt} ></Singlepost>))}</div>:<div>no data available</div>
    }
    
    
    </>
  )
}

export default Posts
