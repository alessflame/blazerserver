import mongoose from "mongoose";

const blazePostSchema = mongoose.Schema({
  id_user: {
    type: String,
    require: true,
  },
  id_post: {
    type: String,
    require: true,
  },
});

export const blazePostModel= mongoose.model("Blazespost", blazePostSchema);
