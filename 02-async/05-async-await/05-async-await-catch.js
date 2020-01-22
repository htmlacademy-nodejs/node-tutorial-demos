'use strict';

const fs = require(`fs`);
const util = require(`util`);

const printFiles = async (path) => {
  const readdir = util.promisify(fs.readdir);

  try {
    const files = await readdir(path);
    console.log(files);
  } catch (error) {
    console.log(`Произошла ошибка: ${error}`);
  }
};


printFiles(``);
console.log(`Список файлов: `);
