import express from "express";
import {createComment, getAllComments, getCommentsByIdPost} from "../controllers/CommentsController.js"
import { verificaToken } from "../middlewares/auth.js";


const router = express.Router()

router.use(verificaToken);

router.get("/", getAllComments )
router.get("/:id_post", getCommentsByIdPost)
router.post("/:id_post", createComment);

export default router;