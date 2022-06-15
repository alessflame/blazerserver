// import {comments} from "../json/comment.js";
import { commentModel } from "../models/commentModel.js";

export const getAllComments=async(req,res)=>{

     const comments= await commentModel.find();
     res.json(comments);

}


export const getCommentsByIdPost=async(req,res)=>{
     const {id_post} = req.params;
     // console.log(id);

     const comments= await commentModel.find({id_post})
     res.json(comments);

}


export const createComment=async(req,res)=>{

     const {id_post}=req.params;
     const {id_user, content}= req.body;

     const comment= {id_post,id_user,content};

    const newComment = new commentModel(comment)
    await newComment.save();

     res.json({message:"commento creato", comment:newComment})

}