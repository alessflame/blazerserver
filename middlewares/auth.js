import jwt from "jsonwebtoken";



//creo un middleware per verificare che gli utenti prima di fare le chiamate abbiano un token
export const verificaToken= (req, res, next)=>{

     const authHeader= req.headers["authorization"]; //ricevo il token nella header  Authorization: Token
     const token = authHeader && authHeader.split(" ")[1]; // ricevo il token (o come "TOKEN" oppure come "bearer TOKEN")

     if(!token || token== null) return res.sendStatus(401);

     jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET, (error, user)=>{ //verifico il token
          // console.log(error);

          if(error) return res.sendStatus(403);
        
          


          next();
     })


}