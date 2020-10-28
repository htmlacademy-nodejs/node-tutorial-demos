'use strict';

const fs = require(`fs`);

const sourcePath = process.argv[2];
const destPath = process.argv[3];

const copyFile = () => {
    const sourceFile = fs.createReadStream(sourcePath);
    const destFile = fs.createWriteStream(destPath);
    destFile.on(`finish`, () => console.log(`Файл скопирован…`));
    sourceFile.pipe(destFile);
}

copyFile();
