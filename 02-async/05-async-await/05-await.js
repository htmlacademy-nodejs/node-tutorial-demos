'use strict';

const fs = require(`fs`);
const util = require(`util`);

const printFiles = async (path) => {
  const readdir = util.promisify(fs.readdir);
  const files = await readdir(path);

  console.log(files);
};


printFiles(__dirname);
console.log(`Список файлов: `);
