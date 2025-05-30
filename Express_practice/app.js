const path=require('path');
const express=require('express');
const bodyparser=require('body-parser');

const homeRoute=require('./routers/homeRoute');
const contactRoute=require('./routers/contactRoute');
const rootDir=require("./utils/pathUtils");




const app=express();

app.use(express.urlencoded());

app.use(homeRoute);
app.use(contactRoute);
//middleware

// app.get('/',(req,res,next)=>{
//   console.log('First middleware');
//   next();
// });
// app.get('/',(req,res,next)=>{
//   console.log('second middleware');
//   next();
// });

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir, "./","views","404.html"))
});


const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running at port http://localhost:${PORT}`);
});