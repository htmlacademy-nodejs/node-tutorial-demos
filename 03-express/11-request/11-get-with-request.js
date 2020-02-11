'use strict';

const request = require(`request-promise-native`);
const url = `https://jsonplaceholder.typicode.com/posts`;

request(url, {json: true})
  .then((content) => console.log(content));
