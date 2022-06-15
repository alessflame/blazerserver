import { blazePostModel } from "../models/blazePostModel.js";

export const blazePostsByUser =async (req, res) => {
  const { id } = req.params;

  

  const blazesUser = await blazePostModel.find({id_user:id});

  
  res.json(blazesUser);
};

export const createBlazePost = async(req, res) => {
  const { id_user, id_post } = req.body;

  const blaze = { id_user, id_post };
  
  const newBlaze= new blazePostModel(blaze)
  await newBlaze.save()

  res.json({ status: 201, message: "creato con successo", newBlaze: newBlaze });
};

export const deleteBlazePost = async(req, res) => {
  const { id_post, id_user } = req.params;

  // console.log(id_post, id_user);

  await blazePostModel.findOneAndDelete({id_user: id_user , id_post : id_post})

  res.json({
    status: 200,
    message: "eliminato con successo",
  });
};
