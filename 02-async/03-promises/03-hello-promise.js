'use strict';

// Функция-исполнитель (executor) выполняется сразу.

const myPromise = new Promise((resolve, reject) => {
  console.log(`Привет! Я функция-исполнитель.`);

  // Другой код
});
