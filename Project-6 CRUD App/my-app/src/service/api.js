import axios from "axios";
const URL = "http://localhost:8000";
export const AddUsers=async(data)=>{
    try{
      return  await axios.post(`${URL}/add`,data)
    }
    catch(error){
        console.log('error while caalling add user api')
    }
}
export const getUser=async()=>{
try{
 return await axios.get(`${URL}/alluser`)
}
catch(error){
console.log('error while fetching users api')
}
}
export const editUser=async (id)=>{
  try{
    console.log(id)
    return await axios.get(`${URL}/${id}`)
  }
  catch(error){
console.log("error while fetching edit api");
  }
}
export const editingUser=async(data,id)=>{
  try {
    console.log(data)
    console.log(id)
    return await axios.post(`${URL}/${id}`,data);
  } catch (error) {
    console.log("error while caalling add user api");
  }
}
export const deleteperson=async(id)=>{
  try{
    console.log(id)
    return await axios.delete(`${URL}/${id}`);
  }
  catch(error){
console.log("error while calling delete user api");
  }

}