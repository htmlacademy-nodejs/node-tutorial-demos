'use strict';

const foo = (text) => console.log(text);
const anotherFoo = () => console.log(`This is another func`);

module.exports = {
  foo,
};

exports.anotherFoo = anotherFoo;
