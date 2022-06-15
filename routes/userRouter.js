import express from "express";
import { getUserByID, getUsers, updateUserById } from "../controllers/UserController.js";
import { verificaToken } from "../middlewares/auth.js";

const router = express.Router()
router.use(verificaToken)


router.get("/", getUsers );
router.get("/:id", getUserByID);
router.patch("/:id_user", updateUserById);


export default router;