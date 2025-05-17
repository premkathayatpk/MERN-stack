const http = require('http');



const server= http.createServer((req, res)=>{
  //Request

  //console.log(req);
  console.log(req.url,req.method,req.headers);
  //process.exit();
  if(req.url=='/'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<hrml>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Home</h1></body>');
  res.write('</html>')
  return res.end();
  }else if(req.url=='/products'){
    res.setHeader('Content-Type', 'text/html');
  res.write('<hrml>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Products</h1></body>');
  res.write('</html>')
  return res.end();

  }else{
  //Response
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<hrml>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome to Complete Coding</h1></body>');
  res.write('</html>')
  res.end();
  }
});

const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`)
});
