'use strict';

const debug = require(`debug`)(`server`);
const http = require(`http`);
const fileReader = require(`./02-file-reader`);

const PORT = 3000;
const FILE_NAME = `test.txt`;

const server = http.createServer((req, res) => {
  debug(`${req.method} ${req.url}`);
  fileReader.read(FILE_NAME)
      .then((content) => res.end(content));
});

server.listen(PORT, () => {
  debug(`server is running on ${PORT}`);
});
