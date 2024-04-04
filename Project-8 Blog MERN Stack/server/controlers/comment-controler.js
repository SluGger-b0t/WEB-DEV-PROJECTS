import { comment } from "../model/comments.js";
export const newComment=async(req,res)=>{
try{
const comm=await new comment(req.body);
comm.save();
return res.status(200).json(comm);


}
catch(error){
return res.status(500).json({msg:error.message})
}


}
export const allcomments=async(req,res)=>{
try{
const data=await comment.find({});
return res.status(200).json(data);
}
catch(error){
return res.status(500).json({msg:error.message})
}
}