'use strict';

const debug = require(`debug`)(`file-reader`);
const fs = require(`fs`);
const {promisify} = require(`util`);

const readFile = promisify(fs.readFile);
const formatError = (error) => (error && error.message) || ``;

const read = (name) => {

  // фиксируем старт чтения из файла
  debug(`reading is started`, name);
  return readFile(name)
      .then((content) => {

        // фиксируем завершение чтения файла
        debug(`reading is finished`, name);
        return content;
      })
      .catch((error) => {
        const formatedError = formatError(error);

        // фиксируем ошибку во время чтения
        debug(`error is occured during the reading`, formatedError);
        return formatedError;
      });
};

module.exports = {
  read
};
