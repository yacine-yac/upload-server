const express=require('express');
const upload=require('express-fileupload'); 


const app=express();
app.get("/",(req,res)=>{
      res.send("Hello world") 
})
  
app.listen(5000,(e)=>console.log('console.error:',e));
 
 