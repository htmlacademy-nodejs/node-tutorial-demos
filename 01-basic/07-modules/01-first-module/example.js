'use strict';

const utils = require(`./utils`);

const alphabet = [`А`, `B`, `C`, `D`, `E`, `F`, `G`];

// Тасование массива
console.log(`Тасование массива:`);
console.log(utils.shuffle(alphabet));

// Получение случайного числа
console.log(`Получение случайного число от 1 до 10`);
console.log(utils.getRandomInt(1, 10));
