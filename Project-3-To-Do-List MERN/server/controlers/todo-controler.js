import { response } from "express";
import Todo from "../model/To-model.js";

export const addtodo = async(req, res) => {
   try{
    const newTodo=Todo.create({
        data:req.body.data,
        createdAt:Date.now()
    })
    
    return res.status(200).json(newTodo)
   }
   catch(error){
    console.log(error.message)
return res.status(500).json(error.message)
   }
};
export const getAllTodo=async(req,res)=>{
    try{
        const todo=await Todo.find({}).sort({'createdAt':-1})
        return res.status(200).json(todo)
    }
    catch(eroor){
return req.status(500).json(error.message)
    }
}
export const toggleTodoDone=async(req,res)=>{
    try{
        const todoRef =await Todo.findById(req.params.id) 
        const todo=await Todo.findOneAndUpdate({_id:todoRef},{done:!todoRef.done})
        return res.status(200).json(todo)
    }
    catch(error){
return req.status(500).json(error.message);
    }
}
export const updateTodo = async (req, res) => {
  try {
    console.log(req.body)
     await Todo.findOneAndUpdate(
      { _id: req.params.id },
      {data:req.body.data}
    );
  const todo=await Todo.findById({_id:req.params.id})
    return res.status(200).json(todo);
  } catch (error) {
    return req.status(500).json(error.message);
  }
};
export const deleteTodo = async (req, res) => {
  try {
    console.log(req.body);
    const todo=await Todo.findOneAndDelete(
      { _id: req.params.id },
    
    );
   
    return res.status(200).json(todo);
  } catch (error) {
    return req.status(500).json(error.message);
  }
};