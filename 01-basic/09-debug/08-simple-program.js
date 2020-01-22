'use strict';

const sum = (a, b) => {
  const result = a + b;
  return result;
};

const good = sum(2, 5); // 7
const bad = sum(2, `a`); // ?
