'use strict';

const fs = require(`fs`);
const util = require(`util`);

const readdir = util.promisify(fs.readdir);

readdir(__dirname)
  .then((files) => files.forEach((file) => console.log(file)))
  .catch((err) => console.error(err));
