// import { users } from "../json/user.js";
import { userModel } from "../models/userModel.js";

export const getUsers=async(req, res)=>{

     const userLists= await userModel.find();

     res.json(userLists);

}

export const getUserByID=async(req, res)=>{
     const {id} = req.params;


     const user= await userModel.findById(id);
     res.json(user);

}


export const updateUserById=async(req,res)=>{
     const {id_user}= req.params;
     const {description, name}= req.body;

     const updateInfo={ description, name}

     let surname;
     if(req.body.surname){
         const {surname}= req.body;
         updateInfo.surname= surname;
     }

     
     let user = await userModel.findByIdAndUpdate(id_user, {description,surname,name});
     // //controllare
   
     // console.log(user);

      res.json({message:"utente modificato con successo. Per motivi di sicurezza effettua nuovamente il login.", user:user});
}

