'use strict';

const TIMEOUT = 1000;

const makeThing = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Это действие №${number}`);
    }, TIMEOUT);
  });
};

const firstThing = makeThing(1);
const secondThing = makeThing(2);
const thirdThing = makeThing(3);

Promise
  .all([
    thirdThing,
    firstThing,
    secondThing,
  ])
  .then((value) => console.log(value));
