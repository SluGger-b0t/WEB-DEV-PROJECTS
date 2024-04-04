import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
 const  Connection=async()=>{
    const URL =
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@project-3.j7iajx8.mongodb.net/Blog-App?retryWrites=true&w=majority`;
try{

await mongoose.connect(URL,{useNewUrlParser:true})
console.log(`Database connected`)
}
catch(error){
console.log(`error while connectiong to database... ${error.message}`)
}


}
export default Connection;