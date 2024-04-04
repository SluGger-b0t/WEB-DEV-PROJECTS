import React, { useEffect } from 'react'
import { getAllTodos } from '../redux/action/index.js'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ACTIVE_TODOS,ALL_TODOS,DONE_TODOS } from '../redux/action/type.js'
import Todo from './Todo.jsx'
import Tabs from './Tabs.jsx'
const Todos = () => {
    const todos=useSelector(state=>state.todos)
    const currentTab=useSelector(state=>state.currentTab)
    const dispatch=useDispatch()
    useEffect(()=>{
dispatch(getAllTodos())
    },[])
    const getTodos=()=>{
        if(currentTab===ALL_TODOS)
        return todos
        if(currentTab=== ACTIVE_TODOS)
        return todos.filter(todo=>todo.done===false)
            if (currentTab === DONE_TODOS)
              return todos.filter((todo) => todo.done === true);
    }
  return (
    <article>
        <div>
        <Tabs currentTab={currentTab} todos={todos}></Tabs>
        </div>
        <div></div>
      <ul>
       {
        getTodos().map(todo=>{
            console.log(todo)
            return <li key={todo._id} ><Todo todo={todo} ></Todo></li>
        })
       }
      </ul>
    </article>
  )
}

export default Todos
