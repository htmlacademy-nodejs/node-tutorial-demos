'use strict';

console.log(`Начинается длительная операция...`);

const mockArray = Array(100000).fill(``);
setTimeout(() => mockArray
  .forEach((it, index) => console.log(`Выполняю итерацию №${index}.`)), 0);

console.log(`Длительная операция завершена!`);

