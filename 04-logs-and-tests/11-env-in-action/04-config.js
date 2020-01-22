'use strict';

const dotenv = require(`dotenv`);
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

module.exports = Object.assign({}, result.parsed);
