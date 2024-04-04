import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()


export const protect=async (req,res,next)=>{
 let token;
 console.log(req.headers.authorization)
 if(req.headers.authorization&& req.headers.authorization.startsWith('Bearer')){
   try {
     token = req.headers.authorization.split(" ")[1];
     const token1=token.split('}')[0]
     console.log('token ',token1)
     
     const decode = jwt.verify(token1, process.env.ACCESS_CODE);
     console.log(decode);
     console.log('this the is token',token)
     req.user=decode
     next();
   } catch (error) {
     res.send({ message: error.message });
   }
 }else
 
  if (!token) {
    return res.status(500).json({msg:"no token"})
  }
}