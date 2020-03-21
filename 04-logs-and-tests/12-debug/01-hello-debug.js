'use strict';

const debug = require(`debug`)(`server`);
const http = require(`http`);
const PORT = 3000;

const server = http.createServer((req, res) => {
  debug(`${req.method} ${req.url}`);
  res.end(`hello world\n`);
});

server.listen(PORT, () => {
  debug(`server is running on ${PORT}`);
});
