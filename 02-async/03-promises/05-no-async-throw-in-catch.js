'use strict';

const TIMEOUT = 1000;

// Здесь не получится перехватить исключение
const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error(`Ошибка в асинхронной функции`);
  },
  TIMEOUT
  );
});

// Исключение, выброшенное из асинхронной функции поймать
// методом catch() не получится.
mySecondPromise
  .catch(() => console.log(`Этот код не будет выполнен`));

