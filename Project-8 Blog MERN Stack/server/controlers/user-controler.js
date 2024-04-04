import User from "../model/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import Token from "../model/token.js"
import { response } from "express"
import grid from 'gridfs-stream'
import newPost from '../model/post.js'


dotenv.config()
export const signupUser=async (request,response)=>{
    try{
  /*     const salt=await bcrypt.genSalt(10) */
      const hashedPassword=await bcrypt.hash(request.body.password,10)
        const user={username:request.body.username,name:request.body.name,password:hashedPassword}
        const newUser=new User(user)
      await  newUser.save()
      return response.status(200).json({msg:"signup successfull"})
    }
    catch(error){

            console.log({msg:error.message})
           
    }



}
export const loginUser=async(req,res)=>{
  console.log(req.body)
  let user =await User.findOne({username:req.body.username})
  console.log(user)
  if(!user){
    return res.status(400).json({msg:"no username found"})
  }
  try{
const match=await bcrypt.compare(req.body.password,user.password);
if(match){
const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_CODE ,{expiresIn:'15m'});
const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_CODE);
const newToken= new Token({token:accessToken})
await newToken.save()
return res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,name:user.name,username:user.username})
}
else{
    return res.status(400).json({msg:"password inncorrect"});
}
  }
  catch(error){
 return res.status(500).json({msg:"error while login in user"})
  }
}
export const uploadImage=async(req,res)=>{
  const url = "http://localhost:8000";
  console.log(req)
  if(!req.file){
return response.status(400).json({msg:'file not found'})
  }
 const imageUrl=`${url}/file/${req.file.filename}`
 return res.status(200).json(imageUrl)
}
export const getImage=async(req,res)=>{


}
export const createPost=async(req,res)=>{
try{
const nPost=await new newPost(req.body)
nPost.save()
return res.status(200).json({msg:"post created"})
}
catch(error){
  return res.status(500).json({msg:error.message})
}
}
export const getAllposts=async(req,res)=>{
try{
const allpost=await newPost.find({});
return res.status(200).json(allpost);
}
catch(error){
console.log('backend error in get all post',error.message);
return res.status(500).json({msg:error.message})
}

}
export const getDetail=async(req,res)=>{
  try{
    console.log(req.params.id)
    const data=await newPost.findById(req.params.id)
    console.log(data)
    return res.status(200).json(data)
  }
  catch(error){
return res.status(500).json({msg:error.message})
  }
}
export const updatePost=async(req,res)=>{
try{
console.log(req.body)

const data=await newPost.findByIdAndUpdate(req.params.id,{$set:req.body})
res.status(200).json({data});
}
catch(error){
res.status(500).json({msg:error.message})

}



}
export const deletepost=async(req,res)=>{
  try{
const data=await newPost.findByIdAndDelete(req.params.id)
return res.status(200).json({data})
  }
  catch(error){

 return res.status(500).json({msg:error.message})
  }
}
