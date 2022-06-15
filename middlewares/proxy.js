export const proxyMiddleware= (req,res,next)=>{



      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PATCH,DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
      next();

}