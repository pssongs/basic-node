#!/usr/bin/env node
const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename =
      q.pathname === "/" ? "./index.html" : `.${q.pathname}.html`;


      fs.readFile(filename, (err, data) => {
        if(err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end('<h1>404 Not Found</h1> <p>This page does not exist</p> <a href="/">Go back to homepage</a>');
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
  })
  .listen(8070);
