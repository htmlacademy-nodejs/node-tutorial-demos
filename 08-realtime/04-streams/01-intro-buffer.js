'use strict';

// Создадим новый буфер
const buffer = Buffer.alloc(5);
console.log(buffer);

// Создадим новый буфер из строки
const anotherBuffer = Buffer.from(`Hello`);
console.log(anotherBuffer);
