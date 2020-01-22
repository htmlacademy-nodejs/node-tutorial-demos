'use strict';

beforeAll(() => {
  // Очистить базу данных и заполнить ее какие-то данными
  // Jest не начнет выполнение тестов, пока возвращаемый тест не вернет успешный Promise
  return dataBase.clear().then(() => {
    return dataBase.insert({
      things: [`banana`, `apple`, `kivi`],
      colors: [`red`, `green`, `blue`]
    });
  });
});

afterAll(() => {
  // После выполнения тестов очистить базу данных
  dataBase.clear();
});

test(`can find things`, () => {
  return dataBase.find(`things`, {}, (results) => {
    expect(results.length).toBeGreaterThan(0);
  });
});

test(`can find colors`, () => {
  return dataBase.find(`colors`, {}, (results) => {
    expect(results.length).toBeGreaterThan(0);
  });
});
