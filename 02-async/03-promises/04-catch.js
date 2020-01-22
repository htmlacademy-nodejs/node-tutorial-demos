'use strict';

const myPromise = new Promise(() => {
  throw new Error(`Упс! Бросили исключение.`);
});

// Перехватываем исключение в методе `catch`.
myPromise
  .catch((error) => console.log(error.message));
