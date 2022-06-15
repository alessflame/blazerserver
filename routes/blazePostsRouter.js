import express from "express";
import { blazePostsByUser, createBlazePost, deleteBlazePost } from "../controllers/BlazePostsController.js";
import { verificaToken } from "../middlewares/auth.js";


const router= express.Router()


router.use(verificaToken)

router.get("/:id", blazePostsByUser);
router.post("/", createBlazePost);
router.delete("/:id_user/:id_post", deleteBlazePost);
export default router;