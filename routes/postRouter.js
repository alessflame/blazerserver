import express from "express"; 
import { getPostByUser, getAllPosts, getPostById, createPost, deletePost } from "../controllers/PostController.js";
import multer from "multer";
import {v4 as uuidv4} from "uuid"
import { verificaToken } from "../middlewares/auth.js";



// const upload= multer({dest:"./public/img"});

const MIME_TYPE_MAP = {
     'image/png': 'png',
     'image/jpeg': 'jpeg',
     'image/jpg': 'jpg'
   };
   
  
    const storage= multer.diskStorage({
       destination: (req, file, cb) => {
         cb(null, "./public/img");
       },
       filename: (req, file, cb) => {
         const ext = MIME_TYPE_MAP[file.mimetype];
         cb(null, uuidv4() + '.' + ext);
       } });

       const upload = multer({storage:storage});
  
const router = express.Router()

router.use(verificaToken)

router.get("/", getAllPosts );
router.post("/", upload.single("file"), createPost);
router.get("/:_id", getPostById);
router.delete("/:id_post", deletePost);
router.get("/author/:id_user", getPostByUser);


export default router;

