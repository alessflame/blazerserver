import multer from "multer";
import { postModel } from "../models/postModel.js";

const upload = multer({ dest: "./public/img" });

export const getAllPosts = async (req, res) => {
  const posts = await postModel.find();

  res.json(posts);
};

export const getPostByUser = async (req, res) => {
  const { id_user } = req.params;
  // console.log(id_user);

  const postsFilter = await postModel.find({ id_user: id_user });

  // const postsFilter = posts.filter((post) => post.id_user === id_user);

  res.json(postsFilter);
};

export const getPostById = async (req, res) => {
  const { _id } = req.params;

  const postFind = await postModel.findById(_id);

  res.json(postFind);
};

export const createPost = async (req, res) => {
  const { author, content, id_user, country } = req.body;

  if (!author || !content || !country)
    return res.json({ message: "inserisci almeno il contenuto e la nazione" });

  let post = {
    country: country,
    id_user: id_user,
    content: content,
    author: author,
  };

  if(!req.file){
    return res.json({message:"inserisci un'immagine"})
  }

  if (req.file) {
    const { filename } = req.file;
    post.img = "/cover/" + filename;
  }

  // console.log(img);

  const newPost = new postModel(post);
  await newPost.save();
  // console.log(post);

  res.json({
    post: newPost,
    message: "Nuovo post creato con successo",
    status: 201,
  });
};

export const deletePost = async (req, res) => {
  let { id_post } = req.params;

  if (await postModel.findByIdAndDelete(id_post)){
    return res.json({ message: "eliminato con successo" });
  }

  res.json({ message: "errore eliminazione" });
};
