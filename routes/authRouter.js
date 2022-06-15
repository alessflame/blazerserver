import express from "express";
import { createUser, getUserByUsername } from "../controllers/AuthController.js";

const router = express.Router()

router.post("/", getUserByUsername);
router.post("/register", createUser);

export default router;