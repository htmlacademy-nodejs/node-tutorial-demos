'use strict';

const fs = require(`fs`);

const printDir = (path) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach((file) => console.log(file));
  });
};

printDir(__dirname);

