'use strict';

const myPromise = new Promise((resolve, reject) => {
  resolve(`success`);
  reject(`error`);
});

myPromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

