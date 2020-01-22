'use strict';

const [nodePath, appPath, commandName, userName] = process.argv;
console.log(`------------------`);
console.log(`Hello, ${userName}`);
console.log(`Путь к Node: ${nodePath}`);
console.log(`Путь к текущему сценарию: ${appPath}`);
