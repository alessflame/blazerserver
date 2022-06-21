// import { users } from "../json/user.js";
import { userModel } from "../models/userModel.js";

export const getUsers=async(req, res)=>{
  
     try {
     const userLists= await userModel.find();

     res.json(userLists);
     } catch (error) {
          res.json({message:"errore caricamento utenti"});
     }
     

}

export const getUserByID=async(req, res)=>{
     const {id} = req.params;

      try {
           const user= await userModel.findById(id);
     res.json(user);
      } catch (error) {
          res.json({message:"errore caricamento utente"})
      }
    

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

     try {
             let user = await userModel.findByIdAndUpdate(id_user, {description,surname,name});
     // //controllare
   
     // console.log(user);

      res.json({message:"utente modificato con successo. Per motivi di sicurezza effettua nuovamente il login.", user:user});
     } catch (error) {
          res.json({message:"utente non modificato, errore"});
     }
     
  
}

