'use strict';

const request = require(`request-promise-native`);
const url = `http://localhost:3000/data`

request.post(url, {
  json: {
    "secret-key": `This is secret key`,
  }
})
  .then((response) => console.log(response));
