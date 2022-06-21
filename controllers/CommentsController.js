// import {comments} from "../json/comment.js";
import { commentModel } from "../models/commentModel.js";

export const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.find();
    res.json(comments);
  } catch (error) {
    res.json({ message: "errore caricamento commenti" });
  }
};

export const getCommentsByIdPost = async (req, res) => {
  const { id_post } = req.params;
  // console.log(id);
  try {
    const comments = await commentModel.find({ id_post });
    res.json(comments);
  } catch (error) {
    res.json({
      message: "impossibile trovare i commenti per questo post, errore",
    });
  }
};

export const createComment = async (req, res) => {
  const { id_post } = req.params;
  const { id_user, content } = req.body;

  const comment = { id_post, id_user, content };

  try {
    const newComment = new commentModel(comment);
    await newComment.save();

    res.json({ message: "commento creato", comment: newComment });
  } catch (error) {
    res.json({ message: "errore creazione commento" });
  }
};
