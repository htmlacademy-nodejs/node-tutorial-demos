'use strict';

const fs = require(`fs`);

const customRequire = (modulePath) => {
  const resolvePath = require.resolve(modulePath);

  if (customRequire.cache[resolvePath]) {
    return customRequire.cache[resolvePath].exports;
  }

  const moduleCode = fs.readFileSync(resolvePath, `utf-8`);

  const module = {id: resolvePath, exports: {}};
  customRequire.cache[resolvePath] = module;

  const wrapperFunction = Function(`require, exports, module`, moduleCode);
  wrapperFunction(customRequire, module.exports, module);


  return customRequire.cache[resolvePath].exports;
};

customRequire.cache = {};


const exampleModule = customRequire(`./05-example.js`);
exampleModule.test();
