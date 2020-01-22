'use strict';

const TIMEOUT = 1000;

const buyProducts = () => {
  console.log(`> Иду за продуктами...`);
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [`Картофель`, `Капуста`, `Мясо`];
      resolve(products);
    }, TIMEOUT);
  });
};

const prepareProducts = (products) => {
  console.log(`> Нарезаю продукты: ${products.join(`, `)}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`> Продукты нарезаны!`);
      resolve(products);
    }, TIMEOUT);
  });
};

const makeSoup = (preparedProducts) => {
  console.log(`> Начинаю варить суп из: ${preparedProducts.join(`, `)}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return Math.random() > 0.5
        ? resolve(`> Суп готов!`)
        : reject(`> Упс! Сломалась плита.`);
    }, TIMEOUT);
  });
};

buyProducts()
  .then(prepareProducts)
  .then(makeSoup)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

