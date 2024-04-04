import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { toggleTodo,updateTodo,deleteTodo } from '../redux/action/index.js';

const Todo = ({todo}) => {
    const submitHandler=(e)=>{
e.preventDefault();
setedit(!editt);
console.log(editt)
dispatch(updateTodo(todo._id,editt))
    }
    const dispatch =useDispatch()
    const [editt,setedit]=useState(false)
  return (
    <div className="">
      <div
        className={
          todo.done
            ? "text-red-400 line-through flex justify-between w-[50%] mx-auto font-bold my-2 border border-red-400 rounded-lg hover:scale-105 duration-200"
            : "text-blue-400 flex justify-between w-[50%] mx-auto font-bold my-2 border border-white rounded-lg hover:scale-105 duration-200"
        }
        onClick={() => dispatch(toggleTodo(todo._id))}
      >
        <div className="flex justify-between w-full">
          <div className={editt ? "hidden " : "mx-2 w-[80%]  "}>
            {todo.data}
          </div>
          <form action="" className="w-full" onSubmit={submitHandler}>
            {" "}
            <input onChange={(e)=>setedit(e.target.value)}
              type="text"
              className={editt ? "w-[90%] bg-gray-900 rounded-lg h-9" : "hidden"}
              name=""
              id=""
            />
          </form>
          <div className="mx-2">
            <AiOutlineDelete
              size={20} onClick={()=>dispatch(deleteTodo(todo._id))}
              className=" hover:scale-150 duration-150 hover:text-red-400  "
            ></AiOutlineDelete>
            <AiOutlineEdit
              onClick={() => setedit(!editt)}
              className=" hover:scale-125 duration-150 hover:text-blue-400"
            ></AiOutlineEdit>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo
