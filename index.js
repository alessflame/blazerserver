import express from "express";
import postRouter from "./routes/postRouter.js"
import userRouter from "./routes/userRouter.js"
import blazePostsRouter from "./routes/blazePostsRouter.js"
import travelRouter from "./routes/travelRouter.js"
import blazeTravelsRouter from "./routes/blazeTravelsRouter.js"
import authRouter from "./routes/authRouter.js";
import commentRouter from "./routes/commentRouter.js";
import dotenv from "dotenv"


import { proxyMiddleware } from "./middlewares/proxy.js";
import cors from "cors";

import fs from "fs"
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import mongoose from "mongoose";


dotenv.config();

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app= express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());


app.use("/posts", postRouter);
app.use("/users", userRouter);
app.use("/travels", travelRouter);
app.use("/blazes", blazePostsRouter);
app.use("/blazestravels", blazeTravelsRouter);
app.use("/auth", authRouter);
app.use("/comments", commentRouter);

app.get("/cover/:image", (req,res)=>{

     const {image} = req.params;
     res.sendFile(__dirname + "/public/img/"+image);
   
})

app.get("/cover/icon/:image", (req,res)=>{

     const {image} = req.params;
     res.sendFile(__dirname + "/public/img/icon/"+image);
   
})

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.DB_URL_CONNECT)
.then(()=>{
     app.listen(PORT, ()=>{
     console.log("in ascolto");
})

})




