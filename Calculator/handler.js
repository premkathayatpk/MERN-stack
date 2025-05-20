const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Practice</title></head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
          <h1>This is Calculator Page</h1>
          <form action="/calculate-result" method="POST">
            <input type="text" name="num1" placeholder="First Number" />
            <input type="text" name="num2" placeholder="Second Number" />
            <input type="submit" value="Sum" />
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  // 404 handler
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head><title>404 Not Found</title></head>
      <body>
        <h1>404 - Page Not Found</h1>
        <a href="/">Go Back Home</a>
      </body>
    </html>
  `);
  return res.end();
};

exports.requestHandler = requestHandler;
