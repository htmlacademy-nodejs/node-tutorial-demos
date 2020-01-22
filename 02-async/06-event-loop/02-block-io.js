'use strict';

const ITEMS_COUNT = 100000;

console.log(`Начинается длительная операция...`);

Array(ITEMS_COUNT).fill(``)
  .forEach((it, index) => console.log(`Выполняю итерацию №${index}.`));

console.log(`Результат вычисления: ${2 * 2}`);
