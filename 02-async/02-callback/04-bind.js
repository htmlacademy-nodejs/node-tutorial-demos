'use strict';

const makePizza = (title, cb) => {
  console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`);
  setTimeout(cb, 3000);
};

const readBook = () => {
  console.log(`Читаю книгу «Колдун и кристалл»…`);
};

const eatPizza = (drink) => {
  console.log(`Ура! Пицца готова, пора подкрепиться и запить ${drink}.`);
};

makePizza(`Пепперони`, eatPizza.bind(null, `Coca-Cola`));
readBook();
