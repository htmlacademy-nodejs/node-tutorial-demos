'use strict';

const buffer = Buffer.alloc(5);
const anotherBuffer = Buffer.alloc(2);

// Запишем в первый буфер строку «World»
buffer.write(`World`);
console.log(buffer);

// Попробуем записать в во второй буфер фразу «Great World»
anotherBuffer.write(`Great World`);
console.log(anotherBuffer);

// Прочитаем буфер
console.log(anotherBuffer.toString());
