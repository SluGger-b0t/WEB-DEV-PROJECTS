import React from 'react'
import { useState } from 'react'
import { addNewTodo, getAllTodos } from '../redux/action'
import {useDispatch} from 'react-redux'
const TodoForm = () => {  
  const [text,setText]=useState('');
  const dispatch= useDispatch();
    const submitHandler=(e)=>{
      e.preventDefault();
      dispatch(addNewTodo(text))
    dispatch(getAllTodos())
    dispatch(getAllTodos())
    }
  
   const onInputChange=(e)=>{
setText(e.target.value)
   }
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className='w-full flex justify-center'  >
        <input
          type="text" 
          placeholder="Enter to do..." 
          className=" rounded-md w-[50%] border border-[#2c3e50] my-2 mx-auto" onChange={onInputChange}
         /></div>
      </form>
    </div>
  );
}

export default TodoForm
