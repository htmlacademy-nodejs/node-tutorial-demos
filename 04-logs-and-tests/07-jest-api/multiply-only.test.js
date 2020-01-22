'use strict';

const multiply = require(`./multiply`);

test.only(`multiply 2 by 2 to should be equal 4`, () => {
  expect(multiply(2, 2)).toBe(4);
});

test(`multiply -2 by 2 to should be equal -4`, () => {
  expect(multiply(-2, 2)).toBe(-4);
});
