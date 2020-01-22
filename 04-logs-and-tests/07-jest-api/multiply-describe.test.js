'use strict';

const multiply = require(`./multiply`);

describe(`multiply`, () => {
  test(`2 by 2 to should be equal 4`, () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test(`-2 by 2 to should be equal -4`, () => {
    expect(multiply(-2, 2)).toBe(-4);
  });
});

describe(`other function`, () => {
  test.todo(`other tests`);
});
