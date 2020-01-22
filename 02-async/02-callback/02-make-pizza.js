'use strict';

const makePizza = (title, cb) => {
  console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`);
  setTimeout(cb, 3000);
};

const readBook = () => {
  console.log(`Читаю книгу «Колдун и кристалл»…`);
};

const eatPizza = () => {
  console.log(`Ура! Пицца готова, пора подкрепиться.`);
};

makePizza(`Пеперонни`, eatPizza);
readBook();
