import express from 'express'
import {addtodo} from '../controlers/todo-controler.js'
import { getAllTodo,toggleTodoDone,updateTodo,deleteTodo } from '../controlers/todo-controler.js';
const route=express.Router();
route.post('/todos',addtodo);
route.get('/todos',getAllTodo)
route.get('/todos/:id',toggleTodoDone)
route.put('/todos/:id',updateTodo)
route.delete('/todos/:id',deleteTodo)
export default route