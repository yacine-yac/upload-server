const global=require("dotenv").config();
const express=require('express');
const upload=require('express-fileupload'); 
const cors=require('cors');
/** init express server */
const app=express();
const configCors={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
}
app.use(cors(configCors));
/** to config cors, allowing access to server ressources  */
// app.use(function(req,res,next){
//     res.header("Access-Control-Allow-Origin", "*");
//      next(); 
// })


app.get("/",(req,res)=>{
      res.append("Access-Control-Allow-Origin", "*")
      res.send
      res.send("Hello world");
      res.end();
})
/** config upload server 
 * useTempFiles allows to save files in the memory
 */
 app.use(upload({useTempFiles : true}));
let status= false;
app.post("/upload",async (req,res)=>{
    //  res.append("Access-Control-Allow-Origin", "*");
       console.log('=>>>>>>>>>>>>>>>>>',req.files);
       req.socket.setTimeout(10 * 60 * 1000);
     res.send('toktok');
      if(req.files){
        
        req.files["uploading[]"].forEach(x=>{
              x.mv('./uploads/'+x.name); 
            
        })
          if(status){
                res.send(`files are not uploaded correctly`);
                res.sendStatus(404);
          }else{
             res.send(`ok,goood!`);
             res.sendStatus(200);
          } 
     }else{
         res.send('error 404 baby!');
         res.sendStatus(404);
     }
    
});
app.listen(process.env.PORT,(e)=>console.log('console.error:',e));

 
 