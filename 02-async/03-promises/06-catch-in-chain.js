'use strict';

const firstPromise = new Promise((resolve, reject) => {
  resolve(`Первый промис пошёл...`);
});

const secondPromise = new Promise((resolve, reject) => {
  resolve(`Второй промис пошёл...`);
});

const thirdPromise = new Promise((resolve, reject) => {
  reject(`Ох и ах, не взлетел...`);
});

const fourthPromise = new Promise((resolve, reject) => {
  resolve(`Четвёртый пошёл...`);
});

firstPromise
  .then((value) => {
    console.log(value);
    return secondPromise;
  })
  .then((value) => {
    console.log(value);
    return thirdPromise;
  })
  .then((value) => {
    console.log(value);
    return fourthPromise;
  })
  .catch((error) => console.log(error));
