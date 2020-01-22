'use strict';

const foo = () => {
  return `Hello, world!`;
};

// Вызываем функцию и выводим результат в консоль
console.log(foo()); // Hello, world

// Выводим функцию в консоль без вызова
console.log(foo); // ƒ () { return 'Hello, world!'; }
