import multer from "multer";
import { postModel } from "../models/postModel.js";

const upload = multer({ dest: "./public/img" });

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find();

    res.json(posts);
  } catch (error) {
    res.json({ message: "errore caricamento posts" });
  }
};

export const getPostByUser = async (req, res) => {
  const { id_user } = req.params;
  // console.log(id_user);

  try {
    const postsFilter = await postModel.find({ id_user: id_user });

    // const postsFilter = posts.filter((post) => post.id_user === id_user);

    res.json(postsFilter);
  } catch (error) {
    res.json({
      message: "impossibile caricare i posts di questo utente, riprova",
    });
  }
};

export const getPostById = async (req, res) => {
  const { _id } = req.params;

  try {
    const postFind = await postModel.findById(_id);

    res.json(postFind);
  } catch (error) {
    res.json({ message: "Non è stato possibile trovare il Post, riprova" });
  }
};

export const createPost = async (req, res) => {
  const { author, content, id_user, country } = req.body;

  try {
    if (!author || !content || !country)
      return res.json({
        message: "inserisci almeno il contenuto e la nazione",
      });

    let post = {
      country: country,
      id_user: id_user,
      content: content,
      author: author,
    };

    if (!req.file) {
      return res.json({ message: "inserisci un'immagine" });
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
  } catch (error) {
    res.json({ message: "errore creazione del post" });
  }
};

export const deletePost = async (req, res) => {
  let { id_post } = req.params;

  if (await postModel.findByIdAndDelete(id_post)) {
    return res.json({ message: "eliminato con successo" });
  }

  res.json({ message: "errore eliminazione" });
};
