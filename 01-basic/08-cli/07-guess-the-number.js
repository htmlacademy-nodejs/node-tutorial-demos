'use strict';

const readline = require(`readline`);

const welcomeText = `
          Доброе пожаловать в игру
              «Угадай число»

                |\\---/|
                | o_o |
                 \\_^_/

Привет, я Кекс. Мне нравится загадывать числа.
Всё честно: вы называете максимальное число, а я
загадаю случайное число в этом диапазоне.

Попробуйте его угадать. Количество попыток неограничено.`;

const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const showWinMessage = (secretNumber) => {
  console.log(`
  |\\---/|
  | o_o | Ура! Вы угадали число.
   \\_^_/  Я действительно загадал ${secretNumber}.
  `);

  readLineInterface.close();
};

const checkAnswer = (secretNumber) => {
  readLineInterface.question(`Ваш ответ: `, (inputNumber) => {
    const userAnswer = Number.parseInt(inputNumber, 10);

    if (secretNumber === userAnswer) {
      return showWinMessage(secretNumber);
    }

    console.log(`Промазал. Попробуй ещё.`);
    return checkAnswer(secretNumber);
  });
};

const startGame = () => {
  console.log(welcomeText);

  readLineInterface.question(`Максимальное число: `, (maxNumber) => {
    const myNumber = getRandomNumber(0, Number.parseInt(maxNumber, 10));
    checkAnswer(myNumber);
  });
};

startGame();
