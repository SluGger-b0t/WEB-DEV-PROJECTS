
import User from '../Schema/UserSchema.js'

export const addUser =async(req,res)=>{
console.log(req.body)
const user=req.body
const newuser=new User(user)
try {
await newuser.save()
  return res.status(200).json(newuser);
} catch (error) {
  console.log(error.message);
  return res.status(500).json(error.message);
}
}
export const getUser=async(req,res)=>{

  try{
const users=await User.find({});
return res.status(200).json(users)

  }
  catch(error){
return res.status(404).json({message:error})
  }
}
export const editUser=async(req,res)=>{
  try{
    console.log(req.params.id)
const users=await User.find({_id:req.params.id});
return res.status(200).json(users)

  }
  catch(error){
    console.log(error.message)
return res.status(404).json({message:error})
  }

}
export const updateUser=async(req,res)=>{
 try{
const user=req.body;

 const data=await User.updateOne({_id:user._id},user)
 console.log(data)
 return res.status(200).json(data)
  }
  catch(error){
return res.status(400).json({message:error})
  }

}
export const deleteUser=async(req,res)=>{
  try{
  console.log(req.params.id)
const data = await User.deleteOne({_id:req.params.id})
return res.status(200).json(data)
  }
  catch(error){
return res.status(400).json({ message: error });
  }

}