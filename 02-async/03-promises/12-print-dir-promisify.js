'use strict';

const fs = require(`fs`);

const promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    });
  };
};

const readdir = promisify(fs.readdir);
readdir(__dirname)
  .then((files) => files.forEach((file) => console.log(file)))
  .catch((err) => console.error(err));
