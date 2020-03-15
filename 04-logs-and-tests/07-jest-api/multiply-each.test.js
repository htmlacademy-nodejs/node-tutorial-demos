'use strict';

const multiply = require(`./multiply`);

test.each([
  [1, 1, 1],
  [1, 2, 2],
  [2, 1, 2],
])(`multiply %i by %i should be equal %i`, (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected);
});
