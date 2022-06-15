import express from "express";
import { blazeTravelsByUser, createBlazeTravel, deleteBlazeTravel } from  "../controllers/BlazeTravelsController.js"
import { verificaToken } from "../middlewares/auth.js";


const router= express.Router();


router.use(verificaToken)

router.get("/:id", blazeTravelsByUser );
router.post("/", createBlazeTravel);
router.delete("/:id_user/:id_travel", deleteBlazeTravel);


export default router;