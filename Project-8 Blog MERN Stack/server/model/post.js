import mongoose from "mongoose";
const postSchmea=new mongoose.Schema({
title:{
    type:String,
    required:true,
    unique:true
},
description:{
    type:String,
    required:true,
},
picture:{
    type:String,
    required:true,
},
username:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
createdDate:{
    type:Date
}
})
const post=mongoose.model('post',postSchmea)
export default post