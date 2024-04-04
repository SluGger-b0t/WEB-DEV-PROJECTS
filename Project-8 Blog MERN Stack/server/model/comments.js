import mongoose from "mongoose";

const commentSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    postid:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        require:true
    },
    comments:{
type:String,
require:true
    },

})
export const comment=mongoose.model('comment',commentSchema)