const http = require("http");
const fs=require("fs");

const server = http.createServer((req, res) => {
  //Request

  //console.log(req);
  console.log(req.url, req.method, req.headers);
  //process.exit();
  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<hrml>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Enter your Details</h1>");

    res.write('<form action="/submit" method="post">');
    res.write('<input type="text" name="username" placeholder="Enter your name"/><br>' );
    res.write('<input type="radio" name="gender" value="male" id="male"/>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" value="female" id="female"/>');
    res.write('<label for="female">Female</label>');
    
    res.write('<br><input type="submit" value="Submit"/>');
    res.write('</form>');

    res.write("</body>");
    res.write("</html>");
    return res.end();
  }else if(req.url.toLowerCase()==="/submit"&& req.method=="POST"){
    fs.writeFileSync('user.txt','prem');
    req.statusCode=302;
    res.setHeader('Location','/');

  }
  
  
  
  
  else if (req.url == "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<hrml>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to Products</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    //Response

    res.setHeader("Content-Type", "text/html");
    res.write("<hrml>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Welcome to Complete Coding</h1></body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

exports=user();