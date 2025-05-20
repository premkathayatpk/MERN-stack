const sumRequestHandler = (req, res) => {
  console.log("In sumRequestHandler", req.url);

  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyOb = Object.fromEntries(params);

    const num1 = parseFloat(bodyOb.num1);
    const num2 = parseFloat(bodyOb.num2);
    const result = num1 + num2;

    console.log("Result:", result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Result</title></head>
        <body>
          <h1>Result: ${result}</h1>
          <a href="/calculator">Go Back</a>
        </body>
      </html>
    `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
