import mongoose from "mongoose";

const commentSchema= mongoose.Schema({

     id_user:{
          type:String,
          require:true,
     },
     id_post:{
          type:String,
          require:true,
     },
     content:{
          type:String,
          require:true,
     },
     
});

export const commentModel= mongoose.model("Comment", commentSchema);