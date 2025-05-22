
//core modules
const path=require('path');


//externl module
const express=require('express');
const userRouter=express.Router();

//local modules
const rootDir=require("../utils/pathUtils");

userRouter.get("/",(req,res ,next)=>{
  
  res.sendFile(path.join(rootDir,"views","home.html"));
});
module.exports=userRouter;