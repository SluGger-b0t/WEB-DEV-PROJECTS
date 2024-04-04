import mongoose from "mongoose";
const Connect=async(DB_URI)=>{
   
    try{
        await mongoose.connect(`${DB_URI}`,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log('database connected successfully')
    }
    catch(error){
        console.log("error while connectiong to database",error.message);
    }
}
export default Connect