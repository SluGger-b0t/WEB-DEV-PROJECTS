import React from "react";
import { TABS } from "../redux/action/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/action";
import { deleteTodo } from "../redux/action";

const Tabs = ({currentTab,todos}) => {
  const dispatch = useDispatch();
  const removeDoneTodos=()=>{
    console.log("hiii");
    todos.forEach((todo)=>{
        if(todo.done)
        dispatch(deleteTodo(todo._id))
    })
  }
  return (
    <div className="border-white border w-[50%] mx-auto rounded-2xl h-8 my-4">
      {TABS.map((tab) => {
        return (
          <button
            onClick={() => dispatch(toggleTab(tab))}
            className={
              tab === currentTab
                ? "text-green-500 hover:scale-105 duration-150 bg-white mx-4 my-1 rounded-md px-2 "
                : "text-white hover:scale-105 duration-150 bg-blue-950 mx-4 my-1 rounded-md px-2"
            }
          >
            {tab}
          </button>
        );
      })}
      <button onClick={removeDoneTodos} className={todos.some(todo=>todo.done)?"text-white hover:scale-105 duration-150 bg-blue-950 mx-4 my-1 rounded-md px-2":"hidden"}>Delete Done </button>
    </div>
  );
};

export default Tabs;
