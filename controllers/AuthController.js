import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"




export const getUserByUsername=async (req, res)=>{

     // console.log(req.body);
     const {username, password}= req.body;

     if(!username || !password) return res.json({message:"inserisci i campi"});

     // console.log(username);
     // const user= users.find((user)=> user.username === username);

     const user= await userModel.findOne({username})

     if(!user){
         return res.json({message:"nessun account trovato"})
     }
    
     if(await bcrypt.compare(password, user.password)){
     const {_id, username, isAgency, fullname, description, iconAvatar}= user;

          const token = jwt.sign(
               {username, _id, isAgency, fullname, description, iconAvatar}, process.env.JWT_SECRET
          );
          
          return res.status(200).json({token:token, message:"accesso effettuato"}); 
     }
     
   return res.json({status:404, message:"errore durante il login"})

}

export const createUser=async (req,res)=>{

     const {username, password, isAgency, fullname}= req.body;

     if(!username || !password  || !fullname){
          return res.json({status:400, message:"completa tutti i campi"})
     }

     const passwordHashed= await bcrypt.hash(password, 13);

     const newUser={
     isAgency,
     fullname,
     password:passwordHashed,
     username,
     iconAvatar: "/cover/icon/avatar.png",
     description:"",

     }
    
//     users.push(newUser);
   
    try {
     const user= new userModel(newUser)
     await user.save()
      res.json({status:201, message:"Account creato con successo, esegui il login"})
    } catch (error) {
     res.json({status:400, message:error.message});
    }

   


}