import mongoose from "mongoose";

const postSchema= mongoose.Schema({

     id_user: {
          type:String,
          require:true
     },
     country: {
          type:String,
          require:true
     },

     author: {
          type:String,
          require:true
     },
     content: {
          type:String,
          require:true
     },
     img: {
          type:String,
          
     },


    
})

export const postModel= mongoose.model("Post", postSchema)

