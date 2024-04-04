import  Connection from './database/db.js';
import express from 'express'
import cors from 'cors'
import router from './routes/route.js'
const app=express();
const PORT=8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',router)
Connection();
app.listen(PORT,()=>console.log(`Server is listening to ${PORT}...`))