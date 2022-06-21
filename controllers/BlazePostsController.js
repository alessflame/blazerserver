import { blazePostModel } from "../models/blazePostModel.js";

export const blazePostsByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const blazesUser = await blazePostModel.find({ id_user: id });

    res.json(blazesUser);
  } catch (error) {
    return res.json({ message: "errore caricamento posts" });
  }
};

export const createBlazePost = async (req, res) => {
  const { id_user, id_post } = req.body;

  const blaze = { id_user, id_post };

  try {
    const newBlaze = new blazePostModel(blaze);
    await newBlaze.save();

    return res.json({
      status: 201,
      message: "creato con successo",
      newBlaze: newBlaze,
    });
  } catch (error) {
    return res.json({ status: 400, message: "errore creazione" });
  }
};

export const deleteBlazePost = async (req, res) => {
  const { id_post, id_user } = req.params;

  // console.log(id_post, id_user);
  try {
    await blazePostModel.findOneAndDelete({
      id_user: id_user,
      id_post: id_post,
    });

    res.json({
      status: 200,
      message: "eliminato con successo",
    });
  } catch (error) {
    res.json({
      status: 400,
      message: "errore durante il processo di eliminazione",
    });
  }
};
