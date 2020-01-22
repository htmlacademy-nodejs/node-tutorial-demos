'use strict';

const fs = require(`fs`).promises;

const sourcePath = process.argv[2];
const destPath = process.argv[3];

const copyFile = async () => {
    const firstFileData = await fs.readFile(sourcePath);
    await fs.writeFile(destPath, firstFileData);
    console.log(`Файл скопирован…`);
}

copyFile();
