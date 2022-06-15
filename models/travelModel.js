import mongoose from "mongoose";

const travelSchema = mongoose.Schema({


     id_user: {
          type:String,
          require:true,
     },
     img_travel: {
          type:String,
          require:true,
     },
     author: {
          type:String,
          require:true,
     },
     name: {
          type:String,
          require:true,
     },
     countries: {
          type:Array,
          require:true,
     },
     img_travel: {
          type:String,
          require:true,
     },
     price: {
          type:Number,
          require:true,
     },
     
     
});

export const travelModel= mongoose.model("Travel", travelSchema);