import mongoose from "mongoose";

const blazeTravelSchema = mongoose.Schema({
  id_user: {
    type: String,
    require: true,
  },
  id_travel: {
    type: String,
    require: true,
  },
});

export const blazeTravelModel= mongoose.model("Blazestravel", blazeTravelSchema);
