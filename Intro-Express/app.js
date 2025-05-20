const http = require('http');
const express=require('express');
//const requestHandler = require('./user');


const app=express();


// const server= http.createServer(app);

app.use('/',(req, res, next)=> {
  console.log("Came in first middleware", req.url, req.method);
  next();
});

app.use('/submit',(req, res, next)=> {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p> welcome </p>");
})

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`)
});
