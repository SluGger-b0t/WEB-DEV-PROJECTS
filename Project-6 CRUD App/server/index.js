import express from 'express'
const app=express()
import Connect from './database/db.js'
import dotenv from 'dotenv'
import Routes from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const PORT=8000


dotenv.config()
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Routes)


Connect(process.env.DB_URI)

app.listen(PORT,console.log('listening to port 5000'))