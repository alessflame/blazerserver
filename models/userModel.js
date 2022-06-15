import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
  },

  email: {
    type: String,
  },

  iconAvatar: {
    type: String,
  },

  isAgency: {
    type: Boolean,
    require: true,
  },

  password:{
    type:String,
    require:true,
  }
});


export const userModel= mongoose.model("User", userSchema);
