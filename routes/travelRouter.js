import express from "express";
import { createTravel, getAllTravels, getTravelById, getTravelByIdAgency} from "../controllers/TravelController.js"
import {v4 as uuidv4} from "uuid"
import multer from "multer";
import { verificaToken } from "../middlewares/auth.js";


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



const router= express.Router();
router.use(verificaToken);


router.get("/", getAllTravels);
router.post("/", upload.single("file"), createTravel)
router.get("/:id", getTravelById)
router.get("/agency/:id", getTravelByIdAgency);




export default router;