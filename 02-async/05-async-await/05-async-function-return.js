'use strict';

const foo = async () => `Hello, world`;

foo()
  .then((text) => console.log(text)); // Hello, world
